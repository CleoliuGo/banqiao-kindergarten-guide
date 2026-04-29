import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = new URL("../", import.meta.url);
const officialPath = new URL("../src/data/officialVacancies.js", import.meta.url);
const outputPath = new URL("../src/data/generatedSchoolMeta.json", import.meta.url);

const homes = {
  guanyun: {
    address: "新北市板橋區南雅南路二段9號",
    lat: 25.002771,
    lon: 121.45439,
  },
  champagne: {
    address: "新北市板橋區南雅南路二段168巷",
    lat: 24.995357,
    lon: 121.45086,
  },
};

function extractOfficialVacancies(source) {
  const match = source.match(/export const officialVacancies = \[(.*?)\]\.map/s);
  if (!match) {
    throw new Error("Could not parse officialVacancies array");
  }

  const objectSource = `[${match[1]}]`;
  return Function(`"use strict"; return (${objectSource});`)();
}

function haversineKm(a, b) {
  const toRad = (value) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const x =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const y = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  return earthRadiusKm * y;
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "banqiao-kindergarten-guide/1.0 (research use)",
      Accept: "application/json",
    },
  });

  if (response.status === 429) {
    throw new Error(`RATE_LIMIT:${url}`);
  }

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`);
  }

  return response.json();
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function geocode(queryOrQueries) {
  const queries = Array.isArray(queryOrQueries) ? queryOrQueries : [queryOrQueries];

  for (const query of queries) {
    const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&accept-language=zh-TW&q=${encodeURIComponent(
      query,
    )}`;
    let rows;

    try {
      rows = await fetchJson(url);
    } catch (error) {
      if (error instanceof Error && error.message.startsWith("RATE_LIMIT:")) {
        await sleep(2200);
        rows = await fetchJson(url);
      } else {
        throw error;
      }
    }

    await sleep(1200);
    const first = rows[0];

    if (first) {
      return {
        lat: Number(first.lat),
        lon: Number(first.lon),
        displayName: first.display_name,
      };
    }
  }

  return null;
}

function buildTransportText(straightKm) {
  const scooterMin = Math.max(4, Math.round(straightKm * 3.5));
  const walkMin = Math.max(10, Math.round(straightKm * 13));
  return `直線距離約 ${straightKm.toFixed(
    1,
  )} km，騎車估約 ${scooterMin} 分鐘、步行估約 ${walkMin} 分鐘；建議再用尖峰時段導航確認。`;
}

const officialSource = await fs.readFile(officialPath, "utf8");
const schools = extractOfficialVacancies(officialSource);

const homeCoords = Object.fromEntries(
  Object.entries(homes).map(([key, value]) => [
    key,
    {
      lat: value.lat,
      lon: value.lon,
      displayName: value.address,
    },
  ]),
);

const uniqueSchools = new Map();
for (const school of schools) {
  const key = `${school.schno}-${school.name}`;
  if (!uniqueSchools.has(key)) {
    uniqueSchools.set(key, school);
  }
}

const results = {};

for (const school of uniqueSchools.values()) {
  const geo = await geocode([
    `${school.name} 新北市板橋區 Taiwan`,
    `${school.name} 板橋區 Taiwan`,
    `${school.name} 新北市 Taiwan`,
  ]);

  if (!geo) {
    results[school.name] = null;
    continue;
  }

  const distance = {};
  for (const [homeKey, homeGeo] of Object.entries(homeCoords)) {
    const straightKm = haversineKm(homeGeo, geo);
    distance[homeKey] = {
      km: Number(straightKm.toFixed(1)),
      transport: buildTransportText(straightKm),
    };
  }

  results[school.name] = {
    address: geo.displayName,
    distance,
  };
}

await fs.writeFile(outputPath, `${JSON.stringify(results, null, 2)}\n`, "utf8");
console.log(`Wrote ${path.relative(new URL("../", import.meta.url).pathname, outputPath.pathname)}`);
