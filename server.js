//const sgMail = require('@sendgrid/mail');
//require('dotenv').config();
//sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//const msg = {
//  to: 'barnesy.ab@gmail.com', // Change to your recipient
//  from: 'barnes.avb.com', // Change to your verified sender
//  subject: 'Sending with SendGrid is Fun',
//  text: 'and easy to do anywhere, even with Node.js',
//  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//}

//sgMail
//  .send(msg)
//  .then((response) => {
//    //console.log(process.env)
//    console.log(response[0].statusCode)
//    console.log(response[0].headers)
//  })
//  .catch((error) => {
//    console.error(error)
//  })

//  javascript
const sgMail = require('@sendgrid/mail')
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// sgMail.setDataResidency('eu'); 
// uncomment the above line if you are sending mail using a regional EU subuser

const msg = {
  to: 'barnesy.ab@gmail.com', // Change to your recipient
  from: 'barnes.avb@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })