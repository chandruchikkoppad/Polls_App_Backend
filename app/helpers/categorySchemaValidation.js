const Category=require("../models/categoryModel");

const categorySchemaValidation={
    name: {
        notEmpty: {
          errorMessage: "Please enter category",
          bail:true
        },
    custom: {
            options: async (value) => {
              const result = await Category.findOne({ name: value });
              if (result) {
                throw new Error("Category is already exists");
              } else {
                return true;
              }
            },
        }}}
module.exports=categorySchemaValidation;