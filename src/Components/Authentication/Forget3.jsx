import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../context/MainContext";

const Forget3 = (props) => {
  useEffect(() => {
    props.setNavFlag1(false);
    props.setNavFlag2(false);
  }, []);
  const context = useContext(MainContext);

  const [value, setValue] = useState({
    otp: "",
    newPassword:"",
    confirmPassword:""
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    let email=localStorage.getItem('kevath_forgot_email');
    if(email)
    {
      if(value.newPassword===value.confirmPassword)
      {
        let ans = await context.forgetPassword2(email, value.otp, value.newPassword);
        if(ans.status)
        {
          props.setAlert(ans.message, "success");
        }
        else
        {
          props.setAlert(ans.message, "error");
        }
      }
      else
      {
        props.setAlert("Password and confirm password should be same", "error");
      }
    }
    else
    {
      props.setAlert("User unauthorised", "error");
      window.location.href="/login";
    }
  };

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
              <p>Enter your registerd email to reset the password.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="eve-reg21">
                <label htmlFor="email">OTP</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={value.otp}
                  onChange={handleChange}
                  placeholder="Enter OTP"
                  required
                />
              </div>
              <div className="eve-reg21">
                <label htmlFor="email">New Password</label>
                <input
                  type="text"
                  id="newPassword"
                  name="newPassword"
                  value={value.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div className="eve-reg21">
                <label htmlFor="email">Confirm Password</label>
                <input
                  type="text"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={value.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter confirm password"
                  required
                />
              </div>
              <div className="eve-reg22">
                <button className="btn auth-btn2">Reset Password</button>
                <div>
                  <Link to="/login">
                    <p>Back to Login</p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget3;
