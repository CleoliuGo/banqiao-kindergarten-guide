import { Link, useParams } from "react-router-dom";
import { kindergartens, homes } from "../data/kindergartens";

export function DetailPage() {
  const { slug } = useParams();
  const school = kindergartens.find((item) => item.slug === slug);

  if (!school) {
    return (
      <section className="detail-page">
        <h2>找不到這間園所</h2>
        <Link to="/">回到清單頁</Link>
      </section>
    );
  }

  return (
    <article className="detail-page">
      <Link className="detail-back" to="/">
        ← 回到清單
      </Link>
      <section className="detail-hero">
        <div>
          <p className="section-kicker">園所詳細頁</p>
          <h1>{school.name}</h1>
          <p>{school.address}</p>
        </div>
        <div className="detail-hero__stats">
          <div>
            <span>缺額</span>
            <strong>{school.vacancy ?? "待補官方公告"}</strong>
          </div>
          <div>
            <span>評價</span>
            <strong>{school.rating ? `${school.rating} / 5` : "待補"}</strong>
          </div>
          <div>
            <span>類型</span>
            <strong>{school.type}</strong>
          </div>
        </div>
      </section>

      <section className="detail-grid">
        <div className="detail-card">
          <h2>通勤與接送</h2>
          <div className="route-block">
            <strong>{homes.guanyun.label}</strong>
            <p>{homes.guanyun.address}</p>
            <p>距離約 {school.distance.guanyun.km} km</p>
            <p>{school.distance.guanyun.transport}</p>
          </div>
          <div className="route-block">
            <strong>{homes.champagne.label}</strong>
            <p>{homes.champagne.address}</p>
            <p>距離約 {school.distance.champagne.km} km</p>
            <p>{school.distance.champagne.transport}</p>
          </div>
          <p className="note-text">{school.pickupNotes}</p>
          <a href={school.mapUrl} target="_blank" rel="noreferrer">
            在 Google Maps 開啟
          </a>
        </div>

        <div className="detail-card">
          <h2>家長最常在意</h2>
          <ul className="checklist">
            {school.parentChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="detail-card">
          <h2>基本資訊</h2>
          <dl className="detail-list">
            <div>
              <dt>上下課時間</dt>
              <dd>{school.schoolHours}</dd>
            </div>
            <div>
              <dt>費用</dt>
              <dd>{school.tuition}</dd>
            </div>
            <div>
              <dt>教學模式</dt>
              <dd>{school.teachingModel}</dd>
            </div>
            <div>
              <dt>挑選提醒</dt>
              <dd>{school.pickSummary}</dd>
            </div>
          </dl>
        </div>

        <div className="detail-card">
          <h2>新手爸媽建議檢查點</h2>
          <ul className="checklist">
            <li>先算每天接送成本，不只看抽不抽得到。</li>
            <li>問清楚延托、寒暑假、病假與退費規則。</li>
            <li>確認是否重視生活自理、戶外活動、雙語或才藝比例。</li>
            <li>試著在上下學時段實地走一趟，看車流、臨停與校門管制。</li>
            <li>如果是準公共，務必把補助後實繳金額與額外費用拆開問。</li>
          </ul>
        </div>
      </section>

      <section className="data-note">
        <h2>資料註記</h2>
        <p>{school.sourceNote}</p>
      </section>
    </article>
  );
}
