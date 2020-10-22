import React, { Component } from "react";
import Gravatar from "react-gravatar";

class Replies extends Component {
  getRepliesList() {
    const repliesList = [];
    this.props.replyEdges.forEach(replyEdge => {
      repliesList.push({
        id: replyEdge.data.Reply_ID,
        name: replyEdge.data.Reply_Name,
        email: replyEdge.data.Reply_Email,
        conditions: replyEdge.data.Conditions ? replyEdge.data.Conditions.childMarkdownRemark.html : null,
        results: replyEdge.data.Results ? replyEdge.data.Results.childMarkdownRemark.html : null,
        tweaks: replyEdge.data.Tweaks ? replyEdge.data.Tweaks.childMarkdownRemark.html : null,
      });
    });
    return repliesList;
  }
  render() {
    const { activityTitle } = this.props;
    const repliesList = this.getRepliesList();
    
    return (
      <div className="griddled">
        <aside className="sidebar">
          <div className="bg-gray-100 -mx-4 md:mx-auto p-4 rounded">
            <p className="mb-4">
              Have you <strong>tested</strong> this activity? <strong>Tweaked</strong> it to work better in your context, or with your people?
            </p>
            <a className="block text-center text-lg btn btn-cta" target="_blank" rel="noopener noreferrer" href={`https://airtable.com/shrateXsJe8xEkeAW?prefill_Reply%20Activity=${encodeURIComponent(activityTitle)}`}>
              Contribute a Reply
            </a>
          </div>
        </aside>
        <div className="primary lg:-ml-12 lg:pr-6">
        { repliesList.map(reply => (
          <article key={reply.id} className={`mt-6 -mx-4 lg:mx-0 flex items-start`}>
            <Gravatar email={reply.email} size={96} className="mt-6 lg:ml-1 relative z-100 block rounded-lg" alt={reply.name} />
            <section className="-ml-12 p-6 pl-16 md:pr-12 lg:pr-16 bg-gray-900 rounded text-gray-200 prose">
              <h3 className="theme-font text-white text-xl mb-4">
                {reply.name}:
              </h3>
              <div className="mb-4 w-full" dangerouslySetInnerHTML={{ __html: reply.conditions }} />   
              <div className="mb-4 w-full" dangerouslySetInnerHTML={{ __html: reply.results }} />   
              <div className="mb-4 w-full" dangerouslySetInnerHTML={{ __html: reply.tweaks }} />    
            </section>
          </article>
        ))}
        </div>
        
      </div>
    );
  }
}

export default Replies;