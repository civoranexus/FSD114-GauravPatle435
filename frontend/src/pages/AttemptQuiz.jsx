import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AttemptQuiz() {

  const { id } = useParams(); // course id
  const token = localStorage.getItem("token");

  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // Fetch Quiz
  // =========================

  useEffect(() => {

    const fetchQuiz = async () => {

      const res = await fetch(
        `http://localhost:5000/api/quiz/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await res.json();
      setQuiz(data);
      setAnswers(new Array(data.questions.length).fill(""));
      setLoading(false);
    };

    fetchQuiz();

  }, [id, token]);

  // =========================
  // Select Answer
  // =========================

  const handleAnswer = (qIndex, value) => {
    const updated = [...answers];
    updated[qIndex] = value;
    setAnswers(updated);
  };

  // =========================
  // Submit Quiz
  // =========================

  const submitQuiz = async () => {

    const res = await fetch(
      `http://localhost:5000/api/quiz/submit/${quiz._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ answers })
      }
    );

    const data = await res.json();

    alert(`Score: ${data.score} / ${data.total}`);
  };

  if (loading) return <h3>Loading Quiz...</h3>;

  return (
    <div style={{ padding: "20px" }}>

      <h2>{quiz.title}</h2>

      {quiz.questions.map((q, index) => (

        <div key={index} style={{ marginBottom: "20px" }}>

          <h4>{index + 1}. {q.questionText}</h4>

          {q.options.map((opt, optIndex) => (

            <div key={optIndex}>

              <input
                type="radio"
                name={`q-${index}`}
                value={opt}
                onChange={() => handleAnswer(index, opt)}
              />

              {opt}

            </div>

          ))}

        </div>

      ))}

      <button onClick={submitQuiz}>
        Submit Quiz
      </button>

    </div>
  );
}

export default AttemptQuiz;