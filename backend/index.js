const connectToMongo= require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/v1/login', (req, res) => {
    res.send('Hello login!')
  })

  app.get('/api/v1/signup', (req, res) => {
    res.send('Hello Signup!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
