import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
const { toLaxTitleCase } = require('titlecase');
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import AppsListing from "../components/AppsListing/AppsListing";
import AuthorsListing from "../components/AuthorsListing/AuthorsListing";

export default class ForTemplate extends React.Component {
  render() {
    const { For } = this.props.pageContext;
    const postEdges = this.props.data.allAirtable.edges;
    return (
      <Layout>
        <div className={For}>
          <Helmet
            title={`Virtual Activities for Facilitating ${toLaxTitleCase(For)} Processes | Facilitator Cards`}
          />
          <header className="tax-header bg-gray-100 lg:mb-4">
            <div className="wrap p-8 lg:py-12 griddled">
              <div>
                <h1 className="theme-font text-3xl lg:text-4xl font-black mb-6">
                  Virtual Activities for Facilitating <span>{toLaxTitleCase(For)}</span> Processes
                </h1>
                <p className="text-lg theme-font lg:text-xl">
                  Activities for surfacing thoughts, feelings, reactions, and predispositions on Zoom, using apps like <AppsListing postEdges={postEdges} />, contributed by facilitators like <AuthorsListing postEdges={postEdges} />.
                </p>
              </div>
              <aside className="relative">
                <div className="rounded bg-gray-200 mt-6 p-6 mb-4 md:my-0 md:fixed md:mr-8 theme-font">
                  <h3 className="text-center mb-2">Activities for:</h3>
                  <ul className="text-lg flex justify-center flex-wrap flex-grow leading-none">
                    <li><Link className="p-2 block mr-2" activeClassName="active submenu" to={'/for/emotion'}>Emotion</Link></li>
                    <li><Link className="p-2 block mr-2" activeClassName="active submenu" to={'/for/ideation'}>Ideation</Link></li>
                    <li><Link className="p-2 block mr-2" activeClassName="active submenu" to={'/for/clarification'}>Clarification</Link></li>
                    <li><Link className="p-2 block mr-2" activeClassName="active submenu" to={'/for/execution'}>Execution</Link></li>
                  </ul>
                </div>
              </aside>
            </div>
          </header>
          <main class="wrap griddled">
            <PostListing postEdges={postEdges} />
          </main>
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
      filter: { data : { For: { eq: $For }, Status: {eq: "Publish"} } }
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
