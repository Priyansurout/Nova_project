const mongoose = require('mongoose')


async function ConnectToMongodb(url) {
    
    mongoose
    .connect(url)
    .then(() => {console.log("Connect to MongoDB! Ok")})
    .catch((err) => {console.log(`Error to connect to MongoDB: ${err}`)} )
}


module.exports = {
    ConnectToMongodb
}