import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const activeClass =
    "text-purple-600 font-semibold border-b-2 border-purple-600 pb-1";

  const normalClass =
    "text-gray-600 hover:text-purple-600 transition";

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">

          <img
            src="/short_logo.png"
            alt="Logo"
            className="h-10"
          />

          <h1 className="text-xl font-bold text-gray-800">
            EduVillage
          </h1>

        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-3xl text-purple-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-medium">

          <NavLink to="/" end className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }>
            Home
          </NavLink>

          <NavLink to="/services" className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }>
            Services
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }>
            About Us
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
            isActive ? activeClass : normalClass
          }>
            Contact
          </NavLink>

        </ul>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-6 transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-6 font-medium">

            <NavLink to="/" end onClick={() => setMenuOpen(false)} className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>
              Home
            </NavLink>

            <NavLink to="/services" onClick={() => setMenuOpen(false)} className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>
              Services
            </NavLink>

            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>
              About
            </NavLink>

            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>
              Contact
            </NavLink>

          </div>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;