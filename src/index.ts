import express from 'express'
import { Request, Response } from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

// public ディレクトリを静的ファイルとして提供
app.use(express.static(path.join(__dirname, '../public')))



app.listen(port, () => {
  console.log(`server start at http://localhost:${port}`)
})
