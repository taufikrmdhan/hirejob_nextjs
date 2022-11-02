import React, {useState} from "react";
import Head from "next/head";
import Image from "next/image";
import Sidepage from "../../component/sidePage";
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/router";

const Index = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (form.name === "" || form.email === "" || form.phone === "" || form.password === "") {
      alert("Please fill all the field");
    } else {
      const body = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
      }
      axios
      .post("http://localhost:3001/user/register", body)
      .then((res) => {
        console.log(res);
        router.push("/loginkerja/login");
        alert("Register Success");
      })
      .catch((err) => {
        console.log(err);
        alert("Register Failed");
      })
    }
  };

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="keywords" content="registerkerja" />
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
                  Corrupti aut officia explicabo amet, quas voluptate porro
                  sunt.
                </p>
                <div>
                  <label for="inputUsername" className="form-label">
                    Nama
                  </label>
                  <input
                    className="form-control"
                    id="inputUsername"
                    placeholder="Masukkan nama panjang"
                    onChange={(e) => setForm({...form, name: e.target.value})}
                  />
                </div>
                <div>
                  <label for="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Masukkan email"
                    onChange={(e) => setForm({...form, email: e.target.value})}
                  />
                </div>
                <div>
                  <label for="inputPhone" className="form-label">
                    No handphone
                  </label>
                  <input
                    className="form-control"
                    id="inputPhone"
                    placeholder="08xxxxxxxxx"
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label for="inputPassword" className="form-label">
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
                <div>
                  <label for="inputPassword" className="form-label">
                    Konfirmasi password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Masukkan konfirmasi kata sandi"
                  />
                </div>
            
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btnCustom">
                    Daftar
                    {/* <Link className="a" href="/loginkerja/login">
                      Daftar
                    </Link> */}
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-muted">
                   Anda sudah punya akun?
                    <Link className="ap" href="/loginkerja/login">
                       Masuk disini
                    </Link>
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
