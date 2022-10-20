import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  useEffect(() => {
    props.setNavFlag1(false);
    props.setNavFlag2(false);
  }, []);

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(value);
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
            <Link to="/signup">
              <button className="btn btn1">Sign up</button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="auth-main0">
        <div className="eve-reg2-main">
          <div className="eve-reg2-main1">
            <div className="auth-main">
              <h5>Welcome back!</h5>
              <p>Please, log in to your account.</p>
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
                <label htmlFor="email">Username</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={value.email}
                  onChange={handleChange}
                  placeholder="Enter email id "
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
              <div className="eve-reg22">
                <Link to="/courses-main">
                  <button className="btn auth-btn2">Login</button>
                </Link>
                <div className="auth-forgot">
                  <Link to="/forget-password">
                    <p>Forgot password?</p>
                  </Link>
                </div>
                <div>
                  <p>
                    Don't have any account?{" "}
                    <span>
                      <a className="text-green" href="/signup">
                        Sign up
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

export default Login;
