import React from 'react';
import './bio.css';
import { LearnMore } from './learn-more';

const Bio = () => {
  return (
    <>
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
          Created by{' '}
          <a href="https://twitter.com/nas5w">
            Nick Scialli
          </a>{' '}
          and many other contributors listed below!
        </p>
      </div>
      <LearnMore />
    </>
  );
};

export default Bio;
