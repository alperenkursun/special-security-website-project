const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

exports.authenticateToken = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err) => {
      if (err) {
        res.redirect(`${process.env.CLIENT_URL}`);
      } else {
        next();
      }
    });
  } else {
    res.redirect(`${process.env.CLIENT_URL}`);
  }

  if (!token) {
    return res.redirect(`${process.env.CLIENT_URL}`);
  }

  req.user = await User.findById(jwt.verify(token, process.env.JWT_SECRET))
    .userId;

  next();
};
