const nodemailer = require('nodemailer');

    const mailer = nodemailer.createTransport({
    port: 465,
    host: "mail.infygain.com",
       auth: {
            user: 'contact@infygain.com',
            pass: 'Infy@2021',
         },
    secure: true,
    });

module.exports = mailer;
