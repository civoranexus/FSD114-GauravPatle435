import React, { useEffect, useState } from "react";

function QuizResults() {

  const token = localStorage.getItem("token");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchResults = async () => {

      const res = await fetch(
        "http://localhost:5000/api/quiz/results/me",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await res.json();
      setResults(data);
      setLoading(false);
    };

    fetchResults();

  }, [token]);

  if (loading) return <h3>Loading Results...</h3>;

  return (
    <div style={{ padding: "20px" }}>

      <h2>📊 My Quiz Results</h2>

      {results.length === 0 && <p>No quiz attempts yet</p>}

      {results.map((r, index) => (

        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px"
          }}
        >

          <h4>Quiz: {r.quiz.title}</h4>

          <p>
            Score: {r.score} / {r.total}
          </p>

          <p>
            Percentage: {Math.round((r.score / r.total) * 100)}%
          </p>

        </div>

      ))}

    </div>
  );
}

export default QuizResults;