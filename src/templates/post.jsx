import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Gravatar from "react-gravatar";
import kebabCase from "lodash/kebabCase";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Author from "../components/Author/Author"
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";


export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.airtable;
    const post = postNode.data;
    const author = post.Author ? post.Author[0].data.First_Name + " " + post.Author[0].data.Last_Name : post.Name;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category) {
      post.category = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet title={`${post.Title} | ${config.siteTitle}`} />
          <SEO postPath={slug} postNode={postNode} postSEO />
          <main className={post.For}>
            <header className="post-header p-8 text-white text-center">
              <span className="app-icon zoom">Zoom</span>
              { post.Apps && 
                <span className={"app-icon " + kebabCase(post.Apps)}>
                   + {post.Apps}
                </span>
              }
            </header>
            <article className="griddled wrap p-6 lg:p-12">
              <aside className="sidebar hidden md:block">
                <nav className="theme-font py-6 text-lg md:sticky md:top-0">
                  <h2 id="table-of-contents">
                    Jump to:
                  </h2>
                  <ol className="font-black">
                    {post.Gist && <li><Link to="#gist">Gist</Link></li>}
                    {post.Steps && <li><Link to="#step-by-step">Step-by-Step</Link></li>}
                    {post.Prep && <li><Link to="#prep">Prep</Link></li>}
                    {post.Context && <li><Link to="#context">Context</Link></li>}
                    {author && <li><Link to="#author">Author</Link></li>}
                  </ol>
                </nav>
              </aside>
              <div className="primary lg:pr-6">
                <h1 className="theme-font text-3xl lg:text-4xl font-black">
                  {post.Title}
                </h1>
                <div className="byline my-6">
                  <a className="flex items-center" href="#author">
                    <Gravatar email={post.Email} size={46} className="rounded mr-2 border-gray-300 border-2" alt={'Author Headshot'} />
                    <span className="uppercase text-lg theme-font font-black text-gray-600">{author}</span></a>
                </div>
             
                <section id="gist" className="text-lg lg:text-xl prose" dangerouslySetInnerHTML={{ __html: post.Gist.childMarkdownRemark.html }} />
                
                {post.Steps && 
                  <section className="mt-12" id="step-by-step">
                    <h2 className="theme-font text-2xl lg:text-3xl font-black mb-2">Step-by-Step Instructions</h2>
                    <div className="bg-gray-100 prose rounded p-6 md:p-8 lg:p-10" dangerouslySetInnerHTML={{ __html: post.Steps.childMarkdownRemark.html }} />
                  </section>
                }

                {post.Prep && 
                  <section className="mt-12" id="prep">
                    <h2 className="theme-font text-2xl lg:text-3xl font-black mb-2">Prep</h2>
                    <div className="bg-gray-100 prose rounded p-6 md:p-8 lg:p-10" dangerouslySetInnerHTML={{ __html: post.Prep.childMarkdownRemark.html }} />
                  </section>
                }
                
                {post.Context && 
                  <section className="mt-12" id="context">
                    <h2 className="theme-font text-2xl lg:text-3xl font-black mb-2">Context</h2>
                    <div className="bg-gray-100 prose rounded p-6 md:p-8 lg:p-10" dangerouslySetInnerHTML={{ __html: post.Context.childMarkdownRemark.html }} />
                  </section>
                }

                
                <div className="post-meta">
                  <PostTags tags={post.tags} />
                  {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
                </div>
                {author && <UserInfo author={author} />}
                {author &&
                  <section className="mt-12" id="author">
                    <h2 className="theme-font text-2xl lg:text-3xl font-black mb-2">Author</h2>
                    <Author post={post} />
                  </section>
                }
              </div>
            </article>
          </main>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    airtable(data: {Slug: {eq: $slug}}) {
      data {
        Title
        For
        Name
        Email
        Apps
        Author {
          data {
            First_Name
            Last_Name
            Author_Email
            Author_Bio
            Location
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
        Steps {
          childMarkdownRemark {
            html
          }
        }
        Prep {
          childMarkdownRemark {
            html
          }
        }
        Context {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
