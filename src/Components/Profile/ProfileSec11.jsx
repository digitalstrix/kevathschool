import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import MainContext from "../../context/MainContext";

const ProfileSec11 = (props) => {
    const navigate = useNavigate();
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
    const context = useContext(MainContext);

    const [value1, setValue1] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange1 = (e) => {
        setValue1({ ...value1, [e.target.name]: e.target.value });
    };

    const submitHandle1 = async (e) => {
        e.preventDefault();
        console.log(value1);
        let user = localStorage.getItem('kevath_user');
        // if (user) {
            user = JSON.parse(user);
            if (value1.newPassword.length >= 8 && value1.currentPassword.length >= 8) {
                if (value1.confirmPassword === value1.newPassword) {
                    let flag = false;

                    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                    if (reg.exec(value1["newPassword"]) === null) {
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
                        let ans = await context.changePassword(user.email, value1.currentPassword, value1.newPassword);
                        if (ans.status) {
                            props.setAlert(ans.message, "success");
                        }
                        else {
                            props.setAlert(ans.message, "error");
                        }
                    }
                }
                else {
                    props.setAlert("Password and confirm password should be same", "error");
                }
            }
            else {
                props.setAlert("Password length should be greater than or equal to 8", "error");
            }
        // }
        // else {
        //     props.setAlert("User unauthorised", "error");
        //     window.location.href = "/login";
        // }
    };

    return (
        <>
            <Sidebar />
            <div className="prof-sec1">
                <div className="prof-sec11">
                    <div className="prof-sec112">
                        <div className="prof-sec-top">
                            <p>CHANGE PASSWORD</p>
                        </div>
                        <form onSubmit={submitHandle1}>
                            <div className="prof-sec-inner">
                                <div className="psi1">
                                    <div className="psi11">
                                        <h5 className="text-green">Change Password</h5>
                                    </div>
                                    <div className="psi13">
                                        <div className="psi131">
                                            <div className="psi-input">
                                                <label htmlFor="currentPassword">Current Password *</label>
                                                <input type="password" id="currentPassword" name="currentPassword" onChange={handleChange1} value={value1.currentPassword} required />
                                            </div>
                                        </div>
                                        <div className="psi131">
                                            <div className="psi-input">
                                                <label htmlFor="newPassword">New Password *</label>
                                                <div className="password">
                                                    <input type="password" id="newPassword" name="newPassword" onChange={handleChange1} value={value1.newPassword} required />
                                                    <div onClick={() => {
                                                        const pass = document.getElementById('newPassword');
                                                        if (pass.type === "text") {
                                                            pass.type = 'password';
                                                        }
                                                        else {
                                                            pass.type = 'text';
                                                        }
                                                    }} className="pass-eye pass-eye1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="psi131">
                                            <div className="psi-input">
                                                <label htmlFor="confirmPassword">Confirm Password *</label>
                                                <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange1} value={value1.confirmPassword} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="psi-btn">
                                <div className="row">
                                    <button type="button" className="btn btn1 btn4 btn0">Cancel</button>
                                    <button type="submit" className="btn btn1 btn4">Change</button>
                                </div>
                            </div>
                        </form>
                        <div>
                            <p>Passwords must have a Good or Strong rating. Passwords must be at least 6 characters long. Good passwords contain either a combination of uppercase and lowercase letters or a combination of letters and one digit. Strong passwords contain either a combination of letters and more than one digit or special characters.</p>
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

export default ProfileSec11;
