const express = require("express");
const mongoose = require("mongoose");
const { user } = require("../models/userModel");
const { getUserData, signUpHandling, editUserProfile, deleteUserData } = require("../controllers/userController");


const route = express.Router();

//controller for get data of user
route.get("/:id",getUserData);

//controller for signup 
route.post("/", signUpHandling)

//edit user Profile
route.put("/:id",editUserProfile)

//delete user Profile
route.delete("/:id",deleteUserData)

module.exports = route;
