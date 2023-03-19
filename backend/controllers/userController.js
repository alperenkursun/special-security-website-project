const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.loginUser = async (req, res, next) => {
  const { name, password } = req.body;

  const user = await User.findOne({ name });
  let same = false;

  if (user) {
    if (user.password === password) {
      same = true;
    }
  } else {
    return res.status(401).redirect(`${process.env.CLIENT_URL}/#/admin`);
  }
  if (same) {
  } else {
    return res.status(401).redirect(`${process.env.CLIENT_URL}/#/admin`);
  }
};

exports.admin = async (req, res, next) => {
  res.redirect(`${process.env.CLIENT_URL}/admin`);
};

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
