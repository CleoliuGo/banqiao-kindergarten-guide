# 板橋幼兒園暖暖整理站

React + Vite 製作，適合部署到 GitHub Pages，整理板橋區幼兒園缺額、地圖、距離與新手爸媽挑選重點。

## 開發

```bash
npm install
npm run dev
```

## GitHub Pages

1. 建立一個 GitHub repository。
2. 把這個資料夾內容 push 上去。
3. 到 GitHub Repository 的 `Settings -> Pages`，確認來源使用 `GitHub Actions`。
4. push 到 `main` 後會自動部署。

## 資料更新

官方板橋缺額總表在 [src/data/officialVacancies.js](/Users/cleo/banqiao-kindergarten-guide/src/data/officialVacancies.js)。

上方精選卡片與詳細頁在 [src/data/kindergartens.js](/Users/cleo/banqiao-kindergarten-guide/src/data/kindergartens.js)。

如果你要我繼續補齊每一間園所的地址、Google 評價、接送時間與教學模式，我可以直接把官方總表再擴成完整詳細頁資料。
