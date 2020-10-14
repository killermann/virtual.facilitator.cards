import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";

export default class AppsTemplate extends React.Component {
  render() {
    const { Apps } = this.props.pageContext;
    const postEdges = this.props.data.allAirtable.edges;
    return (
      <Layout>
        <div className="Apps-container">
          <Helmet
            title={`Activities for Virtual Facilitation on Zoom using ${Apps} | Facilitator Cards`}
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
      filter: { data : { Apps: { eq: $Apps }, Status: {eq: "Publish"} } }
    ) {
      totalCount
      edges {
        node {
          data {
            Title
            Card
            Slug
            Name
            For
            Email
            Apps
            Status
            Author {
              data {
                First_Name
                Last_Name
                Author_Email
                Author_Bio
                LinkedIn
                Instagram
                Website
                Twitter
              }
            }
            Gist {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`;
