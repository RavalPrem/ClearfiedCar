const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const car = require('../models/carCollectionModel')

const getCarInfo = async(req,res) => {
    try {
        const carData = await car.findById(req.params.id)

        return res.status(201).json({
            data : carData,
            message : success
        })

    } catch (error) {
        return res.status(500).json({
            message : error.message,
            success : false
        })
    }
}

const postCarInfo = async(req, res) => {
    try {
        //
    } catch (error) {
        return res.status(500).json({
            message : error.message,
            success : false
        })
    }
}

module.exports = {getCarInfo}