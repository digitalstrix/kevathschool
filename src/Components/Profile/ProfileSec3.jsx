import React, { useEffect } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const ProfileSec3 = (props) => {
    useEffect(() => {
        props.setNavFlag1(false);
        props.setNavFlag2(true);
    }, []);

    return (
        <>
            <Sidebar />
            <div className="prof-sec3">
                <div className="prof-sec31">
                    <div className="prof-sec311">
                        <p>PRE - TEST TITLE</p>
                    </div>
                    <div className="prof-sec312">
                        <div className="prof-sec3121 row">
                            <div className="prof-sec31211">
                                <h3>50</h3>
                                <p>Questions</p>
                            </div>
                            <div className="prof-sec31212">
                                <h3>01:00:00Hrs</h3>
                                <p>Duration</p>
                            </div>
                        </div>
                        <div className="prof-sec3122">
                            <button className="btn btn1">START NOW</button>
                        </div>
                    </div>
                    <div className="prof-sec313">
                        <h5>INSTRUCTIONS</h5>
                        <ul>
                            <li>Each question has multiple choice out of which only one is correct</li>
                            <li>Each question has multiple choice out of which only one is correct</li>
                            <li>Each question has multiple choice out of which only one is correct</li>
                            <li>Each question has multiple choice out of which only one is correct</li>
                        </ul>
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

export default ProfileSec3;
