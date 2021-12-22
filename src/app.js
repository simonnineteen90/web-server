const express = require('express')
const port = 3000
const app = express()

app.get('', (req, res) => {
  res.send('Hello express!')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/weather', (req, res) => {
  res.send('<h1> Weather </h1>')
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
