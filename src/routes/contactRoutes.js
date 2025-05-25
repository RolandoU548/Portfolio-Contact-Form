const express = require("express");
const { body } = require("express-validator");
const rateLimit = require("express-rate-limit");
const contactController = require("../controllers/contactController");
const { validate } = require("../middleware/validate");

const router = express.Router();

// Rate limiting - limits to 5 requests per IP per 15 minutes
const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: {
    error:
      "Too many contact requests from this IP, please try again after 15 minutes",
  },
});

const contactValidation = [
  body("name").trim().not().isEmpty().withMessage("Name is required"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Valid email is required"),
  body("subject").trim().not().isEmpty().withMessage("Subject is required"),
  body("message").trim().not().isEmpty().withMessage("Message is required"),
];

// Contact form endpoint
router.post(
  "/contact",
  contactFormLimiter,
  contactValidation,
  validate,
  contactController.submitContactForm
);

module.exports = router;
