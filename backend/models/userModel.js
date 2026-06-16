const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique : [true,"Entered phoneNumber already register"],
      required: true,
    },
    profileImage : {
        type : String,
        default : ""
    },  
  },
  {
    timestamps: true,
  },
);

const user = mongoose.model("user", userSchema, "user");

module.exports = { user };