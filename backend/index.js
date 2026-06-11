const mongoose = require('mongoose')
const express = require('express')

require('dotenv').config()
const app = express()

//mongoDB connection
const {mongoConnection} = require('./connection/mongoConn')
mongoConnection()

app.use(express.json())

const user = require('./routes/userRoutes')
app.use('/user',user)


const port = process.env.PORT || 3523

app.listen(port,() => {console.log(`server started on port ${port}`);})