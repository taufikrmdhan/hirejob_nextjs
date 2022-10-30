import React from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../component/Footer";

const Index = () => {
  return (
    <>
      <Head>
        <title>Reqset</title>
        <meta name="keywords" content="req reset" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid">
        <div className="row text-center p-2 m-5 bg-light shadow-lg rounded">
          <div className="col-md-12 mb-3 mt-5 ">
            <Image
              src="/Ellipse 330.png"
              width={100}
              height={100}
              alt=""
              className="rounded-circle"
            />
          </div>
          <div className="col-md-12 mb-3 mt-2">
            <h3>PT XYZ</h3>
          </div>
          <div className="col-md-12 mb-3 mt-2">
            <p>Financial</p>
          </div>
          <div className="col-md-12 mb-3 mt-2">
            <p className="text-muted">Yogyakarta</p>
          </div>
          <div className="col-md-12 mb-3 mt-2">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus mollitia aspernatur tenetur nihil? Quasi excepturi
              cumque quisquam rerum ex officiis vero assumenda voluptates
              sapiente dolorem odio, ipsa blanditiis dolore recusandae!
            </p>
          </div>
          <div className="col-md-12 mb-3 mt-2">
            <button type="button" className="btn btnGrape">
              Edit profile
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
Index.layout = "L";
export default Index;
