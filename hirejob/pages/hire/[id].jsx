import React, { useState, useEffect } from "react";
import Head from "next/head";
// import {useSearchParams} from "react-router-dom";
import Link from "next/link";
import Footer from "../../component/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import { protectedRoute } from "../../HOC/protectionRoute";

const Index = (props) => {
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
          <title>Hire</title>
          <meta name="keywords" content="halaman hire" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="">
          <div className="col-md-12 bg-light marginNegatif">
            <div className="container ">
              {
                data? (
                  <div className="row">
                {data.length === 0 ? (
                  <p>Data is not available</p>
                ) : (
                  data.map((item) => {
                    return (
                      <div className="row">
                        <div
                          key={item.id_user}
                          className="col-md-3 bg-white mt-5 mb-5 rounded p-2 px-4 "
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
                            <p>
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Earum.
                            </p>
                          </div>
                          <div className="col-md-12 my-2 mt-2">
                            <div className="row">
                              <div className="col-md-1">
                                <i className="fa fa-map-marker"></i>
                              </div>
                              <div className="col-md-10">
                                <p className="text-muted">{item.city}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 my-2 mt-2">
                            <p className="text-muted">{item.description}</p>
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
                          </div>
                        </div>
                        <div className="col-md-8 mt-5 mb-5 ms-4 rounded">
                          <div className="col-md-12 my-2 mt-4">
                            <h4>Hubungi {item.name}</h4>
                          </div>
                          <div className="col-md-12 my-2 mt-3">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Quisquam, quae.
                            </p>
                          </div>
                          <div className="col-md-12 my-2 mt-5">
                            <label htmlFor="tujuan" className="text-muted mb-1">
                              Tujuan pesan ini
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="tujuan"
                              placeholder="Project"
                            />
                          </div>
                          <div className="col-md-12 my-2 mt-5">
                            <label htmlFor="nama" className="text-muted mb-1">
                              Nama Lengkap
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="nama"
                              placeholder="Louis Thomas"
                            />
                          </div>
                          <div className="col-md-12 my-2 mt-5">
                            <label htmlFor="email" className="text-muted mb-1">
                              Email
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="@gmail"
                            />
                          </div>
                          <div className="col-md-12 my-2 mt-5">
                            <label htmlFor="nomor" className="text-muted mb-1">
                              No Handphone
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="nomor"
                              placeholder="08123456789"
                            />
                          </div>
                          <div className="col-md-12 my-2 mt-5">
                            <label
                              htmlFor="deskripsi"
                              className="text-muted mb-1"
                            >
                              Deskripsi
                            </label>
                            <textarea
                              className="form-control"
                              id="deskripsi"
                              rows="5"
                              placeholder="Deskripsi jelaskan lebih detail"
                            ></textarea>
                          </div>
                          <button type="button" className="btn btnAdd mt-5">
                            Hire
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
                )
                : (
                  <div>Data kosong</div>
                )
              }
              
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
Index.layout = "L";
export async function getServerSideProps(context) {
  const id = context.params.id;
  let resUser = [];

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/list/${id}`
    );
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
export default protectedRoute(Index);
