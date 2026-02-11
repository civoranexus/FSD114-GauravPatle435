import { useEffect, useState } from "react";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("/api/admin/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [token]);

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    await fetch(`/api/admin/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setUsers(users.filter((u) => u._id !== id));

    alert("User deleted successfully");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6">

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-purple-700 mb-2 flex items-center gap-2">
          👥 Manage Users
        </h2>

        <p className="text-gray-600 mb-6">
          View and manage registered platform users
        </p>

        {/* USERS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {users.map((user) => (
            <div
              key={user._id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >

              {/* USER ICON */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-xl">
                  👤
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {user.email}
                  </p>
                </div>
              </div>

              {/* ROLE BADGE */}
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4
                  ${
                    user.role === "admin"
                      ? "bg-red-100 text-red-600"
                      : user.role === "teacher"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-green-100 text-green-600"
                  }`}
              >
                {user.role.toUpperCase()}
              </span>

              {/* ACTION BUTTON */}
              <button
                onClick={() => deleteUser(user._id)}
                className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"
              >
                 Delete User
              </button>

            </div>
          ))}

        </div>

        {/* EMPTY STATE */}
        {users.length === 0 && (
          <div className="text-center text-gray-500 mt-20">
            No users found
          </div>
        )}

      </div>

    </div>
  );
}

export default AdminUsers;