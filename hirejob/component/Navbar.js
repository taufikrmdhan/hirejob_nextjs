
import React, {useEffect,useState} from "react";
import Link from "next/link";
import Image from "next/image";
// import axios from "axios";
// import {useRouter} from "next/router";

const Navbar = () => {

  // const router = useRouter();
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("data"));
  //   const id_user = data.id_user;
  //   axios
  //     .get(`http://localhost:3001/user/list/${id_user}`)
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setUser(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
     <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container-fluid">
          <Link className="navbar-brand mx-5" href="/">
            <Image
              src="/Group 980 2.png"
              width="100"
              height={30}
              alt="logo"
            />
          </Link>
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
                  <Link className="nav-link active" aria-current="page" href="/home/home">
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
                  <img
                    src="/Group 797.png"
                    width="20"
                    alt=""
                    className="mx-4"
                  />
                  <img
                    src="/btnNotifications.png"
                    width="20"
                    alt=""
                    className="ms-2"
                  />
                </a>
              </div>
              <Link href="/updateprofile/update"><Image
                  src="/nnzkZNYWHaU.png"
                  width={45}
                  height={45}
                  className="mobileProfileNavbar mx-5 rounded-circle customBorder"
                  alt="profile image"
                /></Link>
            </div>
          </div>
        </nav>
      </div>
  );
};
export default Navbar;


