const nodemailer = require("nodemailer");
const emailTemplates = require("../utils/emailTemplates");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SMTP,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendEmailToOwner = async ({ name, email, subject, message }) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `PORTFOLIO CONTACT FORM: ${subject}`,
      html: emailTemplates.ownerEmailTemplate({
        name,
        email,
        subject,
        message,
      }),
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to owner about contact from ${email}`);
  } catch (error) {
    console.error("Error sending email to owner:", error);
    const emailError = new Error("Failed to send email to owner");
    emailError.name = "EmailError";
    throw emailError;
  }
};

exports.sendConfirmationEmail = async ({ name, email, subject }) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting us: ${subject}`,
      html: emailTemplates.clientEmailTemplate({ name }),
    };

    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${email}`);
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    const emailError = new Error("Failed to send confirmation email");
    emailError.name = "EmailError";
    throw emailError;
  }
};
