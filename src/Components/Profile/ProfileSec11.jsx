import React, { useEffect, useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar';

const ProfileSec11 = (props) => {
    useEffect(() => {
        props.setNavFlag1(false);
        props.setNavFlag2(true);
    }, []);

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
                        <div className="prof-sec-inner">
                            <div className="psi1">
                                <div className="psi11">
                                    <h5 className="text-green">Current Address</h5>
                                </div>
                                <div className="psi13">
                                    <div className="psi131">
                                        <div className="psi-input">
                                            <label htmlFor="addressLine1">Current Password</label>
                                            <input type="text" name="addressLine1" onChange={handleChange1} value={value1.addressLine1} />
                                        </div>
                                    </div>
                                    <div className="psi131">
                                        <div className="psi-input">
                                            <label htmlFor="phone">New Password</label>
                                            <input type="text" name="phone" onChange={handleChange1} value={value1.phone} />
                                        </div>
                                    </div>
                                    <div className="psi131">
                                        <div className="psi-input">
                                            <label htmlFor="landMark">Confirm Password</label>
                                            <input type="text" name="landMark" onChange={handleChange1} value={value1.landMark} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="psi-btn">
                            <div className="row">
                                <button className="btn btn1 btn4">Cancel</button>
                                <button className="btn btn1 btn4">Change</button>
                            </div>
                        </div>
                        <div>
                            <p>Passwords must have a Good or Strong rating. Passwords must be at least 6 characters long. Good passwords contain either a combination of uppercase and lowercase letters or a combination of letters and one digit. Strong passwords contain either a combination of letters and more than one digit or special characters.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSec11;
