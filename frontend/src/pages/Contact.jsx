

import { Mail, Phone, MapPin, Clock } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 py-20 px-4">

      {/* PAGE TITLE */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Contact Us
        </h1>
        <p className="text-gray-600 mt-2">
          We would love to hear from you
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* ================= CONTACT INFO CARD ================= */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Contact Information
          </h2>

          <p className="text-gray-500 mb-6">
            Get in touch with us through any of these channels
          </p>

          {/* EMAIL */}
          <div className="flex items-start gap-4 mb-5">

            <div className="bg-blue-100 p-3 rounded-full">
              <Mail className="text-blue-600" />
            </div>

            <div>
              <h4 className="font-semibold text-gray-700">
                Email
              </h4>
              <p className="text-gray-500">
                support@civora.com
              </p>
            </div>

          </div>

          {/* PHONE */}
          <div className="flex items-start gap-4 mb-5">

            <div className="bg-blue-100 p-3 rounded-full">
              <Phone className="text-blue-600" />
            </div>

            <div>
              <h4 className="font-semibold text-gray-700">
                Phone
              </h4>
              <p className="text-gray-500">
               +91 9876543210
              </p>
            </div>

          </div>

          {/* ADDRESS */}
          <div className="flex items-start gap-4">

            <div className="bg-blue-100 p-3 rounded-full">
              <MapPin className="text-blue-600" />
            </div>

            <div>
              <h4 className="font-semibold text-gray-700">
                Address
              </h4>
              <p className="text-gray-500">
                Chhatrapati Sambhajinagar <br />
                Maharashtra, India.
              </p>
            </div>

          </div>

        </div>

        {/* ================= OFFICE HOURS CARD ================= */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Office Hours
          </h2>

          <div className="flex items-start gap-4">

            <div className="bg-blue-100 p-3 rounded-full">
              <Clock className="text-blue-600" />
            </div>

            <div className="text-gray-600">
              <p>
                Monday - Saterday: <br />
                <span className="font-medium">
                  9:00 AM - 6:00 PM IST
                </span>
              </p>

              <p className="mt-2">
                Sunday: <span className="font-medium">Closed</span>
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;