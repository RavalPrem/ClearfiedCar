const express = require('express')
const mongoose = require('mongoose')
const Car = require('../models/carCollectionModel')
const { getCarInfo } = require('../controllers/carController')


const route = express.Router()

route.get('/:id', getCarInfo)

module.exports = route