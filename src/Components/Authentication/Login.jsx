import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../../context/MainContext";
import { kevath_user } from "../../Service/localdata";

const Login = (props) => {
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
  });

  const handleChange = (e) => {
    if (e.target.name === "email") {
      let n = e.target.value.length - 1;
      if (n < 0) {
        setValue({ ...value, [e.target.name]: "" });
      }
      else {
        let k = e.target.value.charAt(n).charCodeAt(0);
        if (k !== 32) {
          setValue({ ...value, [e.target.name]: e.target.value });
        }
      }
    }
    else {
      setValue({ ...value, [e.target.name]: e.target.value });
    }
  };

  const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

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
          let text;
          if (i === "Password") {
            text = document.getElementById(i).parentNode.previousElementSibling.innerText.replace("*", "");
          }
          else {
            text = document.getElementById(i).previousElementSibling.innerText.replace("*", "");
          }

          nc.innerHTML = text + " is required";

          document.getElementsByName(i)[0].parentNode.appendChild(nc);
        }
      } else {
        document.getElementById(`${i}-err`)?.remove();

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

        if (i === "email") {
          let reg =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          if (reg.exec(value[i]) === null) {
            let nc = document.createElement("div");
            nc.setAttribute("id", `${i}-err`);
            nc.setAttribute("class", "err-show");
            nc.innerHTML =
              "Please enter a valid email";
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
      let ans = await context.login(value.email, value.Password);
      if (ans.status) {
        props.setAlert(ans.message, "success");
        localStorage.setItem(
          kevath_user,
          JSON.stringify({ email: value.email, token: ans.data.access_token })
        );
        setTimeout(function () {
          navigate("/profile-section");
        }, 2000);
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
                <label htmlFor="email">Email *</label>
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
                  <div onClick={() => {
                    const pass = document.getElementById('Password');
                    if (pass.type === "text") {
                      pass.type = 'password';
                    }
                    else {
                      pass.type = 'text';
                    }
                  }} className="pass-eye">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="eve-reg22">
                <button type="submit" className="btn auth-btn2">
                  Login
                </button>
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
