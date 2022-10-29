import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Head>
        <title>Landing page</title>
        <meta name="keywords" content="landing before" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="container-fluid">
            <h1> Halaman ini</h1>
        </div>
      </div>
      
    </>
  );
};
Index.layout = "L";
export default Index;
