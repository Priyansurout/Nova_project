const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email :{
        type: String,
        require: true,
        require : true
    },
    password: {
        type : String,
        minlength: 6,
        require : true
    }
},{timestamps : true})

const Users = mongoose.model("Users", userSchema)

module.exports = Users