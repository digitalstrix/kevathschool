import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../../context/MainContext";
import { kevath_user } from "../../Service/localdata";

const Signup = (props) => {
  useEffect(() => {
    props.setFootFlag(false);
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

    let flag = false;
    for (let i of Object.keys(value)) {
      if (value[i].length === 0) {
        if (!document.getElementById(`${i}-err`)) {
          let nc = document.createElement("div");
          nc.setAttribute("id", `${i}-err`);
          nc.setAttribute("class", "err-show");
          nc.innerHTML = "Field is required";
          if (i === "phone") {
            document
              .getElementsByName(i)[0]
              .parentNode.parentNode.appendChild(nc);
          } else {
            document.getElementsByName(i)[0].parentNode.appendChild(nc);
          }
        }
      } else {
        document.getElementById(`${i}-err`)?.remove();

        if (i === "firstName") {
          if (value[i].length < 3) {
            let nc = document.createElement("div");
            nc.setAttribute("id", `${i}-err`);
            nc.setAttribute("class", "err-show");
            nc.innerHTML = "Must includes at least 3 characters";
            document.getElementsByName(i)[0].parentNode.appendChild(nc);
          } else {
            document.getElementById(`${i}-err`)?.remove();
          }
        }

        if (i === "phone") {
          if (value[i].length < 10) {
            let nc = document.createElement("div");
            nc.setAttribute("id", `${i}-err`);
            nc.setAttribute("class", "err-show");
            nc.innerHTML = "Must includes at least 10 characters";
            document
              .getElementsByName(i)[0]
              .parentNode.parentNode.appendChild(nc);
          } else {
            document.getElementById(`${i}-err`)?.remove();
          }
        }

        if (i === "Password") {
          let reg =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          if (reg.exec(value[i]) === null) {
            let nc = document.createElement("div");
            nc.setAttribute("id", `${i}-err`);
            nc.setAttribute("class", "err-show");
            nc.innerHTML =
              "Password must be at least 8 characters and contain 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character";
            // console.log(document.getElementsByName(i)[0].parentNode);
            document.getElementsByName(i)[0].parentNode.appendChild(nc);
          } else {
            document.getElementById(`${i}-err`)?.remove();
          }
        }
      }
    }

    const checkErr = document.querySelectorAll(".err-show");
    if (checkErr.length === 0) {
      flag = true;
    }

    if (flag) {
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
        let emailSent = await context.sendEmailToVerify(value.email);
        localStorage.setItem(
          kevath_user,
          JSON.stringify({ email: value.email, token: ans.data.access_token })
        );
        alert("here");
        navigate("/referral");
        // navigate('/signup-verification');
      } else {
        props.setAlert(ans.message, "error");
      }
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
                  <label htmlFor="fullName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={value.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </div>
                <div className="eve-reg21 eve-reg212">
                  <label htmlFor="fullName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={value.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="eve-reg21">
                <label htmlFor="email">Email *</label>
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
                <label htmlFor="phone">Phone *</label>
                <div className="row">
                  <input
                    type="text"
                    value="+91"
                    onChange={() => {
                      return;
                    }}
                    className="stick-inp"
                  />
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={value.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="eve-reg21">
                <label htmlFor="Password">Password *</label>
                <div className="password">
                  <input
                    type="password"
                    id="Password"
                    name="Password"
                    value={value.Password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                  <div
                    onClick={() => {
                      const pass = document.getElementById("Password");
                      if (pass.type === "text") {
                        pass.type = "password";
                      } else {
                        pass.type = "text";
                      }
                    }}
                    className="pass-eye"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                  </div>
                </div>
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
                <button type="submit" className="btn auth-btn2">
                  Sign Up
                </button>
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
