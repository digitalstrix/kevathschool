import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../../context/MainContext";
import { kevath_user } from "../../Service/localdata";

const Signup = (props) => {
  useEffect(() => {
    props.setNavFlag1(false);
    props.setNavFlag2(false);
  }, []);
  const context = useContext(MainContext);
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    Password: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    let ans = await context.signup(
      value.firstName,
      value.lastName,
      value.email,
      value.phone,
      value.Password
    );
    console.log(ans, "<<<<<<signup");
    if (ans.status) {
      props.setAlert(ans.message, "success");
      localStorage.setItem(
        kevath_user,
        JSON.stringify({ email: value.email, token: ans.data.access_token })
      );
      setTimeout(function () {
        navigate("/profile-sec1");
      }, 2000);
    } else {
      props.setAlert(ans.message, "error");
    }
  };

  return (
    <>
      <nav className="auth-nav">
        <div className="auth-nav1">
          <div className="auth-nav11">
            <Link to="/">
              <img
                src="/static/images2/UI_LOGO_1_1-removebg-preview.png"
                alt=""
              />
            </Link>
          </div>
          <div className="auth-nav12">
            <Link to="/login">
              <button className="btn btn1">Login</button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="auth-main0 signup-0">
        <div className="eve-reg2-main">
          <div className="eve-reg2-main1">
            <div className="auth-main">
              <h5>Create an account</h5>
              <p>Join Kevarthschool now</p>
              <button className="auth-btn">
                <img src="/static/images3/google.png" alt="" />
              </button>
            </div>
            <div className="auth-line">
              <div className="auth-line0"></div>
              <div className="auth-line1">
                <p>or</p>
              </div>
              <div className="auth-line0"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row eve-reg-row">
                <div className="eve-reg21 eve-reg211">
                  <label htmlFor="fullName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={value.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                  />
                </div>
                {/* <div className="eve-reg21 eve-reg212">
                  <label htmlFor="fullName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={value.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                  />
                </div> */}
              </div>
              <div className="eve-reg21 eve-reg212">
                <label htmlFor="fullName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={value.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="eve-reg21">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={value.email}
                  onChange={handleChange}
                  placeholder="Email "
                  required
                />
              </div>
              <div className="eve-reg21">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={value.phone}
                  onChange={handleChange}
                  placeholder="+91 "
                  required
                />
              </div>
              <div className="eve-reg21">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  id="Password"
                  name="Password"
                  value={value.Password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <br />
              <div className="eve-reg22 eve-reg225">
                <label htmlFor="agree">
                  By signing up on Kevarthschool, I accept the KevathScool
                  Privacy Policy and Terms of Service
                  <span className="text-green"> Privacy Policy</span> and{" "}
                  <span className="text-green">Terms of Use</span>
                </label>
              </div>
              <div className="eve-reg22">
                <button className="btn auth-btn2">Sign Up</button>
                <div>
                  <p>
                    Alreadt have an account?{" "}
                    <span>
                      <a className="text-green" href="/login">
                        Login
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
