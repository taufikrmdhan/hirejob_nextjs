import React from "react";
import Head from "next/head";
import Sidepage from "../../component/sidePage";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="keywords" content="login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body">
        <div className="container-fluid">
          <div className="row">
            <Sidepage />
            <div className="col-md-6 d-flex align-items-center">
              <form className="row g-3 m-5">
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btnCustom">
                    <Link className="a" href="/loginrekrut/login">
                      Login as Job Seeker
                    </Link>
                  </button>
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btnCustom">
                    <Link className="a" href="/loginkerja/login">
                      Login as Employer
                    </Link>
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
