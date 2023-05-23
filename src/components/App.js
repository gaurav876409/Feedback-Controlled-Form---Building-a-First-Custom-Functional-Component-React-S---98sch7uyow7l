import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any additional actions you want to do with the submitted data
  };

  const isCommentValid = comment.length >= 5;
  const commentErrorMessage = 'Comment must be at least 5 characters.';

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input
            type="range"
            min="1"
            max="10"
            id="rating"
            value={rating}
            onChange={handleRatingChange}
          />
          <span className="rating">{rating}</span>
        </div>
        <div>
          <label htmlFor="comment">Comment: </label>
          <textarea id="comment" value={comment} onChange={handleCommentChange} />
          {!isCommentValid && (
            <p style={{ color: 'red' }} className="comment-error">
              {commentErrorMessage}
            </p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
