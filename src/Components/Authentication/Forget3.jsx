import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../../context/MainContext";

const Forget3 = (props) => {
  useEffect(() => {
    props.setFootFlag(false);
    props.setNavFlag1(false);
    props.setNavFlag2(false);
  }, []);
  const context = useContext(MainContext);
  const navigate = useNavigate();
  const [value, setValue] = useState({
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    let email = localStorage.getItem("kevath_forgot_email");
    if (email) {
      if(value.newPassword.length>=8)
      {
        if (value.newPassword === value.confirmPassword) {
          let flag = false;
  
          let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          if (reg.exec(value["newPassword"]) === null) {
            document.getElementById(`${"newPassword"}-err`)?.remove();
            let nc = document.createElement('div');
            nc.setAttribute('id', `${"newPassword"}-err`);
            nc.setAttribute('class', 'err-show');
            nc.innerHTML = "Password must be at least 8 characters and contain 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character";
            // console.log(document.getElementsByName('newPassword')[0].parentNode);
            // console.log(nc);
            document.getElementsByName('newPassword')[0].parentNode.appendChild(nc);
          }
          else {
            document.getElementById(`${"newPassword"}-err`)?.remove();
          }
  
          const checkErr = document.querySelectorAll('.err-show');
          if (checkErr.length === 0) {
            flag = true;
          }
  
          if (flag) {
            let ans = await context.forgetPassword2(
              email,
              value.otp,
              value.newPassword
            );
            if (ans.status) {
              props.setAlert(ans.message, "success");
              setTimeout(function () {
                navigate("/login");
              }, 2000);
            } else {
              props.setAlert(ans.message, "error");
            }
          }
  
        } else {
          props.setAlert("Password and confirm password should be same", "error");
        }
      }
      else {
        props.setAlert("Password length should be greater than or equal to 8", "error");
      }
    } else {
      props.setAlert("User unauthorised", "error");
      window.location.href = "/login";
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
                <label htmlFor="otp">OTP *</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={value.otp}
                  onChange={handleChange}
                  placeholder="Enter OTP *"
                  required
                />
              </div>
              <div className="eve-reg21">
                <label htmlFor="newPassword">New Password *</label>
                <div className="password">
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={value.newPassword}
                    onChange={handleChange}
                    placeholder="Enter new password *"
                    required
                  />
                  <div onClick={() => {
                    const pass = document.getElementById('newPassword');
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
              <div className="eve-reg21">
                <label htmlFor="confirmPassword">Confirm Password *</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={value.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter confirm password *"
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
