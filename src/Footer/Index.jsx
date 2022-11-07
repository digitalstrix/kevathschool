import React from "react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <>
      <footer className="foot">
        <div className="foot1">
          <div className="row row1 row2 foot02">
            <div className="foot11 foot10">
              <img
                className="foot11_logo"
                src="/static/images2/nav_logo.png"
                alt=""
              />
              <p>A community with high expectation and high achievement.</p>
              <div className="row icons">
                <div className="icons1">
                  <img src="/static/images/Icon.png" alt="" />
                </div>
                <div className="icons1">
                  <img src="/static/images/Icon (1).png" alt="" />
                </div>
                <div className="icons1">
                  <img src="/static/images/Icon (2).png" alt="" />
                </div>
                <div className="icons1">
                  <img src="/static/images2/ig.png" alt="" />
                </div>
                <div className="icons1">
                  <img src="/static/images2/yb.png" alt="" />
                </div>
              </div>
            </div>
            <div className="row foot20">
              <div className="foot12 foot10">
                <h5 className="h5">Resources</h5>
                <div className="foot_a">
                  <a href="#">Alumni</a>
                </div>
                <div className="foot_a">
                  <a href="#">Newsroom</a>
                </div>
                <div className="foot_a">
                  <NavLink to="/hfu">Hire From Us</NavLink>
                </div>
                <div className="foot_a">
                  <a href="#">Careers</a>
                </div>
              </div>
              <div className="foot13 foot10">
                <h5 className="h5">Company</h5>
                <div className="foot_a">
                  <NavLink to="/about-us">Our Team</NavLink>
                </div>
                <div className="foot_a">
                  <NavLink to="/about-us">About Us</NavLink>
                </div>
                <div className="foot_a">
                  <a href="#">Testimonials</a>
                </div>
                <div className="foot_a">
                  <NavLink to="/about-us">Our Investors</NavLink>
                </div>
              </div>
              <div className="foot14 foot10">
                <h5 className="h5" style={{ marginBottom: "1.1rem" }}>
                  Get in touch
                </h5>
                <div className="inp">
                  <input type="text" placeholder="Enter your email" />
                  <img src="/static/images/Icon (3).png" alt="" />
                </div>
                <div className="foot_a">
                  <NavLink to="/referral1">Referral Program</NavLink>
                </div>
                <div className="foot_a">
                  <NavLink to="/contact">Contact Us</NavLink>
                </div>
                <div className="foot_a">
                  <NavLink to="/faq">FAQ</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="foot3">
            <p>Copyright 2022 ©ARC423 All rights reserved.</p>
          </div>
          <div className="foot4">
            <img src="/static/images/Vector 2.png" alt="" width="310px" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
