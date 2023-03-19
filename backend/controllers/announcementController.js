const Announcement = require("../models/Announcement");

exports.getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find();
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    res.status(200).end(JSON.stringify(announcements));
  } catch (error) {
    console.log(error);
  }
};

exports.createAnnouncement = async (req, res, next) => {
  try {
    await Announcement.create({
      title: req.body.title,
      description: req.body.description,
    });

    res.redirect(`${process.env.CLIENT_URL}/#/admin`);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteAnnouncement = async (req, res, next) => {
  try {
    await Announcement.findByIdAndRemove({
      _id: req.params.id,
    });

    res.redirect(`${process.env.CLIENT_URL}/#/admin`);
  } catch (error) {
    console.log(error);
  }
};

exports.getAnnouncement = async (req, res, next) => {
  try {
    const announcement = await Announcement.findById({
      _id: req.params.id,
    });

    res.status(200).end(JSON.stringify(announcement));
    res.redirect(`${process.env.CLIENT_URL}/#/admin`);
  } catch (error) {
    console.log(error);
  }
};

exports.updateAnnouncement = async (req, res, next) => {
  try {
    const announcement = await Announcement.findById({ _id: req.params.id });

    announcement.title = req.body.title;
    announcement.description = req.body.description;

    announcement.save();

    res.redirect(`${process.env.CLIENT_URL}/#/admin`);
  } catch (error) {
    console.log(error);
  }
};
