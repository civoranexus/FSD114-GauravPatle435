import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function MyCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
   

  useEffect(() => {
    fetch("/api/courses/my", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
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
        🎓 My Courses
      </h2>

      {/* EMPTY STATE */}
      {Array.isArray(courses) && courses.length === 0 && (
        <p className="text-center text-gray-500">
          You have not enrolled in any courses yet.
        </p>
      )}

      {/* COURSE GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {Array.isArray(courses) &&
          courses.map((course) => (

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

                {/* VIEW COURSE */}
                <button
                  onClick={() =>
                    navigate(`/courses/${course._id}`)
                  }
                  className="bg-gradient-to-r from-blue-400 to-cyan-500 hover:opacity-90 text-white px-4 py-2 rounded-xl font-semibold shadow transition"
                >
                  ▶ View Course
                </button>

                {/* ATTEMPT QUIZ */}
                <button
                  onClick={() =>
                    navigate(`/student/quiz/${course._id}`)
                  }
                  className="bg-gradient-to-r from-purple-400 to-indigo-500 hover:opacity-90 text-white px-4 py-2 rounded-xl font-semibold shadow transition"
                >
                  🧠 Attempt Quiz
                </button>

              </div>

            </div>

          ))}

      </div>

    </div>

  </div>
);
}

export default MyCourses;