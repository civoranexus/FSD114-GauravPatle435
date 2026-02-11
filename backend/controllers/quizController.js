const Quiz = require("../models/Quiz");
const QuizResult = require("../models/QuizResult");
const User = require("../models/User")

// CREATE QUIZ
exports.createQuiz = async (req, res) => {
  try {

    const { title, questions } = req.body;

    const quiz = await Quiz.create({
      course: req.params.id,
      title,
      questions
    });

    res.status(201).json(quiz);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET QUIZ BY COURSE
exports.getQuizByCourse = async (req, res) => {
  try {

    const quiz = await Quiz.findOne({ course: req.params.id });

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.json(quiz);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SUBMIT QUIZ
exports.submitQuiz = async (req, res) => {
  try {

    const { answers } = req.body;

    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    let score = 0;

    quiz.questions.forEach((q, index) => {
      if (q.correctAnswer === answers[index]) {
        score++;
      }
    });

    const result = await QuizResult.create({
      student: req.user.id,
      quiz: quiz._id,
      score,
      total: quiz.questions.length
    });

    res.json({
      message: "Quiz submitted",
      score,
      total: quiz.questions.length
    });

    // =========================
// Update Course Progress (Quiz Completed)
// =========================

const user = await User.findById(req.user.id);

let progress = user.progress.find(
  (p) => p.course.toString() === quiz.course.toString()
);

if (!progress) {

  progress = {
    course: quiz.course,
    completedLessons: [],
    quizCompleted: true
  };

  user.progress.push(progress);

} else {

  progress.quizCompleted = true;
}

await user.save();

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET MY QUIZ RESULTS (Student)
exports.getMyResults = async (req, res) => {
  try {

    const results = await QuizResult.find({
      student: req.user.id
    })
      .populate("quiz", "title")
      .populate("student", "name");

    res.json(results);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};