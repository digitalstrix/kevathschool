import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../../context/MainContext";

const Referral = (props) => {
  const [values, setValues] = useState({
    fullName: "",
    userId: "",
    email: ""
  });

  useEffect(() => {
    props.setFootFlag(false);
    props.setNavFlag1(false);
    props.setNavFlag2(false);
    getData();
  }, []);

  const getData = async () => {
    const data = await context.getUserDetails();
    console.log(data);
    setValues({
      fullName: `${data.data.firstName} ${data.data.lastName}`,
      userId: data.data.id,
      email: data.data.email
    });
  }

  const navigate = useNavigate();

  const [value, setValue] = useState({
    code: "",
  });
  const context = useContext(MainContext);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value.code, values.email, values.fullName, values.userId);
    let ans = await context.referralRegister(value.code, values.email, values.fullName, values.userId);
    console.log(ans);
    if (ans.status) {
      props.setAlert(ans.message, "success");
      navigate('/signup2ver');
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
                <button onClick={() => {
                  navigate('/signup2ver');
                }} className="btn btn7">Skip</button>
                <button type="submit" className="btn btn1">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Referral;
