const DISTANCE_OPTIONS = [
  { label: "全部距離", value: "all" },
  { label: "2 公里內", value: "2" },
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

const BASIS_OPTIONS = [
  { label: "看最近的家", value: "nearest" },
  { label: "以觀雲家為主", value: "guanyun" },
  { label: "以香檳家為主", value: "champagne" },
];

const SORT_OPTIONS = [
  { label: "距離最近", value: "distance" },
  { label: "缺額最多", value: "vacancy" },
  { label: "評價最高", value: "rating" },
  { label: "園名排序", value: "name" },
];

export function FilterBar({ filters, onChange, total }) {
  return (
    <section className="filter-panel">
      <div className="filter-panel__head">
        <div>
          <p className="section-kicker">快速篩選</p>
          <h2>先從接送能不能撐一年開始</h2>
        </div>
        <p className="filter-summary">目前顯示 {total} 間精選園所</p>
      </div>

      <div className="filter-stack">
        <label>
          搜尋
          <input
            type="search"
            placeholder="園名、地址、教學風格"
            value={filters.query}
            onChange={(event) => onChange("query", event.target.value)}
          />
        </label>
        <label>
          距離依據
          <select value={filters.basis} onChange={(event) => onChange("basis", event.target.value)}>
            {BASIS_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          最大距離
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
          園所類型
          <select value={filters.type} onChange={(event) => onChange("type", event.target.value)}>
            {TYPE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          評價門檻
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
          排序
          <select value={filters.sort} onChange={(event) => onChange("sort", event.target.value)}>
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="filter-note">
        <strong>家長常見排序邏輯：</strong>
        先看每天通勤，再看學費、延托、午休與老師穩定度。抽不抽得到是一次，接送是每天。
      </div>
    </section>
  );
}
