import React, { useRef, useEffect } from 'react'
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Gravatar from "react-gravatar";
import kebabCase from "lodash/kebabCase";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Author from "../components/Author/Author"
import PostTags from "../components/PostTags/PostTags";
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
          <Helmet>
            <title>{`${post.Title} | ${config.siteTitle}`}</title>
            <SEO postPath={slug} postNode={postNode} postSEO />
          </Helmet>
          <main className={post.For}>
            <header className="post-header text-white ">
              <div class="wrap p-8 lg:py-12 flex flex-wrap leading-none justify-center items-center font-black theme-font font-black text-3xl lg:text-4xl">
                <span className="fci fci-zoom"><span className="sr-only">Zoom</span></span>
                { post.Apps && <span>&nbsp;+&nbsp;</span> }
                { post.Apps && 
                <Link title={post.Apps} to={`/apps/${kebabCase(post.Apps)}`} className={`hover:opacity-75 fci fci-${kebabCase(post.Apps)}`} style={{ color: '#fff' }}><span className="sr-only">{post.apps}</span></Link>}
              </div>
            </header>
            <article className="griddled wrap p-6 lg:p-12 bg-white">
              <aside className="sidebar hidden md:block">
                <nav className="theme-font py-6 text-lg md:sticky md:top-0 leading-none">
                  <h2 className="p-2" id="table-of-contents">
                    Contents:
                  </h2>
                  <ol className="font-black">
                    {post.Gist && <li><a className="submenu p-2 block" href="#gist">Gist</a ></li>}
                    {post.Steps && <li><a className="submenu p-2 block" href="#step-by-step">Step-by-Step</a  ></li>}
                    {post.Prep && <li><a className="submenu p-2 block" href="#prep">Prep</a ></li>}
                    {post.Context && <li><a className="submenu p-2 block" href="#context">Context</a  ></li>}
                    {author && <li><a className="submenu p-2 block" href="#author">Author</a  ></li>}
                  </ol>
                </nav>
              </aside>
              <div className="primary lg:pr-6">
                <h1 className="page-title">
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
                    <h2 className="theme-font text-xl md:text-2xl lg:text-3xl font-black mb-2">Step-by-Step Instructions</h2>
                    <div className="bg-gray-100 prose rounded p-6 md:p-8 lg:p-10" dangerouslySetInnerHTML={{ __html: post.Steps.childMarkdownRemark.html }} />
                  </section>
                }

                {post.Prep && 
                  <section className="mt-12" id="prep">
                    <h2 className="theme-font text-xl md:text-2xl lg:text-3xl font-black mb-2">Prep</h2>
                    <div className="bg-gray-100 prose rounded p-6 md:p-8 lg:p-10" dangerouslySetInnerHTML={{ __html: post.Prep.childMarkdownRemark.html }} />
                  </section>
                }
                
                {post.Context && 
                  <section className="mt-12" id="context">
                    <h2 className="theme-font text-xl md:text-2xl lg:text-3xl font-black mb-2">Context</h2>
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
                    <h2 className="theme-font text-xl md:text-2xl lg:text-3xl font-black mb-2">Author</h2>
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

// const observer = useRef();

// useEffect(() => {
//   observer.current = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         const id = entry.target.getAttribute('id');
//         if (entry.intersectionRatio > 0) {
//             document.querySelector(`nav li a[href="#${id}"]`).classList.add('active');
//         } else {
//             document.querySelector(`nav li a[href="#${id}"]`).classList.remove('active');
//         }
//     });

//   });
// }, [
//   // Track all sections that have an `id` applied
//   document.querySelectorAll('section[id]').forEach((section) => {
//       observer.observe(section);
//   })
// ]);

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    airtable(data: {Slug: {eq: $slug}}) {
      data {
        Title
        For
        Prop_1
        Prop_2
        Prop_3
        Explanation
        Name
        Email
        Apps
        Slug
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
