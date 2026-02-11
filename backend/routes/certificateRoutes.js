const express = require("express");
const router = express.Router();

const { generateCertificate, getMyCertificates } = require("../controllers/certificateController");
const protect = require("../middleware/authMiddleware");
router.get(
  "/my",
  protect,
  getMyCertificates
);

router.get(
  "/:courseId",
  protect,
  generateCertificate
);



module.exports = router;