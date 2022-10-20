import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar1">
        <div className="sidebar11">
          <div className="sidebar111 side-active">
            <div className="row">
              <img src="/static/images2/Vector (3).png" alt="" />
              <p>Profile Details</p>
            </div>
          </div>
          <Link to="/profile-sec2">
            <div className="sidebar111">
              <div className="row">
                <img src="/static/images2/Vector (4).png" alt="" />
                <p>Documents</p>
              </div>
            </div>
          </Link>
          <Link to="/profile-sec3">
            <div className="sidebar111">
              <div className="row">
                <img src="/static/images2/Group 661 (1).png" alt="" />
                <p>Pre-Test</p>
              </div>
            </div>
          </Link>
          <Link to="/profile-sec11">
            <div className="sidebar111">
              <div className="row">
                <img src="/static/images2/lock.png" alt="" />
                <p>Change Password</p>
              </div>
            </div>
          </Link>
          <Link to="/profile-sec4">
            <div className="sidebar111">
              <div className="row">
                <img src="/static/images2/help.png" alt="" />
                <p>Help</p>
              </div>
            </div>
          </Link>
          <Link to="/profile-sec5">
            <div className="sidebar111">
              <div className="row">
                <img src="/static/images2/faq.png" alt="" />
                <p>Faq</p>
              </div>
            </div>
          </Link>
          <div className="side-p">SUPPORT</div>
          <div className="sidebar111">
            <div className="row">
              <img src="/static/images2/info.png" alt="" />
              <p>Help</p>
            </div>
          </div>
          <div className="sidebar111">
            <div className="row">
              <img src="/static/images2/Vector (5).png" alt="" />
              <p>FAQs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
