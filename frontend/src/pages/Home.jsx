import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-purple-400">

     

      {/* ============== HERO SECTION ============== */}

      <div className="min-h-screen flex items-center justify-center px-4 pt-24">

        <div className="bg-white/90 backdrop-blur-xl rounded-[30px] shadow-2xl max-w-6xl w-full grid md:grid-cols-2 overflow-hidden">

          {/* LEFT CONTENT */}
          <div className="p-10 flex flex-col justify-center">

            <span className="bg-purple-600 text-white px-4 py-1 w-fit rounded-full text-sm mb-4">
            Online Learning
            </span>

            <h1 className="text-4xl md:text-4.5xl font-bold text-gray-800 leading-tight">
              EduVillage <span className="text-purple-600">E-Learning</span>
              <br />
              Platform
            </h1>

            <p className="text-gray-600 mt-4 max-w-md">
              Learn anytime, anywhere with Civora Nexus.
              Interactive courses, quizzes and certificates
              designed for modern learners.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-6">

              <button
                onClick={() => navigate("/register")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
              >
                Register
              </button>

              <button
                onClick={() => navigate("/login")}
                className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full font-semibold transition"
              >
                Login
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center p-3 bg-gradient-to-br from-purple-500 to-indigo-500">

            <div className="w-full  h-[420px] rounded-2xl overflow-hidden shadow-xl">

              <img
                src="/image.png"
                alt="Learning"
                className="w-full h-full   object-cover "
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;