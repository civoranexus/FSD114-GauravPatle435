
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

function CourseDetails() {

  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);

  // ======================
  // Fetch Course
  // ======================

  useEffect(() => {
    fetch(`/api/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id, token]);

  // ======================
  // Fetch Progress
  // ======================

  useEffect(() => {

    fetch(`/api/courses/progress/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCompletedLessons(data.completedLessons || []);
        setQuizCompleted(data.quizCompleted || false);
      });

  }, [id, token]);

  // ======================
  // Mark Lesson Complete
  // ======================

  const markComplete = async (courseId, lessonId) => {

    await fetch(
      `/api/courses/progress/${courseId}/${lessonId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    // UI update instantly
    setCompletedLessons((prev) => [...prev, lessonId]);

    alert("Lesson Completed!");
  };


  const downloadCertificate = async () => {

  const res = await fetch(
    `http://localhost:5000/api/certificate/${course._id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  );

  if (!res.ok) {
    alert("Certificate not ready yet");
    return;
  }

  const blob = await res.blob();

  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "certificate.pdf";
  a.click();

  window.URL.revokeObjectURL(url);
};

  if (!course) {
    return <h3>Loading course...</h3>;
  }

  return (
    <div>

      <h2>{course.title}</h2>
      <p>{course.description}</p>

      {/* ✅ Progress Percentage */}
      {(user.role === "student") && (<p>
 Course Progress:{" "}
 {course.lessons.length > 0
  ? Math.round(
      (
        (completedLessons.length / course.lessons.length) * 75 +
        (quizCompleted ? 25 : 0)
      )
    )
  : 0}
 %
</p>)}
      

{course.lessons.length === completedLessons.length &&
 quizCompleted && (

  <button
  onClick={downloadCertificate}
  style={{
    padding: "12px",
    background: "gold",
    border: "none",
    fontWeight: "bold",
    marginTop: "15px"
  }}
>
 🏆 Download Certificate
</button>

)}

      <h3>📚 Lessons</h3>

      {course.lessons.map((lesson) => (

        <div key={lesson._id}>

          <h4>{lesson.title}</h4>

          <iframe
            width="400"
            height="250"
            src={lesson.videoUrl}
            allowFullScreen
            title={lesson.title}
          />

          {lesson.pdfUrl && (
            <div>
              <a href={lesson.pdfUrl} target="_blank" rel="noreferrer">
                📄 Download Notes
              </a>
            </div>
          )}
          {
            (user.role === "student") && ( <button
            onClick={() => markComplete(course._id, lesson._id)}
            disabled={completedLessons.includes(lesson._id)}
          >
            {completedLessons.includes(lesson._id)
              ? "✅ Completed"
              : "Mark Complete"}
          </button>)
          }
         

        </div>

      ))}

    </div>
  );
}

export default CourseDetails;