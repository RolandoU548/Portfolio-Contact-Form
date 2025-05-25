exports.errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);
  console.error(err.stack);

  if (err.name === "EmailError") {
    return res.status(500).json({
      success: false,
      error: "Failed to send email",
      message: err.message,
    });
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Internal Server Error",
  });
};
