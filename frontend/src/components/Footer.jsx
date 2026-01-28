import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* LEFT BRAND SECTION */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/short_logo.png"
              alt="Civora Logo"
              className="h-10"
            />
            <h2 className="text-xl font-bold text-gray-800">
              EduVillage
            </h2>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Empowering the next generation of innovators through
            quality internship programs and mentorship.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-5 text-gray-600">

            <a className="hover:text-purple-600 cursor-pointer">
              <FaFacebookF />
            </a>

            <a className="hover:text-purple-600 cursor-pointer">
              <FaTwitter />
            </a>

            <a className="hover:text-purple-600 cursor-pointer">
              <FaLinkedinIn />
            </a>

            <a className="hover:text-purple-600 cursor-pointer">
              <FaInstagram />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

  <ul className="space-y-3 text-gray-600">

    <li>
      <NavLink
        to="/"end
        className={({ isActive }) =>
  isActive
    ? "text-purple-600 font-semibold"
    : "text-gray-600 hover:text-purple-600 transition"
}
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/services"
        className={({ isActive }) =>
  isActive
    ? "text-purple-600 font-semibold"
    : "text-gray-600 hover:text-purple-600 transition"
}
      >
        Services
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/about"
       className={({ isActive }) =>
  isActive
    ? "text-purple-600 font-semibold"
    : "text-gray-600 hover:text-purple-600 transition"
}
      >
        About Us
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
  isActive
    ? "text-purple-600 font-semibold"
    : "text-gray-600 hover:text-purple-600 transition"
}
      >
        Contact
      </NavLink>
    </li>

  </ul>
</div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-gray-600 text-sm">

            <div className="flex items-center gap-3">
              <MdEmail className="text-purple-600" />
              support@civora.com
            </div>

            <div className="flex items-center gap-3">
              <MdPhone className="text-purple-600" />
              +91 9876543210
            </div>

            <div className="flex items-center gap-3">
              <MdLocationOn className="text-purple-600" />
              Chhatrapati Sambhajinagar, Maharashtra, India
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="border-t py-4 text-center text-sm text-gray-500">

        © 2026 EduVillage. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;