const express = require('express')
const cors = require('cors')
const sendgrid = require('@sendgrid/mail')
const app = express()
const port = 8080
const keys = require('./config/keys')

sendgrid.setApiKey(keys.sendgridKey)

app.use(cors())

app.get('/', (req, res) => {
  const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  
})

app.listen(port, () => console.log("Listening on port " + port))