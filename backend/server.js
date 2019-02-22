const express = require('express')
const cors = require('cors')
const sgMail = require('@sendgrid/mail')
const app = express()
const port = process.env.PORT || 8080

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

app.use(cors())

app.get('/', (req, res) => {

  res.send("HKN UCR Backend")
})

app.get('/email', (req, res) => {
  const { sender, subject, message } = req.query

  const msg = {
    to: 'ucretakappanu@gmail.com',
    from: sender,
    subject: subject,
    text: message,
    html: `<p>${message}</p>`,
  };

  sgMail.send(msg).then(res => 
    console.log(res)).catch(err =>
    console.log(err))

  res.send("Email sent via Sendgrid")
})

app.listen(port, () => console.log("Listening on port " + port))