import React, {useState} from "react";
import Head from "next/head";
import Sidepage from "../../component/sidePage";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";


const Index = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (form.email === "" || form.password === "") {
      alert("Please fill all the field");
    } else {
      const body = {
        email: form.email,
        password: form.password,
      }
      axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/recruiter/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token.token);
        localStorage.setItem("data", JSON.stringify(res.data.token.data));
        document.cookie = `token=${res.data.token.token}`;
        document.cookie = `data=${JSON.stringify(res.data.token.data)}`;
        alert("Login Success");
        router.push("/landingpage/afterloginRec");
      })
      .catch((err) => {
        console.log(err);
        alert("Login Failed");
      })
    }
  }
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="keywords" content="login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body">
      <div className="container-fluid">
        <div className="row">
          <Sidepage />
          <div className="col-md-6 d-flex align-items-center">
            <form className="row g-3 m-5" onSubmit={(e) => onSubmitHandler(e)}>
              <h3 className="">Halo, Pewpeople</h3>
              <p className=" text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti aut officia explicabo amet, quas voluptate porro sunt.
              </p>
              <div>
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Masukkan email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="inputPassword" className="form-label">
                  Kata sandi
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Masukkan kata sandi"
                  onChange={(e) => setForm({...form, password: e.target.value})}
                />
              </div>
              <div className="text-end">
                <a className="adiv" href="/forgotPass.html">
                  Lupa sandi ?
                </a>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btnCustom">
                  Masuk
                  {/* <Link className="a" href="/landingpage/afterlogin">
                    Masuk
                  </Link> */}
                </button>
              </div>
              <div className="text-center">
              <p className="text-muted">
                Anda belum punya akun?
                <Link className="ap" href="/registerrekrut/register"> Daftar disini</Link>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Index;
