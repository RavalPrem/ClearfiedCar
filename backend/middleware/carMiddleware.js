const Joi = require("joi");

const carInfo = async (req, res, next) => {
  try {
    const schema = Joi.object({
      sellerId: Joi.string().hex().required().messages({
        "string.base": "seller ID must be string",
        "any.required": "seller ID is required",
      }),

      brand: Joi.string().required().trim().messages({
        "string.base": "brand must be string",
        "string.empty": "brand name required",
        "any.required": "brand name required",
      }),

      model: Joi.string().required().trim().messages({
        "string.base": "brand must be string",
        "string.empty": "brand name required",
        "any.required": "brand name required",
      }),

      year: Joi.number().min(1900).required().messages({
        "number.base": "year must be a valid number",
        "number.min": "year cannot be older than 1900",
        "any.required": "year is required to",
      }),

      fuelType: Joi.string()
        .valid("Petrol", "Diesel", "CNG", "Electric")
        .required()
        .messages({
          "any.only":
            "Fuel type must be one of: Petrol, Diesel, CNG, or Electric.",

          "any.required": "Fuel type is required.",
        }),

      transmission: Joi.string()
        .valid("Manual", "Automatic")
        .required()
        .messages({
          "any.only": "Transmission must be either Manual or Automatic.",
          "any.required": "Transmission is required.",
        }),

      kilometersDriven: Joi.number().min(0).required().messages({
        "number.base": "Kilometers driven must be a number.",
        "number.min": "Kilometers cannot be negative.",
        "any.required": "Kilometers driven is required.",
      }),

      price: Joi.number().positive().required().messages({
        "number.base": "Price must be a valid number.",
        "number.positive": "Price must be greater than 0.",
        "any.required": "Price is required.",
      }),

      location: Joi.string().trim().required().messages({
        "string.empty": "Location is required.",
        "any.required": "Location is required.",
      }),

      description: Joi.string().trim().optional(),

      carImage: Joi.string().uri().required().messages({
        "string.uri": "Car image must be a valid URL.",
        "any.required": "Car image is required.",
      }),

      isSold: Joi.boolean().default(false)
      
    });

    const {error} = schema.validate(req.body)

    if(error) {
        return res.status(400).json({
            message : error.details[0].message,
            success : false
        })
    }

    next()
    
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
