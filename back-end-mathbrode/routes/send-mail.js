require('dotenv/config')
require('../routes/send-mail')

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SECRET_SENGRID_KEY);
const msg={
  to: "c.rungette@gmail.com",
  from:"exemple@gmail.com",
  subject: "Sending an email",
  text:"Hello",
  html:"<strong>Hello </strong>"
};

sgMail.send(msg);