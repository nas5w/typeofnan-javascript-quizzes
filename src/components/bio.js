/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { rhythm } from '../utils/typography';
import './bio.css';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <Fragment>
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
          fontSize: '14px'
        }}
      >
        <p>
          JavaScript knowledge quizzes by <strong>{author}</strong>. Follow him
          on <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>!{' '}
        </p>
      </div>
    </Fragment>
  );
};

export default Bio;
