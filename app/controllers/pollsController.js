const _ = require("lodash");
const Polls = require("../models/pollsModel");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const pollsController = {};

pollsController.register = async (req, res) => {
  const body = _.pick(req.body, [
    "question",
    "options",
    "duration",
    "category",
  ]);
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newPoll = await new Polls(body).save();

    res.json({ message: `New Poll registered successful`, id: newPoll._id });
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports=pollsController;