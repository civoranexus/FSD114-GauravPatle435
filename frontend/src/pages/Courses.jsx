import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Courses() {

  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;

    fetch("/api/courses", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [token]);

  const enrollCourse = async (id) => {
    try {
      const res = await fetch(`/api/courses/${id}/enroll`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Enrollment failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6">

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-purple-700 mb-2 flex items-center gap-2">
          📚 All Courses
        </h2>

        <p className="text-gray-600 mb-8">
          Browse available courses and start learning
        </p>

        {/* COURSES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >

              {/* COURSE INFO */}
              <div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>

                <p className="text-sm text-gray-500">
                  Created by:
                  <span className="font-medium text-purple-600 ml-1">
                    {course.createdBy?.name}
                  </span>
                  <span className="ml-1">
                    ({course.createdBy?.role})
                  </span>
                </p>

              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-5 space-y-2">

                {/* STUDENT ENROLL */}
                {user.role === "student" && (
                  <button
                    onClick={() => enrollCourse(course._id)}
                    className="w-full bg-gradient-to-r from-green-400 to-emerald-600 hover:opacity-90 text-white py-2 rounded-lg font-semibold transition shadow-md"
                  >
                    ➕ Enroll
                  </button>
                )}

                {/* VIEW COURSE */}
                {(user.role === "admin" || user.role === "teacher") && (
                  <button
                    onClick={() => navigate(`/courses/${course._id}`)}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white py-2 rounded-lg font-semibold transition shadow-md"
                  >
                    ▶ View Course
                  </button>
                )}

                {/* ADD LESSON */}
                {user.role === "admin" && (
                  <button
                   onClick={() => navigate(`/add-lesson/${course._id}`)}
                   className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white py-2 rounded-lg font-semibold transition shadow-md"
                  >
                   ➕ Add Lesson
                  </button>
                )}

                {/* ADD QUIZ */}
                {user.role === "admin" && (
                  <button
                    onClick={() => navigate(`/teacher/create-quiz/${course._id}`)}
                   className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 hover:opacity-90 text-white py-2 rounded-lg font-semibold transition shadow-md"
                   >
                   📝 Add Quiz
                 </button>
                )}

              </div>

            </div>
          ))}

        </div>

        {/* EMPTY STATE */}
        {courses.length === 0 && (
          <div className="text-center text-gray-500 mt-20">
            No courses available
          </div>
        )}

      </div>

    </div>
  );
}

export default Courses;