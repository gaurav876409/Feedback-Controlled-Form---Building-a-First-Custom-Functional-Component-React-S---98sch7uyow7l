import React, { useState } from 'react';

const App = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState('');

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    if (e.target.value.length <= 5) {
      setCommentError('Comment must be at least 5 characters');
    } else {
      setCommentError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any submit actions here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <br />
        <label htmlFor='comment'>Comment: </label>
        <textarea id='comment'
          value={comment}
          onChange={handleCommentChange}
        />
        <p style={{ color: 'red' }} className="comment-error">{commentError}</p>
        {/* {commentError && <p style={{ color: 'red' }} className="comment-error">{commentError}</p>} */}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
