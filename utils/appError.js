const appError = (message, statusCode = 500) => {
    let error = new Error(message);
    error.statusCode = statusCode
    error.stack = error.stack;
    error.isOperational = true;
    return error;
}

class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.status = "failed"; 
        this.isOperational = true;  // Mark as an operational error
        Error.captureStackTrace(this, this.constructor); // Clean stack trace
    }
}

module.exports = { appError, AppError };