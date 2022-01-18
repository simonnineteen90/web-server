const nunjucks = require('nunjucks')
const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'Your weather',
    location: 'Your town'
  })
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
