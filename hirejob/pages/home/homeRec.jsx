// csr
import React from "react";
import Head from "next/head";
import Footer from "../../component/Footer";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { protectedRoute } from "../../HOC/protectionRoute";
import {useRouter} from "next/router";

export async function getStaticProps(){

  // const response = await axios({
  //   method: 'GET',
  //   url: `${process.env.NEXT_PUBLIC_API_URL}/recruiter/list`,
  // })
  const resList = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/recruiter/list`,
    {
      method: "GET",
    }
  )
  const data = await resList.json()
  return {
    props:{
      data: data.data
    },
    revalidate: 1
  }
}

const Index = (props) => {
  // const router = useRouter();
  // const [data, setData] = useState([]);
  

  // const [company_name, setName] = useState("");

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   if (company_name != "") {
  //     axios
  //       .get(`${process.env.NEXT_PUBLIC_API_URL}/recruiter/list/name/${company_name}`)
  //       .then((res) => {
  //         console.log(props.data)
  //         router.push(`/home/homeRec?company_name=${company_name}`);
  //       });
  //   }
  // };

  // // useEffect(() => {
  // //   axios
  // //     .get(`${process.env.NEXT_PUBLIC_API_URL}/recruiter/list`)
  // //     .then((res) => {
  // //       setData(res.data.data);
  // //     })
  // //     .catch((err) => {
  // //       console.log(err);
  // //     });
  // // },[])
  const router = useRouter();
  const navigateLogo = () => {
    router.push("/landingpage/afterloginRec");
  }
  return (
    <>
      <Head>
        <title>home</title>
        <meta name="keywords" content="home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <button
          type="submit"
          onClick={navigateLogo}
          style={{background: "none", border: "none"}}
          >
          
            <Image src="/Group 980 2.png" width="100" height={30} alt="logo" />
          
          </button>
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/home/homeRec"
                >
                  Home
                </Link>
              </li>
            </ul>
            <div className="dropdown">
              <a
                className="nav-link active mx-5"
                aria-current="page"
                href="#"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="/Group 797.png" width="20" alt="" className="mx-4" />
                <img
                  src="/btnNotifications.png"
                  width="20"
                  alt=""
                  className="ms-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseWidthExample"
                  aria-expanded="false"
                  aria-controls="collapseWidthExample"
                />
                <div>
                  <div
                    className="collapse collapse-vertical"
                    id="collapseWidthExample"
                  >
                    <div className="card card-body" width={40}>
                    <img src="/notify.png" width="20" alt="" className="mx-4" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <Link href="/updateperus/update">
              <Image
                src="/nnzkZNYWHaU.png"
                width={45}
                height={45}
                className="mobileProfileNavbar mx-5 rounded-circle customBorder"
                alt="profile image"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>

      <div className="container-fluid grape text-white px-4 py-3">
        <h4 className="px-5 ">Top Jobs</h4>
      </div>
      <main className="bg-light">
        <section className="container-fluid">
          {/* search by kategory */}
          <div className="row mx-5">
            <div className="col-md-12 my-5 pt-1 rounded shadow-lg border border bg-white">
              <div className="container-fluid">
                <form action="" onSubmit={(e) => onSubmitHandler(e)}>
                  <div className="input-group mb-3 mt-2">
                    <input
                      type="text"
                      className="form-control border border-0"
                      placeholder="Search for any skill"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      onChange={(e) => setName(e.target.value)}
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
                          <a className="dropdown-item">
                            Sort by desc
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item">
                            Sort by asc
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
                </form>
              </div>
            </div>
            <div className="col-md-12 my-5 pt-1 rounded shadow-lg border border bg-white">

              {
                Object.values(props.data).map((item, index) => (
                  <div key={index}>
                    <div className="card mb-3 border-0 my-4">
                      <div className="row g-0">
                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                          <img
                            src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image}`}
                            width={150}
                            // height={100}
                            className="img-fluid rounded-circle"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{item.company_name}</h5>
                            <p className="card-text text-muted">
                              {item.business}
                            </p>
                            <p className="card-text">
                              <small className="text-muted">{item.city}</small>
                            </p>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                          <Link href={`/perusahaan/${item.id_recruiter}`}>
                            <button
                              type="button"
                              className="btn btnGrape mx-1 my-1"
                            >
                              Lihat Profile
                            </button>
                          </Link>
                        </div>
                        <hr className="mt-3" />
                      </div>
                    </div>
                  </div>
                )
                )
              }
            </div>
            <div className="d-flex justify-content-center my-3 mb-5">
              <nav aria-label="Page navigation example">
                <ul
                  className="pagination
                  "
                >
                  <li className="page-item">
                    <button
                      className="page-link"
                      aria-label="Previous"
                     
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  <li className="page-item">
                    <a className="page-link">1</a>
                  </li>
                  <li className="page-item">
                    <button
                      className="page-link"
                      aria-label="Next"
                      
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
Index.layout = "L2";
export default protectedRoute(Index);
