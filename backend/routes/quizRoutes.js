const express = require("express");
const router = express.Router();

const {
  createQuiz,
  getQuizByCourse,
  submitQuiz,
  getMyResults
} = require("../controllers/quizController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Teacher creates quiz
router.post(
  "/:id",
  protect,
  authorizeRoles("teacher", "admin"),
  createQuiz
);

// Student fetch quiz
router.get(
  "/:id",
  protect,
  getQuizByCourse
);

//submit quiz
router.post(
  "/submit/:id",
  protect,
  submitQuiz
);

//get result
router.get(
  "/results/me",
  protect,
  getMyResults
);

module.exports = router;