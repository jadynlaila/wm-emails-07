//create a function that returns a json with success 
const nodemailer = require('nodemailer');
require('dotenv').config();


const sendEmail = async (req, res) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'felton.maggio77@ethereal.email',
            pass: process.env.MAILERPASS
        }
    });
    
    let info = await transporter.sendMail({
        to: 'jadyncalh@gmail.com',
        //could be used with an array of emails
        from: 'ceoofgoogle@mcdonalds.gov',
        replyTo: 'AAAHHHH@sorryforscreaming.email',
        subject: 'nodemailer test',
        html: '<h1>HI</h1><p>testing<em> nodemailer </em></p>'
    })

    res.json(info)
}

module.exports = sendEmail;