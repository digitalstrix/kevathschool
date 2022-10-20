import React, { useEffect, useState } from "react";

const Forget1 = (props) => {
  useEffect(() => {
    props.setNavFlag1(false);
    props.setNavFlag2(false);
  }, []);

  const [value, setValue] = useState({
    email: "",
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
        </div>
      </nav>
      <div className="auth-main0 height-forget">
        <div className="eve-reg2-main">
          <div className="eve-reg2-main1">
            <div className="auth-main">
              <h5>Forgot Password</h5>
              <p>Enter your registerd email to reset the password.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="eve-reg21">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={value.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </div>
              <div className="eve-reg22">
                <button className="btn auth-btn2">Reset</button>
                <div>
                  <p>Back to Login</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget1;
