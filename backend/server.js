const express = require('express')
const cors = require('cors')
const sgMail = require('@sendgrid/mail')
const app = express()
const port = process.env.PORT || 8080

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

app.use(cors())

app.get('/', (req, res) => {

  res.send("Hello world")
})

app.get('/email', (req, res) => {
  const msg = {
    to: 'ericong18@gmail.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  sgMail.send(msg)
  .then(res => console.log(res))

  res.send("Email sent via Sendgrid")
})

app.listen(port, () => console.log("Listening on port " + port))