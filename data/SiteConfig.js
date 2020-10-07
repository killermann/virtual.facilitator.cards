const config = {
  siteTitle: "Virtual Facilitator Cards", // Site title.
  siteTitleShort: "virtual.facilitator.cards", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Virtual Facilitator Cards: A Facilitation Guide for Zoom and Beyond", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://virtual.facilitator.cards", // Domain of website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. 
  siteDescription: "Activities for easy, creative virtual facilitation on Zoom", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1XXXXXXXXXXX9", // FB Application ID for using app insights
  googleAnalyticsID: "MM-XXXXXXXX-1", // GA tracking ID.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  copyright: "Uncopyright © 2020", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#3DDBD4", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
