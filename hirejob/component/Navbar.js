
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
     <div className="container-fluid">
        <nav class="navbar navbar-expand-lg bg-white">
          <div class="container-fluid">
          <Link className="navbar-brand mx-5" href="/">
            <img
              src="/Group 980 2.png"
              width="100"
              alt="logo"
            />
          </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 ms-5 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
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
                    class="mx-4"
                  />
                  <img
                    src="/btnNotifications.png"
                    width="20"
                    alt=""
                    className="ms-2"
                  />
                </a>
              </div>
              <img
                  src="/foto ktm.png"
                  width="40"
                  className="mobileProfileNavbar mx-5 rounded-circle customBorder"
                  alt="profile image"
                />
            </div>
          </div>
        </nav>
      </div>
  );
};
export default Navbar;


