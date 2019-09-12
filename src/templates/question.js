import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import { shuffle } from '../utils/shuffle';

class QuestionTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const [postContent, explanationContent] = post.html.split(
      '<!-- explanation -->'
    );
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    const answers = [...post.frontmatter.wrong];
    answers.push(post.frontmatter.right);
    shuffle(answers);

    return (
      <Layout location={this.props.location} title={siteTitle}>
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
            <div>
              <label key={answer} htmlFor={answer}>
                <input
                  type="radio"
                  name="answer"
                  value={answer}
                  checked={false}
                />
                {answer}
              </label>
            </div>
          ))}

          <h3>Explanation</h3>
          <section dangerouslySetInnerHTML={{ __html: explanationContent }} />
          <hr
            style={{
              marginBottom: rhythm(1)
            }}
          />
          <footer>
            <Bio />
          </footer>
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
  }
}

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
        right
        wrong
      }
    }
  }
`;
