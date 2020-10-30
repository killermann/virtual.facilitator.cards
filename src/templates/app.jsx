import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
const { toLaxTitleCase } = require('titlecase');
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import AppsListing from "../components/AppsListing/AppsListing";
import AuthorsListing from "../components/AuthorsListing/AuthorsListing";

export default class AppsTemplate extends React.Component {
  render() {
    const { Apps } = this.props.pageContext;
    const postEdges = this.props.data.allAirtable.edges;
    return (
      <Layout>
      <div className={Apps}>
        <Helmet
          title={`Activities for Virtual Facilitation on Zoom using ${Apps} | Facilitator Cards`}
        />
        <header className="tax-header bg-gray-100">
          <div className="wrap py-8 lg:py-12 griddled">
            <div>
              <h1 className="page-title mb-6">
                Activities for Virtual Facilitation on Zoom using {Apps}
              </h1>
              <p className="text-lg theme-font lg:text-xl mb-6 md:mb-0">
                Activities that use {Apps} to replace in-person props, leading to easy and creative remote remote facilitation, contributed by facilitators like <AuthorsListing postEdges={postEdges} />.
              </p>
            </div>
            <aside className="relative">
              
            </aside>
          </div>
        </header>
        <main class="wrap griddled pt-6 lg:pt-12">
          <PostListing postEdges={postEdges} />
        </main>
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
