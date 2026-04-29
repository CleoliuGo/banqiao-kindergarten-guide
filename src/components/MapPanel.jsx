export function MapPanel({ school }) {
  if (!school) {
    return (
      <aside className="map-panel map-panel--empty">
        <p>點選任一園所後，這裡會顯示地圖。</p>
      </aside>
    );
  }

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(school.address)}&output=embed`;

  return (
    <aside className="map-panel">
      <div className="map-panel__copy">
        <p className="section-kicker">地圖模式</p>
        <h2>{school.name}</h2>
        <p>{school.address}</p>
      </div>
      <iframe
        title={`${school.name} map`}
        src={mapSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="map-panel__transport">
        <div>
          <strong>觀雲家</strong>
          <p>{school.distance.guanyun.transport}</p>
        </div>
        <div>
          <strong>香檳家</strong>
          <p>{school.distance.champagne.transport}</p>
        </div>
      </div>
    </aside>
  );
}
