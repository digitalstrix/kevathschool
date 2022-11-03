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
        if (user) {
            user = JSON.parse(user);
            if (value1.confirmPassword === value1.newPassword) {
                let ans = await context.changePassword(user.email, value1.currentPassword, value1.newPassword);
                if (ans.status) {
                    props.setAlert(ans.message, "success");
                }
                else {
                    props.setAlert(ans.message, "error");
                }
            }
            else
            {
                props.setAlert("Password and confirm password should be same", "error");
            }
        }
        else {
            props.setAlert("User unauthorised", "error");
            window.location.href = "/login";
        }
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
                                        <h5 className="text-green">Current Address</h5>
                                    </div>
                                    <div className="psi13">
                                        <div className="psi131">
                                            <div className="psi-input">
                                                <label htmlFor="addressLine1">Current Password</label>
                                                <input type="text" name="addressLine1" onChange={handleChange1} value={value1.addressLine1} required />
                                            </div>
                                        </div>
                                        <div className="psi131">
                                            <div className="psi-input">
                                                <label htmlFor="phone">New Password</label>
                                                <input type="text" name="phone" onChange={handleChange1} value={value1.phone} required />
                                            </div>
                                        </div>
                                        <div className="psi131">
                                            <div className="psi-input">
                                                <label htmlFor="landMark">Confirm Password</label>
                                                <input type="text" name="landMark" onChange={handleChange1} value={value1.landMark} required />
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
