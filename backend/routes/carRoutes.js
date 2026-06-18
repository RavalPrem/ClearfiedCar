const express = require('express')
const mongoose = require('mongoose')
const Car = require('../models/carCollectionModel')
const { getCarInfo, postCarInfo } = require('../controllers/carController')


const route = express.Router()
route.post('/carInfo',postCarInfo)

route.get('/:id', getCarInfo)


module.exports = route