import { BookOpen, Award, BarChart3, Brain } from "lucide-react";

function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 py-20 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">

          <h1 className="text-4xl font-bold text-blue-600">
            Our Services
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide high-quality learning experiences and career-focused
            services to empower students and professionals.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">

            <div className="bg-blue-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
              <BookOpen className="text-blue-600" size={26} />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Online Courses
            </h3>

            <p className="text-gray-500 text-sm">
              Learn from industry experts with practical content and projects.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">

            <div className="bg-blue-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
              <BarChart3 className="text-blue-600" size={26} />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Quiz Competitions
            </h3>

            <p className="text-gray-500 text-sm">
              Test your knowledge and compete with learners worldwide.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">

            <div className="bg-blue-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
              <Award className="text-blue-600" size={26} />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Certification Programs
            </h3>

            <p className="text-gray-500 text-sm">
              Earn verified certificates to boost your professional profile.
            </p>

          </div>

          {/* CARD 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">

            <div className="bg-blue-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
              <Brain className="text-blue-600" size={26} />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Skill Development
            </h3>

            <p className="text-gray-500 text-sm">
              Improve technical and soft skills with structured learning paths.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Services;