import React, { useContext, useEffect } from 'react'
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MainContext from '../../context/MainContext';

const EventReg2 = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const context = useContext(MainContext);

  useEffect(() => {
    props.setFootFlag(true);
    let user = localStorage.getItem('kevath_user');
    if (user) {
      user = JSON.parse(user);
      if (!user.token || user.token === '') {
        props.setNavFlag1(true);
        props.setNavFlag2(false);
      }
      else {
        props.setNavFlag1(false);
        props.setNavFlag2(true);
      }
    }
    else {
      props.setNavFlag1(true);
      props.setNavFlag2(false);
    }
  }, []);

  useEffect(() => {
    console.log(id);
  }, [id]);

  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "firstName" || e.target.name === "lastName") {
      let n = e.target.value.length - 1;
      if (n < 0) {
        setValue({ ...value, [e.target.name]: "" });
      }
      else {
        let k = e.target.value.charAt(n).charCodeAt(0);
        if ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 32 || k === 8) {
          setValue({ ...value, [e.target.name]: e.target.value });
        }
      }
    }
    else if (e.target.name === "email") {
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
          if (i === "phone") {
            text = document.getElementById(i).parentNode.previousElementSibling.innerText.replace("*", "");
          }
          else {
            text = document.getElementById(i).previousElementSibling.innerText.replace("*", "");
          }
          nc.innerHTML = text + " is required";

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
          if (value[i].length !== 10) {
            let nc = document.createElement("div");
            nc.setAttribute("id", `${i}-err`);
            nc.setAttribute("class", "err-show");
            nc.innerHTML = "Phone number must be 10 digits";
            document
              .getElementsByName(i)[0]
              .parentNode.parentNode.appendChild(nc);
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
      // navigate("/event-register-verification");
    }
  };

  return (
    <>
      <div className="eve-reg2-main">
        <div className="eve-reg2-main1">
          <h1>Register Yourself for Event</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="eve-reg21 mr-2">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={value.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="eve-reg21 ml-2">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={value.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="eve-reg21">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={value.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="eve-reg21">
              <label htmlFor="phone">Phone</label>
              <div className="row">
                <select id="country-select">
                  <option value="+91">+91</option>
                  <option value="+01">+01</option>
                  <option value="+92">+92</option>
                  <option value="+93">+93</option>
                </select>
                <input
                  type="number"
                  className='cus-inp'
                  id="phone"
                  name="phone"
                  value={value.phone}
                  onKeyDown={blockInvalidChar}
                  onChange={handleChange}
                  placeholder="+91 "
                />
              </div>
            </div>
            <div className="eve-reg22">
              <button type="submit" className="btn btn1">REGISTER</button>
              <div>
                <p>
                  Don't have any account?{" "}
                  <span>
                    <Link className="text-green" to="/signup">
                      Sign up
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="eve-reg13">
        <div className="eve-reg131">
          <div className="eve-reg1311">
            <img src="/static/images2/Polygon 9.png" alt="" />
          </div>
          <div className="eve-reg1312">
            <h3 className="text-green">Have more</h3>
            <h1>Question?</h1>
          </div>
          <div className="eve-reg1313">
            <img src="/static/images2/Polygon 8.png" alt="" />
            <button className="btn btn1">Contact us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventReg2;
