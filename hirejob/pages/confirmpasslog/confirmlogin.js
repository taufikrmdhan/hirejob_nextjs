import React from "react";
import Head from "next/head";
import Image from "next/image";
import Sidepage from "../../component/sidePage";


const Index = () => {
  return (
    <>
      <Head>
        <title>Reset to Pass</title>
        <meta name="keywords" content="reset to pass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body">
      <div className="container-fluid">
        <div className="row">
          <Sidepage />
          <div className="col-md-6 d-flex align-items-center">
            <form className="row g-3 m-5">
              <h3 className="">Please login with your account</h3>
              <p className=" text-muted">
              We have an an email containing a password reset instruction toyour email. please check your email.
              </p>
              <div>
                <label for="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Masukkan email"
                />
              </div>
              <div>
                <label for="inputPassword" className="form-label">
                  Kata sandi
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Masukkan kata sandi"
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btnCustom">
                  <a className="a" href="/landingPage.html">
                    Reset Password
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
