'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const config = require('./config');
const cors = require('cors')({origin: true});

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: config.transporter,
      pass: config.password
    }
});

exports.sendEmail = functions.https.onRequest((req, res) => {
    const options = {
        from: '',
        to: config.recipient,
        subject: "CV query from: " + req.body.name,
        text: "You\'ve got an email from: " + req.body.name +" at "+ req.body.email + "\n\n" + req.body.query
    }

    cors(req, res, () => {
        return transporter.sendMail(options).then( () => {
            res.send(true);
        }).catch( err => res.send(err) );
    })

});
