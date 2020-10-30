import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql, Link} from "gatsby";
import Img from "gatsby-image";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const hero = this.props.data.hero;
    const latestPosts = this.props.data.latest.edges;
    const emotionPosts = this.props.data.emotion.edges;
    const ideationPosts = this.props.data.ideation.edges;
    const clarificationPosts = this.props.data.clarification.edges;
    const executionPosts = this.props.data.execution.edges;

    return (
      <Layout>
        <Helmet>
          <title>{`${config.siteTitleAlt}`}</title>
          <SEO />
        </Helmet>
        <section class="relative">
          <div className="absolute top-0 left-0 right-0 z-0">
            <Img fluid={hero.childImageSharp.fluid} alt="Facilitator Cards tangled in a webcam" />
          </div>  
          <div className="p-8 lg:py-10 relative griddled wrap z-100">
            <div>
              <h1 className="page-title mb-6 lg:py-6 xl:text-4xl xl:pt-12 xl:text-5xl">
                Virtual Facilitator Cards Facilitation Guide
              </h1>
              <div className="md:p-6 md:mb-6 lg:mb-8 lg:mb-12 xl:mb-20 rounded prose" style={{background: 'rgba(255,255,255,.9)'}}>
                <p>
                  👋 &nbsp;Hi friend! Welcome to your new source of activities for easy, creative virtual facilitation on Zoom! Every week, we'll add 4 new activities, as well as new replies from facilitators who are testing and tweaking them. Join the <Link to={`/newsletter`}>free newsletter</Link> for updates.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative griddled wrap pb-10">
          <div className="primary">
            <h2 className="theme-font font-black text-lg md:text-xl uppercase mb-8">Latest Activities</h2>
            <PostListing postEdges={latestPosts} />
          </div>
          <aside className="sidebar relative md:-mt-6 md:pt-6">
            <p className="bg-white rounded mt-6 md:mt-0 md:p-4 leading-tight">
              Quick heads up: <strong>this app is still in super-duper-beta</strong>. (We really leaned into the <a className="underline hover:text-teal-600" href="https://www.facilitator.cards/cards/whats-the-mvp/" target="_blank" rel="noopener noreferrer">What's the MVP?</a> process, and decided it was <a className="underline hover:text-teal-600" href="https://www.facilitator.cards/cards/urgent-vs-important-grid/" target="_blank" rel="noopener noreferrer">Important <em>and</em> Urgent</a> to get this out to you now, even though it's not done.) 
            </p>
            <div className="sticky top-0 pt-6 flex flex-wrap md:flex-col text-base">
              <a className="btn mr-2 mb-2" href="https://airtable.com/shrseBJBvstTx2kbX" target="_blank" rel="noopener noreferrer">🐞&nbsp;Report Bug</a>
              <a className="btn mr-2 mb-2" href="https://airtable.com/shrkpcTZ2fd6wkLPV" target="_blank" rel="noopener noreferrer">🌱&nbsp; Suggest Improvement</a>
              <Link className="btn btn-cta-alt mr-2 mb-2" to={`/newsletter`}>💌&nbsp; Join Newsletter</Link>
            </div>
          </aside>
        </section>
        <section className="bg-gradient-to-br from-teal-700 to-teal-500 text-teal-200 md:m-2 md:rounded-sm">
          <div className="griddled wrap">
            <div className="border-t-8 py-8 border-teal-500">
              <h2 className="theme-font font-black text-lg md:text-xl uppercase mb-8">
                Latest <Link to={`/for/emotion`} className="text-white"><i className="fci fci-emotion mr-1"></i>Emotion</Link> Activities
              </h2>
              <PostListing postEdges={emotionPosts} />
            </div>
            <aside className="sidebar relative">
              <div className="md:sticky -mt-6 md:mt-0 pb-6 md:py-12 top-0">
                <p className="bg-teal-800 p-6 text-white rounded">
                  <strong><i className="fci fci-emotion"></i> Emotion</strong> activities are processes for surfacing thoughts, feelings, reactions, and predispositions. <Link className="font-black theme-font block mt-2 pt-2" to={`/for/emotion`}>View All &rarr;</Link>
                </p>
              </div>
            </aside>
          </div>
        </section>
        <section className="bg-gradient-to-br from-green-700 to-green-500 text-green-200 md:m-2 md:rounded-sm">
          <div className="griddled wrap">
            <div className="border-t-8 py-8 border-green-500">
              <h2 className="theme-font font-black text-lg md:text-xl uppercase mb-8">
                Latest <Link to={`/for/ideation`} className="text-white"><i className="fci fci-ideation mr-1"></i>Ideation</Link> Activities
              </h2>
              <PostListing postEdges={ideationPosts} />
            </div>
            <aside className="sidebar relative">
              <div className="md:sticky -mt-6 md:mt-0 pb-6 md:py-12 top-0">
                <p className="bg-green-800 p-6 text-white rounded">
                  <strong><i className="fci fci-ideation"></i> Ideation</strong> activities are processes for forming, generating, and brainstorming ideas &amp; concepts. <Link className="font-black theme-font block mt-2 pt-2" to={`/for/ideation`}>View All &rarr;</Link>
                </p>
              </div>
            </aside>
          </div>
        </section>
        <section className="bg-gradient-to-br from-yellow-700 to-yellow-500 text-yellow-200 md:m-2 md:rounded-sm">
          <div className="griddled wrap">
            <div className="border-t-8 py-8 border-yellow-500">
              <h2 className="theme-font font-black text-lg md:text-xl uppercase mb-8">
                Latest <Link to={`/for/clarification`} className="text-white"><i className="fci fci-clarification mr-1"></i>Clarification</Link> Activities
              </h2>
              <PostListing postEdges={clarificationPosts} />
            </div>
            <aside className="sidebar relative">
              <div className="md:sticky -mt-6 md:mt-0 pb-6 md:py-12 top-0">
                <p className="bg-yellow-800 p-6 text-white rounded">
                  <strong><i className="fci fci-clarification"></i> Clarification</strong> activities are processes for distilling, pinpointing, getting to the bottom, and finding common ground. <Link className="font-black theme-font block mt-2 pt-2" to={`/for/clarification`}>View All &rarr;</Link>
                </p>
              </div>
            </aside>
          </div>
        </section>
        <section className="bg-gradient-to-br from-red-700 to-red-500 text-red-200 md:m-2 md:rounded-sm">
          <div className="griddled wrap">
            <div className="border-t-8 py-8 border-red-500">
              <h2 className="theme-font font-black text-lg md:text-xl uppercase mb-8">
                Latest <Link to={`/for/execution`} className="text-white"><i className="fci fci-execution mr-1"></i>Execution</Link> Activities
              </h2>
              <PostListing postEdges={executionPosts} />
            </div>
            <aside className="sidebar relative">
              <div className="md:sticky -mt-6 md:mt-0 pb-6 md:py-12 top-0">
                <p className="bg-red-800 p-6 text-white rounded">
                  <strong><i className="fci fci-execution"></i> Execution</strong> activities are processes for decision-making, planning, strategizing, and directing. <Link className="font-black theme-font block mt-2 pt-2" to={`/for/execution`}>View All &rarr;</Link>
                </p>
              </div>
            </aside>
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
    hero: file(relativePath: { eq: "hero-webcam-facilitator-cards-1600w.jpg" }) {
      childImageSharp {
        fluid (maxWidth: 1600, quality: 100){
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
    latest: allAirtable(
      limit: 8
      filter: {
        data: {Status: {eq: "Publish"}}, 
        table: {eq: "Activities"}
      }) {
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
            Replies {
              data {
                Reply_Name
                Reply_Email
              }
            }
          }
        }
      }
    }
    emotion: allAirtable(
      limit: 4
      filter: {
        table: {eq: "Activities"}, 
        data: {Status: {eq: "Publish"}, For: {eq: "emotion"}}
      }){
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
            Replies {
              data {
                Reply_Name
                Reply_Email
              }
            }
          }
        }
      }
    }
    ideation: allAirtable(
      limit: 4
      filter: {
        table: {eq: "Activities"}, 
        data: {Status: {eq: "Publish"}, For: {eq: "ideation"}}
      }){
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
            Replies {
              data {
                Reply_Name
                Reply_Email
              }
            }
          }
        }
      }
    }
    clarification: allAirtable(
      limit: 4
      filter: {
        table: {eq: "Activities"}, 
        data: {Status: {eq: "Publish"}, For: {eq: "clarification"}}
      }){
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
            Replies {
              data {
                Reply_Name
                Reply_Email
              }
            }
          }
        }
      }
    }
    execution: allAirtable(
      limit: 4
      filter: {
        table: {eq: "Activities"}, 
        data: {Status: {eq: "Publish"}, For: {eq: "execution"}}
      }){
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
            Replies {
              data {
                Reply_Name
                Reply_Email
              }
            }
          }
        }
      }
    }
  }
`;
