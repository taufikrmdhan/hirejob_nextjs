import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Index = () => {
  return (
    <>
      <div>
        <Head>
          <title>profile</title>
          <meta name="keywords" content="profile" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="">
          <div className="col-md-12 bgUngu"></div>
          <div className="col-md-12 bg-light marginNegatif">
            <div className="container">
              <div className="row ">
                <div className="col-md-3 bg-white mb-5 rounded p-2 px-4 upProfile">
                  <div className="col-md-12 my-2">
                    <img
                      src="/nnzkZNYWHaU.png"
                      width="100"
                      alt=""
                      className="mx-auto d-block rounded-circle"
                    />
                  </div>
                  <div className="col-md-12 my-2 mt-4">
                    <h5>Louis Tomilson</h5>
                  </div>
                  <div className="col-md-12 my-2 mt-2">
                    <p>Web Designer</p>
                  </div>
                  <div className="col-md-12 my-2 mt-2">
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate dolorem pariatur dolor, provident qui laboriosam
                      corrupti.
                    </p>
                  </div>
                  <div className="col-md-12 my-2">
                    <button type="button" className="btn btnGrapeHere">
                      Here
                    </button>
                  </div>
                  <div className="col-md-12 mt-4">
                    <h6>Skill</h6>
                  </div>
                  <div className="col-md-12">
                    <button type="button" className="btn btnCustom">
                      tes
                    </button>
                    <button type="button" className="btn btnCustom ms-2">
                      tes
                    </button>
                    <button type="button" className="btn btnCustom ms-2">
                      tes
                    </button>
                  </div>
                  {/* email, instagram, github */}
                  <div className="col-md-12 mt-5">
                    <div className="row">
                      <div className="col-md-3">
                        {/* <FontAwesomeIcon icon={fa-instagram}/> */}
                      </div>
                      <div className="col-md-8">
                        <p>Instagram</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="col-md-8">
                        <p>Instagram</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="col-md-8">
                        <p>Instagram</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="col-md-8">
                        <p>Instagram</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="col-md-8">
                        <p>Instagram</p>
                      </div>
                    </div>
                    {/* <div className="col-md-3">
                                <i className="fab fa-instagram"></i>
                            </div>
                            <div className="col-md-3">
                                <i className="fab fa-github"></i>
                            </div> */}
                  </div>
                </div>
                <div className="col-md-8 bg-white mb-5 ms-4 rounded upProfileDiri">
                  <p className="mt-3">
                    <a
                      class="btn mx-4 fs-4"
                      data-bs-toggle="collapse"
                      href="#multiCollapseExample1"
                    >
                      Portofolio
                    </a>
                    <a
                      class="btn mx-4 fs-4"
                      data-bs-toggle="collapse"
                      href="#multiCollapseExample2"
                    >
                      Pengalaman kerja
                    </a>
                  </p>

                  <div
                    class="collapse multi-collapse"
                    id="multiCollapseExample1"
                  >
                    <div class="container-fluid mt-5">
                      <div className="row">
                        <div className="col-md-4">
                          {/* image and title */}
                          <div className="col-md-12">
                            <img
                              src="/port.png"
                              width="img-fluid"
                              alt=""
                              className="mx-auto d-block rounded"
                            />
                          </div>
                          <div className="col-md-12">
                            <h5 className="my-3 d-flex align-items-center justify-content-center">
                              Portofolio dummy
                            </h5>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="col-md-12">
                            <img
                              src="/port2.png"
                              width="img-fluid"
                              alt=""
                              className="mx-auto d-block rounded"
                            />
                          </div>
                          <div className="col-md-12">
                            <h5 className="my-3 d-flex align-items-center justify-content-center">
                              Portofolio dummy
                            </h5>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="col-md-12">
                            <img
                              src="/port.png"
                              width="img-fluid"
                              alt=""
                              className="mx-auto d-block rounded"
                            />
                          </div>
                          <div className="col-md-12">
                            <h5 className="my-3 d-flex align-items-center justify-content-center">
                              Portofolio dummy
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="collapse multi-collapse"
                    id="multiCollapseExample2"
                  >
                    <div class="container mt-5">
                      {/* Pengalaman kerja  */}
                      <div className="card mb-3 border-0 my-4">
                        <div className="row g-0">
                          <div className="col-md-2 d-flex align-items-center justify-content-center">
                            <img
                              src="/tokped.png"
                              width={150}
                              className="img-fluid rounded-circle"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Software Engineer</h5>
                              <p className="card-text text-muted">Tokopedia</p>
                              {/* date */}

                              <p className="card-text text-muted">
                                Januari 2021 - Sekarang
                              </p>
                              <p className="card-text text-muted">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Tempore perferendis
                                repellendus corrupti nostrum{" "}
                              </p>
                            </div>
                          </div>
                          <hr />
                        </div>
                        <div className="card mb-3 border-0 my-4">
                          <div className="row g-0">
                            <div className="col-md-2 d-flex align-items-center justify-content-center">
                              <img
                                src="/tokped.png"
                                width={150}
                                className="img-fluid rounded-circle"
                                alt="..."
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="card-title">
                                  Software Engineer
                                </h5>
                                <p className="card-text text-muted">
                                  Tokopedia
                                </p>
                                {/* date */}

                                <p className="card-text text-muted">
                                  Januari 2021 - Sekarang
                                </p>
                                <p className="card-text text-muted">
                                  Lorem, ipsum dolor sit amet consectetur
                                  adipisicing elit. Tempore perferendis
                                  repellendus corrupti nostrum{" "}
                                </p>
                              </div>
                            </div>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
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
