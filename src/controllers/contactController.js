const emailService = require("../services/emailService");

exports.submitContactForm = async (req, res, next) => {
  try {
    const { name, email, subject, message, lang } = req.body;
    const userLang = lang || 'en';
    
    await Promise.all([
      emailService.sendEmailToOwner({ name, email, subject, message }),
      emailService.sendConfirmationEmail({ name, email, subject, lang: userLang })
    ]);

    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
    });
    
  } catch (error) {
    next(error);
  }
};
