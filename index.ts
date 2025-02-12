import express from "express";
const app = express();
const port = process.env.PORT || 8080;

// "/" へのアクセス時に HTML を返す
app.get("/", (req, res) => {

  // Google FontsからNoto Sans JPを読み込み、CSSで適用
  const html = `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <title>今日も大好き！！</title>
  <link rel="preconnect" href="https://fonts.gstatic.com"/>
  <link 
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" 
    rel="stylesheet"
  />
  <style>
    body {
      font-family: 'Noto Sans JP', sans-serif; /* フォント指定 */
      margin: 0;
      padding: 20px;
      background-color: #ffffff;
    }
    h1 {
      font-size: 48px;
      color: #333;
      margin: 0;
    }
  </style>
</head>
<body>
  <h1>今日も大好き！！</h1>
</body>
</html>
  `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
