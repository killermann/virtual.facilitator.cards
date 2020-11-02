import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";

class AppsListing extends React.Component {
  getAppsList() {
    const appsList = [];
    this.props.postEdges.forEach(postEdge => {
      if(postEdge.node.data.Apps != null){
        appsList.push({
          apps: postEdge.node.data.Apps
        });
      }
    });
    return appsList;
  }
  render() {
    
    const appsList = this.getAppsList().filter(Boolean) ;

    return (
      <span>
        { appsList.slice(0,1).map((post, i) => [
          <span key={post.apps} className={"" + post.apps}>
            {/* { (appsList.length > 2 && i === appsList.length - 1) ? ' & ' : ''} */}
            <Link className="underline hover:text-black" to={`/apps/${kebabCase(post.apps)}`} key={post.apps}>
              {post.apps}
            </Link>
            {/* { (appsList.length > 2 && i < appsList.length - 1) ? ', ' : ''}
            { (appsList.length === 2 && i < appsList.length - 1) && ' & ' } */}
          </span>
        ])}
      </span>
    );
  }
}

export default AppsListing;
