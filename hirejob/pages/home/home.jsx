// import React, { useEffect, useState } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import Footer from "../../component/Footer";
// import axios from "axios";
// import { useRouter } from "next/router";

// export async function getServerSideProps(context) {
//   try {
//     const res = await axios({
//       method: "GET",
//       url: "${process.env.NEXT_PUBLIC_API_URL}/user/list",
//     });
//     console.log(res.data);
//     return {
//       props: {
//         data: res.data,
//         error: false,
//         errorMessage: "",
//       },
//       // will be passed to the page component as props
//     };
//   } catch (err) {
//     return {
//       props: {
//         data: [],
//         error: true,
//         errorMessage: "error API",
//       },
//       // will be passed to the page component as props
//     };
//   }
// }
// const Index = (props) => {
//   const router = useRouter();
//   const [data, setData] = useState(props.data);
//   console.log(data);
//   return (
//     <>
//       <Head>
//         <title>home</title>
//         <meta name="keywords" content="home" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="container-fluid grape text-white px-4 py-3">
//         <h4 className="px-5 ">Top Jobs</h4>
//       </div>
//       <main className="bg-light">
//         <section className="container-fluid">
//           {/* search by kategory */}
//           <div className="row mx-5">
//             <div className="col-md-12 my-5 pt-1 rounded shadow-lg border border bg-white">
//               <div className="container-fluid">
//                 <div className="input-group mb-3 mt-2">
//                   <input
//                     type="text"
//                     className="form-control border border-0"
//                     placeholder="Search for any skill"
//                     aria-label="Recipient's username"
//                     aria-describedby="button-addon2"
//                   />
//                   {/* dropdown kategory */}
//                   <div className="dropdown mx-5 border-start">
//                     <button
//                       className="btn  dropdown-toggle"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       Kategori
//                     </button>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <a className="dropdown-item" href="#">
//                           Sort by nama
//                         </a>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="#">
//                           Sort by skill
//                         </a>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="#">
//                           Sort by lokasi
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                   {/* end dropdown kategory */}
//                   <button
//                     className="btn btnGrape rounded"
//                     type="button"
//                     id="button-addon2"
//                   >
//                     Search
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-12 my-5 pt-1 rounded shadow-lg border border bg-white">
//               {
//               props.error ? (
//                 <h1>{props.errorMessage}</h1>
//               ) : data.length === 0 ? (
//                 <h1>Loading...</h1>
//               ) : (
//                 data.data.map((item, index) => (
//                   <div key={index}>
//                     <div className="card mb-3 border-0 my-4">
//                       <div className="row g-0">
//                         <div className="col-md-2 d-flex align-items-center justify-content-center">
//                           <img
//                             src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image}`}
//                             width={150}
//                             // height={100}
//                             className="img-fluid rounded-circle"
//                             alt="..."
//                           />
//                         </div>
//                         <div className="col-md-8">
//                           <div className="card-body">
//                             <h5 className="card-title">{item.name}</h5>
//                             <p className="card-text text-muted">
//                               {item.job_desk}
//                             </p>
//                             <p className="card-text">
//                               <small className="text-muted">{item.city}</small>
//                             </p>
//                             <button
//                               type="button"
//                               className="btn btnCustom mx-1 my-1"
//                             >
//                               {item.skill}
//                             </button>
//                             <button
//                               type="button"
//                               className="btn btnCustom mx-1 my-1"
//                             >
//                               {item.skill}
//                             </button>
//                             <button
//                               type="button"
//                               className="btn btnCustom mx-1 my-1"
//                             >
//                               {item.skill}
//                             </button>
//                           </div>
//                         </div>
//                         <div className="col-md-2 d-flex align-items-center justify-content-center">
//                           <Link href="/profile/profile">
//                             <button
//                               type="button"
//                               className="btn btnGrape mx-1 my-1"
//                             >
//                               Lihat Profile
//                             </button>
//                           </Link>
//                         </div>
//                         <hr className="mt-3" />
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//             <div className="d-flex justify-content-center my-3 mb-5">
//               <nav aria-label="Page navigation example">
//                 <ul
//                   className="pagination
//                   "
//                 >
//                   <li className="page-item">
//                     <a className="page-link" href="#" aria-label="Previous">
//                       <span aria-hidden="true">&laquo;</span>
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a className="page-link" href="#">
//                       1
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a className="page-link" href="#">
//                       2
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a className="page-link" href="#">
//                       3
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a className="page-link" href="#" aria-label="Next">
//                       <span aria-hidden="true">&raquo;</span>
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// };
// Index.layout = "L";
// export default Index;

// csr
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../component/Footer";
import axios from "axios";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");

  const [sort, setSort] = useState("id_user");
  const [asc, setAsc] = useState("asc");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name != "") {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/user/list/name/${name}`)
        .then((res) => {
          // if data > 0
          console.log(res.data);
          setData(res.data);
          if (res.data.length === 0) {
            alert("Data tidak ditemukan");
          } else {
            router.push(`/profile/profile/${name}`);
          }
          // if (res.data.length >= 0) {
          //   router.push(`/profile/profile`);
          // } else {
          //   alert("data tidak ada");
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // add parameter page limit
  useEffect(() => {
    getData(sort, asc,3, currentPage);
  }, [sort, asc, currentPage]);

  const getData = (sort, asc, limit, page) => {
    axios
      .get(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/user/list?sort=${sort}&asc=${asc}&limit=${limit}${
          page ? `&page=${page}` : ""
        }`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

//   const NextPage = () => {
//     setPage(page + 1);
//     getData(sort, asc, 3, page);
//   };
// const PreviousPage = () => {
//     if (page > 1) {
//       setPage(page - 1);
//       getData(sort, asc, 3, page - 1);
//     }
//   };

  const handleNext = () => {
      setCurrentPage(currentPage + 1);
      getData(sort, asc, 3, currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      getData(sort, asc, 3, currentPage - 1);
    }
  };

  const handleSorting = () => {
    if (sort == "id_user") {
      setSort("name");
    } else {
      setSort("id_user");
    }
    getData(sort, asc, 3, currentPage);
  };

  const handleAsc = () => {
    if (asc == "asc") {
      setAsc("desc");
    } else {
      setAsc("asc");
    }
    getData(sort, asc, 3, currentPage);
  };
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
                          <a className="dropdown-item" onClick={handleSorting}>
                            Sort by {sort}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" onClick={handleAsc}>
                            Sort by {asc}
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
              {data.length === 0 ? (
                <h1>Loading...</h1>
              ) : (
                data.data.map((item, index) => (
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
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text text-muted">
                              {item.job_desk}
                            </p>
                            <p className="card-text">
                              <small className="text-muted">{item.city}</small>
                            </p>
                            <button
                              type="button"
                              className="btn btnCustom mx-1 my-1"
                            >
                              {item.skill}
                            </button>
                            <button
                              type="button"
                              className="btn btnCustom mx-1 my-1"
                            >
                              {item.skill}
                            </button>
                            <button
                              type="button"
                              className="btn btnCustom mx-1 my-1"
                            >
                              {item.skill}
                            </button>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                          <Link href={`/profile/${item.id_user}`}>
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
                ))
              )}
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
                      onClick={() => handlePrevious()}
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  <li className="page-item">
                    <a className="page-link">{currentPage}</a>
                  </li>
                  <li className="page-item">
                    <button
                      className="page-link"
                      aria-label="Next"
                      disabled={data.data <= 0}
                      onClick={() => handleNext()}
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
