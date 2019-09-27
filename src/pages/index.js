import React, { useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { AboutModal } from '../components/modal';
import { getPersistedAnswer } from '../utils/persistAnswers';
import 'semantic-ui-css/semantic.css';
import './index.css';
import { Divider } from 'semantic-ui-react';

const BlogIndex = props => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.backgroundImage = null;
  }, []);

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <ol>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const { selectedAnswer, correctAnswer } = getPersistedAnswer(title);
          let correctIndicator;
          if (selectedAnswer !== null) {
            correctIndicator =
              correctAnswer === selectedAnswer ? (
                <span style={{ color: 'green' }}>
                  <i class="check circle icon"></i>
                </span>
              ) : (
                <span style={{ color: 'red' }}>
                  <i class="times circle icon"></i>
                </span>
              );
          }
          return (
            <li key={node.fields.slug}>
              <article>
                <header>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>{' '}
                  {correctIndicator}
                </header>
              </article>
            </li>
          );
        })}
      </ol>
      <button
        className="ui basic green button"
        onClick={() => setModalOpen(true)}
      >
        Read why I make these quizzes &raquo;
      </button>
      <Divider />
      <AboutModal
        modalIsOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
      />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
