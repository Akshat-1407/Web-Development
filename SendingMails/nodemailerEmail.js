const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

// Service through which you are sending the mail.
const sendGridDetails = {
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true,
    auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY
    }
}

const transporter = nodemailer.createTransport(sendGridDetails);

const mail = {
    to: 'geroma8385@izkat.com', // Change to your recipient
    from: 'code.developer2099@gmail.com', // Change to your verified sender
    subject: 'Sending First Email',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

transporter
    .sendMail(mail)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
