import React, {useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../component/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import { protectedRoute } from "../../HOC/protectionRoute";

const Index = (props) => {
  const router = useRouter();
  const [data, setData] = useState(props.user[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("id_user");
  const [asc, setAsc] = useState("asc");

  const [name, setName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name != "") {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/user/list/name/${name}`)
        .then((res) => {
          setData(res.data.data);
          router.push(`/home/home?name=${name}`);
        });
    }
  };
  // useEffect(() => {
  //   getData(sort, asc, 3, currentPage);
  // }, [sort, asc, currentPage]);

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
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                data.map((item, index) => (
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
export async function getServerSideProps(context) {
  const user = [];
  try {
    // const data = await axios
    // .get(
    //   `${
    //     process.env.NEXT_PUBLIC_API_URL
    //   }/user/list?sort=name&asc=asc&limit=3&page=1
    //   }`
    // )
    // user.push(data.data.data);
    const resultList = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/list?sort=name&asc=asc&limit=3&page=1`,
      {
        method: "GET",
      }
    )
    const data = await resultList.json();
    user.push(data.data);
  }
  catch (err) {
    console.log(err);
  }
  return{
    props: {
      user,
    }
  }
}
export default protectedRoute(Index);
