import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../../context/MainContext";

const VerifyEmail = (props) => {
  const [navFlag, setNavFlag] = useState(true);
  useEffect(() => {
    props.setFootFlag(false);
    props.setNavFlag1(false);
    props.setNavFlag2(true);
    // let user = localStorage.getItem('kevath_user');
    // if (user) {
    //   user = JSON.parse(user);
    //   if (!user.token || user.token === '') {
    //     props.setNavFlag1(true);
    //     props.setNavFlag2(false);
    //   }
    //   else {
    //     props.setNavFlag1(false);
    //     props.setNavFlag2(true);
    //   }
    // }
    // else {
    //   props.setNavFlag1(true);
    //   props.setNavFlag2(false);
    // }
  }, []);
  const navigate = useNavigate();
  const [value, setValue] = useState({
    verification: "",
  });
  const context = useContext(MainContext);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    let user = localStorage.getItem("kevath_user");
    if (user) {
      user = JSON.parse(user);
      let ans = await context.emailVerify(user.email, value.verification);
      if (ans.status) {
        props.setAlert(ans.message, "success");
        navigate("/profile-sec1");
      } else {
        props.setAlert(ans.message, "error");
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
      <div className="auth-main0 signup2ver">
        <div className="eve-reg2-main">
          <div className="eve-reg2-main1 eve-reg3-main1">
            <h2>Now, check your inbox</h2>
            <h5>We've sent a verificaton code to your email</h5>
            <form onSubmit={handleSubmit}>
              <div className="eve-reg21 eve-reg31">
                <input
                  type="text"
                  id="verification"
                  name="verification"
                  value={value.verification}
                  onChange={handleChange}
                  placeholder="Enter verification code *"
                  required
                />
              </div>
              <div className="eve-reg22">
                <button type="submit" className="btn btn1">
                  Verify
                </button>
                {/* <div
                  className="pointer"
                  onClick={() => {
                    navigate("/referral");
                  }}
                  className="eve-reg30"
                >
                  <b>Back</b>
                </div> */}
                {/* <div>
                  <p>
                    Don't have any account?{" "}
                    <span>
                      <a className="text-green" href="/signup">
                        Sign up
                      </a>
                    </span>
                  </p>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;