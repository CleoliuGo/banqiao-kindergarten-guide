export function MapPanel({ school, onClose }) {
  if (!school) {
    return null;
  }

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(school.address)}&output=embed`;

  return (
    <div className="map-drawer">
      <button type="button" className="map-drawer__scrim" aria-label="close map" onClick={onClose} />
      <aside className="map-panel">
        <div className="map-panel__top">
          <div className="map-panel__copy">
            <p className="section-kicker">地圖模式</p>
            <h2>{school.name}</h2>
            <p>{school.address}</p>
          </div>
          <button type="button" className="ghost-button" onClick={onClose}>
            關閉
          </button>
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
    </div>
  );
}
