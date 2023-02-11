import React, { useState, useContext, useEffect } from 'react';
import MainContext from "../../context/MainContext";
import { useNavigate } from 'react-router-dom';

const Referral1 = (props) => {
    const navigate = useNavigate();
    const context = useContext(MainContext);

    useEffect(() => {
        let user = localStorage.getItem('kevath_user');
        if (user) {
            user = JSON.parse(user);
            if (!user.token || user.token === '') {
                navigate('/login');
            }
        }
        else {
            navigate('/login');
        }

        props.setNavFlag1(false);
        props.setNavFlag2(true);
        props.setFootFlag(true);
    }, []);

    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        confirmEmail: ""
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

    const handleSubmit = (e) => {
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

                if (i === "confirmEmail") {
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
            //todo
        }
    };

    return (
        <>
            <div className="refe">
                <div className="row refe1">
                    <div className="refe11">
                        <h1>Referral <span className="text-green">Program</span></h1>
                        <h3>Exciting Brand Voucher & Mega Rewards</h3>
                    </div>
                    <div className="refe12">
                        <img src="/static/images4/refe-bg.png" alt="" />
                    </div>
                </div>
                <div className="refe2">
                    <h5 className="text-green">About your referral</h5>
                    <h5>First, please enter some details about your referral</h5>
                    <form onSubmit={handleSubmit} className="refe21">
                        <div className="refe211 row">
                            <div className="refe-input">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" name="firstName" onChange={handleChange} value={value.firstName} />
                            </div>
                            <div className="refe-input">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName" onChange={handleChange} value={value.lastName} />
                            </div>
                            <div className="refe-input">
                                <label htmlFor="phone">Phone number</label>
                                <div className="row">
                                    <select id="country-select">
                                        <option value="+91">+91</option>
                                        <option value="+01">+01</option>
                                        <option value="+92">+92</option>
                                        <option value="+93">+93</option>
                                    </select>
                                    <input type="number" className='cus-inp' id="phone" name="phone" onKeyDown={blockInvalidChar} onChange={handleChange} value={value.phone} />
                                </div>
                            </div>
                            <div className="refe-input">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" onChange={handleChange} value={value.email} />
                            </div>
                            <div className="refe-input">
                                <label htmlFor="confirmEmail">Confirm email</label>
                                <input type="text" id="confirmEmail" name="confirmEmail" onChange={handleChange} value={value.confirmEmail} />
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn refe-btn">MAKE REFERRAL</button>
                        </div>
                    </form>
                </div>
                <div className="refe3 row">
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <div className="refe4">
                    <h5 className="text-green">Share with your friends</h5>
                    <div className="row refe41">
                        <h5>Referral Link: </h5>
                        <p>www.kevathschol.school.com</p>
                    </div>
                    <div className="row refe41">
                        <h5>Share on social: </h5>
                        <div className="refe411 row">
                            <div className="refe4111">
                                <img src="/static/images5/Icon.png" alt="" />
                            </div>
                            <div className="refe4111">
                                <img src="/static/images5/Icon (1).png" alt="" />
                            </div>
                            <div className="refe4111">
                                <img src="/static/images5/Icon (2).png" alt="" />
                            </div>
                            <div className="refe4111">
                                <img src="/static/images5/Icon (3).png" alt="" />
                            </div>
                            <div className="refe4111 refe4112">
                                <img src="/static/images5/whatsapp-logo-light-green-png-0 1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="refe5">
                    <h5 className="text-green">My Referral</h5>
                    <div className="refe51 row">
                        <div className="refe511 refe512">
                            <b className="text-white">Total Referral Entries</b>
                            <h5 className="text-white">0</h5>
                        </div>
                        <div className="refe511 refe513">
                            <b className="text-white">Total Successful Referral</b>
                            <h5 className="text-white">0</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="refe6">
                <h5 className="text-green">Your Latest Referrals</h5>
                <div className="refe61">
                    <div className="refe611 row">
                        <p>NAME</p>
                        <p>EMAIL</p>
                        <p>REGISTER DATE</p>
                        <p>STATUS</p>
                    </div>
                </div>
                <div className="refe62">
                    <div className="refe621 row">
                        <div className="refe-user row refe6211">
                            <img src="/static/images5/image 8.png" alt="" />
                            <p>Narendra R.</p>
                        </div>
                        <p className="refe6211 refe6211-1">Narendra@gmail.com</p>
                        <p className="refe6211">09 DEC 2021</p>
                        <div className="refe-status row refe6211">
                            <div className="refe-status1">
                                <p>Success</p>
                            </div>
                            <div className="refe-status1">
                                <p>Failure</p>
                            </div>
                            <div className="refe-status1 refe-active">
                                <p>Referred</p>
                            </div>
                            <div className="refe-status1">
                                <p>Registered</p>
                            </div>
                        </div>
                    </div>
                    <div className="refe621 row">
                        <div className="refe-user row refe6211">
                            <img src="/static/images5/image 8.png" alt="" />
                            <p>Narendra R.</p>
                        </div>
                        <p className="refe6211 refe6211-1">Narendra@gmail.com</p>
                        <p className="refe6211">09 DEC 2021</p>
                        <div className="refe-status row refe6211">
                            <div className="refe-status1">
                                <p>Success</p>
                            </div>
                            <div className="refe-status1">
                                <p>Failure</p>
                            </div>
                            <div className="refe-status1 refe-active">
                                <p>Referred</p>
                            </div>
                            <div className="refe-status1">
                                <p>Registered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hfu-4">
                <div className="hfu-41">
                    <div className="hfu-411">
                        <img src="/static/images1/5787097 1.png" alt="" />
                    </div>
                    <div className="hfu-412">
                        <p>Eliminate the process of reaching out to different agencies for finding the right source. We provide the right platform filled with an array of tech talents that enables you to hire the right resources instantly. Did we mention that you are not paying a single penny for this?</p>
                    </div>
                    <div className="hfu-413">
                        <img src="/static/images1/Vector (16).png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Referral1;
