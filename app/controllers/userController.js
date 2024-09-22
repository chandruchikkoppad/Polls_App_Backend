const _ = require("lodash");
const bcryptjs = require("bcryptjs");
const User = require("../models/userModel");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const userController = {};

userController.register = async (req, res) => {
  const body = _.pick(req.body, ["username", "password", "email"]);
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcryptjs.genSalt();
    const hashedPassword = await bcryptjs.hash(body.password, salt);
    body.password = hashedPassword;

    const newUser = await new User(body).save();

    res.json({ message: `${newUser.username} register successful` });
  } catch (e) {
    res.status(500).json(e);
  }
};

userController.login = async (req, res) => {
  const body = _.pick(req.body, ["email", "password"]);
  try {
    const user = await User.findOne({ email: body.email });
    if (!user) {
      return res.status(404).json("not valid user");
    }
    const depassword = await bcryptjs.compare(body.password, user.password);
    if (!depassword) {
      return res.status(404).json({ error: "invalid email or password" });
    }
    
      const accesstoken = jwt.sign(
        {
          email: user.email,
          id: user._id,
        },
        process.env.SECRATE_KEY,
        { expiresIn: "10m" }
      )
    


    res.status(200).json({message:"User Logged in successfully", accesstoken})

  } catch (error) {
    res.json(error);
  }
};
module.exports = userController;
