const express = require('express')
const app = express()

app.use('/', express.static('./'))

const port = 9000
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})