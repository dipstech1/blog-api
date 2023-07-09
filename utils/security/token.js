const jwt = require('jsonwebtoken');


exports.createToken = payload => {
    const token = jwt.sign(payload,process.env.JWT_KEY, {expiresIn:'1d'});
    return token
}