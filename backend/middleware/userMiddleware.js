const Joi = require('joi')

const signUpValidation = async(req,res,next) => {
    const schema = Joi.object({
        name : Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            "string.empty" : "Name is required",
            "string.min" : "Name must be atleast 3 characters",
            "string.max" : "Name cannot exceed 50 characeters long",
            "any.required" : "Name is required"
        }),

        email: Joi.string()
        .email()
        .required()
        .messages({
            "string.empty": "Email is required",
            "string.email": "Please enter a valid email address",
            "any.required": "Email is required",
        }),

        password: Joi.string()
        .min(6)
        .max(20)
        .required()
        .messages({
            "string.empty": "Password is required",
            "string.min": "Password must be at least 6 characters",
            "string.max": "Password cannot exceed 20 characters",
            "any.required": "Password is required",
        }),

        phoneNumber: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .messages({
            "string.empty": "Phone number is required",
            "string.pattern.base":
            "Phone number must contain exactly 10 digits",
            "any.required": "Phone number is required",
        }),

        profileImage: Joi.string()
        .allow("")
        .optional()
        .messages({
            "string.base": "Profile image must be a valid URL",
        }),
    })
    
    const {error} = schema.validate(req.body)
    
    if(error) {
        return res.status(500).json({
            success : false,
            message : error.details[0].message
        })
    }

    next();
}

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required()
      .messages({
        "string.empty": "Email is required",
        "string.email": "Please enter a valid email",
        "any.required": "Email is required",
      }),

    password: Joi.string()
      .required()
      .messages({
        "string.empty": "Password is required",
        "any.required": "Password is required",
      }),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};

const updateProfileValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).messages({
      "string.min": "Name must be at least 3 characters",
      "string.max": "Name cannot exceed 50 characters",
    }),

    email: Joi.string().email().messages({
      "string.email": "Please enter a valid email",
    }),

    password: Joi.string().min(6).max(20).messages({
      "string.min": "Password must be at least 6 characters",
      "string.max": "Password cannot exceed 20 characters",
    }),

    phoneNumber: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .messages({
        "string.pattern.base":
          "Phone number must contain exactly 10 digits",
      }),

    profileImage: Joi.string().allow(""),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};


module.exports = {
    signUpValidation,
    loginValidation,
    updateProfileValidation
}