
const authError = {
    INVALID_EMAIL_OR_PASSWORD: {
        statusCode: 400, // Bad Request
        message: 'Invalid email address or password',
    },
   EMAIL_REGISTERD: {
        statusCode: 400, // Bad Request
        message: 'Email already registered',
    },
    USER_NOT_FOUND: {
        statusCode: 404, // Not Found
        message: 'User not found',
    },
    INTERNAL_ERROR: {
        statusCode: 500, // Internal Server Error
        message: 'Internal Server Error',
    },
}



module.exports = {
    authError
};