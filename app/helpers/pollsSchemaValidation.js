
const pollsSchemaValidation = {
  question: {
    notEmpty: {
      errorMessage: "Please enter Question",
      bail: true,
    },
},
  options: {
      notEmpty: {
        errorMessage: "Please enter Options",
        bail: true,
      },
    },

  duration: {
      notEmpty: {
        errorMessage: "Please enter Options",
        bail: true,
      },
      isDate: {
        errorMessage: "Please mention proper Date",
      },
    },

  category: {
    notEmpty: {
      errorMessage: "Please enter Options",
      bail: true,
    },
    isMongoId: {
      errorMessage: "invalid mongo id",
    },
  },
};

module.exports = pollsSchemaValidation;
