import React from "react";
import Helmet from "react-helmet";
import { graphql, Link} from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const latestPosts = this.props.data.latest.edges;
    const emotionPosts = this.props.data.emotion.edges;
    const clarificationPosts = this.props.data.clarification.edges;
   
    return (
      <Layout>
        <Helmet>
          <title>{`${config.siteTitleAlt}`}</title>
          <SEO />
        </Helmet>
        <section class="wrap wrap p-8 lg:py-12">   
          <div className="griddled">
            <div>
              <h1 className="page-title mb-6">
                Virtual Facilitator Cards Facilitation Guide
              </h1>
              <div className="bg-gray-100 p-6 mb-6 lg:mb-8 rounded prose">
                👋 &nbsp;&nbsp;Hi friend! Welcome to your new source of activities for easy, creative virtual facilitation on Zoom! Quick heads up: <strong>this app is still in super-duper-beta</strong>. (We really leaned into the <a href="https://www.facilitator.cards/cards/whats-the-mvp/" target="_blank" rel="noopener noreferrer">What's the MVP?</a> process, and decided it was <a href="https://www.facilitator.cards/cards/urgent-vs-important-grid/" target="_blank" rel="noopener noreferrer">Important <em>and</em> Urgent</a> to get this out to you now, even though it's not done.) 
              </div>
            </div>
            <div className="flex flex-wrap md:flex-col text-base">
              <a className="btn mr-2 mb-2" href="https://airtable.com/shrseBJBvstTx2kbX" target="_blank" rel="noopener noreferrer">🐞&nbsp;&nbsp;Report a Bug</a>
              <a className="btn mr-2 mb-2" href="https://airtable.com/shrkpcTZ2fd6wkLPV" target="_blank" rel="noopener noreferrer">🌱&nbsp;&nbsp; Suggest an Improvement</a>
            </div>
          </div>
        </section>
        <section className="griddled wrap pb-10">
          <aside className="sidebar mt-6 px-8 md:p-0">
          </aside>
          <div>
            <h2 className="theme-font font-black text-lg md:text-xl uppercase mb-4 text-gray-500">Latest Activities</h2>
            <PostListing postEdges={latestPosts} />
          </div>
        </section>
        <section className="griddled wrap pb-10">
          <aside className="sidebar mt-6 px-8 md:p-0">
          </aside>
          <div>
            <h2 className="theme-font font-black text-lg md:text-xl uppercase mb-4 text-gray-500">
              Latest <Link to={`/for/emotion`} className="text-teal-500"><i className="fci fci-emotion mr-1"></i>Emotion</Link> Activities
            </h2>
            <PostListing postEdges={emotionPosts} />
          </div>
        </section>
        <section className="griddled wrap pb-10">
          <aside className="sidebar mt-6 px-8 md:p-0">
          </aside>
          <div>
            <h2 className="theme-font font-black text-lg md:text-xl uppercase mb-4 text-gray-500">
              Latest <Link to={`/for/clarification`} className="text-yellow-500"><i className="fci fci-clarification mr-1"></i>Clarification</Link> Activities
            </h2>
            <PostListing postEdges={clarificationPosts} />
          </div>
        </section>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    latest: allAirtable(
      limit: 4
      filter: {data: {Status: {eq: "Publish"}}}
    ) {
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
    emotion: allAirtable(
      limit: 4
      filter: {data: {Status: {eq: "Publish"}, For: {eq: "emotion"}}}
    ) {
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
    clarification: allAirtable(
      limit: 4
      filter: {data: {Status: {eq: "Publish"}, For: {eq: "clarification"}}}
    ) {
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
