import React from "react";
import { Link } from "gatsby";
import Gravatar from "react-gravatar";
import kebabCase from "lodash/kebabCase";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.data.Slug,
        category: postEdge.node.data.Category,
        image: postEdge.node.data.image ? postEdge.node.data.image[0] : null,
        title: postEdge.node.data.Title,
        email: postEdge.node.data.Email,
        author: postEdge.node.data.Author ? postEdge.node.data.Author[0].data.First_Name + " " + postEdge.node.data.Author[0].data.Last_Name : postEdge.node.data.Name,
        gist: postEdge.node.data.Gist,
        for: postEdge.node.data.For,
        apps: postEdge.node.data.Apps,
        replies: postEdge.node.data.Replies ? postEdge.node.data.Replies : null,
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="grid grid-flow-row grid-cols-1 gap-6 lg:gap-8 pb-6 lg:pb-8 sm:grid-cols-2">
        { postList.map(post => (
          <div key={post.title} className={`flex items-stretch ${post.for}`}>
            <Link className="post-box flex flex-col justify-between items-stretch bg-white rounded flex items-stretch shadow-xl overflow-hidden hover:shadow-2xl focus:shadow-2xl pop-out" to={`/${post.path}`} key={post.title}>
              <div>
                <header className="post-header for-bg py-8 px-1 theme-font text-white font-black flex flex-wrap leading-none items-center text-2xl lg:text-3xl justify-center">
                  <span className="fci fci-zoom"><span className="sr-only">Zoom</span></span>
                  { post.apps && <span>&nbsp;+&nbsp;</span> }
                  { post.apps && <span className={`fci fci-${kebabCase(post.apps)}`}><span className="sr-only">{post.apps}</span></span>}
                  { post.for && <span><span className="inline-block" style={{transform: 'translateY(-.1em)'}}>&nbsp;=</span><i className={`ml-1 fci fci-${kebabCase(post.for)}`}></i></span>}
                </header>
                <section className="p-6 pb-4">
                  <h3 className="theme-font text-color-default font-black text-xl mb-4">{post.title}</h3>
                  <div className="text-gray-900" dangerouslySetInnerHTML={{ __html: post.gist.childMarkdownRemark.html }} />    
                </section>
              </div>
              <footer className="byline flex justify-between justify-self-end items-center px-6 pb-6 theme-font font-black text-gray-600">
                <div className="flex items-center">
                  <Gravatar email={post.email} size={36} className="rounded mr-2 border-2 border-white" alt={'Author Headshot'} />
                  <span className="uppercase">{post.author}</span>
                </div>
                {post.replies && 
                  <div className="flex items-center">
                    <span>+&nbsp;</span>
                    <Gravatar email={post.replies[0].data.Reply_Email} size={36} className="rounded border-2 border-white" alt={'Author Headshot'} />
                    
                    {post.replies[1] && <Gravatar email={post.replies[1].data.Reply_Email} size={36} className="-ml-2 rounded border-2 border-white" alt={'Replier Headshot'} /> }

                    {post.replies[2] && <Gravatar email={post.replies[2].data.Reply_Email} size={36} className="-ml-2 rounded border-2 border-white" alt={'Replier Headshot'} /> }
                  </div>
                }
              </footer>
            </Link>
            
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
