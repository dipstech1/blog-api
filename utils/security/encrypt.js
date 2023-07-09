const bcrypt = require("bcryptjs");

const encryptData = async(data) => {
    const salt = await bcrypt.genSalt(10);
    const hashData = await bcrypt.hash(password, salt);
    if(hashData){
        return hashData
    }else{
        return null;
    }
}

const compareEncryptData = async(encryptData, compareData) => {
    console.log("ENCRYPT ", encryptData, compareData);
    const isSame =  await bcrypt.compare(compareData,encryptData);
    return isSame;
} 
 

module.exports = {
    encryptData,
    compareEncryptData
}