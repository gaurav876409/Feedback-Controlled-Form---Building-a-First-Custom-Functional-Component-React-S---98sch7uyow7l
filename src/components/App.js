import React, { useState, useEffect } from 'react'
import '../styles/App.css';

const App = () => {
  const [rating, setRating] = useState(7);
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState(false);

  const validateComment = () => {
    const commentLength = comment.length;
    if (commentLength <= 5) {
      setCommentError(true);
    } else {
      setCommentError(false);
    }
  };

  useEffect(() => {
    validateComment();
  }, [comment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent the page from refreshing
    return false;
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='rating'>Rating: </label>
          <input
            type="range"
            min="1"
            max="10"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <span className='rating'>{rating}</span>
        </div>
        <div>
          <label htmlFor='comment'>Comment: </label>
          <textarea
            id='comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {commentError && <p style={{ color: 'red' }} className="comment-error">Comment must be atleast 5 characters.</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default App;

