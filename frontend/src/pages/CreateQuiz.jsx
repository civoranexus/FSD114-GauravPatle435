import React, { useState } from "react";
import { useParams } from "react-router-dom";

function CreateQuiz() {

  const { id } = useParams(); // course id
  const token = localStorage.getItem("token");

  const [title, setTitle] = useState("");

  const [questions, setQuestions] = useState([
    {
      questionText: "",
      options: ["", "", "", ""],
      correctAnswer: ""
    }
  ]);

  const [loading, setLoading] = useState(false);

  // =========================
  // Handle Question Change
  // =========================

  const handleQuestionChange = (qIndex, value) => {
    const updated = [...questions];
    updated[qIndex].questionText = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const handleCorrectAnswer = (qIndex, value) => {
    const updated = [...questions];
    updated[qIndex].correctAnswer = value;
    setQuestions(updated);
  };

  // =========================
  // Add New Question
  // =========================

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionText: "",
        options: ["", "", "", ""],
        correctAnswer: ""
      }
    ]);
  };

  // =========================
  // Submit Quiz
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      alert("Quiz title required");
      return;
    }

    try {

      setLoading(true);

      const res = await fetch(
        `http://localhost:5000/api/quiz/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            title,
            questions
          })
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("✅ Quiz Created Successfully");

        setTitle("");
        setQuestions([
          {
            questionText: "",
            options: ["", "", "", ""],
            correctAnswer: ""
          }
        ]);

      } else {
        alert(data.message || "Quiz creation failed");
      }

    } catch (error) {
      console.error(error);
      alert("❌ Server error");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Create Quiz</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br /><br />

        {questions.map((q, qIndex) => (

          <div key={qIndex} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px" }}>

            <h4>Question {qIndex + 1}</h4>

            <input
              placeholder="Question text"
              value={q.questionText}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              required
            />

            <br /><br />

            {q.options.map((opt, optIndex) => (

              <input
                key={optIndex}
                placeholder={`Option ${optIndex + 1}`}
                value={opt}
                onChange={(e) =>
                  handleOptionChange(qIndex, optIndex, e.target.value)
                }
                required
              />
            ))}

            <br /><br />

            <input
              placeholder="Correct Answer"
              value={q.correctAnswer}
              onChange={(e) =>
                handleCorrectAnswer(qIndex, e.target.value)
              }
              required
            />

          </div>
        ))}

        <button type="button" onClick={addQuestion}>
          ➕ Add Question
        </button>

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Create Quiz"}
        </button>

      </form>

    </div>
  );
}

export default CreateQuiz;