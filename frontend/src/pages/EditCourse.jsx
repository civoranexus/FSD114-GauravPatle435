import { useParams } from "react-router-dom";
import { useState } from "react";

function EditCourse() {
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateCourse = async () => {
    const res = await fetch(`/api/courses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 flex justify-center items-start pt-24 px-4">

    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl p-8">

      {/* HEADER */}
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        ✏️ Edit Course
      </h3>

      <div className="space-y-5">

        {/* TITLE */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Course Title
          </label>

          <input
            placeholder="Enter new title"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Course Description
          </label>

          <textarea
            placeholder="Enter new description"
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>

        {/* UPDATE BUTTON */}
        <button
          onClick={updateCourse}
          className="w-full bg-gradient-to-r from-purple-400 to-indigo-500 hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-lg transition"
        >
           Update Course
        </button>

      </div>

    </div>

  </div>
);
}

export default EditCourse;