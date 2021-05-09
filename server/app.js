const express = require('express')
const app = express()
const port = 3000

app.get('/duan', (req, res) => {
  res.send('<h1>Hello  sshgcshb</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})