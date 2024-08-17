// src/components/Article.js
import React, { useState } from 'react';

function Article({ id, title, date, preview, minutesToRead }) {
  const [correctIndex, setCorrectIndex] = useState(0);

  const handleCorrectIndexChange = (event) => {
    const newCorrectIndex = parseInt(event.target.value);
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correctIndex: newCorrectIndex }),
    })
      .then(response => response.json())
      .then(data => setCorrectIndex(newCorrectIndex))
      .catch(error => console.error('Error updating question:', error));
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <select value={correctIndex} onChange={handleCorrectIndexChange}>
        {/* Populate options */}
      </select>
    </article>
  );
}

export default Article;
