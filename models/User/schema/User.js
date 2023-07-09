const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        required:[true, "First name is required"],
        type:String,
        trim:true
    },
    lastName:{
        required:[true,"Last name is required"],
        type:String,
        trim:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    isInactive:{
        type:Boolean,
        default:false
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Post'
        }
    ],
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    following:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    blocked:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    role:{
        type:String,
        enum:['Admin','Blogger','Reviewer'],
        default:'Blogger'
    },
    awards:{
        type:String,
        enum:["Toddle","Mature","Pro","Expert"],
        default:"Toddle"
    },
    plan: [
        {
            type: String,
            enum: ['Free', 'Premium', 'Pro'],
            default: "Free"
        }
    ],
    lastLoginDate:{
        type:Date,
        default:Date.now()
    }
},{
    timestamps:true
});



module.exports = {
    userSchema
}