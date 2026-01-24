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
    <div>
      <h2>👥 Manage Users</h2>

      {users.map((user) => (
        <div
          key={user._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
          }}
        >
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>

          <button onClick={() => deleteUser(user._id)}>
            ❌ Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminUsers;