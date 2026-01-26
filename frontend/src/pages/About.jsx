import { Briefcase, TrendingUp, GraduationCap } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 py-20 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER SECTION */}
        <div className="text-center mb-12">

          <h1 className="text-4xl font-bold text-blue-600">
            About EduVillage Platform
          </h1>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
            Civora Nexus is a premier internship platform connecting talented
            students with leading companies across various domains. We believe
            in fostering innovation, nurturing talent, and creating opportunities
            that shape the future of technology and business.
          </p>

        </div>

        {/* FEATURES SECTION */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">

            <div className="bg-blue-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
              <Briefcase className="text-blue-600" size={28} />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Industry-Ready Skills
            </h3>

            <p className="text-gray-500 text-sm">
              Work on real-world projects with experienced mentors
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">

            <div className="bg-blue-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="text-blue-600" size={28} />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Competitive Environment
            </h3>

            <p className="text-gray-500 text-sm">
              Track your progress and compete with peers
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">

            <div className="bg-blue-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="text-blue-600" size={28} />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Career Opportunities
            </h3>

            <p className="text-gray-500 text-sm">
              Direct path to full-time positions with top companies
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;