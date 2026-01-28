
// import {jwtDecode} from "jwt-decode";
// //import Navbar from "../components/Navbar";
// // import StudentDashboard from "./StudentDashboard";
// //  import TeacherDashboard from "./TeacherDashboard";
// //  import AdminDashboard from "./AdminDashboard";

// function Dashboard() {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     window.location.href = "/login";
//     return null;
//   }

//   const user = jwtDecode(token);

//   // const logout = () => {
//   //   localStorage.removeItem("token");
//   //   window.location.href = "/login";
//   // };

//   return (
//     <>
//       {/* <Navbar /> */}

//       <div>
//       <h2>{user.role.charAt(0).toUpperCase() + user.role.slice(1)} Dashboard</h2>


//        <p><b>Name:</b> {user.name}</p>
//        <p><b>Email:</b> {user.email}</p>
//        <p><b>Role:</b> {user.role}</p>

//        <hr />

//        {/* {user.role === "student" && <StudentDashboard user={user} />}
//        {user.role === "teacher" && <TeacherDashboard user={user} />}
//        {user.role === "admin" && <AdminDashboard user={user} />} */}

//          {/* <br /> 
//         <button onClick={logout}>Logout</button> */}
//       </div>
//     </>
//   );
// }

// export default Dashboard;

import { jwtDecode } from "jwt-decode";

function Dashboard() {

  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/login";
    return null;
  }

  const user = jwtDecode(token);

  const roleTitle =
    user.role.charAt(0).toUpperCase() + user.role.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 flex justify-center items-start pt-24 pb-12 px-4">

      {/* DASHBOARD CARD */}
      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl max-w-3xl w-full p-8">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-8">

          <img
            src="/short_logo.png"
            alt="logo"
            className="h-12 mb-3"
          />

          <h2 className="text-3xl font-bold text-gray-800">
            {roleTitle} Dashboard
          </h2>

          <span className="mt-2 bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold">
            Logged in as {user.role}
          </span>

        </div>

        {/* USER INFO GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* NAME */}
          <div className="bg-purple-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
            <p className="text-gray-500 text-sm">Full Name</p>
            <h3 className="font-semibold text-lg text-gray-800">
              {user.name}
            </h3>
          </div>

          {/* EMAIL */}
          <div className="bg-purple-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
            <p className="text-gray-500 text-sm">Email Address</p>
            <h3 className="font-semibold text-lg text-gray-800">
              {user.email}
            </h3>
          </div>

          {/* ROLE */}
          <div className="bg-purple-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
            <p className="text-gray-500 text-sm">Account Role</p>
            <h3 className="font-semibold text-lg text-gray-800 capitalize">
              {user.role}
            </h3>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-8 border-t"></div>

        {/* DASHBOARD MESSAGE */}
        <div className="text-center">

          <h3 className="text-xl font-semibold text-gray-700">
            Welcome to EduVillage 🎓
          </h3>

          <p className="text-gray-500 mt-2">
            Manage your courses, track progress and work easy from your dashboard.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;