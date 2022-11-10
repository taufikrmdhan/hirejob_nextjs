import React, { useState, useEffect } from "react";
import Head from "next/head";
// import {useSearchParams} from "react-router-dom";
import Link from "next/link";
import Footer from "../../component/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import { protectedRoute } from "../../HOC/protectionRoute";

const Detail = (props) => {

  const [data, setData] = useState(props.resUser[0]);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.NEXT_PUBLIC_API_URL}/user/list/${id}`)
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setData(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

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
                {
                  data.length === 0 ? (
                    <p>Data is not available</p>
                  ) : (
                    data.map((item) => {
                      return (
                        <div key={item.id_user} className="col-md-3 bg-white mb-5 rounded p-2 px-4 upProfile">
                          <div className="col-md-12 my-2">
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image}`}
                              width="100"
                              alt=""
                              className="mx-auto d-block rounded-circle"
                            />
                          </div>
                          <div className="col-md-12 my-2 mt-4">
                            <h5>{item.name}</h5>
                          </div>
                          <div className="col-md-12 my-2 mt-2">
                            <p>{item.job_desk}</p>
                          </div>
                          <div className="col-md-12 my-2 mt-2">
                            <div className="row">
                              <div className="col-md-1">
                                <i className="fa fa-map-marker text-muted"></i>
                              </div>
                              <div className="col-md-10">
                                <p className="text-muted">{item.city}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 my-2 mt-2">
                            <p className="text-muted">financial</p>
                          </div>
                          <div className="col-md-12 my-2 mt-2">
                            <p className="text-muted">{item.description}</p>
                          </div>
                          <div className="col-md-12 my-2">
                            <Link className="" href={`/hire/${item.id_user}`}>
                              <button
                                type="button"
                                className="btn btnGrapeHere"
                              >
                                Hire
                              </button>
                            </Link>
                          </div>
                          <div className="col-md-12 mt-4">
                            <h6>Skill</h6>
                          </div>
                          <div className="col-md-12">
                            <button type="button" className="btn btnCustom ms-2 mt-2">
                              {item.skill}
                            </button>
                            <button
                              type="button"
                              className="btn btnCustom ms-2 mt-2"
                            >
                              {item.skill}
                            </button>
                            <button
                              type="button"
                              className="btn btnCustom ms-2 mt-2"
                            >
                              {item.skill}
                            </button>
                          </div>
                    
                          <div className="col-md-12 mt-5">
                            <div className="row">
                              <div className="col-md-1">
                                <i className="fa fa-instagram text-muted"></i>
                              </div>
                              <div className="col-md-8">
                                <p className="text-muted">@coba</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-1">
                                <i className="fa fa-envelope text-muted"></i>
                              </div>
                              <div className="col-md-8">
                                <p className="text-muted">
                                  {item.email}
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-1">
                                <i className="fa fa-github text-muted"></i>
                              </div>
                              <div className="col-md-8">
                                <p className="text-muted">@cobajuga</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )
                }

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
                      className="btn mx-4 fs-4"
                      data-bs-toggle="collapse"
                      href="#multiCollapseExample2"
                    >
                      Pengalaman kerja
                    </a>
                  </p>

                  <div
                    className="collapse multi-collapse"
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
                    className="collapse multi-collapse"
                    id="multiCollapseExample2"
                  >
                    <div className="container mt-5">
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
Detail.layout = "L";
export async function getServerSideProps(context) {
  const id = context.params.id;
  let resUser = [];

  try {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/list/${id}`);
    resUser.push(data.data);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      resUser,
    }
  }
}
export default protectedRoute(Detail);
