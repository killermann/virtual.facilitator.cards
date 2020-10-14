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
  const forPage = path.resolve("src/templates/for.jsx");
  const cardPage = path.resolve("src/templates/card.jsx");
  const appsPage = path.resolve("src/templates/app.jsx");

  const markdownQueryResult = await graphql(
    `
      query ($dateFormat: String) {
        allAirtable(
          filter: { table: { eq: "Activities" }, data : { Status: {eq: "Publish"} } }
        ) {
          edges {
            node {
              data {
                Title
                Card
                For
                Slug
                Apps
                Date(formatString: $dateFormat)
                Status
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

  const appsSet = new Set();
  const cardsSet = new Set();
  const forSet = new Set();

  const postsEdges = markdownQueryResult.data.allAirtable.edges;

  postsEdges.sort((postA, postB) => {
    const dateA = moment(
      postA.node.data.Date,
      siteConfig.dateFormat
    );

    const dateB = moment(
      postB.node.data.Date,
      siteConfig.dateFormat
    );

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  postsEdges.forEach((edge, index) => {

    if (edge.node.data.For) {
      edge.node.data.For.forEach(For => {
        forSet.add(For);
      });
    }

    if (edge.node.data.Card) {
      cardsSet.add(edge.node.data.Card);
    }

    if (edge.node.data.Apps) {
      appsSet.add(edge.node.data.Apps);
    }

    const nextID = index + 1 < postsEdges.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;
    const nextEdge = postsEdges[nextID];
    const prevEdge = postsEdges[prevID];

    createPage({
      path:edge.node.data.Slug,
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

  appsSet.forEach(Apps => {
    createPage({
      path: `/apps/${_.kebabCase(Apps)}/`,
      component: appsPage,
      context: {
        Apps,
        dateFormat: siteConfig.dateFormat
      }
    });
  });

  cardsSet.forEach(Card => {
    createPage({
      path: `/processes/${_.kebabCase(Card)}/`,
      component: cardPage,
      context: {
        Card,
        dateFormat: siteConfig.dateFormat
      }
    });
  });
  
  forSet.forEach(For => {
    createPage({
      path: `/for/${_.kebabCase(For)}/`,
      component: forPage,
      context: {
        For,
        dateFormat: siteConfig.dateFormat
      }
    });
  });
};
