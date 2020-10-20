import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";


class FourOhFour extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet />
        <section class="bg-gray-300 min-h-screen p-8 py-16">   
          <div class="error py-16 flex text-lg center-everything">
            <article class="card wow">
              <header class="card-header leading-none bg-black">
                <ul class="icon-list">
                  <li class="icon">☠️</li>
                  <li class="icon">😭</li>
                  <li class="icon">💩</li>
                </ul>
                <h1 class="title">
                  404 Error
                </h1>
              </header>
              <footer class="card-description entry-content">
                <p>
                  <span class="big-copy">This is not the page, or card, you were looking for. Sorry! Please shuffle the deck and draw a new one. You can <a className="underline" href="mailto:hello@facilitator.cards" title="Email hello@facilitator.cards">email us</a> if you need help.</span>
                </p>
              </footer>
            </article>
          </div>
        </section>
      </Layout>
    );
  }
}

export default FourOhFour;
