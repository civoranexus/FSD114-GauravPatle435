// function AdminDashboard( {user}) {
//   return (
//     <div>
//       <h3>🛠️ Admin Dashboard</h3>
//       <p>Welcome, {user.name}</p>

//       <ul>
//         <li>👥 Manage Users</li>
//         <li>📚 Manage Courses</li>
//         <li>🧹 Delete Courses</li>
//         <li>📊 View System Reports</li>
//       </ul>
//     </div>
//   );
// }

// export default AdminDashboard;

import {jwtDecode} from "jwt-decode";

function AdminDashboard() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <h3>Unauthorized</h3>;
  }

  const user = jwtDecode(token);

  return (
    <div>
      <h2>🛠️ Admin Dashboard</h2>
      <p>Welcome, {user.name}</p>
      <p>Role: {user.role}</p>

      

      <ul>
         <li><a href="/admin/users"> <button>👥 Manage Users</button></a></li>
         <li><a href="/courses"><button>📚 All Courses</button></a></li>
         <li><a href="/create-course"><button>➕ Create Course</button></a></li>
         <li><a href="/admin/delete-course"><button>🗑️ Delete Courses</button></a></li>
         <li>📊 View System Reports</li>
       </ul>
    </div>
  );
}

export default AdminDashboard;