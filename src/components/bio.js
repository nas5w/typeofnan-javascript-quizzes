import React from 'react';
import './bio.css';

const Bio = () => {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: '30px',
        fontSize: '14px'
      }}
    >
      <p>
        Learn JavaScript fundamentals through fun and
        challenging quizzes!{' '}
        <a href="https://github.com/nas5w/typeofnan-javascript-quizzes">
          Star this repo on Github
        </a>{' '}
        to follow along as new questions are added!
      </p>
    </div>
  );
};

export default Bio;
