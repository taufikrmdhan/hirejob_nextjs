import React from "react";
import Head from "next/head";
import Image from "next/image";
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
              <h3 className="">Halo, Pewpeople</h3>
              <p className=" text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti aut officia explicabo amet, quas voluptate porro sunt.
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
              <div className="text-end">
                <a className="adiv" href="/forgotPass.html">
                  Lupa sandi ?
                </a>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btnCustom">
                  <Link className="a" href="/landingpage/afterlogin">
                    Masuk
                  </Link>
                </button>
              </div>
              <div className="text-center">
              <p className="text-muted">
                Anda belum punya akun?
                <Link className="ap" href="/registerkerja/register"> Daftar disini</Link>
              </p>
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
