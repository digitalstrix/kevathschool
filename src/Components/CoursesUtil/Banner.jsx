import React from "react";
import { Link } from "react-router-dom";
// import pic from"./pic.jpg"

export default function Banner() {
  return (
    <>
      <div className="container-banner1">
        <div className="container-banner">
          <div className="main-banner">
            <h1 className="header">Full Stack Web Development</h1>
            <p className="paraa">
              A Full-Stack developer is a professional responsible for working
              on both front-end and back-end
              <br /> development processes.
            </p>
            <Link to="/events-reg">
              <button className="btn_1" type="sumbit">
                APPLY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
