import React from "react";
import { Link } from "gatsby";

class AuthorsListing extends React.Component {
  getAuthorsList() {
    const authorsList = [];
    this.props.postEdges.forEach(postEdge => {
      authorsList.push({
        authors: postEdge.node.data.Name,
        website: postEdge.node.data.Author ? postEdge.node.data.Author[0].data.Website : null,
      });
    });
    return authorsList;
  }
  render() {
    const authorsList = this.getAuthorsList();

    // this isn't working because the uniqueness is determined by the postEdge

    var uniq = authorsList.reduce(function(a,b){
      if (a.indexOf(b) < 0 ) a.push(b);
      return a;
    },[]);

    return (
      <span>
        { uniq.slice(0,1).map((post, i) => [
          <span key={post.authors} className={"" + post.authors}>
            {/* { (uniq.length > 2 && i === uniq.length - 1) ? ' & ' : ''} */}
            { post.website ? <Link target="_blank" rel="noopener noreferrer" className="underline hover:text-black" to={post.website} key={post.authors}>{ post.authors}</Link> : <span>{post.authors}</span>}
            {/* { (uniq.length > 2 && i < uniq.length - 1) ? ', ' : ''}
            { (uniq.length === 2 && i < uniq.length - 1) && ' & ' } */}
          </span>
        ])}
      </span>
    );
  }
}

export default AuthorsListing;
