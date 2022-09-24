import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';


const ProfileSec12 = (props) => {
    useEffect(() => {
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
            <div className="prof-sec1">
                <div className="prof-sec11">
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
        </>
    )
}

export default ProfileSec12;
