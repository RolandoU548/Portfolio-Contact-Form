const emailService = require("../services/emailService");

exports.submitContactForm = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    await emailService.sendEmailToOwner({
      name,
      email,
      subject,
      message,
    });

    await emailService.sendConfirmationEmail({
      name,
      email,
      subject,
    });

    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    next(error);
  }
};
