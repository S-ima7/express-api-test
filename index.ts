import express from "express";
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("今日も大好き！");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
