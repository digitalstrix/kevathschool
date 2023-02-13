import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../../context/MainContext';

const ContactUs = (props) => {
    const navigate = useNavigate();
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

    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        if (e.target.name === "firstName" || e.target.name === "lastName") {
            let n = e.target.value.length - 1;
            if (n < 0) {
                setValue({ ...value, [e.target.name]: "" });
            }
            else {
                let k = e.target.value.charAt(n).charCodeAt(0);
                if ((k > 64 &&
                    k < 91) || (k > 96 && k < 123) || k === 32) {
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
                    text=document.getElementById(i).placeholder;
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

                if (i === "message") {
                    if (value[i].length < 5) {
                        let nc = document.createElement("div");
                        nc.setAttribute("id", `${i}-err`);
                        nc.setAttribute("class", "err-show");
                        nc.innerHTML = "Must includes at least 5 characters";
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
            let ans = await context.contactUs(value.firstName, value.lastName, value.phone, value.email, value.message, true);
            if (ans.status) {
                props.setAlert(ans.message, "success");
                //   navigate("/");
            } else {
                props.setAlert(ans.message, "error");
            }
        }
    };

    return (
        <>
            <div className="img-cls">
                <div className="prof4">
                    <h1><span className="bg-green">Connect</span>With Us</h1>
                </div>
            </div>
            <div className="prof-sec3 prof-sec04 prof-secm prof-secm1">
                <div className="prof-sec31 profile-sec-41">
                    <div className="prof-sec40">
                        <img src="/static/images2/Rectangle 1355.png" alt="" />
                    </div>
                    <div className="prof-sec4">
                        <div className="prof-sec411">
                            <div className="prof-sec4111">
                                <img src="/static/images2/i3.png" alt="" />
                                <h5>Chat with us</h5>
                                <div className="row">
                                    <img src="/static/images2/i4.png" alt="" />
                                    <p>+91 8987878787</p>
                                </div>
                            </div>
                            <div className="prof-sec4111">
                                <img src="/static/images2/i2.png" alt="" />
                                <h5>Connect with us</h5>
                                <div>
                                    <p>+91 8987878787</p>
                                </div>
                            </div>
                            <div className="prof-sec4111">
                                <img src="/static/images2/i1.png" alt="" />
                                <h5>Support</h5>
                                <div>
                                    <p>Support@kevath.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prof-sec41">
                        <div className="prof-sec42">
                            <div className="prof-sec421 text-center">
                                <h4>CONTACT US FORM</h4>
                            </div>
                            <form onSubmit={handleSubmit} className="prof-sec422">
                                <div className="row prof-sec4221">
                                    <div className="prof-sec-input">
                                        <input type="text" placeholder="First Name" name="firstName" id="firstName" onChange={handleChange} value={value.firstName} />
                                    </div>
                                    <div className="prof-sec-input">
                                        <input type="text" placeholder="Last Name" name="lastName" id='lastName' onChange={handleChange} value={value.lastName} />
                                    </div>
                                </div>
                                <div className="row prof-sec4221">
                                    <div className="prof-sec-input">
                                        <input type="text" placeholder="Email" name="email" id='email' onChange={handleChange} value={value.email} />
                                    </div>
                                    <div className="prof-sec-input">
                                        <div className="row">
                                            <select id="country-select">
                                                <option value="+91">+91</option>
                                                <option value="+01">+01</option>
                                                <option value="+92">+92</option>
                                                <option value="+93">+93</option>
                                            </select>
                                            <input type="number" onKeyDown={blockInvalidChar} className='cus-inp' placeholder="Phone Number" name="phone" id='phone' onChange={handleChange} value={value.phone} />
                                        </div>
                                    </div>
                                </div>
                                <div className="prof-sec-textarea">
                                    <textarea name="message" id='message' onChange={handleChange} value={value.message} placeholder="Message" cols="30" rows="10"></textarea>
                                </div>
                                <div style={{ marginTop: "15px" }} className="hfu-agree">
                                    <input type="checkbox" name="agree1" id="agree1" />
                                    <label htmlFor="agree1">I want to receive product updates, marketing news, and other relevant content by email from KevathSchool.</label>
                                </div>
                                <div className="hfu-agree">
                                    <input type="checkbox" name="agree2" id="agree2" />
                                    <label htmlFor="agree2">I have read and agreed to KevarthSchool Terms of Service and
                                        Privacy Policy.</label>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn1">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course3">
                <div className="course31">
                    <div className="course311">
                        <h1>Have more questions?</h1>
                    </div>
                    <div className="course312">
                        <div className="course3121">
                            <button className="btn btn3">CHECK OUR FAQS</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
