import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../component/Footer";

const Index = () => {
  return (
    <>
      <Head>
        <title>home</title>
        <meta name="keywords" content="home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-fluid grape text-white px-4 py-3">
        <h4 className="px-5 ">Top Jobs</h4>
      </div>
      <main className="bg-light">
        <section className="container-fluid">
          {/* search by kategory */}
          <div className="row mx-5">
            <div className="col-md-12 my-5 pt-1 rounded shadow-lg border border bg-white">
              <div className="container-fluid">
                <div className="input-group mb-3 mt-2">
                  <input
                    type="text"
                    className="form-control border border-0"
                    placeholder="Search for any skill"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  {/* dropdown kategory */}
                  <div className="dropdown mx-5 border-start">
                    <button
                      className="btn  dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Kategori
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Sort by nama
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sort by skill
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sort by lokasi
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end dropdown kategory */}
                  <button
                    className="btn btnGrape rounded"
                    type="button"
                    id="button-addon2"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-12 my-5 pt-1 rounded shadow-lg border border bg-white">
              <div className="card mb-3 border-0 my-4">
                <div className="row g-0">
                  <div className="col-md-2 d-flex align-items-center justify-content-center">
                    <img
                      src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
                      width={150}
                      className="img-fluid rounded-circle"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Louis Tomlinson</h5>
                      <p className="card-text text-muted">Web developer</p>
                      <p className="card-text">
                        <small className="text-muted">Yogyakarta</small>
                      </p>
                      <button type="button" className="btn btnCustom mx-1 my-1">
                        PHP
                      </button>
                      <button type="button" className="btn btnCustom mx-1 my-1">
                        JavaScript
                      </button>
                      <button type="button" className="btn btnCustom mx-1 my-1">
                        HTML
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex align-items-center justify-content-center">
                    <Link href="/profile/profile">
                      <button type="button" className="btn btnGrape mx-1 my-1">
                      Lihat Profile
                    </button>
                    </Link>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="card mb-3 border-0 my-4">
                <div className="row g-0">
                  <div className="col-md-2 d-flex align-items-center justify-content-center">
                    <img
                      src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
                      width={150}
                      className="img-fluid rounded-circle"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Louis Tomlinson</h5>
                      <p className="card-text text-muted">Web developer</p>
                      <p className="card-text">
                        <small className="text-muted">Yogyakarta</small>
                      </p>
                      <button type="button" className="btn btnCustom mx-1 my-1">
                        PHP
                      </button>
                      <button type="button" className="btn btnCustom mx-1 my-1">
                        JavaScript
                      </button>
                      <button type="button" className="btn btnCustom mx-1 my-1">
                        HTML
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex align-items-center justify-content-center">
                    <Link href="/profile/profile">
                      <button type="button" className="btn btnGrape mx-1 my-1">
                      Lihat Profile
                    </button>
                    </Link>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="card mb-3 border-0 my-4">
                <div className="row g-0">
                  <div className="col-md-2 d-flex align-items-center justify-content-center">
                    <img
                      src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
                      width={150}
                      className="img-fluid rounded-circle"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Louis Tomlinson</h5>
                      <p className="card-text text-muted">Web developer</p>
                      <p className="card-text">
                        <small className="text-muted">Yogyakarta</small>
                      </p>
                      <button type="button" className="btn btnCustom mx-1 my-1">
                        PHP
                      </button>
                      <button type="button" className="btn btnCustom mx-1 my-1">
                        JavaScript
                      </button>
                      <button type="button" className="btn btnCustom mx-1 my-1">
                        HTML
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex align-items-center justify-content-center">
                    <Link href="/profile/profile">
                      <button type="button" className="btn btnGrape mx-1 my-1">
                      Lihat Profile
                    </button>
                    </Link>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="card mb-3 border-0 my-4">
                <div className="row g-0">
                  <div className="col-md-2 d-flex align-items-center justify-content-center">
                    <img
                      src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
                      width={150}
                      className="img-fluid rounded-circle"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Louis Tomlinson</h5>
                      <p className="card-text text-muted">Web developer</p>
                      <p className="card-text">
                        <small className="text-muted">Yogyakarta</small>
                      </p>
                      <button type="button" className="btn btnCustom mx-1 my-1">
                        PHP
                      </button>
                      <button type="button" className="btn btnCustom mx-1 my-1">
                        JavaScript
                      </button>
                      <button type="button" className="btn btnCustom mx-1 my-1">
                        HTML
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex align-items-center justify-content-center">
                    <Link href="/profile/profile">
                      <button type="button" className="btn btnGrape mx-1 my-1">
                      Lihat Profile
                    </button>
                    </Link>
                  </div>
                  <hr />
                </div>
              </div>
              {/* pagination style */}
            </div>
            <div className="d-flex justify-content-center my-3 mb-5">
              <nav aria-label="Page navigation example">
                <ul
                  className="pagination
                  "
                >
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};
Index.layout = "L";
export default Index;
