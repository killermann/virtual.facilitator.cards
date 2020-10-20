import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
const { toLaxTitleCase } = require('titlecase');
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import AppsListing from "../components/AppsListing/AppsListing";
import AuthorsListing from "../components/AuthorsListing/AuthorsListing";
import FacilitatorCard from "../components/FacilitatorCard/FacilitatorCard";

export default class CardTemplate extends React.Component {
  render() {
    const { Card } = this.props.pageContext;
    const postEdges = this.props.data.allAirtable.edges;
    const firstCard = postEdges[0].node.data // fetches the first item

    return (
      <Layout>
        <Helmet title={`${Card} Virtual Facilitation Activities | Facilitator Cards`} />
        <div className={Card}>
          <header className="tax-header bg-gray-100">
            <div className="wrap py-8 lg:py-12 griddled">
              <div>
                <h1 className="page-title mb-6">
                  <span>{toLaxTitleCase(Card)}</span> Virtual Facilitation Activities
                </h1>
                <p className="text-lg theme-font lg:text-xl">
                  Activities facilitating {Card} on Zoom, replacing the in-person props with apps like <AppsListing postEdges={postEdges} />, contributed by facilitators like <AuthorsListing postEdges={postEdges} />.
                </p>
              </div>
              <aside className="relative">
                <div className="md:fixed">
                  <FacilitatorCard 
                    Card={firstCard.Card} 
                    For={firstCard.For} 
                    Group={firstCard.Group} 
                    Explanation={firstCard.Explanation} 
                    Prop_1={firstCard.Prop_1} 
                    Prop_2={firstCard.Prop_2} 
                    Prop_3={firstCard.Prop_3} 
                  />
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
            Group
            Explanation
            Prop_1
            Prop_2
            Prop_3
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
