const express = require('express')
const mongoose = require('mongoose')
const { user } = require('../models/userModel')

const route = express.Router()

route.get('/',async(req,res) => {
    try {
        const users = await user.find({})

        res.send(users)

    } catch (error) {
        res.status(500).send({
            message : "internal server error",
            success : false
        })
    }
})

route.post('/',async(req,res) => {
    try {
        const {name,email,password,phoneNumber,profileImage} = req.body

        if(!name || !email || !password || !phoneNumber ) {
            return res.status(401).send({
                message : "all fields are required",
                success : false
            })
        }
        
        const userData = await user.create({
            name,
            email,
            password,
            phoneNumber,
            profileImage
        })

        res.status(201).send({
            message : "user Data successfully got",
            data : userData
        })
    } catch (error) {
        return res.status(401).send({
            message : error.message,
            success : false
        })
    }
})

module.exports = route