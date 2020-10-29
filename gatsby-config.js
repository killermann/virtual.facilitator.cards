const urljoin = require("url-join");
const config = require("./data/SiteConfig");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require(`path`)

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix
      )}/logos/logo-512.png`,
      copyright: config.copyright
    }
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `assets`,
        path: `${__dirname}/static/`,
        name: `images`,
        path: path.join(__dirname, `src`, `img`),
      }
    },
	  {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // specify via env
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE, // specify via env
            tableName: process.env.AIRTABLE_TABLE_NAME, // specify via env
            queryName: `posts`, // optional
            tableLinks: [`Author`,`Replies`],
            mapping: { 
              Gist: `text/markdown`, 
              Steps: `text/markdown`,
              Prep:  `text/markdown`,
              Context: `text/markdown`
            },
          },
          {
            baseId:  process.env.AIRTABLE_BASE,
            tableName: process.env.AIRTABLE_TABLE_NAME_LINKED,
            tableLinks: [`Activities`],
          },
          {
            baseId:  process.env.AIRTABLE_BASE,
            tableName: `Replies`,
            mapping: {
              Conditions: `text/markdown`,
              Results: `text/markdown`,
              Tweaks: `text/markdown`
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 690
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe"
          },
          "gatsby-remark-copy-linked-files",
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor
      }
    },
    "gatsby-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-twitter",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.siteUrl,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icon: `src/img/icon.png`,
      }
    },
    "gatsby-plugin-offline"
  ]
};
