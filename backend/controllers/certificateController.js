const PDFDocument = require("pdfkit");
const User = require("../models/User");
const Course = require("../models/Course");

exports.generateCertificate = async (req, res) => {

  try {

    const userId = req.user.id;
    const courseId = req.params.courseId;

    const user = await User.findById(userId);
    const course = await Course.findById(courseId);

    // Check Progress Completion
    const progress = user.progress.find(
      (p) => p.course.toString() === courseId
    );

    if (
      !progress ||
      !progress.quizCompleted ||
      progress.completedLessons.length !== course.lessons.length
    ) {
      return res.status(400).json({
        message: "Course not completed yet"
      });
    }

    // Create PDF
    const doc = new PDFDocument();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=certificate-${user.name}.pdf`
    );

    doc.pipe(res);

    // Certificate Design
    doc.fontSize(28).text("CERTIFICATE OF COMPLETION", {
      align: "center"
    });

    doc.moveDown();

    doc.fontSize(18).text(
      `This is to certify that`,
      { align: "center" }
    );

    doc.moveDown();

    doc.fontSize(24).text(
      user.name,
      { align: "center", underline: true }
    );

    doc.moveDown();

    doc.fontSize(18).text(
      `has successfully completed the course`,
      { align: "center" }
    );

    doc.moveDown();

    doc.fontSize(22).text(
      course.title,
      { align: "center", underline: true }
    );

    doc.moveDown(2);

    doc.fontSize(14).text(
      `Date: ${new Date().toLocaleDateString()}`,
      { align: "center" }
    );

    doc.end();

  } catch (error) {
    res.status(500).json({ message: "Certificate generation failed" });
  }
};