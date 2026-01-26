import { useState } from "react";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message || "Registered successfully");
  };

  return (

    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-200 px-4">

      {/* REGISTER CARD */}
      <div className="bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl p-8 w-full max-w-md">

        {/* LOGO */}
        <div className="flex justify-center mb-4">
          <img
            src="/short_logo.png"
            alt="Logo"
            className="h-14"
          />
        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-bold text-center text-purple-600">
          Create Account
        </h3>

        <p className="text-center text-gray-500 text-sm mb-6">
          Register to start your learning journey
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>

            <input
              name="name"
              placeholder="Your full name"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>

            <input
              name="email"
              placeholder="you@example.com"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>

            <input
              name="password"
              type="password"
              placeholder="Create strong password"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
            />
          </div>

          {/* ROLE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Role
            </label>

            <select
              name="role"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none bg-white"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 text-white py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Register
          </button>

        </form>

      </div>

    </div>

  );
}

export default Register;