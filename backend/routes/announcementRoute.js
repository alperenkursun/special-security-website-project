const express = require("express");
const announcementController = require("../controllers/announcementController");
const router = express.Router();

router.route("/").get(announcementController.getAllAnnouncements);
router.route("/:id").get(announcementController.getAnnouncement);
router.route("/add").post(announcementController.createAnnouncement);
router.route("/delete/:id").delete(announcementController.deleteAnnouncement);
router.route("/update/:id").put(announcementController.updateAnnouncement);

module.exports = router;
