const express = require("express");
const router = express.Router();

const { createCourse, getCourses, enrollCourse, getMyCourses, getTeacherCourses } = require("../controllers/courseController");
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Teacher/Admin → Create course
router.post(
  "/",
  protect,
  authorizeRoles("teacher", "admin"),
  createCourse
);

// Student/Admin/Teacher → View courses
router.get("/", protect, getCourses);

router.post(
  "/:id/enroll",
  protect,
  authorizeRoles("student"),
  enrollCourse
);

// Student → My Courses
router.get(
  "/my",
  protect,
  authorizeRoles("student"),
  getMyCourses
);

// Teacher → My Created Courses
router.get(
  "/teacher",
  protect,
  authorizeRoles("teacher", "admin"),
  getTeacherCourses
);

module.exports = router;



