const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getAllCourses,
  deleteCourse,
  deleteUser,
} = require("../controllers/adminController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Admin only
router.get("/users", protect, authorizeRoles("admin"), getAllUsers);
router.get("/courses", protect, authorizeRoles("admin"), getAllCourses);

// Admin: delete course
router.delete(
  "/courses/:id",
  protect,
  authorizeRoles("admin"),
  deleteCourse
);

// Admin: delete user
router.delete(
  "/users/:id",
  protect,
  authorizeRoles("admin"),
  deleteUser
);

module.exports = router;