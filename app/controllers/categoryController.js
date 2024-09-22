const _ = require("lodash");
const bcryptjs = require("bcryptjs");
const Category=require("../models/categoryModel")
const jwt = require("jsonwebtoken");
const{validationResult}=require("express-validator")
const categoryController = {};

categoryController.register=async(req,res)=>{
    const body = _.pick(req.body, ["name"]);
    const errors = validationResult(req);
    try {
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
const newcategory=await new Category(body).save();
      res.json(newcategory);
    } catch (e) {
      res.status(500).json(e);
    }
  };

  module.exports=categoryController;