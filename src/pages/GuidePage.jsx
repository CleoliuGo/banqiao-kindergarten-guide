import { Link } from "react-router-dom";

const sections = [
  {
    title: "第一關：接送現實",
    items: [
      "每天早上能不能準時到園，比抽不抽中更長期。",
      "雨天、長輩支援、下班延誤時有沒有備案，要先想。",
      "實際在 08:00 前後跑一次路線，比看地圖數字更準。",
    ],
  },
  {
    title: "第二關：費用和延托",
    items: [
      "公立通常最省，但延托、寒暑假安排要問清楚。",
      "非營利通常價格友善，作息與家園合作常較細。",
      "準公共要拆開問：補助後實繳、材料費、月費外加項。",
    ],
  },
  {
    title: "第三關：教學與照顧風格",
    items: [
      "孩子比較慢熱時，先問適應期安排與老師溝通方式。",
      "重視生活自理、戶外活動、雙語比例的家庭，判斷標準不同。",
      "與其問哪間最好，不如問哪間最適合你們家的節奏。",
    ],
  },
];

export function GuidePage() {
  return (
    <article className="guide-page">
      <Link className="detail-back" to="/">
        ← 回到清單
      </Link>

      <section className="guide-hero">
        <p className="section-kicker">新手爸媽指南</p>
        <h1>抽籤前，爸媽最常在意的其實不是同一件事</h1>
        <p>
          有些家庭最怕通勤太累，有些在意費用，有些最在意老師穩不穩。這頁把常見決策點整理成可以
          跟家人直接討論的版本。
        </p>
      </section>

      <section className="guide-grid">
        {sections.map((section) => (
          <article key={section.title} className="detail-card">
            <h2>{section.title}</h2>
            <ul className="checklist">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}

        <article className="detail-card">
          <h2>抽籤前最後確認</h2>
          <ul className="checklist">
            <li>志願排序先按長期接送可行性排，不要只憑口碑。</li>
            <li>同時準備抽中與沒抽中的兩套決策。</li>
            <li>有空的話，去看校門口 10 分鐘，勝過看一小時網路評價。</li>
            <li>若夫妻對排序有不同想法，先訂一個共同標準再填志願。</li>
          </ul>
        </article>
      </section>
    </article>
  );
}
