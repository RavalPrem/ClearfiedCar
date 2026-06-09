const mongoose = require('mongoose')
const express = require('express')

const app = express()

const {mongoConnection} = require('./connection/mongoConn')

mongoConnection()