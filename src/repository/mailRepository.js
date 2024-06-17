const nodemailer = require('nodemailer');

const enviarEmailRepository = (mailInfo) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "juanovad@gmail.com",
            pass: "bjxulubgeeekmbca",
        }
    })

    return transporter.sendMail({
        from: '<juanovad@gmail.com>',
        to: mailInfo.to,
        subject: mailInfo.subject,
        text: mailInfo.body
    }, (err, info) => {
        if (err){
            return false;
        } 
        return true;
    })
};

module.exports = {
    enviarEmailRepository
};