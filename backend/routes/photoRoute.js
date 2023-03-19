const express = require("express");
const photoController = require("../controllers/photoController");
const router = express.Router();

router.route("/photos").get(photoController.getAllPhotos);
router.route("/addPhoto").post(photoController.createPhoto);
router.route("/deletePhoto/:id").delete(photoController.deletePhoto);
module.exports = router;
