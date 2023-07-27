const express = require('express') 
const app = express()
const cors = require("cors");
const {ConnectToMongodb} = require("../Database/connect")

PORT = process.env.PORT || 5000;

// routes Import
const userRout= require("./routes/users")

// Connecting to MongoDB
ConnectToMongodb("mongodb://127.0.0.1:27017/Nova_Music")
const User = require("../Database/model/users")


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}));


// All route Use
app.use("/", userRout)


app.get("/", (req, res) => {
    console.log("hi")
    return res.json({"name" :"Priyansu"})

    
})


app.listen(PORT, () => {console.log(`Server is running on port: ${PORT}`)})