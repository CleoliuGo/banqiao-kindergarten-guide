import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FilterBar } from "../components/FilterBar";
import { KindergartenCard } from "../components/KindergartenCard";
import { MapPanel } from "../components/MapPanel";
import { OfficialVacancyTable } from "../components/OfficialVacancyTable";
import { kindergartens, homes } from "../data/kindergartens";
import { officialVacancyDate } from "../data/officialVacancies";
import { filterKindergartens } from "../utils/filters";

const initialFilters = {
  distance: "all",
  type: "all",
  rating: "all",
  query: "",
  basis: "nearest",
  sort: "distance",
};

const timeline = [
  {
    label: "今天先看",
    title: "4/29 缺額公告",
    text: "先確認有沒有名額，再決定哪些園所要進入最後志願排序。",
  },
  {
    label: "明天重點",
    title: "4/30 抽籤",
    text: "抽籤前把接送現實、學費、延托與備援接送人力一起想清楚。",
  },
  {
    label: "抽後確認",
    title: "錄取與報到",
    text: "是否報到、是否保留私幼備案，建議先和家人講好決策順序。",
  },
];

export function HomePage() {
  const [filters, setFilters] = useState(initialFilters);
  const [focusedSchool, setFocusedSchool] = useState(null);

  const visibleSchools = useMemo(
    () => filterKindergartens(kindergartens, filters),
    [filters],
  );

  const handleChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  return (
    <>
      <section className="hero-card">
        <div className="hero-card__copy">
          <p className="eyebrow">Banqiao Kindergarten Guide</p>
          <h1>給家人看的板橋幼兒園抽籤小幫手</h1>
          <p className="hero-card__text">
            參考你提供的資訊站做法，改成更容易快速比對的清單頁。上半部先看精選園所的距離、
            缺額、接送與評價，下半部保留板橋區官方缺額總表。
          </p>
          <div className="hero-card__chips">
            <span>公立</span>
            <span>非營利</span>
            <span>距離篩選</span>
            <span>地圖抽屜</span>
            <span>新手爸媽指南</span>
          </div>
          <div className="hero-card__actions">
            <Link className="primary-button" to="/guide">
              看選園指南
            </Link>
            <a href="#official-vacancy">直接看官方缺額</a>
          </div>
        </div>
        <aside className="hero-card__aside">
          <div className="house-card">
            <strong>{homes.guanyun.label}</strong>
            <p>{homes.guanyun.address}</p>
          </div>
          <div className="house-card">
            <strong>{homes.champagne.label}</strong>
            <p>{homes.champagne.address}</p>
          </div>
          <p className="note-text">
            缺額日期：{officialVacancyDate}。站內距離與交通為家用決策參考，最後仍建議用 Google Maps
            再跑一次上下學時段。
          </p>
        </aside>
      </section>

      <section className="timeline-band">
        {timeline.map((item) => (
          <article key={item.title} className="timeline-band__item">
            <p>{item.label}</p>
            <h2>{item.title}</h2>
            <span>{item.text}</span>
          </article>
        ))}
      </section>

      <section className="browse-layout">
        <aside className="browse-layout__sidebar">
          <FilterBar filters={filters} onChange={handleChange} total={visibleSchools.length} />
          <section className="mini-panel">
            <p className="section-kicker">快速提醒</p>
            <h2>先淘汰不適合每天接送的園</h2>
            <ul className="checklist">
              <li>先看住家到園所的距離，不要只看抽中率。</li>
              <li>若雙薪且沒長輩支援，延托時間很重要。</li>
              <li>非營利和公立常常都不錯，差別常在接送與作息細節。</li>
            </ul>
          </section>
        </aside>

        <div className="browse-layout__main">
          <section className="section-head">
            <div>
              <p className="section-kicker">精選園所</p>
              <h2>先看你們家比較常會真的考慮的幾間</h2>
            </div>
            <p className="note-text">可依觀雲家、香檳家或兩者最近距離來排序。</p>
          </section>

          <section className="card-list">
            {visibleSchools.map((school) => (
              <KindergartenCard
                key={school.slug}
                school={school}
                basis={filters.basis}
                onFocus={setFocusedSchool}
              />
            ))}
          </section>
        </div>
      </section>

      <section id="official-vacancy">
        <OfficialVacancyTable />
      </section>

      <MapPanel school={focusedSchool} onClose={() => setFocusedSchool(null)} />
    </>
  );
}
