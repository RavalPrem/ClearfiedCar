const express = require("express");
const mongoose = require("mongoose");
const { user } = require("../models/userModel");
const { getUserData, signUpHandling, editUserProfile, deleteUserData, logInHandling } = require("../controllers/userController");
const { signUpValidation, loginValidation, updateProfileValidation } = require("../middleware/userMiddleware");


const route = express.Router();

//controller for get data of user
route.get("/:id",getUserData);

//controller for signup 
route.post("/signup",signUpValidation, signUpHandling)
route.post("/login", loginValidation ,logInHandling)

//edit user Profile
route.put("/:id",updateProfileValidation,editUserProfile)

//delete user Profile
route.delete("/:id",deleteUserData)

module.exports = route;
