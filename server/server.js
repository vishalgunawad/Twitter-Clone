const express = require('express')
const app = express()
const port = 8080

app.get('/express', (req, res) => {
  res.send(`Server is Up on port ${port}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})