const User = require("../models/userModel");

const userSchemaValidation = {
  username: {
    notEmpty: {
      errorMessage: "username is required",
    },
  },
  email: {
    notEmpty: {
      errorMessage: "email is rrequired",
      bail: true,
    },
    isEmail: {
      errorMessage: "invalid email id",
      bail: true,
    },
    custom: {
      options: async (value) => {
        const result = await User.findOne({ email: value });
        if (result) {
          throw new Error("email is already exists");
        } else {
          return true;
        }
      },
    },
  },
  password: {
    notEmpty: {
      errorMessage: "password is required",
      bail: true,
    },
    isStrongPassword: {
      errorMessage: "password should min 8 charcters",
    },
  },
};

const userSchemaLoginValidation = {
  email: {
    notEmpty: {
      errorMessage: "Please enter email",
      bail:true
    }
  },
  isEmail: {
    errorMessage: "Invalid email",
  },
  password: {
    notEmpty: {
      errorMessage: "Password is required"
    }
  },
  isStrongPassword:{
errorMessage:"password should be minimum 8 character"}
}


module.exports ={userSchemaValidation,userSchemaLoginValidation};
