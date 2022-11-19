function errorHandler(err, req, res) {
  res.status(500).json({
    status:  500,
    message: "Server error",
    error: err,
  });
}
module.exports = errorHandler;
