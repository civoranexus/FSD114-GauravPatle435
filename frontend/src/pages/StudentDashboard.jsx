function StudentDashboard({ user }) {
  return (
    <div>
      <h3>🎓 Student Dashboard</h3>
      <p>Welcome, {user.name}</p>

      <ul>
        <li><a href="/courses"><button>📚 All Courses</button></a></li>
        <li><a href="/my-courses"><button>📘 My Courses</button></a></li>
        <li><a href="/student/results"><button>📊 My Quiz Results</button></a></li>
        <li><a href="/my-certificates"><button>🏆 My Certificates</button></a></li>
      </ul>
    </div>
  );
}

export default StudentDashboard;