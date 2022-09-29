import React, { useState } from 'react';


const VerifyPhoneNumber = () => {
    const [value, setValue] = useState({
        verification: ''
    });
    
    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        console.log(value);
    };
    
    return (
        <>
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
    )
}

export default VerifyPhoneNumber;
