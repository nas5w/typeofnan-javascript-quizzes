import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { ClearAnswerModal } from '../components/modal';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import {
  persistAnswer,
  getPersistedAnswer,
  clearPersistedAnswer
} from '../utils/persistAnswers';
import { Button, Form, Grid } from 'semantic-ui-react';
import correctBg from './correct.png';
import incorrectBg from './incorrect.png';
import { gaTrackAnswer } from '../utils/gaAnswerTracking';

const QuestionTemplate = props => {
  const post = props.data.markdownRemark;
  const { title } = post.frontmatter;

  const {
    selectedAnswer: selectedAnswerFromStorage
  } = getPersistedAnswer(title);

  const [selectedAnswer, setSelectedAnswer] = useState(
    selectedAnswerFromStorage
  );
  const [submittedAnswer, setSubmittedAnswer] = useState(
    selectedAnswerFromStorage
  );

  const [postContent, explanationContent] = post.html.split(
    '<!-- explanation -->'
  );
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;

  let correct;
  const answers = post.frontmatter.answers.map(answer => {
    if (answer.search('// correct') > -1) {
      answer = answer.split('// correct')[0].trim();
      correct = answer;
    }
    return answer;
  });
  const clearAnswer = () => {
    setSelectedAnswer(null);
    setSubmittedAnswer(null);
    clearPersistedAnswer(title);
    return false;
  };
  const [isOpen, openClear] = useState(false);

  useEffect(() => {
    if (selectedAnswer) {
      persistAnswer(title, selectedAnswer, correct);
    }
  }, [selectedAnswer, correct, title]);

  useEffect(() => {
    const bg =
      submittedAnswer === null
        ? ''
        : submittedAnswer === correct
        ? correctBg
        : incorrectBg;
    document.body.style.backgroundImage = `url(${bg})`;
  }, [submittedAnswer, correct]);

  const buttonText =
    submittedAnswer === null
      ? 'Submit'
      : submittedAnswer === correct
      ? 'Correct!'
      : 'Incorrect';

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
      />
      <Grid
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          marginTop: '20px'
        }}
      >
        <Grid.Column>
          <article>
            <header>
              <h1
                style={{
                  marginTop: rhythm(1),
                  marginBottom: 15
                }}
              >
                {post.frontmatter.title}
              </h1>
            </header>
            <Form size="large">
              <section
                dangerouslySetInnerHTML={{
                  __html: postContent
                }}
              />

              <h3>Select one:</h3>
              {answers.map(answer => (
                <div
                  key={answer}
                  style={{ marginBottom: '5px' }}
                >
                  <input
                    type="radio"
                    name="answer"
                    value={answer}
                    id={answer}
                    onClick={() => {
                      setSelectedAnswer(answer);
                    }}
                    checked={selectedAnswer === answer}
                    disabled={submittedAnswer !== null}
                  />
                  <label
                    style={{ marginLeft: '10px' }}
                    key={answer}
                    htmlFor={answer}
                  >
                    {answer}
                    {answer === correct &&
                      submittedAnswer !== null && (
                        <React.Fragment>
                          {' '}
                          <i className="long arrow alternate left icon"></i>
                          CORRECT ANSWER
                        </React.Fragment>
                      )}
                  </label>
                </div>
              ))}
              <br />
              <Button
                color={
                  submittedAnswer === null
                    ? 'blue'
                    : submittedAnswer === correct
                    ? 'green'
                    : 'red'
                }
                fluid
                size="large"
                onClick={() => {
                  gaTrackAnswer(
                    title,
                    selectedAnswer,
                    correct
                  );
                  setSubmittedAnswer(selectedAnswer);
                }}
                disabled={
                  selectedAnswer === null ||
                  submittedAnswer !== null
                }
              >
                {buttonText}
              </Button>
            </Form>
            {submittedAnswer !== null && (
              <React.Fragment>
                <h2>Explanation:</h2>
                <section
                  dangerouslySetInnerHTML={{
                    __html:
                      explanationContent +
                      `<ul style="padding-left: 30px"><li><strong>Interested in learning more about JavaScript? Consider <a href="https://youtube.com/c/devtutsco" target="_blank" rel="noopener noreferrer">subscribing to my YouTube channel</a> where I teach JavaScript, React, and Typescript!</strong></li></ul>`
                  }}
                />
              </React.Fragment>
            )}

            {submittedAnswer !== null && (
              <React.Fragment>
                <br />
                <Button
                  className="ui red basic button"
                  onClick={() => openClear(true)}
                >
                  Clear My answer
                </Button>
                <ClearAnswerModal
                  modalIsOpen={isOpen}
                  clearAnswer={() =>
                    openClear(clearAnswer())
                  }
                  closeModal={() => openClear(false)}
                />
              </React.Fragment>
            )}
          </article>
        </Grid.Column>
      </Grid>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: '15px 15px 10px 15px',
            margin: '30px -14px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)'
          }}
        >
          <li>
            {next && (
              <Link to={next.fields.slug} rel="prev">
                ← {next.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="next">
                {previous.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default QuestionTemplate;

export const pageQuery = graphql`
  query QuestionBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        answers
        date
      }
    }
  }
`;
