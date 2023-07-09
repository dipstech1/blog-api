const asyncHandler = require('express-async-handler');
const { validationResult } = require("express-validator");

const { registerService,loginService } = require("../services/authService");
const ErrorResponse = require('../utils/error-utils/errorResponse');


exports.registerUser = asyncHandler(async (req, res, next) => {
    const registerErrors = validationResult(req)
    if (registerErrors.isEmpty()) {
        registerService(req.body)
            .then(response => {
                res.json({
                    success: true,
                    message: response
                })
            }).catch(err => {
                next(new ErrorResponse(err?.message, err?.statusCode))
            })
    } else {
       
    }
});

exports.login = asyncHandler(async(req,res,next) => {
    const loginErr = validationResult(req);
    if(loginErr.isEmpty()){
        loginService(req.body)
            .then(response =>{
                res.json({
                    success: true,
                    message: response
                })
            })
            .catch(err => {
                next(new ErrorResponse(err?.message, err?.statusCode))
            })
    }else{
        return res.status(400).json({
            success: false,
            errors: registerErrors.array(),
        });
    }
})