import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const C1 = (props) => {
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
        props.setNavFlag2(false);
        props.setFootFlag(false);
    }, []);

    const func1 = (e) => {
        e.target.parentNode.nextElementSibling.nextElementSibling.classList.toggle('none');
    };

    const toggle = (flag) => {
        if(flag)
        {
            document.querySelector('.live1').style.display='none';
            document.querySelector('.hambug1').style.display='block';
        }
        else
        {
            document.querySelector('.live1').style.display='block';
            document.querySelector('.hambug1').style.display='none';
        }
    };

    return (
        <>
            <div className="live">
                <div className="live1">
                    <div className="live-sidebar">
                        <div onClick={()=>{
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
                        <div onClick={()=>{
                            toggle(false);
                        }} className="hambug hambug1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </div>
                        <h4>Full Stack Web Development</h4>
                        <p>Course short description / tagline</p>
                    </div>
                    <div className="live21">
                        <div className="live211">
                            <div className="live2111">
                                <div className="live21111">
                                    <div className="live-21">
                                        <h5>Full Stack Web Development - Live Classes Training</h5>
                                    </div>
                                    <div className="live-22 row">
                                        <img src="/static/images4/q7.png" alt="" />
                                        <div className="live-221">
                                            <div className="live-2211">
                                                <p className="small">Starts</p>
                                                <p>Mon, 15 Aug, 2022 </p>
                                            </div>
                                            <div className="live-2211">
                                                <p className="small">Ends</p>
                                                <p> Sun, 21 Aug, 2022 Online</p>
                                            </div>
                                        </div>
                                        <div className="live-221">
                                            <div className="live-222 row">
                                                <img src="/static/images4/q9.png" alt="" />
                                                <p>3:00 PM - 4:00 PM</p>
                                            </div>
                                            <div className="live-222 row">
                                                <img src="/static/images4/q10.png" alt="" />
                                                <p>Online</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="live-23 row">
                                        <div className="live-p">
                                            Add to
                                        </div>
                                        <div className="live-231">
                                            <img src="/static/images4/q8.png" alt="" />
                                            <p>Google Calendar</p>
                                        </div>
                                        <div className="live-231">
                                            <img src="/static/images4/Group.png" alt="" />
                                            <p>Google Calendar</p>
                                        </div>
                                        <div className="live-231">
                                            <img className="cal-img" src="/static/images4/Group (1).png" alt="" />
                                            <p>Google Calendar</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="live21112">
                                    <h5>3/5 Class</h5>
                                    <div className="db-card-slider row">
                                        <progress id="file" value="50" max="100"> 32% </progress>
                                    </div>
                                    <p>Attend atleast 4 Classes of this course</p>
                                </div>
                                <div className="db-card3 row live-db">
                                    <div onClick={func1} className="db-card-b">
                                        <b>. . .</b>
                                    </div>
                                    <button className="btn btn5">Share</button>
                                    <div className="db-card31 none">
                                        <p>Class Reg.Policy</p>
                                        <p>Option 2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="live2112">
                                <div className="live21121">
                                    <p>Classes</p>
                                </div>
                                <div className="live21122">
                                    <div className="live-cal">
                                        <div className="live-cal1 row">
                                            <p>Mon</p>
                                            <h4>15</h4>
                                            <p>Sep</p>
                                        </div>
                                        <div className="live-cal2">
                                            <div className="live-cal21">
                                                <img src="/static/images4/q13.png" alt="" />
                                                <p>Attended</p>
                                            </div>
                                            <div className="live-cal22">
                                                <img src="/static/images4/q14.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="live-cal">
                                        <div className="live-cal1 row">
                                            <p>Mon</p>
                                            <h4>15</h4>
                                            <p>Sep</p>
                                        </div>
                                        <div className="live-cal2">
                                            <div className="live-cal21">
                                                <img src="/static/images4/q15.png" alt="" />
                                                <p>Upcoming</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="live-cal">
                                        <div className="live-cal1 row">
                                            <p>Mon</p>
                                            <h4>15</h4>
                                            <p>Sep</p>
                                        </div>
                                        <div className="live-cal2">
                                            <div className="live-cal21">
                                                <p>Upcoming</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="live-cal">
                                        <div className="live-cal1 row">
                                            <p>Mon</p>
                                            <h4>15</h4>
                                            <p>Sep</p>
                                        </div>
                                        <div className="live-cal2">
                                            <div className="live-cal21">
                                                <p>Upcoming</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="live-cal">
                                        <div className="live-cal1 row">
                                            <p>Mon</p>
                                            <h4>15</h4>
                                            <p>Sep</p>
                                        </div>
                                        <div className="live-cal2">
                                            <div className="live-cal21">
                                                <p>Upcoming</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="live-cal">
                                        <div className="live-cal1 row">
                                            <p>Mon</p>
                                            <h4>15</h4>
                                            <p>Sep</p>
                                        </div>
                                        <div className="live-cal2">
                                            <div className="live-cal21">
                                                <p>Upcoming</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="live-cal">
                                        <div className="live-cal1 row">
                                            <p>Mon</p>
                                            <h4>15</h4>
                                            <p>Sep</p>
                                        </div>
                                        <div className="live-cal2">
                                            <div className="live-cal21">
                                                <p>Upcoming</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default C1;
