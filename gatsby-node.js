const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const questionTemplate = path.resolve(`./src/templates/question.js`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___order], order: ASC }
          limit: 1000
        ) {
          edges {
            node {
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
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create question pages.
  const questions = result.data.allMarkdownRemark.edges;

  questions.forEach((question, index) => {
    const previous =
      index === questions.length - 1 ? null : questions[index + 1].node;
    const next = index === 0 ? null : questions[index - 1].node;

    createPage({
      path: question.node.fields.slug,
      component: questionTemplate,
      context: {
        slug: question.node.fields.slug,
        previous,
        next
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
