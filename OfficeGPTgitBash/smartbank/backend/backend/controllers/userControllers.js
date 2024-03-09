const asyncHandler = require("express-async-handler");
const Users = require("../models/usersModel");
const generateToken = require("../config/generateToken");

// Creates users for our database

const createUser = asyncHandler(async function(req,res) {

    const {accountHolder,accountNumber,ifsc,email,accountType,balance,phone} = (req.body) // initializing the req.body values
    try {
        const newUser = await Users.create({
            accountHolder : accountHolder,
            accountNumber : accountNumber,
            ifsc : ifsc,
            email : email,
            accountType : accountType,
            balance : balance,
            phone : phone,
        });
    
        if (newUser) {
          res.status(201).json({ 
            accountHolder : newUser.accountHolder,
            accountNumber : newUser.accountNumber,
            ifsc : newUser.ifsc,
            email : newUser.email,
            accountType : newUser.accountType,
            balance :newUser.balance,
            phone : newUser.phone,
            });
        } else {
          res.status(400).json({ message: "Failed to create new user" });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
})

const registerUser = asyncHandler(async function(req,res) {
    const {accountNumber,phone} = (req.body) // initializing the req.body values
    if(!accountNumber|| !phone){
        res.status(400)
        throw new Error("Please enter all the Feilds")
    }
    const user = await Users.findOne({$or: [{accountNumber: accountNumber}, {phone: phone}]})
    // Checking whether the user exists in the db

    if(!user){
        res.status(400)
        throw new Error("User does not exists")
    }

    if(user){
        res.status(201).json({
            accountHolder : user.accountHolder,
            accountNumber : user.accountNumber,
            email : user.email,
            ifsc : user.ifsc,
            accountType : user.accountType,
            balance : user.balance,
            phone : user.phone,
            password : user.password,
            token : generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error("Failed to Create New User")
    }
})
 
const bhimPay = asyncHandler(async (req, res) => {
    const { upiId, amount } = req.body;
  
    const [phoneNumber, serviceProvider] = upiId.split('@');
    
    updates = {}
    updates.balance = req.user.balance - amount

    const updating = await Users.findByIdAndUpdate({_id : req.user._id},updates,{
        new : true
    })

    if(updating){
        res.json(updating)
    }else{
        res.status(400) 
        err = new Error("Failed to change the balance")
        throw err
    }
    const customer = await Users.findOne({phone : phoneNumber})
    if(!customer){
        res.status(400)
        throw new Error("Customer does not exists")
    }
    updates = {}
    updates.balance = customer.balance + amount
    const customerChange = await Users.updateOne({phone : phoneNumber},updates,{
        new : true  
    })

    if(customerChange){
        res.json(customerChange)
    }else{
        res.status(400) 
        err = new Error("Failed to change the balance")
        throw err
    }
    return res.status(200).json({ message: 'Payment successful' });
  });
  
////////////////////////////////////////////////////////////////////////

module.exports = {registerUser,createUser,bhimPay}