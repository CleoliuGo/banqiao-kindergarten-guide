import { Link, NavLink } from "react-router-dom";

export function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="topbar">
          <Link className="brand" to="/">
            板橋幼兒園暖暖整理站
          </Link>
          <div className="topbar__links">
            <NavLink to="/">園所清單</NavLink>
            <NavLink to="/guide">選園指南</NavLink>
            <a
              href="https://github.com/CleoliuGo/banqiao-kindergarten-guide"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </nav>
      </header>
      <main className="content">{children}</main>
      <footer className="footer">
        <p>資料用途：給家人抽籤前快速比對。正式資訊仍以新北市政府教育局與各園公告為準。</p>
      </footer>
    </div>
  );
}
