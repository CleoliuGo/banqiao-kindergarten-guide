import { Link, NavLink } from "react-router-dom";

export function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="hero">
        <div className="hero__glow hero__glow--left" />
        <div className="hero__glow hero__glow--right" />
        <nav className="topbar">
          <Link className="brand" to="/">
            板橋幼兒園暖暖整理站
          </Link>
          <div className="topbar__links">
            <NavLink to="/">園所清單</NavLink>
            <a href="https://github.com/axiom7-ai" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </nav>
        <section className="hero__content">
          <div className="hero__copy">
            <p className="eyebrow">4/30 抽籤前速查版</p>
            <h1>給新手爸媽的板橋幼兒園整理</h1>
            <p className="hero__text">
              用溫柔清楚的方式整理公立、非營利、準公共與接送考量。
              目前先放入可公開整理的園所資訊，4/29 官方缺額公告可直接補進資料檔。
            </p>
            <div className="hero__chips">
              <span>缺額</span>
              <span>地圖</span>
              <span>距離</span>
              <span>評價</span>
              <span>抽籤重點</span>
            </div>
          </div>
          <aside className="hero__note">
            <h2>家長快看</h2>
            <ul>
              <li>先看距離與接送動線，再看教學理念。</li>
              <li>公立與非營利通常抽籤競爭高，準公共要留意延托與收費細節。</li>
              <li>站內距離與通勤為估算值，最後仍建議用導航確認。</li>
            </ul>
          </aside>
        </section>
      </header>
      <main className="content">{children}</main>
      <footer className="footer">
        <p>資料用途：家人瀏覽與抽籤前快速比對。官方資訊仍以新北市政府教育局公告為準。</p>
      </footer>
    </div>
  );
}
