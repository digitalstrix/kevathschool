import React, { useEffect } from 'react'

const C4 = (props) => {
    useEffect(() => {
        props.setNavFlag1(false);
        props.setNavFlag2(false);
        props.setFootFlag(false);
    }, []);

    const toggle = (flag) => {
        if (flag) {
            document.querySelector('.live1').style.display = 'none';
            document.querySelector('.hambug1').style.display = 'block';
        }
        else {
            document.querySelector('.live1').style.display = 'block';
            document.querySelector('.hambug1').style.display = 'none';
        }
    };

    return (
        <div className="live">
            <div className="live1">
                <div className="live-sidebar">
                    <div onClick={() => {
                        toggle(true);
                    }} className="hambug">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                    <div className="live-logo">
                        <img src="/static/images4/q1.png" alt="" />
                    </div>
                    <div className="live11">
                        <img src="/static/images4/q2.png" alt="" />
                        <p>Live Classes</p>
                    </div>
                    <div className="live11">
                        <img src="/static/images4/q3.png" alt="" />
                        <p>Self Learning</p>
                    </div>
                    <div className="live11">
                        <img src="/static/images4/q4.png" alt="" />
                        <p>Resources</p>
                    </div>
                    <div className="live11">
                        <img src="/static/images4/q5.png" alt="" />
                        <p>Assessment</p>
                    </div>
                    <div className="live11">
                        <img src="/static/images4/q6.png" alt="" />
                        <p>Certificate</p>
                    </div>
                </div>
            </div>
            <div className="live2">
                <div className="live-header">
                    <div onClick={() => {
                        toggle(false);
                    }} className="hambug hambug1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                    <h4>Full Stack Web Development</h4>
                    <p>Course short description / tagline</p>
                </div>
                <div className="live21 c4-live">
                    <div className="prof-sec3 c4">
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
                </div>
            </div>
        </div>
    )
}

export default C4;
