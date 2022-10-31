import React, { useState, useContext } from "react";
import MainContext from "../../context/MainContext";

const Referral = () => {
  const [value, setValue] = useState({
    code: "",
  });
  const context = useContext(MainContext);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    // let ans = await context.login(value.email, value.Password);
  };

  return (
    <div className="auth-main0 signup2ver">
      <div className="eve-reg2-main">
        <div className="eve-reg2-main1 eve-reg3-main1">
          <h2>Referral Code</h2>
          <h5>Enter Referral Code  </h5>
          <form onSubmit={handleSubmit}>
            <div className="eve-reg21 eve-reg31">
              <input
                type="text"
                id="code"
                name="code"
                value={value.code}
                onChange={handleChange}
                placeholder="Have Referral Code? "
              />
            </div>
            <div className="eve-reg22 row row1">
              <button className="btn btn7">Skip</button>
              <button type="submit" className="btn btn1">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Referral;
