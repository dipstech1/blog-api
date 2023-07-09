const bcrypt = require("bcryptjs");
const User = require('../models/User')
const {authError} = require("../constants/error-code");
const { encryptData, compareEncryptData } = require("../utils/security/encrypt");
const { createToken } = require("../utils/security/token");

exports.registerService = ({ firstname, lastname, email, password }) => {
    return new Promise(async (resolve, reject) => {
        const isEmailRegister = await User.find({ email });
        if (isEmailRegister.length) {
            reject(authError.EMAIL_REGISTERD)
            return
        }
        const hashPassword = await encryptData(password)
        await User.create({
            firstName: firstname,
            lastName: lastname,
            password: hashPassword,
            email
        });
        resolve({msg:"Registration done"})
    })
}

exports.loginService = ({email,password}) => {
    return new Promise(async(resolve,reject) => {
        const user = await User.findOne({email});
        if(!user){
            reject(authError.INVALID_EMAIL_OR_PASSWORD);
        }
        const passwordMatch = await compareEncryptData(user.password,password);
        if(!passwordMatch){
            reject(authError.INVALID_EMAIL_OR_PASSWORD);
        }
        const tokencreationPayload = {
            email:user.email,
            id:user._id
        }
        const data = {
            token : createToken(tokencreationPayload),
            email:user.email,
        }
        resolve(data)
    })
}