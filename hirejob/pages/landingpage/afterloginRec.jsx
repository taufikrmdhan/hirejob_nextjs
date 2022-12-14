import React from "react";
import Head from "next/head";
import Link from "next/link";
import { protectedRoute } from "../../HOC/protectionRoute";

const Index = () => {
  return (
    <>
      <Head>
        <title>Landing page</title>
        <meta name="keywords" content="landing after" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand mx-5" href="#">
              <img src="/Group 980 2.png" width="100" alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 ms-5 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/home/homeRec">
                    Home
                  </Link>
                </li>
              </ul>
              <Link href="/updateperus/update">
                <button type="button" className="btn btnGrape mx-5">
                  Profile
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <section className="container mt-5">
          <div className="row mb-5">
            <div className="col-md-6 d-flex align-items-start d-flex flex-column justify-content-center">
              <div className="container">
                <h1 className="my-4">
                  Talenta terbaik negri untuk perubahan revolusi 4.0
                </h1>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <div className="my-5">
                  <button type="button" className="btn btnGrape">
                    Mulai Dari Sekarang
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="container">
                <img src="/Group 1195.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <main>
        <section className="container-fluid p-5 mt-5t">
          <div className="row">
            <div className="col-md-6">
              <div className="container">
                <img src="/Group 1194.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-start d-flex flex-column justify-content-center">
              <div className="container">
                <h3 className="mb-5">
                  Kenapa harus mencari tallent di peworld
                </h3>
                <ul className="customList">
                  <li className="d-flex flex-row mt-3">
                    <div className="number-list d-flex justify-content-center align-items-center me-3">
                      &#10003;
                    </div>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="d-flex flex-row mt-3">
                    <div className="number-list d-flex justify-content-center align-items-center me-3">
                      &#10003;
                    </div>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="d-flex flex-row mt-3">
                    <div className="number-list d-flex justify-content-center align-items-center me-3">
                      &#10003;
                    </div>
                    Lorem ipsum dolor sit amet.
                  </li>
                  <li className="d-flex flex-row mt-3">
                    <div className="number-list d-flex justify-content-center align-items-center me-3">
                      &#10003;
                    </div>
                    Lorem ipsum dolor sit amet.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="container mt-5">
          <div className="row mb-5">
            <div className="col-md-6 d-flex align-items-start d-flex flex-column justify-content-center">
              <div className="container">
                <h3 className="mb-4">Skill Tallent</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="customList">
                      <li className="d-flex flex-row mt-3">
                        <div className="number-list2 d-flex justify-content-center align-items-center me-3">
                          &#10003;
                        </div>
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className="d-flex flex-row mt-3">
                        <div className="number-list2 d-flex justify-content-center align-items-center me-3">
                          &#10003;
                        </div>
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className="d-flex flex-row mt-3">
                        <div className="number-list2 d-flex justify-content-center align-items-center me-3">
                          &#10003;
                        </div>
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className="d-flex flex-row mt-3">
                        <div className="number-list2 d-flex justify-content-center align-items-center me-3">
                          &#10003;
                        </div>
                        Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="customList">
                      <li className="d-flex flex-row mt-3">
                        <div className="number-list2 d-flex justify-content-center align-items-center me-3">
                          &#10003;
                        </div>
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className="d-flex flex-row mt-3">
                        <div className="number-list2 d-flex justify-content-center align-items-center me-3">
                          &#10003;
                        </div>
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className="d-flex flex-row mt-3">
                        <div className="number-list2 d-flex justify-content-center align-items-center me-3">
                          &#10003;
                        </div>
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className="d-flex flex-row mt-3">
                        <div className="number-list2 d-flex justify-content-center align-items-center me-3">
                          &#10003;
                        </div>
                        Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="container">
                <img src="/Group 1196.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid p-5 bg-light">
          <div className="py-5">
            <div className="container">
              <div className="row justify-content-center mb-4">
                <div className="col-md-7 text-center">
                  <h2 className="mb-5 mt-2">Their opinion about peworld</h2>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4 position-relative overflow">
                <div className="sliderNav sliderNavLeft">
                  <button
                    type="button"
                    className="number-list d-flex align-items-center justify-content-center"
                  >
                    &#x3c;
                  </button>
                </div>
                <div className="col text-center">
                  <div className="card h-100 shadow-lg border border-0">
                    <img
                      src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
                      width={200}
                      alt="wrapkit"
                      className="img-fluid rounded-circle d-flex align-self-center mt-3 d-flex align-self-center mt-3"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">Harry Style</h5>
                      <p className="text-muted">Web Developer</p>
                      <p className="card-text px-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In euismod ipsum et dui rhoncus auctor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col text-center">
                  <div className="card h-100 shadow-lg border border-0">
                    <img
                      src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
                      width={200}
                      alt="wrapkit"
                      className="img-fluid rounded-circle d-flex align-self-center mt-3"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">Harry Style</h5>
                      <p className="text-muted">Web Developer</p>
                      <p className="card-text px-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In euismod ipsum et dui rhoncus auctor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col text-center">
                  <div className="card h-100 shadow-lg border border-0">
                    <img
                      src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg"
                      width={200}
                      alt="wrapkit"
                      className="img-fluid rounded-circle d-flex align-self-center mt-3"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">Harry Style</h5>
                      <p className="text-muted">Web Developer</p>
                      <p className="card-text px-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In euismod ipsum et dui rhoncus auctor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sliderNav sliderNavRight">
                  <button
                    type="button"
                    className="number-list d-flex align-items-center justify-content-center"
                  >
                    &#x3e;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid custHeight p-5 mb-5">
          <div className="row bgSection mx-5 pt-5">
            <div className="col-md-4">
              <h2 className="px-5 pt-5">Lorem ipsum dolor sit amet</h2>
            </div>
            <div className="col-md-6 pt-5 text-end">
              <button type="button" className="btn btnStart">
                Mulai dari sekarang
              </button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
              <path
                fill="#655b94"
                fillOpacity="1"
                d="M0,160L48,165.3C96,171,192,181,288,154.7C384,128,480,64,576,69.3C672,75,768,149,864,181.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>
      </main>
    </>
  );
};
Index.layout = "F";
export default protectedRoute(Index);
// export default Index;