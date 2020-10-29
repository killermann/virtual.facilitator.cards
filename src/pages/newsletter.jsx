import React, { Component } from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import Newsletter from "../components/Newsletter/Newsletter";
import config from "../../data/SiteConfig";

class NewsletterPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Join the Newsletter for more ${config.siteTitle}`} />
            <article className="griddled wrap p-6 lg:p-12 bg-white">
              <aside className="sidebar">
                <div className="sticky top-0 mb-6 md:pt-12">
                  <Newsletter />
                </div>
              </aside>
              <div className="primary lg:pr-6">
                <h1 className="page-title mb-6">
                  Join our Newsletter :)
                </h1>
                <section className="prose">
                  <p className="text-lg lg:text-xl">
                    Virtual facilitation is a new challenge for a lot of us. To help you meet it head on, every week, for the next six or so weeks (at least!), we'll be adding a new stack of activities to the virtual guide here. <strong>Join the newsletter to get 'em as soon as they're published — free!</strong>
                  </p>
                  <p>
                    We'll be posting the new activities here and writing up a mini-agenda for each stack over on <a href="https://www.facilitator.cards/blog">our blog</a>. If you sign up for the newsletter, you'll automatically get the blog in your inbox every Friday we post new content.
                  </p>
                  <p>
                    "A stack" is our shorthand for a sequence of cards, or a seamless flow of processes. Each stack we share here will give you ideas for virtually facilitating a group from <Link to={`/for/emotion`}>emotion</Link> to <Link to={`/for/ideation`}>ideation</Link> to <Link to={`/for/clarification`}>clarification</Link> to <Link to={`/for/execution`}>execution</Link>. We'll include the step-by-steps of each activity, as well as pointers for transitioning through the stack.
                  </p>
                  <p>
                    If that all sounds like it's right up your alley, we'll see you in the newsletter. Oh! And don't forget: You can always reply directly to our emails to get ahold of us. We'd especially love to hear back if you're testing or tweaking the activities we publish.
                  </p>
                  <p>
                    Let's figure this out virtually together,<br/><br/>
                    — Meg &amp; Sam
                  </p>
                </section>
                
              </div>
            </article>
        </div>
      </Layout>
    );
  }
}

export default NewsletterPage;
