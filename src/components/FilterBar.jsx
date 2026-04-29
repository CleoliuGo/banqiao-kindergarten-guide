const DISTANCE_OPTIONS = [
  { label: "全部距離", value: "all" },
  { label: "3 公里內", value: "3" },
  { label: "5 公里內", value: "5" },
];

const TYPE_OPTIONS = [
  { label: "全部類型", value: "all" },
  { label: "公立", value: "public" },
  { label: "非營利", value: "nonprofit" },
  { label: "準公共", value: "subsidized" },
];

const RATING_OPTIONS = [
  { label: "全部評價", value: "all" },
  { label: "4.5 以上", value: "4.5" },
  { label: "4.0 以上", value: "4.0" },
];

export function FilterBar({ filters, onChange, total }) {
  return (
    <section className="filter-panel">
      <div>
        <p className="section-kicker">快速篩選</p>
        <h2>從接送現實出發挑園所</h2>
      </div>
      <div className="filter-grid">
        <label>
          距離
          <select
            value={filters.distance}
            onChange={(event) => onChange("distance", event.target.value)}
          >
            {DISTANCE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          類型
          <select
            value={filters.type}
            onChange={(event) => onChange("type", event.target.value)}
          >
            {TYPE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          評價
          <select
            value={filters.rating}
            onChange={(event) => onChange("rating", event.target.value)}
          >
            {RATING_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          關鍵字
          <input
            type="search"
            placeholder="輸入園名、地址、教學特色"
            value={filters.query}
            onChange={(event) => onChange("query", event.target.value)}
          />
        </label>
      </div>
      <p className="filter-summary">目前顯示 {total} 間園所</p>
    </section>
  );
}
