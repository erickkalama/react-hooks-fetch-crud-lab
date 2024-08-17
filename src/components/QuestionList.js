// src/components/QuestionList.js
import React, { useState, useEffect } from 'react';

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const deleteQuestion = (id) => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setQuestions(questions.filter(question => question.id !== id));
      })
      .catch(error => console.error('Error deleting question:', error));
  };

  return (
    <div>
      {questions.map(question => (
        <div key={question.id}>
          <h2>{question.prompt}</h2>
          <button onClick={() => deleteQuestion(question.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
