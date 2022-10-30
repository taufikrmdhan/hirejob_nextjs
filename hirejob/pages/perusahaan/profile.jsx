import React from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../component/Footer";

const Index = () => {
  return (
    <>
      <Head>
        <title>Profile perusahaan</title>
        <meta name="keywords" content="profile perusahaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid">
        <div className="row text-center p-2 m-5 bg-light shadow-lg rounded">
          <div className="col-md-12 bgUngu">
            <button className="btn  d-flex justify-content-end align-items-end text-white">
              &#9998; Ubah Latar
            </button>
          </div>
          <div className="col-md-12 mb-3 upProfilePerusahaan">
            <Image
              src="/Ellipse 330.png"
              width={100}
              height={100}
              alt=""
              className="rounded-circle"
            />
          </div>
          <div className="col-md-12">
            <h3>PT XYZ</h3>
          </div>
          <div className="col-md-12">
            <p>Financial</p>
          </div>
          <div className="col-md-12">
            <p className="text-muted">Yogyakarta</p>
          </div>
          <div className="col-md-12 mt-3">
            <p className="text-muted mx-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus mollitia aspernatur tenetur nihil? Quasi excepturi
              cumque quisquam rerum ex officiis vero assumenda voluptates
              sapiente dolorem odio, ipsa blanditiis dolore recusandae!
            </p>
          </div>
          <div className="col-md-12 my-3">
            <Link href="/updateperus/update">
              <button type="button" className="btn btnGrape">
                Edit profile
              </button>
            </Link>
          </div>
          <div className="col-md-12 mt-3 d-flex justify-content-center">
            <div className="row">
              {/* <div className="col-md-12"> */}
              <div className="col-md-1">
                <i className="fa fa-envelope text-muted"></i>
              </div>
              <div className="col-md-8">
                <p className="text-muted">@gmail.aufik</p>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-12  d-flex justify-content-center">
            <div className="row">
              {/* <div className="col-md-12"> */}
              <div className="col-md-1">
                <i className="fa fa-github text-muted"></i>
              </div>
              <div className="col-md-8">
                <p className="text-muted">taufik_rmdhan</p>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-12 mb-5 d-flex justify-content-center">
            <div className="row">
              {/* <div className="col-md-12"> */}
              <div className="col-md-1">
                <i className="fa fa-linkedin text-muted"></i>
              </div>
              <div className="col-md-8">
                <p className="text-muted">taufik_rmdhan</p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
Index.layout = "L";
export default Index;
