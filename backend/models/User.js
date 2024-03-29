const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
