const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    if(fileNode && fileNode.relativePath) {
      const parsedFilePath = path.parse(fileNode.relativePath);
      if (
        Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
        Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
      ) {
        slug = `/${_.kebabCase(node.frontmatter.title)}`;
      } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
      } else if (parsedFilePath.dir === "") {
        slug = `/${parsedFilePath.name}/`;
      } else {
        slug = `/${parsedFilePath.dir}/`;
      }

      if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
        if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
          slug = `/${_.kebabCase(node.frontmatter.slug)}`;
        if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
          const date = moment(node.frontmatter.date, siteConfig.dateFormat);
          if (!date.isValid)
            console.warn(`WARNING: Invalid date.`, node.frontmatter);

          createNodeField({
            node,
            name: "date",
            value: date.toISOString()
          });
        }
      }
      createNodeField({ node, name: "slug", value: slug });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postPage = path.resolve("src/templates/post.jsx");
  const categoryPage = path.resolve("src/templates/category.jsx");

  const markdownQueryResult = await graphql(
    `
      query {
        allAirtable(
          filter: { table: { eq: "Activities" }, data : { Status: {eq: "Publish"} } }
        ) {
          edges {
            node {
              data {
                Title
                Card
                Slug
                Author {
                  data { 
                    Name
                    Email
                  }
                }
                Gist {
                  childMarkdownRemark {
                    html
                    excerpt(format: PLAIN)
                  }
                }
              }
            }
          }
        }
      }
    `, { dateFormat: siteConfig.dateFormat }
  );

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  const tagSet = new Set();
  const categorySet = new Set();

  const postsEdges = markdownQueryResult.data.allAirtable.edges;

  postsEdges.forEach((edge, index) => {
    if (edge.node.data.tags) {
      edge.node.data.tags.forEach(tag => {
        tagSet.add(tag);
      });
    }

    if (edge.node.data.Category) {
      categorySet.add(edge.node.data.Category);
    }

    const nextID = index + 1 < postsEdges.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;
    const nextEdge = postsEdges[nextID];
    const prevEdge = postsEdges[prevID];

    createPage({
      path: edge.node.data.Slug,
      component: postPage,
      context: {
        dateFormat: siteConfig.dateFormat,
        slug: edge.node.data.Slug,
        nexttitle: nextEdge.node.data.Title,
        nextslug: nextEdge.node.data.Slug,
        prevtitle: prevEdge.node.data.Title,
        prevslug: prevEdge.node.data.Slug
      }
    });
  });

  tagSet.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagPage,
      context: {
        tag,
        dateFormat: siteConfig.dateFormat
      }
    });
  });
  
  categorySet.forEach(Category => {
    createPage({
      path: `/categories/${_.kebabCase(Category)}/`,
      component: categoryPage,
      context: {
        Category,
        dateFormat: siteConfig.dateFormat
      }
    });
  });
};
