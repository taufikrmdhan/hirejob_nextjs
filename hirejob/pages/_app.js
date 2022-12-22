import React, { useEffect } from "react";
import "../styles/globals.css";

import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Layout from "../layouts/layout";
import Layout2 from "../layouts/layout2";
import Layfooter from "../layouts/footerlay";

const layouts = {
  L2: Layout2,
  L: Layout,
  F: Layfooter,
};
const noLayout = ({ children }) => {
  return <>{children}</>;
};
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const Layout = layouts[Component.layout] || noLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
