import React, {useState, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../component/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const Index = () => {
  const router = useRouter();
  const [recruiter, setRecruiter] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id_recruiter = data.id_recruiter;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/recruiter/list/${id_recruiter}`)
      .then((res) => {
        console.log(res.data.data);
        setRecruiter(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Profile perusahaan</title>
        <meta name="keywords" content="profile perusahaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid">
        {
          recruiter.map((item) => {
            return (
              <div className="row text-center p-2 m-5 bg-light shadow-lg rounded">
          <div className="col-md-12 bgUngu">
            <button className="btn  d-flex justify-content-end align-items-end text-white">
              &#9998; Ubah Latar
            </button>
          </div>
          <div className="col-md-12 mb-3 upProfilePerusahaan">
            <Image
              src="/Ellipse 330.png"
              width={100}
              height={100}
              alt=""
              className="rounded-circle"
            />
          </div>
          <div className="col-md-12">
            <h3>
              {item.company_name}
            </h3>
          </div>
          <div className="col-md-12">
            <p>
              {item.business}
            </p>
          </div>
          <div className="col-md-12">
            <p className="text-muted">
              {item.city}
            </p>
          </div>
          <div className="col-md-12 mt-3">
            <p className="text-muted mx-5">
              {item.description}
            </p>
          </div>
          <div className="col-md-12 my-3">
            <Link href="/updateperus/update">
              <button type="button" className="btn btnGrape">
                Edit profile
              </button>
            </Link>
          </div>
          <div className="col-md-12 mt-3 d-flex justify-content-center">
            <div className="row">
              {/* <div className="col-md-12"> */}
              <div className="col-md-1">
                <i className="fa fa-envelope text-muted"></i>
              </div>
              <div className="col-md-8">
                <p className="text-muted">
                  {item.email}
                </p>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-12  d-flex justify-content-center">
            <div className="row">
              {/* <div className="col-md-12"> */}
              <div className="col-md-1">
                <i className="fa fa-github text-muted"></i>
              </div>
              <div className="col-md-8">
                <p className="text-muted">
                  {item.instagram}
                </p>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-12 mb-5 d-flex justify-content-center">
            <div className="row">
              {/* <div className="col-md-12"> */}
              <div className="col-md-1">
                <i className="fa fa-linkedin text-muted"></i>
              </div>
              <div className="col-md-8">
                <p className="text-muted">
                  {item.linkedin}
                </p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
            )
          })
        }
      </div>
      <Footer />
    </>
  );
};
Index.layout = "L";
export default Index;
