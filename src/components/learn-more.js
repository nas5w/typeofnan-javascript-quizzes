import React from 'react';

export const LearnMore = () => (
  <div
    style={{
      marginBottom: '30px',
      fontSize: '14px',
      backgroundColor: '#e5f5fc',
      padding: '10px'
    }}
  >
    <p>Want to learn more about JavaScript development?</p>
    <p>
      <ul style={{ marginLeft: '20px' }}>
        <li>
          <a
            href="https://buttondown.email/devtuts"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign up for my free newsletter
          </a>{' '}
          where I periodically send out digestible bits of
          JavaScript knowledge!
        </li>
        <li>
          <a
            href="https://youtube.com/c/devtutsco"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe to my YouTube channel
          </a>{' '}
          where I teach JavaScript, React, and Typescript!
        </li>
      </ul>
    </p>
  </div>
);
