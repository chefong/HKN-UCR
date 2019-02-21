const express = require('express')
const cors = require('cors')
const sendgrid = require('@sendgrid/mail')
const app = express()
const port = process.env.PORT || 8080

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

app.use(cors())

app.get('/', (req, res) => {
  // const msg = {
  //   to: 'test@example.com',
  //   from: 'test@example.com',
  //   subject: 'Sending with SendGrid is Fun',
  //   text: 'and easy to do anywhere, even with Node.js',
  //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  // };

  res.send("Hello world")
})

app.listen(port, () => console.log("Listening on port " + port))