import React from "react";
import { Link } from "react-router-dom";
import { kevath_user } from "../Service/localdata";

const Sidebar = () => {
  const checkUrl = (url) => {
    // console.log(window.location.pathname);
    if (url == window.location.pathname) return true;
    else return false;
  };
  // checkUrl();
  return (
    <>
      <div className="sidebar1">
        <div className="sidebar11">
          <Link to="/profile-section">
            <div
              className={`sidebar111 ${checkUrl("/profile-section") && "side-active"
                }`}
            >
              <div className="row">
                <img src="/static/images2/Vector (3).png" alt="" />
                <p>Profile Details</p>
              </div>
            </div>
          </Link>
          <Link to="/documents">
            <div
              className={`sidebar111 ${checkUrl("/documents") && "side-active"
                }`}
            >
              <div className="row">
                <img src="/static/images2/Vector (4).png" alt="" />
                <p>Documents</p>
              </div>
            </div>
          </Link>
          <Link to="/pre-test">
            <div
              className={`sidebar111 ${checkUrl("/pre-test") && "side-active"
                }`}
            >
              <div className="row">
                <img src="/static/images2/Group 661 (1).png" alt="" />
                <p>Pre-Test</p>
              </div>
            </div>
          </Link>
          <Link to="/change-password">
            <div
              className={`sidebar111 ${checkUrl("/change-password") && "side-active"
                }`}
            >
              <div className="row">
                <img src="/static/images2/Lock.png" alt="" />
                <p>Change Password</p>
              </div>
            </div>
          </Link>
          <Link to="/help">
            <div
              className={`sidebar111 ${checkUrl("/help") && "side-active"
                }`}
            >
              <div className="row">
                <img src="/static/images5/info.png" alt="" />
                <p>Help</p>
              </div>
            </div>
          </Link>
          <Link to="/profile-faq">
            <div
              className={`sidebar111 ${checkUrl("/profile-faq") && "side-active"
                }`}
            >
              <div className="row">
                <img src="/static/images2/faq.png" alt="" />
                <p>Faq</p>
              </div>
            </div>
          </Link>
          {/* <div className="side-p">SUPPORT</div> */}
          <div className="sidebar111">
            <div className="row">
              <img src="/static/images2/policy.png" alt="" />
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="sidebar111">
            <div
              className="row"
              onClick={() => {
                localStorage.removeItem(kevath_user);
                localStorage.removeItem("kevath_user1");
                window.location.href = "/";
              }}
            >
              <img src="/static/images2/Logout.png" alt="" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
