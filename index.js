require('dotenv').config()
const express= require("express");
const configureDB = require('./config/db');
const userController = require('./app/controllers/userController');
const { checkSchema } = require('express-validator');
const {userSchemaValidation,userSchemaLoginValidation} = require('./app/helpers/userSchemaValidation');
const categoryController = require('./app/controllers/categoryController');
const categorySchemaValidation=require("./app/helpers/categorySchemaValidation.js");
const pollsSchemaValidation=require("./app/helpers/pollsSchemaValidation");
const pollsController = require('./app/controllers/pollsController');

const app = express();
app.use(express.json())
configureDB();

const PORT=process.env.PORT||3000

app.post("/auth/register",checkSchema(userSchemaValidation),userController.register)
app.post("/auth/login",checkSchema(userSchemaLoginValidation), userController.login)
app.post("/auth/category",checkSchema(categorySchemaValidation), categoryController.register)
app.post("/polls",checkSchema(pollsSchemaValidation), pollsController.register)
app.listen(PORT, ()=>{console.log("running express",PORT)})
