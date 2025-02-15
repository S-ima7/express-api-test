import express from 'express'
import { Request, Response } from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

// public ディレクトリを静的ファイルとして提供
app.use(express.static(path.join(__dirname, '../public')))

// "/" へのアクセスで index.html を返す
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.listen(port, () => {
  console.log(`server start at http://localhost:${port}`)
})
