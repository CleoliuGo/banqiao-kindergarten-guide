import { Link } from "react-router-dom";

const TYPE_LABELS = {
  public: "公立",
  nonprofit: "非營利",
  subsidized: "準公共",
};

export function KindergartenCard({ school, onFocus }) {
  return (
    <article className="card">
      <div className="card__header">
        <div>
          <span className={`tag tag--${school.type}`}>{TYPE_LABELS[school.type]}</span>
          <h3>{school.name}</h3>
        </div>
        <button type="button" className="ghost-button" onClick={() => onFocus(school)}>
          地圖定位
        </button>
      </div>
      <p className="card__meta">{school.address}</p>
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
          <span>最近家</span>
          <strong>{school.closestHome.label}</strong>
        </div>
      </div>
      <div className="distance-pills">
        <span>觀雲家約 {school.distance.guanyun.km} km</span>
        <span>香檳家約 {school.distance.champagne.km} km</span>
      </div>
      <p className="card__text">{school.pickSummary}</p>
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
