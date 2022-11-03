import React from "react";
import Head from "next/head";
import Image from "next/image";
import Sidepage from "../../component/sidePage";


const Index = () => {
  return (
    <>
      <Head>
        <title>Reset</title>
        <meta name="keywords" content="reset" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body">
      <div className="container-fluid">
        <div className="row">
          <Sidepage />
          <div className="col-md-6 d-flex align-items-center">
            <form className="row g-3 m-5">
              <h3 className="">Reset Password</h3>
              <p className=" text-muted">
              Enter your user account's verified email address and we will send you a password reset link.
              </p>
              <div>
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Masukkan email"
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btnCustom">
                  <a className="a" href="/landingPage.html">
                  Send password reset email
                  </a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Index;
