const mongoose = require('mongoose')
require('dotenv').config()

const mongoConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CONN)

        console.log(`database connected successfully`)
        
    } catch (error) {
        console.error(error);        
    }
}

module.exports = {mongoConnection}