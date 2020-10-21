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
        <div className="full-author-bio bg-gray-100 rounded -mx-4 p-4 lg:-mx-8 lg:p-8 md:flex items-center text-sm sm:text-base lg:text-lg">
          <div className="text-center prose flex flex-col justify-center bio-avatar w-1/4 sm:w-1/6 float-left -mt-2 -ml-2 sm:mt-0 sm:ml-0 mb-2 mr-4 md:mb-0 md:mr-8" style={{minWidth: '5em',}}>
            { author.Website ? 
              <a href={author.Website} target="_blank" className="border-4 overflow-hidden rounded-lg" rel="noopener noreferrer">
                <Gravatar email={post.Email} size={128} className="w-full" alt={'Author Headshot'}/>
              </a> : 
              <Gravatar email={post.Email} size={128} className="border-4 border-color-gray-300 w-full rounded-lg" alt={'Author Headshot'}/>
            }
            {author.Location && <span className="mt-2 inline-block author-location text-sm lg:text-base font-bold theme-font">{author.Location}</span>}
          </div>
          <div className="bio-text">
            {author.First_Name && <h3 className="theme-font font-black uppercase text-gray-900 text-lg md:text-xl mb-2 mt-2 md:mt-0">Activity by {author.First_Name} {author.Last_Name} </h3>}
            {author.Author_Bio && <p className="mb-2">{author.Author_Bio}</p>}
            <ul className="follow-author mt-4 flex flex-wrap items-center leading-none">
              <li className="theme-font font-black mr-2 text-gray-900">Connect<span className="hidden sm:inline"> with {author.First_Name}</span>:</li>
              { author.Author_Email&& <li>
                  <a className="md:mr-2 p-2 block author-email" target="_blank" rel="noopener noreferrer" href={'mailto:' + author.Author_Email}>
                    <svg aria-hidden="true" focusable="false" width="48" data-prefix="far" width="48" className="h-6 block w-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M187.293 260.374C114.743 210.491 115.482 210.366 96 196v-12c0-13.255 10.745-24 24-24h208c13.255 0 24 10.745 24 24v12c-19.497 14.376-18.747 14.494-91.293 64.374-8.414 5.812-25.104 19.79-36.707 19.625-11.6.166-28.296-13.816-36.707-19.625zm91.563 26.355C267.519 294.575 247.377 312.105 224 312c-23.241.104-43.082-17.118-54.849-25.266-45.054-30.977-62.02-42.883-73.151-50.958V328c0 13.255 10.745 24 24 24h208c13.255 0 24-10.745 24-24v-92.224c-11.13 8.074-28.094 19.978-73.144 50.953zM448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-48 346V86a6 6 0 0 0-6-6H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6z"></path></svg>
                    <span className="sr-only">Email {author.First_Name}</span>
                  </a>
                </li>}
              { author.Website && <li>
                  <a className="md:mr-2 p-2 block author-website" target="_blank" rel="noopener noreferrer" href={author.Website}>
                    <svg aria-hidden="true" focusable="false" className="h-6 block w-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z"></path></svg><span className="sr-only">Visit {author.First_Name}'s Website</span>
                  </a></li>}
              { author.LinkedIn && <li>
                <a className="md:mr-2 p-2 block author-linkedin" target="_blank" rel="noopener noreferrer" href={`https://linkedin.com/in/` + author.LinkedIn}>
                  <svg aria-hidden="true" focusable="false" width="48" className="h-6 block w-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                  <span className="sr-only">Connect with {author.First_Name} on LinkedIn</span>
                </a>
              </li>}
              { author.Twitter && <li>
                <a className="md:mr-2 p-2 block author-twitter" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/` + author.Twitter}>
                  <svg aria-hidden="true" focusable="false" width="48" className="h-6 block w-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                  <span className="sr-only">Follow {author.First_Name} on Twitter</span>
                </a>
              </li>}
              { author.Facebook && <li>
                <a className="md:mr-2 p-2 block author-facebook" target="_blank" rel="noopener noreferrer" href={`https://facebook.com/` + author.Facebook}>
                  <svg aria-hidden="true" focusable="false" width="48" className="h-6 block w-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                  <span className="sr-only">Like {author.First_Name} on Facebook</span>
                </a>
              </li>}
              { author.Instagram && <li>
                <a className="md:mr-2 p-2 block author-instagram" target="_blank" rel="noopener noreferrer" href={`https://instagram.com/` + author.Instagram}>
                  <svg aria-hidden="true" focusable="false" width="48" className="h-6 block w-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                  <span className="sr-only">Follow {author.First_Name} on Instagram</span>
                </a>
              </li>}
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
