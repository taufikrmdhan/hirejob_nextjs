// csr
import React from "react";
import Head from "next/head";
import Footer from "../../component/Footer";
import axios from "axios";
import Link from "next/link";
// import { useRouter } from "next/router";

export async function getStaticProps(){
  const response = await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_URL}/recruiter/list`,
  })
  return {
    props:{
      data: response.data.data
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
Index.layout = "L";
export default Index;
