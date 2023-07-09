const router = require('express').Router();
const {registerValidation,loginValidation} = require("../validators/authValidation")
const {
    registerUser,
    login
} = require('../controller/authController')

router.post("/register",registerValidation,registerUser);
router.post("/login", loginValidation, login)

module.exports = router;