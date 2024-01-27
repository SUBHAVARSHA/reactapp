import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', feedback);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Feedback:
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          rows="4"
          cols="50"
        />
      </label>
      <br />
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
