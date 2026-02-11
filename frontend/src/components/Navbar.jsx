
import { jwtDecode } from "jwt-decode";
import { NavLink } from "react-router-dom";
 import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const token = localStorage.getItem("token");
  if (!token) return null;

  const user = jwtDecode(token);

  
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const activeClass =
    "text-purple-600 font-semibold border-b-2 border-purple-600";

  const normalClass =
    "text-gray-600 hover:text-purple-600 transition";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src="/short_logo.png" alt="logo" className="h-9" />
          <h1 className="font-bold text-lg">EduVillage</h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden min-[950px]:flex items-center gap-6">

          {/* STUDENT */}
          {user.role === "student" && (
            <>
               <NavLink to="/dashboard" className={({ isActive }) => isActive ? activeClass : normalClass}>Dashboard</NavLink>
              <NavLink to="/courses" className={({ isActive }) => isActive ? activeClass : normalClass}>All Courses</NavLink>
              <NavLink to="/my-courses" className={({ isActive }) => isActive ? activeClass : normalClass}>My Courses</NavLink>
              <NavLink to="/student/results" className={({ isActive }) => isActive ? activeClass : normalClass}>Quiz Results</NavLink>
              <NavLink to="/my-certificates" className={({ isActive }) => isActive ? activeClass : normalClass}>Certificates</NavLink>
            </>
          )}

          {/* TEACHER */}
          {user.role === "teacher" && (
            <>
               <NavLink to="/dashboard" className={({ isActive }) => isActive ? activeClass : normalClass}>Dashboard</NavLink>
              <NavLink to="/courses" className={({ isActive }) => isActive ? activeClass : normalClass}>All Courses</NavLink>
              <NavLink to="/create-course" className={({ isActive }) => isActive ? activeClass : normalClass}>Create Course</NavLink>
              <NavLink to="/teacher/courses" className={({ isActive }) => isActive ? activeClass : normalClass}>My Courses</NavLink>
            </>
          )}

          {/* ADMIN */}
          {user.role === "admin" && (
            <>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? activeClass : normalClass}>Dashboard</NavLink>
              <NavLink to="/admin/users" className={({ isActive }) => isActive ? activeClass : normalClass}>Manage Users</NavLink>
              <NavLink to="/courses" className={({ isActive }) => isActive ? activeClass : normalClass}>All Courses</NavLink>
              <NavLink to="/create-course" className={({ isActive }) => isActive ? activeClass : normalClass}>Create Course</NavLink>
              <NavLink to="/admin/delete-course" className={({ isActive }) => isActive ? activeClass : normalClass}>Delete Course</NavLink>
            </>
          )}

          {/* PROFILE DROPDOWN */}
          <div className="relative">

            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full hover:bg-purple-200 transition"
            >
              <span className="font-semibold text-purple-700">
                {user.name}
              </span>
              ⬇
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-xl w-48 p-4 animate-fade">

                <p className="text-sm text-gray-600 mb-2">
                  Role: <span className="font-semibold">{user.role}</span>
                </p>

                <button
                  onClick={logout}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm"
                >
                  Logout
                </button>

              </div>
            )}

          </div>

        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="min-[950px]:hidden text-3xl text-purple-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>


      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="min-[950px]:hidden bg-white shadow-lg px-6 py-6 space-y-4 animate-slide">

          <p className="text-sm text-gray-500">
            {user.name} ({user.role})
          </p>

          {/* STUDENT */}
          {user.role === "student" && (
            <div className="ml-2 flex flex-col items-center gap-3 text-center">
              <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>Dashboard</NavLink>
              <NavLink to="/courses" onClick={() => setMenuOpen(false)}className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>All Courses</NavLink>
              <NavLink to="/my-courses" onClick={() => setMenuOpen(false)}className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>My Courses</NavLink>
              <NavLink to="/student/results" onClick={() => setMenuOpen(false)}className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>Quiz Results</NavLink>
              <NavLink to="/my-certificates" onClick={() => setMenuOpen(false)}className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>Certificates</NavLink>
            </div>
          )}

          {/* TEACHER */}
          {user.role === "teacher" && (
            <div className="ml-2 flex flex-col items-center gap-3 text-center">
              <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>Dashboard</NavLink>
              <NavLink to="/courses" onClick={() => setMenuOpen(false)}className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>All Courses</NavLink>
              <NavLink to="/create-course" onClick={() => setMenuOpen(false)}className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>Create Create</NavLink>
              <NavLink to="/teacher/courses" onClick={() => setMenuOpen(false)}className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>My Courses</NavLink>
            </div>
          )}

          {/* ADMIN */}
          {user.role === "admin" && (
            <div className="ml-2 flex flex-col items-center gap-3 text-center">
              <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>Dashboard</NavLink>
              <NavLink to="/admin/users" onClick={() => setMenuOpen(false)}className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>Manage Users</NavLink>
              <NavLink to="/courses" onClick={() => setMenuOpen(false)}className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>All Courses</NavLink>
              <NavLink to="/create-course" onClick={() => setMenuOpen(false)}className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>Create Course</NavLink>
              <NavLink to="/admin/delete-course" onClick={() => setMenuOpen(false)}className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>Delete Course</NavLink>
            </div>
          )}

          <button
            onClick={logout}
            className="w-full bg-red-500 text-white py-2 rounded-lg"
          >
            Logout
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
