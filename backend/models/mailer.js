


import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.Mail_port,
    secure:false,
    auth :{
      user:process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,

    },
});

export default transporter;
  
