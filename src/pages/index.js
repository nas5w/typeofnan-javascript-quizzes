import React, { useEffect, useState } from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { getPersistedAnswer } from '../utils/persistAnswers';
import { filterPosts } from '../utils/filterPosts';
import 'semantic-ui-css/semantic.css';
import './index.css';

const BlogIndex = props => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  useEffect(() => {
    document.body.style.backgroundImage = null;
  }, []);

  const [visiblePosts, setVisiblePosts] = useState(posts);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    const filteredPosts = filterPosts(posts, filterValue);
    setVisiblePosts(filteredPosts);
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All questions" />
      <Bio />
      <label htmlFor="filter-questions">Filter: </label>
      <select onChange={handleFilter} id="filter-questions">
        <option>All</option>
        <option>Correct</option>
        <option>Incorrect</option>
        <option>Completed</option>
        <option>Incomplete</option>
      </select>
      <ol>
        {visiblePosts.map(({ node }) => {
          const title =
            node.frontmatter.title || node.fields.slug;
          const {
            selectedAnswer,
            correctAnswer
          } = getPersistedAnswer(title);
          let correctIndicator;
          if (selectedAnswer !== null) {
            correctIndicator =
              correctAnswer === selectedAnswer ? (
                <span style={{ color: 'green' }}>
                  <i className="check circle icon"></i>
                </span>
              ) : (
                  <span style={{ color: 'red' }}>
                    <i className="times circle icon"></i>
                  </span>
                );
          }
          return (
            <li key={node.fields.slug}>
              <article>
                <header>
                  <Link
                    style={{ boxShadow: `none` }}
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>{' '}
                  {correctIndicator}
                </header>
              </article>
            </li>
          );
        })}
      </ol>
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
