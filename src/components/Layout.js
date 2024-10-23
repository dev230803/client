import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

function Layout(props) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />

        <title>{props.title}</title>
      </Helmet>
      <Header />
      <Toaster />
      <main style={{ minHeight: "70vh" }}>{props.children}</main>

      <Footer />
    </div>
  );
}

Layout.defaultPros = {
  title: "Ecoomerce App:Shop Now",
  description: "Mern Satck project",
  keywords: "html,css,react,nodejs,mongodb,expressjs,mongoose,mern,javascript",
  author: "Dev",
};
export default Layout;
