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
import FacilitatorCard from "../components/FacilitatorCard/FacilitatorCard";
import Replies from "../components/Replies/Replies";


export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.airtable;
    const post = postNode.data;
    const author = post.Author ? post.Author[0].data.First_Name + " " + post.Author[0].data.Last_Name : post.Name;
    const replies = post.Replies ? post.Replies : null;
    const titlePlusAuthor = `${post.Title} by ${post.Name}`;
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
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <main className={post.For}>
            <header className="post-header for-bg text-white">
              <div class="wrap p-8 lg:py-12 flex flex-wrap leading-none justify-center items-center font-black theme-font font-black text-3xl lg:text-4xl">
                <span className="fci fci-zoom"><span className="sr-only">Zoom</span></span>
                { post.Apps && <span>&nbsp;+&nbsp;</span> }
                { post.Apps && 
                <Link title={post.Apps} to={`/apps/${kebabCase(post.Apps)}`} className={`pop-out fci fci-${kebabCase(post.Apps)}`} style={{ color: '#fff' }}><span className="sr-only">{post.apps}</span></Link>}
                { post.For && <span className="inline-block" style={{transform: 'translateY(-.1em)'}}>&nbsp;=</span> }
                { post.For && 
                <Link to={`/for/${kebabCase(post.For)}`} className={`ml-1 pop-out`} style={{ color: '#fff' }}><i className={`fci fci-${kebabCase(post.For)}`}></i></Link>}
              </div>
            </header>
            <article className="griddled wrap p-6 lg:p-12 bg-white">
              <aside className="sidebar hidden md:block">
                <div>
                  <div className="text-sm mb-2 text-gray-700 text-center">Facilitate this card &darr;</div>
                  <Link className="pop-out block" to={`/processes/${kebabCase(post.Card)}`}>
                    <FacilitatorCard 
                      Card={post.Card} 
                      For={post.For} 
                      Group={post.Group} 
                      Explanation={post.Explanation} 
                      Prop_1={post.Prop_1} 
                      Prop_2={post.Prop_2} 
                      Prop_3={post.Prop_3} 
                    />
                    </Link>
                  <div className="text-sm mt-2 text-gray-700 text-center">...but on Zoom, with digital props!</div>
                </div>
                
                <nav className="theme-font py-6 text-lg md:sticky md:top-0 leading-none">
                  <h2 className="p-2" id="table-of-contents">
                    Contents:
                  </h2>
                  <ol className="font-black">
                    {post.Gist && <li><a className="submenu p-2 block" href="#gist">Gist</a ></li>}
                    {post.Steps && <li><a className="submenu p-2 block" href="#step-by-step">Step-by-Step</a></li>}
                    {post.Prep && <li><a className="submenu p-2 block" href="#prep">Prep</a ></li>}
                    {post.Context && <li><a className="submenu p-2 block" href="#context">Context</a></li>}
                    {post.Additional_Resources && <li><a className="submenu p-2 block" href="#resources">Resources</a></li>}
                    {author && <li><a className="submenu p-2 block" href="#author">Author</a></li>}
                    {replies && <li><a className="submenu p-2 block" href="#replies">Tested &amp; Tweaked</a></li>}
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
                    <div className="bg-gray-100 prose rounded -mx-4 p-4 lg:mx-auto lg:p-8" dangerouslySetInnerHTML={{ __html: post.Steps.childMarkdownRemark.html }} />
                  </section>
                }

                {post.Prep && 
                  <section className="mt-12" id="prep">
                    <h2 className="theme-font text-xl md:text-2xl lg:text-3xl font-black mb-2">Prep</h2>
                    <div className="bg-gray-100 prose rounded -mx-4 p-4 lg:mx-auto lg:p-8" dangerouslySetInnerHTML={{ __html: post.Prep.childMarkdownRemark.html }} />
                  </section>
                }
                
                {post.Context && 
                  <section className="mt-12" id="context">
                    <h2 className="theme-font text-xl md:text-2xl lg:text-3xl font-black mb-2">Context</h2>
                    <div className="bg-gray-100 prose rounded -mx-4 p-4 lg:mx-auto lg:p-8" dangerouslySetInnerHTML={{ __html: post.Context.childMarkdownRemark.html }} />
                  </section>
                }

                {post.Additional_Resources && 
                  <section className="mt-12" id="resources">
                    <h2 className="theme-font text-xl md:text-2xl lg:text-3xl font-black mb-2">Additional Resources</h2>
                    <div className="bg-gray-100 prose rounded -mx-4 p-4 lg:mx-auto lg:p-8">
                      {(post.YouTube || post.Screencast || post.Other_Resource_Link) && <div className="mb-6 md:mb-8 lg:mb-10">
                        <h3 className="theme-font text-lg md:text-xl font-black mb-4">For More Info:</h3>
                        {post.YouTube && 
                          <p>
                            <strong className="mr-2"><span className="text-gray-700 fci inline-block w-8 text-center"><svg aria-hidden="true" focusable="false" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z"></path></svg></span><a href={post.YouTube} title="YouTube Video Explanation" target="_blank" rel="noopener noreferrer">Youtube Video Walkthrough</a></strong>
                          </p>
                          }
                          {post.Screencast && 
                          <p>
                            <strong className="mr-2"><span className="text-gray-700 fci inline-block w-8 text-center"><svg aria-hidden="true" focusable="false" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z"></path></svg></span><a href={post.Screencast} title="Screencast of Process" target="_blank" rel="noopener noreferrer">Screencast of Process</a></strong>
                          </p>
                          }
                           {post.Other_Resource_Link && 
                            <p>
                              <strong className="mr-2"><span className="text-gray-700 fci inline-block w-8 text-center"><svg aria-hidden="true" focusable="false" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z"></path></svg></span><a href={post.Other_Resource_Link} title={post.Other_Resource_Name} target="_blank" rel="noopener noreferrer">{post.Other_Resource_Name}</a></strong>
                            </p>
                            }
                      </div>}
                       {post.Type_of_Template && 
                        <div id="templates">
                          <h3 className="theme-font text-lg md:text-xl font-black mb-4">Reusable Template:</h3>
                          <div className="prose">
                            {post.Mural && 
                            <p>
                              <strong className="mr-2"><span className="text-gray-700 fci fci-mural inline-block w-8 text-center"></span>MURAL:</strong>
                              <a href={post.Mural} title="Mural template link" target="_blank" rel="noopener noreferrer">Copy MURAL template</a>
                            </p>
                            }
                            {post.Slides && 
                            <p>
                              <strong className="mr-2"><span className="text-gray-700 fci fci-google-slides  inline-block w-8 text-center"></span>Slides:</strong>
                              <a href={post.Slides} title="Slides template link" target="_blank" rel="noopener noreferrer">Copy Google Slides template</a>
                            </p>
                            }
                            {post.Docs && 
                            <p>
                              <strong className="mr-2"><span className="text-gray-700 fci fci-google-docs inline-block w-8 text-center"></span>Docs:</strong>
                              <a href={post.Docs} title="Docs template link" target="_blank" rel="noopener noreferrer">Copy Google Docs template</a>
                            </p>
                            }
                            {post.Forms && 
                            <p>
                              <strong className="mr-2"><span className="text-gray-700 fci fci-google-forms inline-block w-8 text-center"></span>Forms:</strong>
                              <a href={post.Forms} title="Forms template link" target="_blank" rel="noopener noreferrer">Copy Google Forms template</a>
                            </p>
                            }
                            {post.Drawings && 
                            <p>
                              <strong className="mr-2"><span className="text-gray-700 fci fci-google-drawings inline-block w-8 text-center"></span>Drawings:</strong>
                              <a href={post.Drawings} title="Drawings template link" target="_blank" rel="noopener noreferrer">Copy Google Drawings template</a>
                            </p>
                            }
                            {post.Other_Template_Link && 
                            <p>
                              <strong className="mr-2"><span className="text-gray-700 fci fci-custom inline-block w-8 text-center"></span>{post.Other_Template_Name}:</strong>
                              <a href={post.Other_Template_Link} title="Docs template link" target="_blank" rel="noopener noreferrer">Download template</a>
                            </p>
                            }
                          </div>
                        </div>
                      }
                    </div>
                  </section>
                }
                <div className="post-meta">
                  <PostTags tags={post.tags} />
                  {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
                </div>
                {author &&
                  <section className="mt-12" id="author">
                    <h2 className="theme-font text-xl md:text-2xl lg:text-3xl font-black mb-2">Author</h2>
                    <Author post={post} />
                  </section>
                }
              </div>
            </article>
            <section id="replies" className="wrap mt-6 pb-12">
              {replies &&
              <div>
                <h2 className="theme-font text-xl md:text-2xl lg:text-3xl text-gray-900 font-black mb-2 flex items-center flex-wrap">
                  Tested &amp; Tweaked by&nbsp;
                  <Gravatar email={replies[0].data.Reply_Email} size={52} className="rounded-sm" alt={replies[0].data.Reply_Name} />
                  {replies[1] && <Gravatar email={replies[1].data.Reply_Email} size={52} className="ml-2 rounded-sm" alt={replies[1].data.Reply_Name} /> }
                  {replies[2] && <Gravatar email={replies[2].data.Reply_Email} size={52} className="ml-2 rounded-sm" alt={replies[2].data.Reply_Name} /> }
                </h2>
                <Replies replyEdges={replies} activityTitle={titlePlusAuthor} />
              </div>
              }{ !replies &&
                <div>
                  <h2 className="theme-font text-xl md:text-2xl lg:text-3xl font-black mb-2">
                    Facilitation Testers Needed
                  </h2>
                  <div className="griddled">
                    <aside className="sidebar pb-6">
                      <p className="mb-4">
                        Zoom is uncharted territory for a lot of us who are transitioning to virtual facilitation for the first time. Want to help us chart it? :)
                      </p>
                      <a className="block text-center text-lg btn btn-cta" target="_blank" rel="noopener noreferrer" href={`https://airtable.com/shrateXsJe8xEkeAW?prefill_Reply%20Activity=${encodeURIComponent(titlePlusAuthor)}`}>
                        Contribute a Reply
                      </a>
                    </aside>
                    <div className="primary bg-gray-100 prose rounded -mx-4 p-4 lg:mx-auto lg:mr-6 lg:p-8">
                      <p className="mb-4">
                        This activity by {author} would really benefit from <strong>other facilitators testing it, tweaking it, and reporting back</strong>. If you give it a try in your virtual facilitation, all we ask is that you <a className="font-bold" target="_blank" rel="noopener noreferrer" href={`https://airtable.com/shrateXsJe8xEkeAW?prefill_Reply%20Activity=${encodeURIComponent(titlePlusAuthor)}`}>tell us how it went</a>.
                      </p>
                      <p>
                        The main things we're wondering are regarding the context you facilitated it in (with whom, and toward what goal), how well it worked (what worked and what didn't), and in what ways you altered the instructions to make it work for you.
                      </p>
                    </div>
                  </div>
                </div>
              }
            </section>
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
    airtable(
      data: {Slug: {eq: $slug}}
      ){
      data {
        Title
        For
        Card
        Group
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
        Additional_Resources
        Type_of_Template
        Slides
        Drawings
        Forms
        Docs
        Mural
        Other_Template_Name
        Other_Template_Link
        Other_Resource_Name
        Other_Resource_Link
        Screencast
        YouTube
        Replies {
          data {
            Reply_ID
            Reply_Name
            Reply_Email
            Conditions {
              childMarkdownRemark {
                html
              }
            }
            Results {
              childMarkdownRemark {
                html
              }
            }
            Tweaks {
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
