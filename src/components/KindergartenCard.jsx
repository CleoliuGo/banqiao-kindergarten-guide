import { Link } from "react-router-dom";

const TYPE_LABELS = {
  public: "公立",
  nonprofit: "非營利",
  subsidized: "準公共",
};

export function KindergartenCard({ school, onFocus, basis }) {
  const basisDistance =
    basis === "guanyun"
      ? school.distance.guanyun
      : basis === "champagne"
        ? school.distance.champagne
        : school.distance[school.nearestKey];

  const basisLabel =
    basis === "guanyun" ? "觀雲家" : basis === "champagne" ? "香檳家" : school.closestHome.label;

  return (
    <article className="card card--school">
      <div className="card__header">
        <div>
          <span className={`tag tag--${school.type}`}>{TYPE_LABELS[school.type]}</span>
          <h3>{school.name}</h3>
          <p className="card__meta">{school.address}</p>
        </div>
        <button type="button" className="ghost-button" onClick={() => onFocus(school)}>
          地圖
        </button>
      </div>

      <div className="stats">
        <div>
          <span>缺額</span>
          <strong>{school.vacancy ?? "待補官方公告"}</strong>
        </div>
        <div>
          <span>評價</span>
          <strong>{school.rating ? `${school.rating} / 5` : "待補"}</strong>
        </div>
        <div>
          <span>{basisLabel}</span>
          <strong>{basisDistance.km} km</strong>
        </div>
      </div>

      <div className="distance-pills">
        <span>觀雲家 {school.distance.guanyun.km} km</span>
        <span>香檳家 {school.distance.champagne.km} km</span>
      </div>

      <p className="card__text">{school.pickSummary}</p>
      <p className="card__text card__transport">{basisDistance.transport}</p>

      <div className="card__actions">
        <Link className="primary-button" to={`/kindergarten/${school.slug}`}>
          看詳細資訊
        </Link>
        <a href={school.mapUrl} target="_blank" rel="noreferrer">
          Google Map
        </a>
      </div>
    </article>
  );
}
