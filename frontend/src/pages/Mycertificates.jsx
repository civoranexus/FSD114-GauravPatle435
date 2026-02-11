import { useEffect, useState } from "react";

function MyCertificates() {

  const [certificates, setCertificates] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {

    fetch("/api/certificate/my", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setCertificates(data));

  }, [token]);

  const downloadCertificate = async (courseId) => {

    const res = await fetch(
      `/api/certificate/${courseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "certificate.pdf";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 pt-24 pb-12 px-4">

    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8">

      {/* HEADER */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        🏆 My Certificates
      </h2>

      {/* EMPTY STATE */}
      {certificates.length === 0 && (
        <p className="text-center text-gray-500">
          You have not earned any certificates yet.
        </p>
      )}

      {/* CERTIFICATE GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {certificates.map((cert) => (

          <div
            key={cert._id}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition"
          >

            {/* COURSE TITLE */}
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              🎓 {cert.course?.title}
            </h4>

            {/* DATE */}
            <p className="text-gray-600 text-sm mb-4">
              Issued on:{" "}
              <span className="font-medium">
                {new Date(cert.issuedAt).toLocaleDateString("en-IN")}
              </span>
            </p>

            {/* DOWNLOAD BUTTON */}
            <button
              onClick={() =>
                downloadCertificate(cert.course?._id)
              }
              className="bg-gradient-to-r from-purple-400 to-indigo-500 hover:opacity-90 text-white px-5 py-2 rounded-xl font-semibold shadow transition"
            >
              ⬇ Download Certificate
            </button>

          </div>

        ))}

      </div>

    </div>

  </div>
);
}

export default MyCertificates;