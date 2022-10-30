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
          <title>Update Profile</title>
          <meta name="keywords" content="update profile" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="">
          <div className="col-md-12 bgUngu"></div>
          <div className="col-md-12 bg-light marginNegatif">
            <div className="container ">
              <div className="row">
                <div className="col-md-3 upProfile">
                  <div className="col-md-12 bg-white p-2 px-4 mb-3 rounded">
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
                      <h5>Louis Tomilson</h5>
                    </div>
                    <div className="col-md-12 my-2 mt-2">
                      <p>Web Designer</p>
                    </div>
                    {/* alamat */}
                    <div className="col-md-12 my-2 mt-2">
                      <div className="row">
                        <div className="col-md-1">
                          <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="col-md-10">
                          <p className="text-muted">Purwokerto, jawa tenga</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 my-2 mt-2">
                      <p className="text-muted">Frelancer</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button type="button" className="btn btnGrapeHere mb-2">
                      Simpan
                    </button>
                    <button type="button" className="btn btnGrape2 w-100">
                      Batal
                    </button>
                  </div>
                </div>
                <div className="col-md-8 upProfileDiri">
                  <div className="col-md-12 bg-white mb-5 ms-4 p-3 rounded">
                    <h4 className="mt-3">Data diri</h4>
                    <hr />
                    <div className="col-md-12 my-2 mt-4">
                      <label for="name" className="form-label">
                        Nama lengkap
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Nama"
                      />
                    </div>

                    <div className="col-md-12 my-2 mt-4">
                      <label for="jobdesk" className="form-label">
                        Jobdesk
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="jobdesk"
                        placeholder="Jobdesk"
                      />
                    </div>
                    <div className="col-md-12 my-2 mt-4">
                      <label for="domisili" className="form-label">
                        Domisili
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="domisili"
                        placeholder="Domisili"
                      />
                    </div>
                    <div className="col-md-12 my-2 mt-4">
                      <label for="tempatKerja" className="form-label">
                        Tempat kerja
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tempatKerja"
                        placeholder="Tempat kerja"
                      />
                    </div>
                    <div className="col-md-12 my-2 mt-4">
                      <label for="deskripsi" className="form-label">
                        Deskripsi singkat
                      </label>
                      <textarea
                        className="form-control"
                        id="deskripsi"
                        rows="5"
                        placeholder="Tuliskan deskripsi singkat"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 bg-white mt-5 mb-5 ms-4 p-3 rounded">
                    <h4 className="mt-3">Skill</h4>
                    <hr />
                    <div className="col-md-12 my-2 mt-4">
                      <div className="row">
                        <div className="col-md-8 mt-3">
                          <label for="skill" className="form-label">
                            Skill
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="skill"
                            placeholder="Java"
                          />
                        </div>
                        <div className="col-md-2 mt-5">
                          <button type="button" className="btn btnCustom">
                            Simpan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 bg-white mt-5 mb-5 ms-4 p-3 rounded">
                    <h4 className="mt-3">Pengalaman kerja</h4>
                    <hr />
                    posisi, Nama perusahaan, bulan/tahun, Deskripsi singkat
                    <div className="col-md-12 my-2 mt-4">
                      <label for="posisi" className="form-label">
                        Posisi
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="posisi"
                        placeholder="Web developer"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6 my-2 mt-4">
                        <label for="namaPerusahaan" className="form-label">
                          Nama perusahaan
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="namaPerusahaan"
                          placeholder="PT. XYZ"
                        />
                      </div>
                      <div className="col-md-6 my-2 mt-4">
                        <label for="tahun" className="form-label">
                          Bulan/Tahun
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="tahun"
                          placeholder="Januari 2020"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 my-2 mt-4">
                      <label for="deskripsiSingkat" className="form-label">
                        Deskripsi singkat
                      </label>
                      <textarea
                        className="form-control"
                        id="deskripsiSingkat"
                        rows="5"
                        placeholder="Tuliskan deskripsi singkat"
                      ></textarea>
                    </div>
                    <hr className="my-4" />
                    <button type="button" className="btn btnAdd">
                      Tambah pengalaman kerja
                    </button>
                  </div>
                  <div className="col-md-12 bg-white mt-5 mb-5 ms-4 p-3 rounded">
                    <h4 className="mt-3">Portfolio</h4>
                    <hr />
                    <div className="col-md-12 my-2 mt-4">
                      <label for="namaAplikasi" className="form-label">
                        Nama aplikasi
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="namaAplikasi"
                        placeholder="Masukkan nama aplikasi"
                      />
                    </div>
                    <div className="col-md-12 my-2 mt-4">
                      <label for="linkRepository" className="form-label">
                        Link repository
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="linkRepository"
                        placeholder="Masukkan link repository"
                      />
                    </div>
                    <div className="row my-2 mt-4">
                      <label for="typePort" className="form-label">
                        Type portfolio
                      </label>
                      <div className="col-md-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Aplikasi mobile
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Aplikasi Web
                          </label>
                        </div>
                      </div>
                    </div>
                    upload gambar
                    <hr />
                    <button type="button" className="btn btnAdd">
                      Tambah Portfolio
                    </button>
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
