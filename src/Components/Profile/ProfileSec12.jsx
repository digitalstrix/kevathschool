import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';


const ProfileSec12 = (props) => {
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
        verification: ''
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
            <div className="prof-sec1 prof-sec012">
                <div className="prof-sec11 prof-sec12">
                    <div className="eve-reg2-main">
                        <div className="eve-reg2-main1 eve-reg3-main1">
                            <h2>Verify Phone</h2>
                            <h5>We've sent a verificaton code to your phone number</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="eve-reg21 eve-reg31">
                                    <input type="text" id="verification" name="verification" value={value.verification} onChange={handleChange} placeholder="Enter verification code" />
                                </div>
                                <div className="eve-reg22">
                                    <button className="btn btn1">Continue</button>
                                    <div className="eve-reg30">
                                        <b>Back</b>
                                    </div>
                                </div>
                            </form>
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

export default ProfileSec12;
