import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../context/MainContext";

const Signup = (props) => {
  useEffect(() => {
    props.setNavFlag1(false);
    props.setNavFlag2(false);
  }, []);
  const context = useContext(MainContext);

  const [value, setValue] = useState({
    email: "",
    Password: "",
    fullName: "",
    phone: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    let ans = await context.signup(value.fullName, "", value.email, value.phone, value.Password);

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
              <div className="eve-reg21">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={value.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
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
                />
              </div>
              <div className="eve-reg21">
                <label htmlFor="Password">Password</label>
                <input
                  type="text"
                  id="Password"
                  name="Password"
                  value={value.Password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>
              <div className="eve-reg22 eve-reg225">
                <input type="checkbox" id="agree" name="agree" value="true" />
                <label for="agree">
                  {" "}
                  All your information is collected, stored and processed as per
                  our data processing guidelines. By signing up on
                  Kevarthschool, you agree to our{" "}
                  <span className="text-green">Privacy Policy</span> and{" "}
                  <span className="text-green">Terms of Use</span>
                </label>
              </div>
              <div className="eve-reg22">
                <button className="btn auth-btn2">Continue</button>
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
