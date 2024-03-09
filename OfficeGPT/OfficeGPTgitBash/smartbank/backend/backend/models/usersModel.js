// accountHolder
// accountNumber
// email
// accountType
// balance
// phone
// password

const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const userModel = mongoose.Schema(
    {
        accountHolder : { 
            type : String,
            trim : true 
        },

        accountNumber : {
            type : String,
            trim : true,
            unique : true,
        },

        ifsc : {
            type : String,
            trim : true,
        },

        email : {
            type : String,
            
            trim : true
        },

        phone : {
            type : String,
            trim : true,
            unique : true,
        },

        accountType : {
            type : String,
            trim : true
        },

        balance : {
            type : Number,
            trim : true
        },

    },
    {
        timestamps : true
    }

);

const Users = mongoose.model("Users", userModel)

module.exports = Users;