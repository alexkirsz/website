const _ = require("lodash");
const path = require("path");

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  let slug;

  if (node.internal.type === "MarkdownRemark") {
    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")) {
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      } else if (
        Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
      ) {
        slug = `/${_.kebabCase(node.frontmatter.title)}`;
      }
      createNodeField({ node, name: "slug", value: slug });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve("./src/templates/post.jsx");
  const categoryTemplate = require.resolve("./src/templates/category.jsx");

  const result = await wrapper(
    graphql(`
      {
        allMdx {
          edges {
            node {
              frontmatter {
                slug
                title
                categories
              }
            }
          }
        }
      }
    `)
  );

  const posts = result.data.allMdx.edges;

  posts.forEach((edge, index) => {
    const next = index === 0 ? null : posts[index - 1].node;
    const prev = index === posts.length - 1 ? null : posts[index + 1].node;

    createPage({
      path: edge.node.frontmatter.slug,
      component: postTemplate,
      context: {
        slug: edge.node.frontmatter.slug,
        prev,
        next
      }
    });
  });

  const categorySet = new Set();

  _.each(posts, edge => {
    if (_.get(edge, "node.frontmatter.categories")) {
      edge.node.frontmatter.categories.forEach(cat => {
        categorySet.add(cat);
      });
    }
  });

  const categories = Array.from(categorySet);

  categories.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category)}`,
      component: categoryTemplate,
      context: {
        category
      }
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.wasm$/,
          type: "javascript/auto",
          loader: "file-loader"
        }
      ]
    }
  });
};
