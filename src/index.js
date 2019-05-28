const express = require('express')
const app = express()
const Home = require('./containers/Home')

app.get('/', function (req, res) {
  res.send(`
  <html>
    <head>
      <title>Hello</title>
    </head>
    <body>
      <h1>Fisrt</h1>
    </body>
  </html>
  `)
})

var server = app.listen(3001)