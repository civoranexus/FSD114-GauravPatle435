const PDFDocument = require("pdfkit");
const User = require("../models/User");
const Course = require("../models/Course");
const Certificate = require("../models/Certificate");

exports.getMyCertificates = async (req, res) => {

  try {

    const certificates = await Certificate.find({
      user: req.user.id
    })
      .populate("course", "title");

    res.json(certificates);

  } catch (error) {
    res.status(500).json({ message: "Failed to load certificates" });
  }
};

exports.generateCertificate = async (req, res) => {

  try {

    const userId = req.user.id;
    const courseId = req.params.courseId;

    const user = await User.findById(userId);
    const course = await Course.findById(courseId);

    if (!user || !course) {
  return res.status(404).json({
    message: "User or Course not found"
  });
}

    // Check Progress Completion
    const progress = user.progress?.find(
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

    // Save certificate record

const alreadyIssued = await Certificate.findOne({
  user: userId,
  course: courseId
});

if (!alreadyIssued) {
  await Certificate.create({
    user: userId,
    course: courseId
  });
}

    // Create PDF
    const doc = new PDFDocument({
    size: "A4",
    layout: "landscape",
    margin: 50
  });

    // res.setHeader("Content-Type", "application/pdf");
    // res.setHeader(
    //   "Content-Disposition",
    //   `attachment; filename=certificate-${user.name}.pdf`
    // );
    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=certificate-${user.name}.pdf`
    });
    doc.pipe(res);

    // Certificate Design

    // BORDER
  // ========================

  doc
    .rect(20, 20, 800, 550)
    .lineWidth(4)
    .stroke("#1e40af");

    // LOGO (TEXT LOGO)
  // ========================

  doc
    .fontSize(26)
    .fillColor("#1e40af")
    .text(" EduVillage", {
      align: "center"
    });
     doc.moveDown(2);

    // TITLE
  // ========================

  doc
    .fontSize(36)
    .fillColor("#000")
    .text("CERTIFICATE OF COMPLETION", {
      align: "center",
      underline: true
    });

  doc.moveDown(2);

    // BODY TEXT
  // ========================

  doc
    .fontSize(18)
    .fillColor("#333")
    .text("This is to certify that", {
      align: "center"
    });

  doc.moveDown(1);

     // STUDENT NAME
  // ========================

  doc
    .fontSize(28)
    .fillColor("#20A7DB")
    .text(user.name.toUpperCase(), {
      align: "center", underline: true
    });

  doc.moveDown(1);

    doc
    .fontSize(18)
    .fillColor("#333")
    .text("has successfully completed the course", {
      align: "center"
    });

  doc.moveDown(1);

     // COURSE NAME
  // ========================

  doc
    .fontSize(24)
    .fillColor("#1e40af")
    .text(course.title, {
      align: "center", underline: true
    });

  doc.moveDown(3);

    // doc.fontSize(14).text(
    //   `Date: ${new Date().toLocaleDateString()}`,
    //   { align: "center" }
    // );

    // doc.end();


     // DATE + SIGNATURE
  // =======================

  doc
    .fontSize(14)
    .fillColor("#000")
    .text(  `Date: ${new Date().toLocaleDateString()}`, 100, 450);

  doc
    .text("__Gaurav_Patle__", 550, 430, {underline:true});

  doc
    .text("Instructor Signature", 570, 455);

  doc.end();

  } catch (error) {
    res.status(500).json({ message: "Certificate generation failed" });
  }
};

