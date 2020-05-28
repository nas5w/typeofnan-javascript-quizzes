import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { AboutModal } from './modal';
import { rhythm, scale } from '../utils/typography';
import { Divider, Card } from 'semantic-ui-react';
import GitHubButton from 'react-github-btn';
import { clearAllPersistedAnswer } from '../utils/persistAnswers';
import {
  shouldRenderContributor,
  shuffle
} from '../utils/shouldRenderContributor';
import { LearnMore } from './learn-more';

const Layout = props => {
  const [loading, stopLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [contributors, setContributors] = useState([]);
  const headerRef = useRef();
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

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
    header = null;
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
      <Link to="/">Home</Link> |{' '}
      <a
        href="https://buttondown.email/devtuts"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mailing List
      </a>{' '}
      | <a href="https://typeofnan.dev">Blog</a> |{' '}
      <a href="https://youtube.com/c/devtutsco">
        Tutorial Videos
      </a>
      <header>{header}</header>
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
        <Card fluid>
          <Card.Content>
            <Card.Header>
              <h2 style={{ margin: '20px 0' }}>
                <i aria-hidden="true" class="mail icon"></i>{' '}
                Mailing List!
              </h2>
            </Card.Header>
            <Card.Description>
              If you're learning a lot taking these quizzes,
              consider signing up for my mailing list, where
              I send ~weekly tips and lessons on JavaScript
              right to your inbox!
            </Card.Description>
            <form
              action="https://buttondown.email/api/emails/embed-subscribe/devtuts"
              method="post"
              target="popupwindow"
              onSubmit="window.open('https://buttondown.email/devtuts', 'popupwindow')"
              className="embeddable-buttondown-form"
            >
              <div style={{ margin: '20px 0' }}>
                <i
                  aria-hidden="true"
                  class="check icon"
                ></i>{' '}
                Weekly tips
                <br />
                <i
                  aria-hidden="true"
                  class="check icon"
                ></i>{' '}
                No spam
                <br />
                <i
                  aria-hidden="true"
                  class="check icon"
                ></i>{' '}
                Unsubscribe any time
              </div>
              <label htmlFor="email">Email Address:</label>
              <br />
              <div className="ui icon input">
                <input
                  type="email"
                  name="email"
                  id="bd-email"
                  required
                />
              </div>
              <input type="hidden" value="1" name="embed" />
              <br />
              <button
                className="ui green button"
                style={{ marginLeft: '10px' }}
              >
                Subscribe!
              </button>
            </form>
          </Card.Content>
        </Card>
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
          {loading ? (
            <div className="ui basic loading very padding segment"></div>
          ) : (
            contributors.map(
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
