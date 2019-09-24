import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import {
  persistAnswer,
  getPersistedAnswer,
  clearPersistedAnswer
} from '../utils/persistAnswers';

const QuestionTemplate = props => {
  const post = props.data.markdownRemark;
  const { title } = post.frontmatter;

  const { selectedAnswer: selectedAnswerFromStorage } = getPersistedAnswer(
    title
  );

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
    if (answer.search('<-- correct') > -1) {
      answer = answer.split('<-- correct')[0].trim();
      correct = answer;
    }
    return answer;
  });

  const clearAnswer = () => {
    setSelectedAnswer(null);
    setSubmittedAnswer(null);
    clearPersistedAnswer(title);
  };

  useEffect(() => {
    if (selectedAnswer) {
      persistAnswer(title, selectedAnswer, correct);
    }
  }, [selectedAnswer, correct, title]);

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1)
            }}
          ></p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: postContent }} />
        <h3>Select one:</h3>
        {answers.map(answer => (
          <div style={{ marginBottom: '5px' }}>
            <input
              type="radio"
              name="answer"
              value={answer}
              id={answer}
              onClick={() => setSelectedAnswer(answer)}
              checked={selectedAnswer === answer}
              disabled={submittedAnswer !== null}
            />
            <label style={{ marginLeft: '10px' }} key={answer} htmlFor={answer}>
              {answer}
            </label>
          </div>
        ))}
        {submittedAnswer === null ? (
          <button
            type="submit"
            onClick={() => setSubmittedAnswer(selectedAnswer)}
          >
            Submit
          </button>
        ) : (
          <button type="submit" onClick={clearAnswer}>
            Clear Answer
          </button>
        )}
        {submittedAnswer !== null && (
          <React.Fragment>
            {correct === submittedAnswer ? 'Correct!' : 'Incorrect'}
            <h3>Explanation:</h3>
            <section dangerouslySetInnerHTML={{ __html: explanationContent }} />
          </React.Fragment>
        )}
      </article>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
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
      }
    }
  }
`;
