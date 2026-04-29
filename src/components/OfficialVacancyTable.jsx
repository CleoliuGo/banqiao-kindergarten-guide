import { useMemo, useState } from "react";
import { officialVacancies, officialVacancyDate } from "../data/officialVacancies";

export function OfficialVacancyTable() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");

  const rows = useMemo(() => {
    return officialVacancies.filter((item) => {
      if (type !== "all" && item.typeLabel !== type) {
        return false;
      }

      if (!query.trim()) {
        return true;
      }

      const keyword = query.trim().toLowerCase();
      return [item.name, item.subname, item.phone, item.schno]
        .join(" ")
        .toLowerCase()
        .includes(keyword);
    });
  }, [query, type]);

  return (
    <section className="official-panel">
      <div className="official-panel__header">
        <div>
          <p className="section-kicker">官方缺額總表</p>
          <h2>板橋區 4/29 公開缺額</h2>
          <p>資料日期：{officialVacancyDate}。欄位依新北幼生登記平台公開 API 整理。</p>
        </div>
        <div className="official-panel__filters">
          <input
            type="search"
            placeholder="搜尋園名、分班、電話、代碼"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option value="all">全部類型</option>
            <option value="公立">公立</option>
            <option value="公立附幼">公立附幼</option>
            <option value="非營利">非營利</option>
          </select>
        </div>
      </div>

      <div className="official-note">
        <p>目前官方資料能穩定取得的是班別缺額與電話。地址、距離、評價已先優先補在上方常看園所卡片。</p>
      </div>

      <div className="official-table-wrap">
        <table className="official-table">
          <thead>
            <tr>
              <th>類型</th>
              <th>園所</th>
              <th>2歲專班</th>
              <th>3-5歲班</th>
              <th>電話</th>
              <th>地圖</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr key={`${item.schno}-${item.subname || "main"}`}>
                <td>{item.typeLabel}</td>
                <td>
                  <strong>{item.name}</strong>
                  {item.subname ? <span className="official-subname">{item.subname}</span> : null}
                </td>
                <td>{item.vacancy2yo ?? "—"}</td>
                <td>{item.vacancy35 ?? "—"}</td>
                <td>{item.phone || "待補"}</td>
                <td>
                  <a href={item.mapUrl} target="_blank" rel="noreferrer">
                    Google Map
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
