import React, { useState } from 'react';
import { Link } from 'gatsby';
import { AboutModal } from './modal';
import { rhythm, scale } from '../utils/typography';
import { Divider } from 'semantic-ui-react';

const Layout = props => {
  const [modalOpen, setModalOpen] = useState(false);

  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          fontSize: '30px',
          marginBottom: '20px',
          marginTop: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer style={{ fontSize: '14px' }}>
        <Divider />
        <p>
          JavaScript knowledge quizzes by{' '}
          <strong>Nick Scialli</strong>. Follow me on{' '}
          <a href={`https://twitter.com/nas5w`}>Twitter</a>!{' '}
          I also make free{' '}
          <a href="https://youtube.com/c/typeofnan">
            YouTube tutorial videos
          </a>
          !
        </p>
        <p>
          <button
            className="ui basic green button"
            onClick={() => setModalOpen(true)}
          >
            Read why I make these quizzes &raquo;
          </button>
          <AboutModal
            modalIsOpen={modalOpen}
            closeModal={() => setModalOpen(false)}
          />
        </p>
        <br />
        <p>
          <strong>Note on answer data persistence: </strong>
          Your answers to these quiz questions are stored
          locally in your browser's local storage. This
          means your answers will likely disappear
          eventually (e.g., when you clear browser data).
        </p>
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
