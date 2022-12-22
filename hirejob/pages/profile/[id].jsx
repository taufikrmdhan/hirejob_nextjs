import React, {useState, useEffect} from "react";
import Head from "next/head";
// import {useSearchParams} from "react-router-dom";
import Link from "next/link";
import Footer from "../../component/Footer";
import axios from "axios";
import {useRouter} from "next/router";
import {protectedRoute} from "../../HOC/protectionRoute";

const Detail = (props) => {
  const [data, setData] = useState(props.resUser[0]);
  // const [loading, setLoading] = useState({
  //   portfolioData: true,
  //   experienceData: true,
  // });
  const [loadingPortofolioData, setLoadingPortofolioData] = useState(true);
  const [loadingExperienceData, setLoadingExperienceData] = useState(true);
  const [portfolioData, setPortfolioData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  const getPortfolioData = async () => {
    try {
      // setLoading({...loading, portfolioData: true});
      setLoadingPortofolioData(true);
      const {data} = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/portofolio`
      );
      if (data.code !== 200) {
        throw new Error(`${data.code}: ${data.message} - ${data.error}`);
      }
      setPortfolioData(data.data);
    } catch (error) {
      console.log(error);
      alert(error || "Failed To Get Portfolio Data");
      setExperienceData([]);
    } finally {
      // setLoading({...loading, portfolioData: false});
      setLoadingPortofolioData(false);
    }
  };

  const formatDate = (dateString) => {
    // convert date string to local date MM/YY
    const date = new Date(dateString);
    const month = date.toLocaleString("default", {month: "long"});
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const getExperienceData = async () => {
    try {
      // setLoading({...loading, experienceData: true});

      setLoadingExperienceData(true);
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/job`);
      if (data.code !== 200) {
        throw new Error(`${data.code}: ${data.message} - ${data.error}`);
      }
      setExperienceData(data.data);
    } catch (error) {
      console.log(error);
      alert(error || "Failed To Get Experience Data");
      setExperienceData([]);
    } finally {
      // setLoading({...loading, experienceData: false});
      setLoadingExperienceData(false);
    }
  };

  useEffect(() => {
    getPortfolioData();
    getExperienceData();
  }, []);

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
              {data ? (
                <div className="row ">
                  {data.length === 0 ? (
                    <p>Data is not available</p>
                  ) : (
                    data.map((item) => {
                      return (
                        <div
                          key={item.id_user}
                          className="col-md-3 bg-white mb-5 rounded p-2 px-4 upProfile"
                        >
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
                                <p className="text-muted">{item.email}</p>
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
                  )}

                  <div className="col-md-8 bg-white mb-5 ms-4 rounded upProfileDiri">
                    <p className="mt-3">
                      <a
                        className="btn mx-4 fs-4"
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

                    {/* Portfolio List */}
                    <div
                      className="collapse multi-collapse"
                      id="multiCollapseExample1"
                    >
                      <div className="container-fluid mt-5">
                        <div className="row">
                          {loadingPortofolioData ? (
                            <div>Loading get portfolio data</div>
                          ) : (
                            <>
                              {portfolioData.length > 0 ? (
                                portfolioData.map((item) => (
                                  <div
                                    className="col-md-4"
                                    key={`portfolio-data-${item.id_portofolio}`}
                                  >
                                    {/* image and title */}
                                    <div className="col-md-12">
                                      <img
                                        src={
                                          item.image_secure_url || "/port.png"
                                        }
                                        width={150}
                                        
                                        alt={item.title}
                                        className="mx-auto d-block rounded"
                                      />
                                    </div>
                                    <div className="col-md-12">
                                      <h5 className="my-3 d-flex align-items-center justify-content-center">
                                        {item.title}
                                      </h5>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div>No Data Portfolio Available</div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div
                      className="collapse multi-collapse"
                      id="multiCollapseExample2"
                    >
                      <div className="container mt-5">
                        {/* Pengalaman kerja  */}
                        {loadingExperienceData ? (
                          <div>Loading...</div>
                        ) : (
                          <>
                            {experienceData?.length > 0 ? (
                              experienceData.map((item) => (
                                <div
                                  className="card mb-3 border-0 my-4"
                                  key={`experience-${item.id_job}`}
                                >
                                  <div className="row g-0">
                                    <div className="col-md-2 d-flex align-items-center justify-content-center">
                                      <img
                                        src={
                                          item.image_secure_url || "/tokped.png"
                                        }
                                        width={150}
                                        className="img-fluid rounded-circle"
                                        alt={item.company}
                                      />
                                    </div>
                                    <div className="col-md-8">
                                      <div className="card-body">
                                        <h5 className="card-title">
                                          {item.job_title || "Job Title"}
                                        </h5>
                                        <p className="card-text text-muted">
                                          {item.company || "Company"}
                                        </p>
                                        <p className="card-text text-muted">
                                          <span>
                                            {item?.date_in
                                              ? formatDate(item.date_in)
                                              : null}{" "}
                                          </span>
                                          <span> - </span>
                                          <span>
                                            {item?.date_out
                                              ? formatDate(item.date_out)
                                              : "Sekarang"}{" "}
                                          </span>
                                        </p>
                                        <p className="card-text text-muted">
                                          {item.description || "Description"}
                                        </p>
                                      </div>
                                    </div>
                                    <hr />
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div>Data Pengalaman Kerja Tidak Tersedia</div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>Data kosong</div>
              )}
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
    // const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/list/${id}`);
    // resUser.push(data.data);
    const resList = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/list/${id}`,
      {
        method: "GET",
      }
    );
    const data = await resList.json();
    resUser.push(data.data);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      resUser,
    },
  };
}
export default protectedRoute(Detail);