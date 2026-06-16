const jwt = require('jsonwebtoken')
const { user } = require('../models/userModel')

const generateToken = (userId) => {
    try {
        const token = jwt.sign(
            { 
                id:userId
            },

            process.env.JWT_SECRET,

            {
                expiresIn:"1h"
            }
        )

        return token
        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {generateToken}