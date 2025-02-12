import express from 'express'
const app = express()
const port = process.env.PORT || 8080

// コンフリクトを起こす
app.get('/', (req, res) => {
  res.send('和牛')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
