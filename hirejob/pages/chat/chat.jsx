import React from "react";
import Head from "next/head";
import Footer from "../../component/Footer";

const Index = () => {
  return (
    <>
      <div className="bg-light">
        <Head>
          <title>Chat</title>
          <meta name="keywords" content="fitur chat" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="">
          <div className="col-md-12">
            <div className="container ">
              <div className="row">
                <div className="col-md-3 my-5 me-5 bg-white rounded customChat1">
                  <div className="col-md-12">
                    <h5 className="m-3">Chat</h5>
                    <hr />
                  </div>
                  <div className="col-md-12 d-flex flex-row  mb-1">
                    <img
                      src="/profilkosong.png"
                      alt=".."
                      className="rounded-circle"
                      width={40}
                      height={40}
                    />
                    <div className="row ms-1">
                      <div className="col-md-12">Jonas Adam</div>
                      <div className="col-md-12 text-muted">
                        Permisi kak, mau tanya...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 my-5 bg-white rounded">
                  <div className="row">
                    <div className="col-md-12 d-flex flex-row mt-2 mb-1">
                      <img
                        src="/profilkosong.png"
                        alt=""
                        className="rounded-circle"
                        width={40}
                        height={40}
                      />
                      <p className="mx-2 mt-2">Jonas Adam</p>
                    </div>
                    <hr />
                    <div className="col-md-12 custChat">
                    <div className="input-group mb-3 mt-2">
                      <input
                        type="text"
                        className="form-control border rounded-pill"
                        placeholder="Type your message"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />

                      <button
                        className="btn btnGrape rounded-circle mx-2"
                        type="button"
                        id="button-addon2"
                      >
                        <i className="fa fa-paper-plane"></i>
                      </button>
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
