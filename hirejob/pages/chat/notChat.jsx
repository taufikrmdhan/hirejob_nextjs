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
                    <div className="col-md-12 customImgChat">
                        <img src="/undraw.png" alt=".." />
                    </div>
                </div>
                <div className="col-md-8 my-5 bg-white rounded">
                  <div className="col-md-12">
                    <h5 className="m-3 text-white">Chat</h5>
                    <hr />
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
