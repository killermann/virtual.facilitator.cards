import React from "react";
import { Link } from "gatsby";
import moment from 'moment';
import siteConfig from "../../../data/SiteConfig";
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
        apps: postEdge.node.data.Apps
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="grid grid-flow-row grid-cols-1 gap-8 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        { postList.map(post => (
          <div key={post.title} className={"post-box rounded flex items-stretch shadow-xl overflow-hidden  hover:shadow-2xl transition duration-200 ease-out " + post.for}>
            <Link className="flex flex-col justify-between items-stretch" to={post.path} key={post.title}>
              <div>
                <header className="post-header p-6">
                  <span className="app-icon zoom">Zoom</span>
                  { post.apps && <span className={"app-icon " + kebabCase(post.apps)}> + {post.apps}</span>}
                </header>
                <section className="p-6 pb-4">
                  <h3 className="theme-font font-black text-xl mb-4">{post.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: post.gist.childMarkdownRemark.html }} />    
                </section>
              </div>
              <footer className="byline flex justify-self-end items-center px-6 pb-6">
                <Gravatar email={post.email} size={36} className="rounded-sm mr-2 border-gray-300 border-2" alt={'Author Headshot'} />
                <span className="uppercase theme-font font-black text-gray-600">{post.author}</span>
              </footer>
            </Link>
            
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
