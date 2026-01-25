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
    <div style={{ padding: "20px" }}>

      <h2>🏆 My Certificates</h2>

      {certificates.length === 0 && (
        <p>No certificates earned yet</p>
      )}

      {certificates.map((cert) => (

        <div
          key={cert._id}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            marginBottom: "10px"
          }}
        >

          <h4>{cert.course.title}</h4>

          <p>
            Issued on: {new Date(cert.issuedAt).toLocaleDateString("en-IN")}
          </p>

          <button
            onClick={() => downloadCertificate(cert.course._id)}
          >
            ⬇ Download Certificate
          </button>

        </div>

      ))}

    </div>
  );
}

export default MyCertificates;