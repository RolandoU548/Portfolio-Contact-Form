const emailService = require("../services/emailService");

exports.submitContactForm = async (req, res, next) => {
  try {
    const { name, email, subject, message, lang } = req.body;
    const userLang = lang || 'es';
    
    await Promise.all([
      emailService.sendEmailToOwner({ name, email, subject, message }),
      emailService.sendConfirmationEmail({ name, email, subject, lang: userLang })
    ]);
  } catch (error) {
    next(error);
  }
};
