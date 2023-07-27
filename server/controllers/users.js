const mongoose = require('mongoose')
const User = require("../../Database/model/users")
// Dependencies for validation
const { passwordStrength } = require('check-password-strength')
const emailValidator = require('deep-email-validator')

// FDependencies for Hashing the PassWord
const crypto = require('crypto');


async function handelRegisterUser(req, res){

    //console.log(req.body)
    //console.log("Name: ", req.body.name) 
    
    // Body of Request
    const body = req.body
    
    // Check if every filed is filled or not
    if (!body.name || !body.email || !body.password){
        return res.status(422).json({message : "Invalid"}).end()
    }
    
    //Check for email
    const check_email = await emailValidator.validate(body.email)
    //console.log(check_email)
    if (check_email.valid){
        return res.status(422).json({message : "Not a Valid Email"}).end()
    }

    //Check for how strong is passWord is 
    const str_passWord = passwordStrength(body.password).value
    if (str_passWord === "Too weak" || str_passWord === "Weak"){
        return res.status(422).json({message : `Your PassWord is ${str_passWord}`}).end()
    }


    // Hasing and salting a PassWord
    const salt =  crypto.randomBytes(16).toString('hex');

    const hased_Password =  crypto.pbkdf2Sync(body.password, salt ,1000, 64, 'sha512').toString('hex')


    // Createing a New user in DataBase
    try {
        
        const {name , email, password} = req.body;
        await User.create({
            name : name,
            email : email,
            password : hased_Password
        }).then(() => res.status(200).json({message : "User successfully created"}).end())
    } 
    catch(err) {
        res.status(402).json({message : "User not successful created",
                            error: err.mesage})
    }
    //return res.status(200).json({message : "All good"}).end()

}

module.exports = {
    handelRegisterUser
}