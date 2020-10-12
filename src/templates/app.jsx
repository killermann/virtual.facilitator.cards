import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class AppsTemplate extends React.Component {
  render() {
    const { Apps } = this.props.pageContext;
    const postEdges = this.props.data.allAirtable.edges;
    return (
      <Layout>
        <div className="Apps-container">
          <Helmet
            title={`Activities for Virtual Facilitation on Zoom using ${Apps} | ${config.siteTitle}`}
          />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AppsPage($Apps: String) {
    allAirtable(
      limit: 1000
      filter: { data : { Apps: { eq: $Apps }, Status: {eq: "publish"} } }
    ) {
      totalCount
      edges {
        node {
          data {
            Title
            Apps
            Slug
          }
        }
      }
    }
  }
`;
