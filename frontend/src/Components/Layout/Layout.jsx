import React from "react";

import { Helmet } from "react-helmet";
import Header from "../Header-Footer/Header";
import Footer from "../Header-Footer/Footer";

// Components

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Header />

      {children}
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Pharma - Shop now",
  description: "Capstone Project",
  keywords: "mern, react, node, express",
  author: "Group 10",
};

export default Layout;
