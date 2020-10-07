import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class CardTemplate extends React.Component {
  render() {
    const { Card } = this.props.pageContext;
    const postEdges = this.props.data.allAirtable.edges;
    return (
      <Layout>
        <div className="Card-container">
          <Helmet
            title={`Posts in Card "${Card}" | ${config.siteTitle}`}
          />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($Card: String) {
    allAirtable(
      limit: 1000
      filter: { data : { Card: { eq: $Card }, Status: {eq: "publish"} } }
    ) {
      totalCount
      edges {
        node {
          data {
            Title
            Card
            Slug
          }
        }
      }
    }
  }
`;
