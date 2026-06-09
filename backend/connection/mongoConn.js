const mongoose = require('mongoose')

const mongoConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CONN)
        console.log(`database connected successfully`)
    } catch (error) {
        console.log(error.message);        
    }
}

module.exports = {mongoConnection}