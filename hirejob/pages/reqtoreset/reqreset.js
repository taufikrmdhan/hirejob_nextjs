import React from "react";
import Head from "next/head";
import Image from "next/image";
import Sidepage from "../../component/sidePage";

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
            <img src="/Group 980 2.png" alt="" />
          </div>
          <div className="col-md-12 mb-3 mt-2">
            <h3>Request to Reset Your Account Password</h3>
          </div>
          <div className="col-md-12 mb-3 mt-2">
            <img src="/Group 1159.png" alt="" />
          </div>
          <div className="col-md-12 mb-3 mt-2">
            <p>
            The following is the button for you to reset
the password.
            </p>
          </div>
          <div className="col-md-12 mb-3 mt-2">
            <button type="button" className="btn btnCustom">
              Change password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
