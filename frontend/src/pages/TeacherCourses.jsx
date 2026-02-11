import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";

function TeacherCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);

  useEffect(() => {
    if (!token) return;
    fetch("/api/courses/teacher", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>        
      {
        setCourses(data)
        //console.log(data);
      }

     );

  }, [token]);

 return (
  <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 pt-24 pb-12 px-4">

    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8">

      {/* HEADER */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        📚 My Courses (Teacher Panel)
      </h2>

      {/* COURSE GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {courses.map((course) => (

          <div
            key={course._id}
            className="bg-gray-50 rounded-2xl shadow p-6 hover:shadow-lg transition"
          >

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {course.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              {course.description}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3">

              {/* EDIT */}
              <button
                onClick={() =>
                  navigate(`/teacher/courses/edit/${course._id}`)
                }
                className="bg-gradient-to-r from-blue-300 to-cyan-400 hover:opacity-90 text-white px-4 py-2 rounded-xl font-semibold shadow transition"
              >
                ✏️ Edit
              </button>

              {/* ADD LESSON */}
              {user.role === "teacher" && (
                <button
                  onClick={() =>
                    navigate(
                      `/teacher/courses/add-lesson/${course._id}`
                    )
                  }
                  className="bg-gradient-to-r from-purple-300 to-pink-400 hover:opacity-90 text-white px-4 py-2 rounded-xl font-semibold shadow transition"
                >
                  ▶ Add Lesson
                </button>
              )}

              {/* ADD QUIZ */}
              <button
                onClick={() =>
                  navigate(`/teacher/create-quiz/${course._id}`)
                }
                className="bg-gradient-to-r from-indigo-300 to-violet-400 hover:opacity-90 text-white px-4 py-2 rounded-xl font-semibold shadow transition"
              >
                📝 Add Quiz
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* EMPTY STATE */}
      {courses.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          You have not created any courses yet.
        </p>
      )}

    </div>

  </div>
);
}

export default TeacherCourses;