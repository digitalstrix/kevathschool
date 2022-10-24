import React, { useState, useContext } from "react";
import MainContext from "../../context/MainContext";

const SignUp2 = () => {
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
    let ans = await context.login(value.email, value.Password);
  };

  return (
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
                placeholder="Enter verification code"
              />
            </div>
            <div className="eve-reg22">
              <button className="btn btn1">REGISTER</button>
              <div className="eve-reg30">
                <b>Back</b>
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
  );
};

export default SignUp2;
