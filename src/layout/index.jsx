import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en-us" />
          <SEO/>
        </Helmet>
        <Nav />
        {children}
        <Footer />
      </div>
    );
  }
}
