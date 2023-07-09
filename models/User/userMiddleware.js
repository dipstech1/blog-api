
const mongoose = require('mongoose');
const {userSchema} = require('./schema/User');

userSchema.pre("find", async function(next){
    console.log("user pre called");
    next()
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel