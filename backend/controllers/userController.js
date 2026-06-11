const mongoose = require("mongoose");
const { user } = require("../models/userModel");
const bcrypt = require("bcrypt");

//to get request and sending all info of the user to the user
const getUserData = async (req, res) => {
  try {
    const userData = await user.findById(req.params.id);

    return res.json(userData);
  } catch (error) {
    return res.status(500).send({
      message: `internal server error ${error.message}`,
      success: false,
    });
  }
};

//==========================signup handling==========================//
const signUpHandling = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, profileImage } = req.body;
    
    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "user exist no need to signup,got to log in",
        success: false,
      });
    }


    if (!name || !email || !password || !phoneNumber) {
      return res.status(400).send({
        message: "all fields are required",
        success: false,
      });
    }

    const safePassword = await bcrypt.hash(password, 10);

    const userData = await user.create({
      name,
      email,
      password: safePassword,
      phoneNumber,
      profileImage,
    });

    res.status(201).send({
      message: "user Data successfully got",
      data: userData,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
      success: false,
    });
  }
};

//==========================login handling==========================//
const logInHandling = async (req, res) => {
  try {
    const { email, password } = await req.body;

    if (!email || !password) {
      return res.status(400).send({
        message: "all fields are required",
        success: false,
      });
    }

    const existingUser = await user.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        message: "user not found",
        success: false,
      });
    }

    const isMatched = await bcrypt.compare(password, existingUser.password);

    if (!isMatched) {
      return res.status(404).json({
        message: "Invalid password",
        success: false,
      });
    }

    return res.status(200).send({
      message: "Log in Successfully",
      success: true,
      data: existingUser,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
      success: false,
    });
  }
};

//==========================edit user Profile==========================//
const editUserProfile = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, profileImage } = req.body;

    const existUser = await user.findById(req.params.id);
    if (!existUser) {
      return res.status(404).json({
        message: "user not found",
        success: false,
      });
    }

    const updatedData = {};

    if(name) updatedData.name = name
    if(email) updatedData.email = email
    if(phoneNumber) updatedData.phoneNumber = phoneNumber
    if(profileImage) updatedData.profileImage = profileImage

    if(password) {
      updatedData.password = await bcrypt.hash(password,10)
    }

    const updateUserProfile = await user.findByIdAndUpdate(
      req.params.id,
      {updatedData},
      {returnDocument : "after"}
    )

    return res.status(200).json({
      message: "user data successfully updated",
      success: true,
      updateUserData : updatedData
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

//==========================delete user Profile==========================//
const deleteUserData = async (req, res) => {
  try {
    const deletedUser = await user.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
        success: false
      });
    }
    return res.status(200).json({
      message: "data successfully deleted",
      success: true,
      data : deletedUser
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

module.exports = {
  getUserData,
  signUpHandling,
  logInHandling,
  editUserProfile,
  deleteUserData,
};
