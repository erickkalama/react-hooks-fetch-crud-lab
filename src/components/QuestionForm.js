// src/components/AddQuestionForm.js
import React, { useState } from 'react';

function AddQuestionForm({ onQuestionAdded }) {
  const [prompt, setPrompt] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [correctIndex, setCorrectIndex] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newQuestion = { prompt, answers, correctIndex };

    fetch('http://localhost:4000/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newQuestion),
    })
      .then(response => response.json())
      .then(data => {
        onQuestionAdded(data); // Callback to update the parent state
        setPrompt('');
        setAnswers(['', '', '', '']);
        setCorrectIndex(0);
      })
      .catch(error => console.error('Error adding question:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form elements for prompt, answers, and correctIndex */}
      <button type="submit">Add Question</button>
    </form>
  );
}

export default AddQuestionForm;
