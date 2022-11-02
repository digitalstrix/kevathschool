import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const ProfileSec4 = (props) => {
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

    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(value);
    };

    return (
        <>
            <Sidebar />
            <div className="prof-sec3 prof-sec04">
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
                            <div className="prof-sec422">
                                <div className="row prof-sec4221">
                                    <div className="prof-sec-input">
                                        <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={value.firstName} />
                                    </div>
                                    <div className="prof-sec-input">
                                        <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={value.lastName} />
                                    </div>
                                </div>
                                <div className="row prof-sec4221">
                                    <div className="prof-sec-input">
                                        <input type="text" placeholder="Email" name="email" onChange={handleChange} value={value.email} />
                                    </div>
                                    <div className="prof-sec-input">
                                        <input type="text" placeholder="Phone Number" name="phone" onChange={handleChange} value={value.phone} />
                                    </div>
                                </div>
                                <div className="prof-sec-textarea">
                                    <textarea name="message" onChange={handleChange} value={value.message} placeholder="Message" cols="30" rows="10"></textarea>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn1">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prof-sec-hfu">
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
            </div>
        </>
    )
}

export default ProfileSec4;
