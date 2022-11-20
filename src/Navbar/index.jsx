import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  function closeNav() {
    console.log("sdfsdf");
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <>
      <nav className="navbar mainNav">
        <div className="nav0 row">
          <Link to="/">
            <img
              src="/static/images2/UI_LOGO_1_1-removebg-preview.png"
              alt=""
            />
          </Link>
        </div>
        <div className="nav01 row">
          <div className="row nav2 nav1">
            <Link to="/courses-main">
              <p>Courses</p>
            </Link>

            {/* <img src="/static/images/Arrow drodown.png" alt="" /> */}
          </div>
          <div className="nav1">
            <Link to="/events-reg">
              <p>Events</p>
            </Link>
          </div>
          <div className="nav1">
            <Link to="/fee-isa">
              <p>Fees & ISA</p>
            </Link>
          </div>
          <div className="nav1">
            <Link to="/hfu">
              <p>Hire From Us</p>
            </Link>
          </div>
          <div className="nav1 row">
            <Link to="/referral2">
              <p>Refer & Earn</p>
            </Link>
            <img src="/static/images/v 1.png" alt="" />
          </div>
          <div className="nav1">
            <Link to="/login">
              <button className="btn btn1">Login</button>
            </Link>
          </div>
        </div>
        <div className="layer">
          <img src="/static/images/Ellipse 3.png" alt="" />
        </div>
      </nav>

      <div id="mySidenav" className="sidenav">
        <div className="closebtn" onClick={closeNav}>
          &times;
        </div>
        <div className="sdi">
          <div className="row nav2">
            <Link onClick={closeNav} to="/courses-main">
              <p>Courses</p>
            </Link>
            {/* <img src="/static/images/Arrow drodown.png" alt="" /> */}
          </div>
          <Link onClick={closeNav} to="/events-reg">
            <p>Events</p>
          </Link>
          <Link onClick={closeNav} to="/fee-isa">
            <p>Fees & ISA</p>
          </Link>
          <Link onClick={closeNav} to="/hfu">
            <p>Hire From Us</p>
          </Link>
          <Link onClick={closeNav} to="/referral1">
            <p>Refer & Earn</p>
          </Link>
          <Link to="/login">
            <button className="btn btn1">Login</button>
          </Link>
        </div>
      </div>

      <div className="navbtn">
        <div className="mob-logo">
          <img src="/static/images2/UI_LOGO_1_1-removebg-preview.png" alt="" />
        </div>
        <svg
          onClick={openNav}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
    </>
  );
};

export default index;
