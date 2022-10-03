import React from 'react'
import { useState } from 'react';

const EventReg2 = () => {
    const [value, setValue] = useState({
        name:'',
        email:'',
        phone:''
    });

    const handleChange=(e)=>{
        setValue({...value, [e.target.name]:e.target.value});
    };

    const handleSubmit=async(e)=>{
        console.log(value);
    };

    return (
        <>
            <div className="eve-reg2-main">
                <div className="eve-reg2-main1">
                    <h1>Register Yourself for Event</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="eve-reg21">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={value.name} onChange={handleChange} placeholder="Enter your name" />
                        </div>
                        <div className="eve-reg21">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" value={value.email} onChange={handleChange} placeholder="Enter your email" />
                        </div>
                        <div className="eve-reg21">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" name="phone" value={value.phone} onChange={handleChange} placeholder="+91 " />
                        </div>
                        <div className="eve-reg22">
                            <button className="btn btn1">REGISTER</button>
                            <div>
                                <p>Don't have any account? <span><a className="text-green" href="#">Sign up</a></span></p>
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

export default EventReg2;
