const express = require('express') 
const app = express()
const cors = require("cors");

PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}));



app.post("/", (req, res) => {

    console.log(req.body)
    console.log("Name: ", req.body.name) 
    
    if (req.body.name === ""){
        console.log("inner space")
        return res.status(422).json({message : "Invalid"}).end()
    }
    console.log("outer space")
    return res.status(200).json({message : "All good"}).end()
})


app.get("/", (req, res) => {
    console.log("hi")

    
})


app.listen(PORT, () => {console.log(`Server is running on port: ${PORT}`)})