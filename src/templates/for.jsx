import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class ForTemplate extends React.Component {
  render() {
    const { For } = this.props.pageContext;
    const postEdges = this.props.data.allAirtable.edges;
    return (
      <Layout>
        <div className="For-container">
          <Helmet
            title={`"Virtual Activities for Facilitating ${For} Processes" | ${config.siteTitle}`}
          />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ForPage($For: String) {
    allAirtable(
      limit: 1000
      filter: { data : { For: { eq: $For }, Status: {eq: "publish"} } }
    ) {
      totalCount
      edges {
        node {
          data {
            Title
            For
            Slug
          }
        }
      }
    }
  }
`;
