const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    brand: {
      type: String,
      required: true,
      trim: true,
    },

    model: {
      type: String,
      required: true,
      trim: true,
    },

    year: {
      type: Number,
      required: true,
    },

    fuelType: {
      type: String,
      required: true,
      enum: ["Petrol", "Diesel", "CNG", "Electric"],
    },

    transmission: {
      type: String,
      required: true,
      enum: ["Manual", "Automatic"],
    },

    kilometersDriven: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    carImage: {
      type: String,
      required: true,
    },

    isSold: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;