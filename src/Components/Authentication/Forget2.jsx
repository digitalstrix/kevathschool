import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../context/MainContext";

const Forget2 = (props) => {
  useEffect(() => {
    props.setNavFlag1(false);
    props.setNavFlag2(false);
  }, []);
  const context = useContext(MainContext);

  return (
    <>
      <nav className="auth-nav">
        <div className="auth-nav1">
          <div className="auth-nav11">
            <img
              src="/static/images2/UI_LOGO_1_1-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </nav>
      <div className="auth-main0 auth-main01">
        <div className="eve-reg2-main">
          <div className="eve-reg2-main1">
            <div className="auth-main">
              <h5>Forgot Password</h5>
            </div>

            <div>
              <div className="auth-mid text-center">
                If there is an account associated with this email address you
                will receive a Link to reset email.
              </div>
              <div className="eve-reg22">
                <Link to="/login">
                  <button className="btn auth-btn2">Back to Login</button>
                </Link>
                <p style={{ margin: "14px 0px" }} className="text-center">
                  Or
                </p>
                <Link to="/forget-password2">
                  <button className="btn auth-btn2">Have OTP?</button>
                </Link>
                <div>
                  <p>Didn’t receive the email?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget2;
