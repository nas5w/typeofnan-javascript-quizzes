import React from 'react';

export const LearnMore = () => (
  <div
    style={{
      display: `flex`,
      marginBottom: '30px',
      fontSize: '14px',
      backgroundColor: '#e5f5fc',
      padding: '10px'
    }}
  >
    <p>
      Want to learn more about JavaScript development?
      Consider{' '}
      <a
        href="https://buttondown.email/typeofnan"
        target="_blank"
        rel="noopener noreferrer"
      >
        signing up for my free newsletter
      </a>{' '}
      where I periodically send out digestible bits of
      JavaScript knowledge!
    </p>
  </div>
);
