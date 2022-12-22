import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../../component/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { protectedRoute } from "../../HOC/protectionRoute";

const Index = () => {
  const router = useRouter();
  const [recruiter, setRecruiter] = useState([]);
  const [image, setImage] = useState("");
  const navigateLogo = () => {
    router.push("/landingpage/afterloginRec");
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id_recruiter = data.id_recruiter;

    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/loginrekrut/login");
    }

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/recruiter/list/${id_recruiter}`)
      .then((res) => {
        setRecruiter(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[router]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    const id_recruiter = data.id_recruiter;
    console.log(id_recruiter);
    let formData = new FormData(e.target);
    if (image !== "") {
      formData.append("image", image);
    }
    formData.append("id_recruiter", id_recruiter);
    axios
      .put(
        `${process.env.NEXT_PUBLIC_API_URL}/recruiter/update/${id_recruiter}`,
        formData
      )
      .then((res) => {
        console.log(res);
        alert("Update Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRow = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id_recruiter = data.id_recruiter;
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_API_URL}/recruiter/delete/${id_recruiter}`,{
          headers: {
            token: localStorage.getItem("token")
          }
        }
      )
      .then((res) => {
        console.log(res);
        alert("Delete Success");
        router.push("/loginrekrut/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    console.log(event);
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    setImage(fileUploaded);
  };

  const logout = () => {
    localStorage.clear();
    router.push("/loginrekrut/login");
  };

  return (
    <>
      <div>
        <Head>
          <title>Update Perusahaan</title>
          <meta name="keywords" content="update perusahaan" />
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
        <div className="">
          <div className="col-md-12 bgUngu"></div>
          <div className="col-md-12 bg-light marginNegatif">
            <div className="container ">
              <div className="row">
                <div className="col-md-3 mb-2 upProfile">
                  <div className="col-md-12 bg-white mb-3 rounded p-2 px-4 ">
                    <div className="col-md-12 my-2">
                      <img
                        src={`${
                          process.env.NEXT_PUBLIC_API_URL
                        }/${recruiter.map((item) => item.image)}`}
                        width="100"
                        alt=""
                        className="mx-auto d-block rounded-circle"
                      />
                      {/* edit */}
                      <div className="col-md-12 text-center ">
                        <button
                          className="btn text-muted"
                          onClick={handleClick}
                        >
                          &#9998; Edit
                        </button>
                        <input
                          type="file"
                          ref={hiddenFileInput}
                          id="formFile"
                          onChange={(e) => handleChange(e)}
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 my-2 mt-4">
                      <h5>
                        {recruiter.map((item) => {
                          return item.company_name;
                        })}
                      </h5>
                    </div>
                    <div className="col-md-12 my-2 mt-2">
                      <p>
                        {recruiter.map((item) => {
                          return item.business;
                        })}
                      </p>
                    </div>
                    {/* alamat */}
                    <div className="col-md-12 my-2 mt-2">
                      <div className="row">
                        <div className="col-md-1">
                          <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="col-md-10">
                          <p className="text-muted">
                            {recruiter.map((item) => {
                              return item.city;
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <button type="button" className="btn btnGrapeHere mb-2">
                      Simpan
                    </button>
                    <button type="button" className="btn btnGrape2 w-100">
                      Batal
                    </button>
                    <button type="button" onClick={logout} className="btn btn-danger w-100 mt-2">Logout</button>
                  </div>
                </div>

                <div className="col-md-8 bg-white mb-5 ms-4 rounded upProfileDiri">
                  <form action="" onSubmit={(e) => handleUpdate(e)}>
                    <h4 className="mt-3">Data diri</h4>
                    <hr />
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="namaPanjang">Nama Panjang</label>
                      <input
                        type="text"
                        className="form-control"
                        id="namaPanjang"
                        placeholder="Masukkan nama panjang"
                        name="full_name"
                        defaultValue={
                          recruiter.map((item) => {
                            return item.full_name;
                          })
                        }
                      />
                    </div>

                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="namaPerusahaan">Nama Perusahaan</label>
                      <input
                        type="text"
                        className="form-control"
                        id="namaPerusahaan"
                        placeholder="Masukkan nama perusahaan"
                        name="company_name"
                        defaultValue={
                          recruiter.map((item) => {
                            return item.company_name;
                          })
                        }
                      />
                    </div>
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="bidang">Bidang</label>
                      <input
                        type="text"
                        className="form-control"
                        id="bidang"
                        placeholder="Masukkan bidang"
                        name="business"
                        defaultValue={
                          recruiter.map((item) => {
                            return item.business;
                          }
                          )
                        }
                      />
                    </div>
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="kota">Kota</label>
                      <input
                        type="text"
                        className="form-control"
                        id="kota"
                        placeholder="Masukkan kota"
                        name="city"
                        defaultValue=
                        {
                          recruiter.map((item) => {
                            return item.city;
                          })
                        }
                      />
                    </div>
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="deskripsi">Deskripsi</label>
                      <textarea
                        className="form-control"
                        id="deskripsi"
                        rows="5"
                        name="description"
                        defaultValue={
                          recruiter.map((item) => {
                            return item.description;
                          })
                        }
                      ></textarea>
                    </div>
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Masukkan email"
                        name="email"
                        defaultValue={
                          recruiter.map((item) => {
                            return item.email;
                          })
                        }
                      />
                    </div>
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="instagram">Instagram</label>
                      <input
                        type="text"
                        className="form-control"
                        id="instagram"
                        placeholder="Masukkan instagram"
                        name="instagram"
                        defaultValue={
                          recruiter.map((item) => {
                            return item.instagram;
                          })
                        }
                      />
                    </div>
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="noTelpon">No Telpon</label>
                      <input
                        type="text"
                        className="form-control"
                        id="noTelpon"
                        placeholder="Masukkan no telpon"
                        name="phone"
                        defaultValue={
                          recruiter.map((item) => {
                            return item.phone;
                          })
                        }
                      />
                    </div>
                    <div className="col-md-12 my-3 text-muted px-2">
                      <label htmlFor="linkedin">Linkedin</label>
                      <input
                        type="text"
                        className="form-control"
                        id="linkedin"
                        placeholder="Masukkan linkedin"
                        name="linkedin"
                        defaultValue={
                          recruiter.map((item) => {
                            return item.linkedin;
                          })
                        }
                      />
                    </div>
                    <button type="submit" className="btn btnAdd">
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btnDelete mt-2"
                      onClick={(e) => deleteRow(e)}
                    >
                      Delete data diri
                    </button>
                    
                  </form>
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
// Index.layout = "L";
export default protectedRoute(Index);
