import React, { Component } from "react";
import Gravatar from "react-gravatar";

class Author extends Component {
  render() {
    const { post } = this.props;
    const author = post.Author ? post.Author[0].data : null;
    // let author.Twitter = author.Twitter ? 'https://twitter.com/' + author.Twitter : null;
    // let author.Author_Email = author.Author_Email ? ("mailto:"+author.Author_Email) : null;
    if (author !== null) {
      return (
        <div className="full-author-bio bg-gray-100 rounded p-6 md:p-8 lg:p-10 md:flex items-center text-sm sm:text-base lg:text-lg">
          <div className="text-center prose flex flex-col justify-center bio-avatar w-1/4 sm:w-1/6 float-left -ml-10 sm:ml-0 mb-2 mr-4 sm:mr-6 md:mb-0 md:mr-8" style={{minWidth: '5em',}}>
            { author.Website ? 
              <a href={author.Website} target="_blank" className="border-4 overflow-hidden rounded-lg" rel="noopener noreferrer">
                <Gravatar email={post.Email} size={128} className="w-full" alt={'Author Headshot'}/>
              </a> : 
              <Gravatar email={post.Email} size={128} className="border-4 border-color-gray-300 w-full rounded-lg" alt={'Author Headshot'}/>
            }
            {author.Location && <span className="mt-2 inline-block author-location text-sm lg:text-base font-bold theme-font">{author.Location}</span>}
          </div>
          <div className="bio-text">
            {author.First_Name && <h3 className="theme-font font-black uppercase text-gray-900 text-lg md:text-xl mb-2">Activity by {author.First_Name} {author.Last_Name} </h3>}
            {author.Author_Bio && <p className="mb-2">{author.Author_Bio}</p>}
            <ul className="follow-author flex flex-wrap">
              <li className="theme-font font-black mr-2 text-gray-900">Connect<span className="hidden sm:inline"> with {author.First_Name}</span>:</li>
              { author.Author_Email&& <li><a className="mr-1 author-email" target="_blank" rel="noopener noreferrer" href={'mailto:' + author.Author_Email}>Email {author.First_Name}</a></li>}
              { author.Website && <li><a className="mr-1 author-website" target="_blank" rel="noopener noreferrer" href={author.Website}>Visit {author.First_Name}'s Website</a></li>}
              { author.Twitter && <li><a className="mr-1 author-twitter" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/` + author.Twitter}>Follow {author.First_Name} on Twitter</a></li>}
              { author.Facebook && <li><a className="mr-1 author-facebook" target="_blank" rel="noopener noreferrer" href={`https://facebook.com/` + author.Facebook}>Like {author.First_Name} on Facebook</a></li>}
              { author.LinkedIn && <li><a className="mr-1 author-linkedin" target="_blank" rel="noopener noreferrer" href={`https://linkedin.com/in/` + author.LinkedIn}>Connect with {author.First_Name} on LinkedIn</a></li>}
              { author.Instagram && <li><a className="mr-1 author-instagram" target="_blank" rel="noopener noreferrer" href={`https://instagram.com/` + author.Instagram}>Follow {author.First_Name} on Instagram</a></li>}
            </ul>          
          </div>
          
        </div>
      );

    } else {
      return (
        <div className="minimal-author-bio bg-gray-100 rounded p-6 md:p-8 lg:p-10 flex items-center text-sm sm:text-base lg:text-lg">
          <Gravatar email={post.Email} size={96} className="rounded-lg border-4 border-gray-300 mr-4 sm:mr-6" alt={'Author Headshot'}/>
          <h3 className="theme-font font-black uppercase text-gray-900 text-lg md:text-xl">Activity by {post.Name}</h3>
        </div>
      )
    }
   
  }
}

export default Author;
