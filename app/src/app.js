const express = require('express')
const app = express()

// const
const PORT = process.env.PORT || 3000
const SERVICE_NAME = process.env.SERVICE_NAME || 'nodeapp'
const VERSION = process.env.VERSION || '0.0.1'

app.get('/', (req, res, next) => {
  const sourceIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`source ip :: ${sourceIp}`)
  res.json(`source ip :: ${sourceIp}`)
})

app.get('/healthz', (req, res, next) => {
  res.json({ status: 200 })
})

app.listen(PORT, () => console.log(`server is running on ${PORT}`))
