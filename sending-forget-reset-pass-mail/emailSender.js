const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
require('dotenv').config();

async function sendOtp(userName, userEmail, otp) {
    try {

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

        // 2. Render the EJS template
        // We pass the data { name: userName, email: userEmail } to the template
        const data = await ejs.renderFile(path.join(__dirname, 'templates', 'otp.ejs'), { userName, otp });

        // 3. Define Email Options
        const mail = {
            to: userEmail,
            from: 'code.developer2099@gmail.com',
            subject: 'Reset Password',
            html: data // This is the rendered HTML from EJS
        };

        // 4. Send the mail
        const info = await transporter.sendMail(mail);
        console.log('Email sent successfully:', info.messageId);

    } catch (error) {
        console.error('Error sending email:', error);
    }
}

module.exports = sendOtp;