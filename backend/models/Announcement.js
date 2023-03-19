const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnnouncementSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Announcement = mongoose.model("Announcement", AnnouncementSchema);
module.exports = Announcement;
