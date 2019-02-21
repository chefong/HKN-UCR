const express = require('express')
const cors = require('cors')
const sendgrid = require('@sendgrid/mail')
const app = express()
const port = 8080
const keys = require('./config/keys')

sendgrid.setApiKey(keys.sendgridKey)

app.use(cors())

app.get('/', (req, res) => {
  res.send("SendGrid Email API Server")
})

app.listen(port, () => console.log("Listening on port " + port))