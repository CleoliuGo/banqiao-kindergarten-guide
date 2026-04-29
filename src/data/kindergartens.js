import { officialVacancies } from "./officialVacancies";

const homes = {
  guanyun: {
    label: "觀雲家",
    address: "新北市板橋區南雅南路二段9號",
  },
  champagne: {
    label: "香檳家",
    address: "新北市板橋區南雅南路二段168巷",
  },
};

const TYPE_MAP = {
  "01": { type: "public", typeLabel: "公立" },
  "02": { type: "public", typeLabel: "公立附幼" },
  "04": { type: "public", typeLabel: "公立附幼" },
  "07": { type: "nonprofit", typeLabel: "非營利" },
};

function estimateTransport(km) {
  const scooterMin = Math.max(5, Math.round(km * 3.5));
  const walkMin = Math.max(12, Math.round(km * 13));
  return `騎車約 ${scooterMin} 分鐘，步行約 ${walkMin} 分鐘；仍建議用上下學時段導航再確認。`;
}

function makeDistance(guanyunKm, champagneKm) {
  return {
    guanyun: {
      km: guanyunKm,
      transport: estimateTransport(guanyunKm),
    },
    champagne: {
      km: champagneKm,
      transport: estimateTransport(champagneKm),
    },
  };
}

const manualDetails = [
  {
    name: "新北市板橋區板橋國民小學附設幼兒園",
    address: "新北市板橋區文化路一段23號",
    rating: 4.5,
    distance: {
      guanyun: {
        km: 1.1,
        transport: "騎車約 5 分鐘，步行約 14 至 16 分鐘，接送動線相對直觀。",
      },
      champagne: {
        km: 1.8,
        transport: "騎車約 7 分鐘，若由香檳家出發也屬於可穩定接送的近距離。",
      },
    },
    schoolHours: "約 08:00-16:00，延托與課後安排需向園方確認。",
    tuition: "公立收費，整體負擔低，午餐與其他代辦項目另計。",
    teachingModel: "校園附幼型態，作息穩定，適合優先考量接送便利與公立資源的家庭。",
    pickupNotes: "文化路一段周邊機車接送便利度不錯，但上下學尖峰仍要預留等候時間。",
    pickSummary: "以南雅南路兩個出發點來看，這間應屬最值得放前段志願的近距離公立附幼之一。",
    parentChecklist: [
      "確認實際接送門口與臨停位置，而不是只看學校正門地址。",
      "問清楚延托、寒暑假與請假退費規則。",
      "若重視戶外空間，實地看一次活動場域大小與動線。",
    ],
    sourceNote: "地址參考公開幼兒園資訊站；缺額以 2026-04-29 新北幼生登記平台公開資料整理。",
  },
  {
    name: "新北市立板橋幼兒園",
    address: "新北市板橋區公館街220號",
    rating: 4.4,
    distance: {
      guanyun: {
        km: 1.9,
        transport: "騎車約 8 分鐘，步行接近 25 分鐘，尖峰時段接送仍算順路。",
      },
      champagne: {
        km: 2.5,
        transport: "騎車約 10 分鐘，公車可轉乘但不如機車直達方便。",
      },
    },
    schoolHours: "約 08:00-16:00，延托需向園方確認。",
    tuition: "公立收費，月費相對低，餐點與課後延托另計。",
    teachingModel: "主題探索與生活常規並重，適合重視公立體系穩定性的家庭。",
    pickupNotes: "附近巷弄較多，雨天接送建議預留緩衝時間。",
    pickSummary: "距離南雅生活圈不遠，公立名額熱門，適合優先放在抽籤志願前段。",
    parentChecklist: [
      "延托到幾點、是否有寒暑假托育安排。",
      "上下學動線是否好臨停。",
      "抽中後是否需要額外準備交通備案。",
    ],
    sourceNote: "園名與地址依公開資訊整理。",
  },
  {
    name: "新北市板橋區實踐國民小學附設幼兒園",
    address: "新北市板橋區實踐路93巷51號",
    rating: 4.5,
    distance: {
      guanyun: {
        km: 1.6,
        transport: "騎車約 7 分鐘，若由南雅夜市周邊出發接送相對順。",
      },
      champagne: {
        km: 2.2,
        transport: "騎車約 9 分鐘，步行偏久，較適合機車或汽車接送。",
      },
    },
    schoolHours: "約 08:00-16:00，校園附幼作息相對規律。",
    tuition: "公立收費，整體負擔低。",
    teachingModel: "校園型附幼，活動空間與國小資源整合度較高。",
    pickupNotes: "國小上下學時段車流會比較集中。",
    pickSummary: "離家近、校園資源完整，是兼顧通勤與公立穩定度的熱門選項。",
    parentChecklist: [
      "校內幼兒活動場地是否與國小共用。",
      "大門管制與家長接送窗口。",
      "是否有兄弟姊妹同校的接送便利。",
    ],
    sourceNote: "地址參考公開幼兒園資訊站；缺額以官方資料整理。",
  },
  {
    name: "新北市板橋區海山國民小學附設幼兒園",
    address: "新北市板橋區漢生東路280號",
    rating: 4.3,
    distance: {
      guanyun: {
        km: 3.0,
        transport: "騎車約 12 分鐘，若遇上下班時段需多抓 5 分鐘。",
      },
      champagne: {
        km: 2.6,
        transport: "騎車約 10 分鐘，公車可達但轉乘效率一般。",
      },
    },
    schoolHours: "約 08:00-16:00。",
    tuition: "公立收費。",
    teachingModel: "校園附幼，偏向規律作息與生活自理養成。",
    pickupNotes: "漢生東路車流較大，接送安全動線要先看。",
    pickSummary: "若希望公立附幼且可接受稍遠一點的接送距離，可以納入第二梯隊。",
    parentChecklist: [
      "校門口是否方便汽機車停靠。",
      "是否有課後照顧需求。",
      "校園戶外空間與日照條件。",
    ],
    sourceNote: "評價為公開網路口碑整理值，非官方數據。",
  },
  {
    name: "新北市板橋區江翠國民小學附設幼兒園",
    address: "新北市板橋區文化路二段413號",
    rating: 4.4,
    distance: {
      guanyun: {
        km: 4.4,
        transport: "騎車約 15 分鐘，過橋與文化路車流需考量。",
      },
      champagne: {
        km: 3.8,
        transport: "騎車約 13 分鐘，捷運轉步行可行但接送彈性較低。",
      },
    },
    schoolHours: "約 08:00-16:00。",
    tuition: "公立收費。",
    teachingModel: "生活常規與主題活動兼具，校園附幼口碑穩定。",
    pickupNotes: "文化路車流量高，不建議最後一刻壓線接送。",
    pickSummary: "學區名聲穩，但對南雅南路兩個住家點來說距離稍遠。",
    parentChecklist: [
      "若雙薪家庭，延托與祖父母支援是否足夠。",
      "上下課尖峰車流能否承受。",
      "是否真的符合家庭長期動線。",
    ],
    sourceNote: "距離為站內估算。",
  },
  {
    name: "新北市大觀非營利幼兒園",
    address: "新北市板橋區僑中一街1號1樓",
    rating: 4.6,
    distance: {
      guanyun: {
        km: 4.4,
        transport: "騎車約 15 分鐘，步行偏遠，較適合機車或汽車接送。",
      },
      champagne: {
        km: 3.8,
        transport: "騎車約 13 分鐘，若有固定接送人力可納入考慮。",
      },
    },
    schoolHours: "通常為日間托育，延托安排需看年度公告。",
    tuition: "非營利收費介於公立與私幼之間，通常較親民。",
    teachingModel: "重視生活照顧、主題活動與家園合作，整體節奏常比公立彈性一些。",
    pickupNotes: "若主打步行接送，觀雲家負擔最小。",
    pickSummary: "距離近、非營利收費友善，是抽籤時很值得優先考慮的選項。",
    parentChecklist: [
      "非營利的寒暑假服務內容。",
      "老師流動率與班級穩定度。",
      "家長參與活動頻率是否符合家庭時間。",
    ],
    sourceNote: "評價為公開口碑整理。",
  },
  {
    name: "新北市新月非營利幼兒園",
    address: "新北市板橋區中正路437號1樓",
    rating: 4.5,
    distance: {
      guanyun: {
        km: 2.3,
        transport: "騎車約 8 分鐘，走中正路主線接送相對穩定。",
      },
      champagne: {
        km: 1.9,
        transport: "騎車約 7 分鐘，屬可穩定接送的中近距離。",
      },
    },
    schoolHours: "通常為日間托育時段。",
    tuition: "非營利收費。",
    teachingModel: "偏主題式與情境活動，常見家長較在意班級氛圍。",
    pickupNotes: "住宅巷內接送要先看是否容易會車。",
    pickSummary: "中距離、非營利收費與口碑兼具，可放在中前段志願。",
    parentChecklist: [
      "巷弄接送壓力與停車問題。",
      "睡午覺安排與小班適應期支持。",
      "聯絡本與家長溝通密度。",
    ],
    sourceNote: "教學模式為公開介紹與常見家長觀察整理。",
  },
  {
    name: "新北市柏翠非營利幼兒園",
    address: "新北市板橋區華江一路150號",
    rating: 4.4,
    distance: {
      guanyun: {
        km: 5.0,
        transport: "騎車約 17 分鐘，對南雅南路出發屬偏遠選項。",
      },
      champagne: {
        km: 4.2,
        transport: "騎車約 15 分鐘，較適合有長輩協助或固定汽車接送。",
      },
    },
    schoolHours: "日間托育為主。",
    tuition: "非營利收費。",
    teachingModel: "注重同儕互動與穩定作息。",
    pickupNotes: "若父母上班地點不在板橋西側，日常接送成本要算進去。",
    pickSummary: "整體條件不差，但對兩個住家點都偏遠，建議列為備案。",
    parentChecklist: [
      "距離遠時，是否值得為理念多花通勤成本。",
      "下雨天替代接送方案。",
      "若孩子睡過頭，是否容易準時送達。",
    ],
    sourceNote: "距離為站內估算值。",
  },
  {
    name: "新北市翠中非營利幼兒園",
    address: "新北市板橋區松江街63號1樓",
    rating: 4.3,
    distance: {
      guanyun: {
        km: 4.7,
        transport: "騎車約 16 分鐘，文化路與松江街一帶尖峰較擁擠。",
      },
      champagne: {
        km: 4.0,
        transport: "騎車約 14 分鐘，若走橋邊路線接送較穩定。",
      },
    },
    schoolHours: "日間托育。",
    tuition: "非營利收費。",
    teachingModel: "重視情緒照顧與生活常規。",
    pickupNotes: "離兩個住家點都較遠，需先確認是否有穩定接送人力。",
    pickSummary: "若非常重視非營利體系可放備選，但日常通勤是主要成本。",
    parentChecklist: [
      "遠距離是否造成孩子太早出門。",
      "接送人與備援人力安排。",
      "若抽中後能否持續至少一年以上穩定接送。",
    ],
    sourceNote: "評價屬非官方整理。",
  },
  {
    name: "新北市立重慶國民中學附設幼兒園",
    address: "新北市板橋區國慶路221號",
    distance: makeDistance(2.7, 2.0),
  },
  {
    name: "新北市立江翠國民中學附設幼兒園",
    address: "新北市板橋區松江街63-2號",
    distance: makeDistance(4.7, 4.0),
  },
  {
    name: "新北市立新埔國民中學附設幼兒園",
    address: "新北市板橋區新海路181號",
    distance: makeDistance(4.3, 3.6),
  },
  {
    name: "新北市立溪崑國民中學附設幼兒園",
    address: "新北市板橋區大觀路三段50巷30號",
    distance: makeDistance(4.8, 4.1),
  },
  {
    name: "新北市立忠孝國民中學附設幼兒園",
    address: "新北市板橋區重慶路168號",
    distance: makeDistance(2.1, 1.5),
  },
  {
    name: "新北市板橋區國光國民小學附設幼兒園",
    address: "新北市板橋區中正路325巷30號",
    distance: makeDistance(1.7, 2.0),
  },
  {
    name: "新北市板橋區新埔國民小學附設幼兒園",
    address: "新北市板橋區陽明街206號",
    distance: makeDistance(4.1, 3.4),
  },
  {
    name: "新北市板橋區埔墘國民小學附設幼兒園",
    address: "新北市板橋區永豐街42之8號",
    distance: makeDistance(2.1, 1.8),
  },
  {
    name: "新北市板橋區莒光國民小學附設幼兒園",
    address: "新北市板橋區莒光路163號",
    distance: makeDistance(3.5, 2.9),
  },
  {
    name: "新北市板橋區後埔國民小學附設幼兒園",
    address: "新北市板橋區重慶路157號",
    distance: makeDistance(2.0, 1.4),
  },
  {
    name: "新北市板橋區文聖國民小學附設幼兒園",
    address: "新北市板橋區文聖街86號",
    distance: makeDistance(4.3, 3.6),
  },
  {
    name: "新北市板橋區沙崙國民小學附設幼兒園",
    address: "新北市板橋區篤行路二段132號",
    distance: makeDistance(5.4, 4.6),
  },
  {
    name: "新北市板橋區文德國民小學附設幼兒園",
    address: "新北市板橋區英士路179號",
    distance: makeDistance(4.0, 3.3),
  },
  {
    name: "新北市板橋區中山國民小學附設幼兒園",
    address: "新北市板橋區大觀路二段59巷31號",
    distance: makeDistance(2.0, 2.7),
  },
  {
    name: "新北市板橋區大觀國民小學附設幼兒園",
    address: "新北市板橋區大觀路一段30號",
    distance: makeDistance(1.3, 2.1),
  },
  {
    name: "新北市板橋區溪洲國民小學附設幼兒園",
    address: "新北市板橋區金門街289號",
    distance: makeDistance(5.0, 4.2),
  },
  {
    name: "新北市板橋區信義國民小學附設幼兒園",
    address: "新北市板橋區四川路二段245巷60號",
    distance: makeDistance(3.2, 2.5),
  },
  {
    name: "新北市板橋區重慶國民小學附設幼兒園",
    address: "新北市板橋區廣和街31號",
    distance: makeDistance(2.5, 1.9),
  },
  {
    name: "新北市立板橋幼兒園 新民分班",
    address: "新北市板橋區懷德街235巷2號",
    distance: makeDistance(3.0, 2.7),
  },
  {
    name: "新北市立板橋幼兒園 和平分班",
    address: "新北市板橋區重慶路355號",
    distance: makeDistance(2.8, 2.1),
  },
  {
    name: "新北市永翠非營利幼兒園",
    address: "新北市板橋區香社一路56號",
    distance: makeDistance(5.6, 4.9),
  },
  {
    name: "新北市私立大同幼兒園",
    type: "subsidized",
    typeLabel: "準公共",
    address: "新北市板橋區大同街35巷2號",
    rating: 4.2,
    vacancy: null,
    distance: {
      guanyun: {
        km: 2.1,
        transport: "騎車約 8 分鐘，步行略遠但仍在可接受範圍。",
      },
      champagne: {
        km: 2.7,
        transport: "騎車約 10 分鐘，若要晚接可先確認停車便利性。",
      },
    },
    schoolHours: "多半提供較彈性的早托與晚托。",
    tuition: "準公共補助後負擔較私幼低，但仍要看教材、餐點、延托加收項。",
    teachingModel: "私幼型作息通常較彈性，活動與才藝安排可能較多。",
    pickupNotes: "準公共通常接送時間彈性較高，是雙薪家庭重要加分點。",
    pickSummary: "若抽籤結果不理想，準公共可作為兼顧補助與接送彈性的務實方案。",
    parentChecklist: [
      "補助後實際月繳金額是多少。",
      "教材費、註冊費、校車或延托費有沒有另外算。",
      "是否過度才藝化、是否符合家庭教育期待。",
    ],
    sourceNote: "收費模式需實際向園方確認。",
  },
  {
    name: "新北市私立緹家寶幼兒園",
    type: "subsidized",
    typeLabel: "準公共",
    address: "新北市板橋區館前西路158之8號",
    rating: 4.1,
    vacancy: null,
    distance: {
      guanyun: {
        km: 1.7,
        transport: "騎車約 7 分鐘，接近舊城區，早晚接送要看車流。",
      },
      champagne: {
        km: 2.4,
        transport: "騎車約 9 分鐘，公車轉乘可行但不如機車穩定。",
      },
    },
    schoolHours: "通常較公立彈性。",
    tuition: "準公共補助後較能控制預算，但細項收費要逐項問清楚。",
    teachingModel: "私幼常見的主題教學搭配常規訓練。",
    pickupNotes: "若家長工時長，可先問晚托與臨時延托規定。",
    pickSummary: "離兩個住家點都不算遠，適合作為抽籤落空時的機動備案。",
    parentChecklist: [
      "是否接受臨時晚接。",
      "餐點品質與午睡安排。",
      "新生適應期是否允許家長較彈性陪伴。",
    ],
    sourceNote: "缺額與實際班型需向園方確認。",
  },
];

function normalizeName(name) {
  return name.replace(/[（(].*?[)）]/g, "").replace(/\s+/g, "").trim();
}

function slugify(text) {
  return encodeURIComponent(text).toLowerCase();
}

function formatVacancy(row) {
  const parts = [];

  if (row.vacancy2yo != null) {
    parts.push(`2歲專班 ${row.vacancy2yo}`);
  }

  if (row.vacancy35 != null) {
    parts.push(`3-5歲班 ${row.vacancy35}`);
  }

  return parts.length ? parts.join("；") : null;
}

function getDefaultDistance() {
  return {
    guanyun: {
      km: null,
      transport: "尚未整理固定路線，建議直接開 Google Maps 用上學時段試算。",
    },
    champagne: {
      km: null,
      transport: "尚未整理固定路線，建議直接開 Google Maps 用放學時段試算。",
    },
  };
}

function getDefaultChecklist(typeLabel) {
  if (typeLabel === "非營利") {
    return [
      "先問寒暑假、延托與家長參與活動的安排。",
      "確認老師穩定度與班級照顧節奏。",
      "看巷弄接送是否真的能長期負擔。",
    ];
  }

  if (typeLabel === "準公共") {
    return [
      "補助後實繳金額與額外收費要拆開看。",
      "確認早托、晚托與請假退費規則。",
      "教學內容是否過度才藝化，要和家庭期待一致。",
    ];
  }

  return [
    "確認延托、寒暑假與臨停接送動線。",
    "校園附幼要特別看國小上下學尖峰車流。",
    "抽中率不是全部，長期接送成本更重要。",
  ];
}

function getDefaultSummary(typeLabel, name) {
  if (typeLabel === "非營利") {
    return `${name} 屬非營利體系，建議把收費、接送與家園合作節奏一起評估。`;
  }

  if (typeLabel === "準公共") {
    return `${name} 可作為抽籤外的務實備案，重點是補助後實繳與接送彈性。`;
  }

  return `${name} 屬公立或公立附幼，建議優先確認距離、延托與上下學動線。`;
}

const manualMap = new Map(
  manualDetails.map((item) => [
    normalizeName(item.name),
    item,
  ]),
);

const mergedOfficialSchools = officialVacancies.map((row) => {
  const baseName = normalizeName(row.name);
  const detail = manualMap.get(baseName);
  const typeInfo = TYPE_MAP[row.eduMod] ?? { type: "public", typeLabel: "公立" };
  const name = row.subname ? `${row.name} ${row.subname}` : row.name;
  const distance = detail?.distance ?? getDefaultDistance();
  const nearestKey =
    distance.guanyun.km == null || distance.champagne.km == null
      ? null
      : distance.guanyun.km <= distance.champagne.km
        ? "guanyun"
        : "champagne";
  const closestHome = nearestKey ? homes[nearestKey] : { label: "待補" };

  return {
    slug: detail?.slug ?? slugify(`${row.schno}-${name}`),
    name,
    shortName: row.name,
    subname: row.subname,
    schno: row.schno,
    phone: row.phone,
    type: detail?.type ?? typeInfo.type,
    typeLabel: detail?.typeLabel ?? typeInfo.typeLabel,
    vacancy: formatVacancy(row),
    address: detail?.address ?? "待補地址，請先用 Google Map 搜尋園名確認。",
    mapUrl: row.mapUrl,
    rating: detail?.rating ?? null,
    distance,
    nearestKey,
    closestHome,
    schoolHours: detail?.schoolHours ?? "官方缺額資料未附作息，請以園方公告為準。",
    tuition:
      detail?.tuition ??
      (typeInfo.typeLabel === "非營利"
        ? "非營利收費通常介於公立與私幼之間，實際請向園方確認。"
        : "公立或附幼收費通常較低，實際項目請向園方確認。"),
    teachingModel:
      detail?.teachingModel ??
      "目前尚未補到完整教學介紹，建議先確認生活常規、戶外活動與家長溝通方式。",
    pickupNotes:
      detail?.pickupNotes ??
      "尚未補到固定接送筆記，建議在上下學尖峰時段親自走一次路線。",
    pickSummary: detail?.pickSummary ?? getDefaultSummary(typeInfo.typeLabel, row.name),
    parentChecklist: detail?.parentChecklist ?? getDefaultChecklist(typeInfo.typeLabel),
    sourceNote:
      detail?.sourceNote ??
      "缺額與電話來自 2026-04-29 新北幼生登記平台公開資料；其他欄位待補時請以園方資訊為準。",
  };
});

const supplementalSchools = manualDetails
  .filter((item) => item.type === "subsidized")
  .map((school) => {
    const nearestKey =
      school.distance.guanyun.km <= school.distance.champagne.km ? "guanyun" : "champagne";

    return {
      slug: slugify(school.name),
      shortName: school.name,
      subname: "",
      schno: "",
      phone: "",
      mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.name)}`,
      ...school,
      nearestKey,
      closestHome: homes[nearestKey],
    };
  });

export const kindergartens = [...mergedOfficialSchools, ...supplementalSchools];

export { homes };
