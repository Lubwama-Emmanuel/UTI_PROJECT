const nodemailer = require("nodemailer");
const pug = require("pug");
const { htmlToText } = require("html-to-text");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.names.split(" ")[0];
    this.url = url;
    this.from = process.env.EMAIL_FROM;
  }
  // 1) Create a transporter
  newTransporter() {
    if (process.env.NODE_ENV === "production") {
      return 1;
    }
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    console.log(host)
  }
  // Send Actual Email
  async send(template, subject) {
    // 1) Render HTML based on a pug template

    const html = pug.renderFile(`${__dirname}/../views/emails/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
    });

    // 2) Define email Options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText(html),
    };

    // 3) Create a transport and send email
    await this.newTransporter().sendMail(mailOptions);
  }
  async sendWelcome() {
    this.send("welcome", "welcome to our app yoooo");
  }
};

