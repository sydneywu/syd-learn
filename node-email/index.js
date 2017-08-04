var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wireddeveloper@gmail.com',
    pass: '1B0KkkeolHxj'
  }
});

var mailOptions = {
  from: 'wireddeveloper@gmail.com',
  to: 'sydney.wu@dink.com.sg',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});