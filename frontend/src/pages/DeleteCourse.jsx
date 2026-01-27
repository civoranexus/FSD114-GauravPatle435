import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";

function DeleteCourse() {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);

  useEffect(() => {
    fetch("/api/courses", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [token]);

  const deleteCourse = async (id) => {
    if (!window.confirm("Delete this course?")) return;

    const res = await fetch(`/api/admin/courses/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      alert("✅ Course deleted");
      setCourses(courses.filter((c) => c._id !== id));
    } else {
      alert("❌ Failed to delete");
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 pt-24 pb-12 px-4">

    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8">

      {/* HEADER */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        🗑️ Delete Courses (Admin Panel)
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

            {user.role === "admin" && (
              <button
                onClick={() => deleteCourse(course._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-semibold shadow transition"
              >
                 Delete Course
              </button>
            )}

          </div>

        ))}

      </div>

      {/* EMPTY STATE */}
      {courses.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No courses available to delete.
        </p>
      )}

    </div>

  </div>
);
}

export default DeleteCourse;