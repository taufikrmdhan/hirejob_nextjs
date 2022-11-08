import React, { useEffect } from "react";

import { useRouter } from "next/router";
import Layout from "../layouts/layout";
import Layfooter from "../layouts/footerlay";

const layouts = {
  L: Layout,
  F: Layfooter,
};
const noLayout = ({ children }) => {
  return <>{children}</>;
};

export function protectedRoute(Component) {
  return (props) => {
    const router = useRouter();
    const Layout = layouts[Component.layout] || noLayout;
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("You must login first");
            router.push("/loginkerja/login");
        }
    }, []);
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
}