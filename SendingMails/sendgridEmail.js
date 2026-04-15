const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const mail = {
  to: 'geroma8385@izkat.com', // Change to your recipient
  from: 'code.developer2099@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(mail)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })