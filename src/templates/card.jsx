import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
const { toLaxTitleCase } = require('titlecase');
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import AppsListing from "../components/AppsListing/AppsListing";
import AuthorsListing from "../components/AuthorsListing/AuthorsListing";

export default class CardTemplate extends React.Component {
  render() {
    const { Card } = this.props.pageContext;
    const postEdges = this.props.data.allAirtable.edges;
    return (
      <Layout>
        <div className={Card}>
          <Helmet
            title={`${Card} Virtual Facilitation Activities | Facilitator Cards`}
          />
          <header className="tax-header bg-gray-100">
            <div className="wrap lg:py-12 griddled">
              <div>
                <h1 className="page-title mb-6">
                  <span>{toLaxTitleCase(Card)}</span> Virtual Facilitation Activities
                </h1>
                <p className="text-lg theme-font lg:text-xl">
                  Activities facilitating {Card} on Zoom, replacing the in-person props with apps like <AppsListing postEdges={postEdges} />, contributed by facilitators like <AuthorsListing postEdges={postEdges} />.
                </p>
              </div>
              <aside className="relative">
                <div className="rounded mt-6 p-6 mb-4 md:my-0 md:fixed md:mr-8 theme-font">
                  
                </div>
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
  query CardPage($Card: String) {
    allAirtable(
      limit: 1000
      filter: { data : { Card: { eq: $Card }, Status: {eq: "Publish"} } }
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
