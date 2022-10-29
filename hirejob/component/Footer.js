
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer class="container-fluid bgFooter text-white p-5 ">
    <div class="row">
      <div class="col-md-4">
        <div class="row">
          <Link className="mx-2" href="/">
            <img src="/Group 978 1.png" width="150" alt="logo" />
          </Link>
          <p className="mx-2 my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            euismod ipsum et dui rhoncus auctor.
          </p>
        </div>
      </div>
      <hr />
      <div className="col-md-7">2020 Pewworld. All right reserved</div>
      <div className="col-md-5">
        <div className="row text-end ms-5">
          <div className="col-md-4">
            <Link className=" text-white" href="/">
              Telepon
            </Link>
          </div>
          <div className="col-md-4">
            <Link className=" text-white" href="/">
              Email
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};
export default Footer;


