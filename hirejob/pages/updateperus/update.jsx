import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../component/Footer";

const Index = () => {
  return (
    <>
      <div>
        <Head>
          <title>Update Perusahaan</title>
          <meta name="keywords" content="update perusahaan" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="">
          <div className="col-md-12 bgUngu"></div>
          <div className="col-md-12 bg-light marginNegatif">
            <div className="container ">
              <div className="row">
                <div className="col-md-3 mb-2 upProfile">
                  <div className="col-md-12 bg-white mb-3 rounded p-2 px-4 ">
                    <div className="col-md-12 my-2">
                      <img
                        src="/nnzkZNYWHaU.png"
                        width="100"
                        alt=""
                        className="mx-auto d-block rounded-circle"
                      />
                      {/* edit */}
                      <div className="col-md-12 text-center ">
                        <button className="btn text-muted">&#9998; Edit</button>
                      </div>
                    </div>
                    <div className="col-md-12 my-2 mt-4">
                      <h5>PT XYZ</h5>
                    </div>
                    <div className="col-md-12 my-2 mt-2">
                      <p>Financial</p>
                    </div>
                    {/* alamat */}
                    <div className="col-md-12 my-2 mt-2">
                      <p className="text-muted">Yogyakarta</p>
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <button type="button" className="btn btnGrapeHere mb-2">
                      Simpan
                    </button>
                    <button type="button" className="btn btnGrape2 w-100">
                      Batal
                    </button>
                  </div>
                </div>

                <div className="col-md-8 bg-white mb-5 ms-4 rounded upProfileDiri">
                  <h4 className="mt-3">Data diri</h4>
                  <hr />
                  <div className="col-md-12 my-3 text-muted px-2">
                    <label htmlFor="namaPerusahaan">Nama Perusahaan</label>
                    <input
                      type="text"
                      className="form-control"
                      id="namaPerusahaan"
                      placeholder="Masukkan nama perusahaan"
                    />
                  </div>
                  <div className="col-md-12 my-3 text-muted px-2">
                    <label htmlFor="bidang">Bidang</label>
                    <input
                      type="text"
                      className="form-control"
                      id="bidang"
                      placeholder="Masukkan bidang"
                    />
                  </div>
                  <div className="col-md-12 my-3 text-muted px-2">
                    <label htmlFor="kota">Kota</label>
                    <input
                      type="text"
                      className="form-control"
                      id="kota"
                      placeholder="Masukkan kota"
                    />
                  </div>
                  <div className="col-md-12 my-3 text-muted px-2">
                    <label htmlFor="deskripsi">Deskripsi</label>
                    <textarea
                      className="form-control"
                      id="deskripsi"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="col-md-12 my-3 text-muted px-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Masukkan email"
                    />
                  </div>
                  <div className="col-md-12 my-3 text-muted px-2">
                    <label htmlFor="instagram">Instagram</label>
                    <input
                      type="text"
                      className="form-control"
                      id="instagram"
                      placeholder="Masukkan instagram"
                    />
                  </div>
                  <div className="col-md-12 my-3 text-muted px-2">
                    <label htmlFor="noTelpon">No Telpon</label>
                    <input
                      type="text"
                      className="form-control"
                      id="noTelpon"
                      placeholder="Masukkan no telpon"
                    />
                  </div>
                  <div className="col-md-12 my-3 text-muted px-2">
                    <label htmlFor="linkedin">Linkedin</label>
                    <input
                      type="text"
                      className="form-control"
                      id="linkedin"
                      placeholder="Masukkan linkedin"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
Index.layout = "L";
export default Index;
