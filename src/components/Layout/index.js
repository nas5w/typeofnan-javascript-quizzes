import React, { useRef, useState, useEffect } from 'react';
import { Divider } from 'semantic-ui-react';
import GitHubButton from 'react-github-btn';
import { AboutModal } from '../modal';
import { rhythm } from '../../utils/typography';
import Header from './Header';
import { clearAllPersistedAnswer } from '../../utils/persistAnswers';
import {
  shouldRenderContributor,
  shuffle
} from '../../utils/shouldRenderContributor';

const Layout = props => {
  const [loading, stopLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [contributors, setContributors] = useState([]);
  const headerRef = useRef();
  const { location, title, children } = props;

  useEffect(() => {
    fetch(
      'https://api.github.com/repos/nas5w/typeofnan-javascript-quizzes/contributors?per_page=1000'
    )
      .then(res => res.json())
      .then(users => {
        setContributors(
          shuffle(
            users.filter(user =>
              shouldRenderContributor(user.id)
            )
          )
        );
        stopLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    location.pathname !== '/' &&
      headerRef.current.scrollIntoView();
  }, [location]);

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
      }}
    >
      <Header
        pathname={location.pathname}
        title={title}
      />

      <main ref={headerRef}>{children}</main>
      
      <button
      onClick={() => {
        window.confirm(
          'Are you sure you want to clear all answers'
        ) && clearAllPersistedAnswer();
        window.location.reload();
      }}
      className="ui red basic button"
    >
      Reset all answers
    </button>


      <footer style={{ fontSize: '14px' }}>
        <Divider />
        <p>
          <GitHubButton
            href="https://github.com/nas5w/typeofnan-javascript-quizzes"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star nas5w/typeofnan-javascript-quizzes on GitHub"
          >
            Star
          </GitHubButton>
        </p>
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
        <h3>Contributors</h3>
        <p>
          Thanks to these awesome contributors for helping
          out with tasks ranging from adding questions to
          fixing typos. If you have time to help out, please
          consider{' '}
          <a href="https://github.com/nas5w/typeofnan-javascript-quizzes#contributing">
            contributing!
          </a>
        </p>
        <div>
          {loading ? <div className="ui basic loading very padding segment"></div> : contributors.map(
            ({ login, avatar_url, html_url, id }) => (
              <a
                key={id}
                href={html_url}
                style={{ boxShadow: 'none' }}
              >
                <img
                  alt={login}
                  src={avatar_url}
                  style={{
                    width: '10%',
                    margin: '0 10px 10px 0'
                  }}
                />
              </a>
            )
          )}
        </div>
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
