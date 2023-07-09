const ErrorResponse = require("../utils/error-utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = new ErrorResponse(err.message,500);

  console.log("err.message ", err.message);

  if (err.name === 'CastError') {
    const message = `Resource not found`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validatoin error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  const stack = err.stack;
    const message = err.message;
    const status = err.status ? err.status : "failed";
    const statusCode = err?.statusCode ? err.statusCode : 500;

  res.status(error.statusCode || 500).json({
    success: false,
    message,
      stack,
      status,
  });
};

module.exports = errorHandler;

