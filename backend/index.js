const mongoose = require('mongoose')
const express = require('express')

require('dotenv').config()
const app = express()

//mongoDB connection
const {mongoConnection} = require('./connection/mongoConn')
mongoConnection()

app.use(express.json())

//user routes
const user = require('./routes/userRoutes')
app.use('/api/user',user)

//car routes
const car = require('./routes/carRoutes')
app.use('/api/car',car)


const port = process.env.PORT || 3523

app.listen(port,() => {console.log(`server started on port ${port}`);})