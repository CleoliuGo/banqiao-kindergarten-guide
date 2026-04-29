import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="detail-page">
      <h1>頁面不存在</h1>
      <p>GitHub Pages 使用雜湊路由，請從首頁重新進入。</p>
      <Link to="/">回首頁</Link>
    </section>
  );
}
