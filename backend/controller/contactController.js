const ContactModel = require("../models/contact.js")

const nodemailer = require('nodemailer');

const contact =  (req, res) => {

    // Email-Send
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            // Some changes in user google needed. {Refer to notion-Article}
            user: 'nehalgarg37@gmail.com', // Paste your google account mail here
            pass: 'tvsuxwcswvvxykpu' //paste the password here only
        }
    });
  
    var mailOptions = {
        from: '********@gmail.com', // same as of auth-user
        to: 'Veggis********@gmail.com', // to whom you want to send email
        subject: req.body.subject,
        text: req.body.message,
        html: `
        <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Message: ${req.body.message}</li>
        </ul>
        `
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            alert('Email sent: ' + info.response);
        }
    });
  
  
  
    ContactModel.create(req.body)
        .then(contact => res.json(contact))
        .catch(err => res.json(err))
  }
  

module.exports = contact;