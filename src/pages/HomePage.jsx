import { useMemo, useState } from "react";
import { FilterBar } from "../components/FilterBar";
import { KindergartenCard } from "../components/KindergartenCard";
import { MapPanel } from "../components/MapPanel";
import { OfficialVacancyTable } from "../components/OfficialVacancyTable";
import { kindergartens } from "../data/kindergartens";
import { filterKindergartens } from "../utils/filters";

const initialFilters = {
  distance: "all",
  type: "all",
  rating: "all",
  query: "",
};

export function HomePage() {
  const [filters, setFilters] = useState(initialFilters);
  const [focusedSchool, setFocusedSchool] = useState(kindergartens[0]);

  const visibleSchools = useMemo(
    () => filterKindergartens(kindergartens, filters),
    [filters],
  );

  const handleChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  return (
    <div className="page-grid">
      <section className="main-column">
        <FilterBar filters={filters} onChange={handleChange} total={visibleSchools.length} />
        <section className="info-strip">
          <div>
            <h2>怎麼看這份清單</h2>
            <p>
              先看哪一間離兩個住家點最近，再看評價、是否有延托、收費細項與教學風格。
              抽籤很吃運氣，但日後接送是每天都會發生的現實。
            </p>
          </div>
          <div>
            <h2>今天先確認</h2>
            <p>
              4/29 缺額公告貼上後，`vacancy` 欄位就能直接更新。站內現在保留可快速替換的欄位結構。
            </p>
          </div>
        </section>
        <section className="card-list">
          {visibleSchools.map((school) => (
            <KindergartenCard key={school.slug} school={school} onFocus={setFocusedSchool} />
          ))}
        </section>
        <OfficialVacancyTable />
      </section>
      <MapPanel school={focusedSchool} />
    </div>
  );
}
