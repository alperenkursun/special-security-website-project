const Photo = require("../models/Photo.js");
const fs = require("fs");

exports.getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    res.status(200).end(JSON.stringify(photos));
  } catch (error) {
    console.log(error);
  }
};

exports.createPhoto = async (req, res, next) => {
  const uploadDir = "../public/uploads";

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  next();
  let uploadedImage = req.files.image;
  let uploadPath = __dirname + "/../../public/uploads/" + uploadedImage.name;
  uploadedImage.mv(uploadPath, async (req, res) => {
    await Photo.create({
      image: "/uploads/" + uploadedImage.name,
    });
  });
  res.redirect(`${process.env.CLIENT_URL}/#/admin`);
};

exports.deletePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });

  let deletedImage = __dirname + "/../../public" + photo.image;
  fs.unlinkSync(deletedImage);
  await Photo.findByIdAndRemove(req.params.id);
  res.redirect(`${process.env.CLIENT_URL}/#/admin`);
};
