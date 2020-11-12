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
          <div className="md:absolute top-0 left-0 right-0 z-0">
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
            <h2 className="theme-font font-black text-lg md:text-xl uppercase mb-2">Latest <svg aria-hidden="true" focusable="false" className="w-8 h-auto inline text-gray-900" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 256.01c0-12.86-7.53-24.42-19.12-29.44l-79.69-34.58 79.66-34.57c11.62-5.03 19.16-16.59 19.16-29.44s-7.53-24.41-19.12-29.42L274.66 3.89c-11.84-5.17-25.44-5.19-37.28-.02L19.16 98.55C7.53 103.58 0 115.14 0 127.99s7.53 24.41 19.12 29.42l79.7 34.58-79.67 34.57C7.53 231.58 0 243.15 0 256.01c0 12.84 7.53 24.41 19.12 29.42L98.81 320l-79.65 34.56C7.53 359.59 0 371.15 0 384.01c0 12.84 7.53 24.41 19.12 29.42l218.28 94.69a46.488 46.488 0 0 0 18.59 3.88c6.34-.02 12.69-1.3 18.59-3.86l218.25-94.69c11.62-5.03 19.16-16.59 19.16-29.44 0-12.86-7.53-24.42-19.12-29.44L413.19 320l79.65-34.56c11.63-5.03 19.16-16.59 19.16-29.43zM255.47 47.89l.03.02h-.06l.03-.02zm.53.23l184.16 79.89-183.63 80.09-184.62-80.11L256 48.12zm184.19 335.92l-183.66 80.07L71.91 384l87.21-37.84 78.29 33.96A46.488 46.488 0 0 0 256 384c6.34-.02 12.69-1.3 18.59-3.86l78.29-33.97 87.31 37.87zM256.53 336.1L71.91 255.99l87.22-37.84 78.28 33.96a46.488 46.488 0 0 0 18.59 3.88c6.34-.02 12.69-1.3 18.59-3.86l78.29-33.97 87.31 37.88-183.66 80.06z"></path></svg> Stack</h2>
            <p className="text-lg theme-font mb-6 rounded-sm">Read the <a className="underline hover:text-gray-500" href="https://www.facilitator.cards/blog/virtual-facilitation-minute-papers-10-10-10-analysis/" target="_blank" rel="noopener noreferrer">detailed agenda on the Facilitator Cards Blog</a> for facilitating this stack.</p>
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
      limit: 4,
      sort: {order: DESC, fields: data___Published_Date},
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
