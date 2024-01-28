import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', feedback);

    // Save feedback to Excel
    saveFeedbackToExcel();
  };

  const saveFeedbackToExcel = () => {
    const data = [['Feedback']];
    data.push([feedback]);

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'FeedbackSheet');
    XLSX.writeFile(wb, 'feedback.xlsx');
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
