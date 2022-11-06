import React, {useState} from "react";
import Head from "next/head";
import Image from "next/image";
import Sidepage from "../../component/sidePage";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    company_name: "",
    department: "",
    phone: "",
    password: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (form.full_name === "" || form.email === "" || form.company_name === "" || form.department === "" || form.phone === "" || form.password === "") {
      alert("Please fill all the field");
    } else {
      const body = {
        full_name: form.full_name,
        email: form.email,
        company_name: form.company_name,
        department: form.department,
        phone: form.phone,
        password: form.password,
      }
      axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/recruiter/register`, body)
      .then((res) => {
        console.log(res);
        alert("Register Success");
        router.push("/loginrekrut/login");
        
      })
      .catch((err) => {
        console.log(err);
        alert("Register Failed");
      })
    }
  }
  return (
    <>
      <Head>
        <title>Register rekrut</title>
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
                  <label htmlFor="inputUsername" className="form-label">
                    Nama
                  </label>
                  <input
                    className="form-control"
                    id="inputUsername"
                    placeholder="Masukkan nama panjang"
                    onChange={(e) => setForm({...form, full_name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="inputEmail" className="form-label">
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
                  <label htmlFor="inputCompany" className="form-label">
                    Perusahaan
                  </label>
                  <input
                    className="form-control"
                    id="inputCompany"
                    placeholder="Enter company name"
                    onChange={(e) => setForm({...form, company_name: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="inputPosition" className="form-label">
                    Jabatan
                  </label>
                  <input
                    className="form-control"
                    id="inputPosition"
                    placeholder="Enter position"
                    onChange={(e) => setForm({...form, department: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="inputPhone" className="form-label">
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
                <div>
                  <label htmlFor="inputPassword" className="form-label">
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
                    {/* <Link className="a" href="/registerrekrut/register">
                      Daftar
                    </Link> */}
                  </button>
                </div>
                <div className="text-center">
                  <p className="text-muted">
                    Anda sudah punya akun?
                    <Link className="ap" href="/loginrekrut/login">
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
