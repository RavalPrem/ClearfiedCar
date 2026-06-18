const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const car = require("../models/carCollectionModel");

const getCarInfo = async (req, res) => {
  try {
    const carData = await car.findById(req.params.id);

    return res.status(201).json({
      data: carData,
      message: success,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

const postCarInfo = async (req, res) => {
  try {
    const {
      brand,
      model,
      year,
      fuelType,
      transmission,
      kilometersDriven,
      price,
      location,
      description,
      carImage,
      isSold,
    } = req.body;

    if (
      !brand ||
      !model ||
      !year ||
      !fuelType ||
      !transmission ||
      !kilometersDriven ||
      !price ||
      !location ||
      !description ||
      !carImage ||
      !isSold
    ) {
      return res.status(401).json({
        message: "all fields are required",
        success: false,
      });
    }

    const newCar = await car.create({
      sellerId,
      brand,
      model,
      year,
      fuelType,
      transmission,
      kilometersDriven,
      price,
      location,
      description,
      carImage,
      isSold
    });

    return res.status(201).json({
        message : "car data successfully got",
        success : true,
        data : newCar
    })

  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

module.exports = { getCarInfo,postCarInfo };
