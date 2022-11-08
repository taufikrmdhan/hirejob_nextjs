import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Footer from "../../component/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import { protectedRoute } from "../../HOC/protectionRoute";

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [image, setImage] = useState("");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id_user = data.id_user;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/user/list/${id_user}`)
      .then((res) => {
        console.log(res.data.data);
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    const id_user = data.id_user;
    console.log(id_user);
    let formData = new FormData(e.target);
    if (image !== "") {
      formData.append("image", image);
    }
    formData.append("id_user", id_user);
    axios
      .put(
        `${process.env.NEXT_PUBLIC_API_URL}/user/update/${id_user}`,
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
    const id_user = data.id_user;
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/user/delete/${id_user}`)
      .then((res) => {
        console.log(res);
        alert("Delete Success");
        router.push("/loginkerja/login");
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

  return (
    <>
      <div>
        <Head>
          <title>Update Profile</title>
          <meta name="keywords" content="update profile" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="">
          <div className="col-md-12 bgUngu"></div>
          <div className="col-md-12 bg-light marginNegatif">
            <div className="container ">
              <div className="row">
                <div className="col-md-3 upProfile">
                  <div className="col-md-12 bg-white p-2 px-4 mb-3 rounded">
                    <div className="col-md-12 my-2">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${
                          Object.keys(user).length ? (
                            user.isLoading ? (
                              <p>Loading...</p>
                            ) : (
                              user.map((data) => {
                                return data.image;
                              })
                            )
                          ) : null
                        }`}
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
                          name="image"
                          onChange={(e) => handleChange(e)}
                          style={{ display: "none" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 my-2 mt-4">
                      <h5>
                        {Object.keys(user).length ? (
                          user.isLoading ? (
                            <p>Loading...</p>
                          ) : (
                            user.map((data) => {
                              return data.name;
                            })
                          )
                        ) : null}
                      </h5>
                    </div>
                    <div className="col-md-12 my-2 mt-2">
                      <p>
                        {Object.keys(user).length ? (
                          user.isLoading ? (
                            <p>Loading...</p>
                          ) : (
                            user.map((data) => {
                              return data.job_desk;
                            })
                          )
                        ) : null}
                      </p>
                    </div>

                    <div className="col-md-12 my-2 mt-2">
                      <div className="row">
                        <div className="col-md-1">
                          <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="col-md-10">
                          <p className="text-muted">
                            {Object.keys(user).length ? (
                              user.isLoading ? (
                                <p>Loading...</p>
                              ) : (
                                user.map((data) => {
                                  return data.city;
                                })
                              )
                            ) : null}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 my-2 mt-2">
                      <p className="text-muted">
                        {Object.keys(user).length ? (
                          user.isLoading ? (
                            <p>Loading...</p>
                          ) : (
                            user.map((data) => {
                              return data.description;
                            })
                          )
                        ) : null}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button type="button" className="btn btnGrapeHere mb-2">
                      Simpan
                    </button>
                    <button type="button" className="btn btnGrape2 w-100">
                      Batal
                    </button>
                  </div>
                </div>
                <div className="col-md-8 upProfileDiri">
                  <form onSubmit={(e) => handleUpdate(e)}>
                    <div className="col-md-12 bg-white mb-5 ms-4 p-3 rounded">
                      <h4 className="mt-3">Data diri</h4>
                      <hr />
                      <div className="col-md-12 my-2 mt-4">
                        <label htmlFor="name" className="form-label">
                          Nama lengkap
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Nama"
                          name="name"
                          defaultValue={
                            Object.keys(user).length ? (
                              user.isLoading ? (
                                <p>Loading...</p>
                              ) : (
                                user.map((data) => {
                                  return data.name;
                                })
                              )
                            ) : null
                          }
                        />
                      </div>

                      <div className="col-md-12 my-2 mt-4">
                        <label htmlFor="jobdesk" className="form-label">
                          Jobdesk
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="jobdesk"
                          placeholder="Jobdesk"
                          name="job_desk"
                          defaultValue={
                            Object.keys(user).length ? (
                              user.isLoading ? (
                                <p>Loading...</p>
                              ) : (
                                user.map((data) => {
                                  return data.job_desk;
                                })
                              )
                            ) : null
                          }
                        />
                      </div>
                      <div className="col-md-12 my-2 mt-4">
                        <label htmlFor="domisili" className="form-label">
                          Domisili
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="domisili"
                          placeholder="Domisili"
                          name="city"
                          defaultValue={
                            Object.values(user).length ? (
                              user.isLoading ? (
                                <p>Loading...</p>
                              ) : (
                                user.map((data) => {
                                  return data.city;
                                })
                              )
                            ) : null
                          }
                        />
                      </div>
                      <div className="col-md-12 my-2 mt-4">
                        <label htmlFor="phone" className="form-label">
                          No Handphone
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="+62"
                          name="phone"
                          defaultValue={
                            Object.values(user).length ? (
                              user.isLoading ? (
                                <p>Loading...</p>
                              ) : (
                                user.map((data) => {
                                  return data.phone;
                                })
                              )
                            ) : null
                          }
                        />
                      </div>
                      <div className="col-md-12 my-2 mt-4">
                        <label htmlFor="deskripsi" className="form-label">
                          Deskripsi singkat
                        </label>
                        <textarea
                          className="form-control"
                          id="deskripsi"
                          rows="5"
                          placeholder="Tuliskan deskripsi singkat"
                          name="description"
                          defaultValue={
                            Object.keys(user).length ? (
                              user.isLoading ? (
                                <p>Loading...</p>
                              ) : (
                                user.map((data) => {
                                  return data.description;
                                })
                              )
                            ) : null
                          }
                        ></textarea>
                      </div>
                      <div className="col-md-8 mt-3 mb-3">
                        <label htmlFor="skill" className="form-label">
                          Skill
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="skill"
                          name="skill"
                          placeholder="Java"
                          defaultValue={
                            Object.keys(user).length ? (
                              user.isLoading ? (
                                <p>Loading...</p>
                              ) : (
                                user.map((data) => {
                                  return data.skill;
                                })
                              )
                            ) : null
                          }
                        />
                      </div>
                      <button type="submit" className="btn btnAdd">
                        Update
                      </button>
                      <div>
                        <button
                          type="button"
                          className="btn btnDelete mt-2"
                          onClick={(e) => deleteRow(e)}
                        >
                          Delete data diri
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="col-md-12 bg-white mt-5 mb-5 ms-4 p-3 rounded">
                    <h4 className="mt-3">Skill</h4>
                    <hr />
                    <div className="col-md-12 my-2 mt-4">
                      <div className="row">
                        <div className="col-md-8 mt-3">
                          <label htmlFor="skill" className="form-label">
                            Skill
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="skill"
                            placeholder="Java"
                          />
                        </div>
                        <div className="col-md-2 mt-5">
                          <button type="button" className="btn btnCustom">
                            Simpan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 bg-white mt-5 mb-5 ms-4 p-3 rounded">
                    <h4 className="mt-3">Pengalaman kerja</h4>
                    <hr />
                    <div className="col-md-12 my-2 mt-4">
                      <label htmlFor="posisi" className="form-label">
                        Posisi
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="posisi"
                        placeholder="Web developer"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6 my-2 mt-4">
                        <label htmlFor="namaPerusahaan" className="form-label">
                          Nama perusahaan
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="namaPerusahaan"
                          placeholder="PT. XYZ"
                        />
                      </div>
                      <div className="col-md-6 my-2 mt-4">
                        <label htmlFor="tahun" className="form-label">
                          Bulan/Tahun
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="tahun"
                          placeholder="Januari 2020"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 my-2 mt-4">
                      <label htmlFor="deskripsiSingkat" className="form-label">
                        Deskripsi singkat
                      </label>
                      <textarea
                        className="form-control"
                        id="deskripsiSingkat"
                        rows="5"
                        placeholder="Tuliskan deskripsi singkat"
                      ></textarea>
                    </div>
                    <hr className="my-4" />
                    <button type="button" className="btn btnAdd">
                      Tambah pengalaman kerja
                    </button>
                  </div>
                  <div className="col-md-12 bg-white mt-5 mb-5 ms-4 p-3 rounded">
                    <h4 className="mt-3">Portfolio</h4>
                    <hr />
                    <div className="col-md-12 my-2 mt-4">
                      <label htmlFor="namaAplikasi" className="form-label">
                        Nama aplikasi
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="namaAplikasi"
                        placeholder="Masukkan nama aplikasi"
                      />
                    </div>
                    <div className="col-md-12 my-2 mt-4">
                      <label htmlFor="linkRepository" className="form-label">
                        Link repository
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="linkRepository"
                        placeholder="Masukkan link repository"
                      />
                    </div>
                    <div className="row my-2 mt-4">
                      <label htmlFor="typePort" className="form-label">
                        Type portfolio
                      </label>
                      <div className="col-md-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Aplikasi mobile
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Aplikasi Web
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 my-2 mt-4">
                      <label htmlFor="upload" className="form-label">
                        Upload
                      </label>
                      <div className="container custDashed text-muted">
                        <div className="col-md-12 text-center my-5">
                          <img src="/Vector.png" alt="" onClick={handleClick} />
                        </div>
                        <input
                          type="file"
                          ref={hiddenFileInput}
                          id="formFile"
                          onChange={(e) => handleChange(e)}
                          style={{ display: "none" }}
                        />
                        <div className="col-md-12 text-center my-2">
                          <h5 className="text-muted">
                            Drag & Drop untuk Upload Gambar Aplikasi Mobile
                          </h5>
                        </div>
                        <div className="col-md-12 text-center my-3 mb-5">
                          <p className="text-muted">
                            Atau cari untuk mengupload file dari direktorimu.
                          </p>
                        </div>
                        <div className="row d-flex justify-content-center align-items-center mb-5">
                          <div className="col-md-6">
                            <div className="row ms-5 ">
                              <div className="col-md-4 mt-2 text-end">
                                <img src="/ext.png" alt="" />
                              </div>
                              <div className="col-md-7 text-muted ">
                                <div className="col-md-12">High-Res Image</div>
                                <div className="col-md-12">PNG, JPG or GIF</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-4 mt-2 text-end">
                                <img src="/sizerev.png" alt="" />
                              </div>
                              <div className="col-md-7 text-muted ">
                                <div className="col-md-12">Size</div>
                                <div className="col-md-12">
                                  1080x1920 or 600x800
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <button type="button" className="btn btnAdd">
                      Tambah Portfolio
                    </button>
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
export default protectedRoute(Index);
