import React from "react";
import Head from "next/head";
import Image from "next/image";
import Sidepage from "../../component/sidePage";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Head>
        <title>Register rekrut</title>
        <meta name="keywords" content="registerkerja" />
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
                  Corrupti aut officia explicabo amet, quas voluptate porro
                  sunt.
                </p>
                <div>
                  <label for="inputUsername" className="form-label">
                    Nama
                  </label>
                  <input
                    className="form-control"
                    id="inputUsername"
                    placeholder="Masukkan nama panjang"
                  />
                </div>
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
                  <label for="inputCompany" className="form-label">
                    Perusahaan
                  </label>
                  <input
                    className="form-control"
                    id="inputCompany"
                    placeholder="Enter company name"
                  />
                </div>

                <div>
                  <label for="inputPosition" className="form-label">
                    Jabatan
                  </label>
                  <input
                    className="form-control"
                    id="inputPosition"
                    placeholder="Enter position"
                  />
                </div>
                <div>
                  <label for="inputPhone" className="form-label">
                    No handphone
                  </label>
                  <input
                    className="form-control"
                    id="inputPhone"
                    placeholder="08xxxxxxxxx"
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
                <div>
                  <label for="inputPassword" className="form-label">
                    Konfirmasi password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Masukkan konfirmasi kata sandi"
                  />
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btnCustom">
                    <Link className="a" href="/registerrekrut/register">
                      Daftar
                    </Link>
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-muted">
                    Anda sudah punya akun?
                    <Link className="ap" href="/loginrekrut/login">
                      Masuk disini
                    </Link>
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
