const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
require('dotenv').config();

async function sendWelcomeEmail(userEmail, userName) {
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
        const data = await ejs.renderFile(path.join(__dirname, 'templates', 'welcome.ejs'), { userName, userEmail });

        // 3. Define Email Options
        const mail = {
            to: userEmail,
            from: 'code.developer2099@gmail.com',
            subject: 'Welcome to the Team!',
            html: data // This is the rendered HTML from EJS
        };

        // 4. Send the mail
        const info = await transporter.sendMail(mail);
        console.log('Email sent successfully:', info.messageId);

    } catch (error) {
        console.error('Error sending email:', error);
    }
}

sendWelcomeEmail('geroma8385@izkat.com', 'John Doe');