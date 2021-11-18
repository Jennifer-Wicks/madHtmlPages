//https://medium.com/coox-tech/send-mail-using-node-js-express-js-with-nodemailer-93f4d62c83ee
const express = require("express");

const nodemailer = require('nodemailer');

const app = express();

app.use(express.urlencoded({
  extended: true
}));

const route = express.Router();

const port = process.env.PORT || 5000;

app.use('/v1', route);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: 'boneswvb@gmail.com',
    pass: '********',
  },
  secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

route.post('/text-mail', (req, res) => {
  const { to, cc, subject, text, html } = req.body;
  const mailData = {
    from: 'boneswvb@gmail.com',
    to: to,
    subject: subject,
    text: text,
    html: html,
    cc: cc
  };
  transporter.sendMail(mailData, function (error, info) {
    if (error) {
      return console.log(error);
    }
    res.status(200).send({ message: "Mail send", message_id: info.messageId });
  });
});


// route.post('/attachments-mail', (req, res) => {
//   const { to, subject, text } = req.body;
//   const mailData = {
//     from: 'youremail@gmail.com',
//     to: to,
//     subject: subject,
//     text: text,
//     html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
//     attachments: [
//       {   // file on disk as an attachment
//         filename: 'nodemailer.png',
//         path: 'nodemailer.png'
//       },
//       {   // file on disk as an attachment
//         filename: 'text_file.txt',
//         path: 'text_file.txt'
//       }
//     ]
//   };

//   transporter.sendMail(mailData, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     res.status(200).send({ message: "Mail send", message_id: info.messageId });
//   });
// });
