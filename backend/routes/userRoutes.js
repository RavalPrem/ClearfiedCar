const express = require("express");
const mongoose = require("mongoose");
const { user } = require("../models/userModel");
const { getUserData, signUpHandling, editUserProfile, deleteUserData, logInHandling } = require("../controllers/userController");
const { signUpValidation, loginValidation, updateProfileValidation } = require("../middleware/userMiddleware");
const { authMiddleware } = require("../middleware/authMiddleware");


const route = express.Router();


//controller for signup 
route.post("/signup",signUpValidation, signUpHandling)
route.post("/login", loginValidation ,logInHandling)

//controller for get data of user
route.get("/profile",authMiddleware,getUserData);

//edit user Profile
route.put("/profile/:id",updateProfileValidation,editUserProfile)

//delete user Profile
route.delete("/profile/:id",deleteUserData)

module.exports = route;
