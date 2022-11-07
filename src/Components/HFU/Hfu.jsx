import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../../context/MainContext';

const Hfu = (props) => {
    const navigate = useNavigate();
    const context = useContext(MainContext);
    
    useEffect(() => {
        props.setFootFlag(true);
        let user = localStorage.getItem('kevath_user');
        if (user) {
          user = JSON.parse(user);
          if (!user.token || user.token === '') {
            props.setNavFlag1(true);
            props.setNavFlag2(false);
          }
          else {
            props.setNavFlag1(false);
            props.setNavFlag2(true);
          }
        }
        else {
            props.setNavFlag1(true);
            props.setNavFlag2(false);
        }
      }, []);

    const [value, setValue] = useState({
        name: '',
        email: '',
        phone: '',
        designation: '',
        company: '',
        message: '',
    });

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(value);
        let notifications=false;
        
        if(document.getElementById('agree1').selected)
        {
            notifications=true;
        }
        else
        {
            notifications=false;
        }

        let ans = await context.hireFromUs(value.name, value.email, Number(value.phone), value.message, notifications, value.company, value.designation, true);
        if (ans.status) {
          props.setAlert(ans.message, "success");
        } else {
          props.setAlert(ans.message, "error");
        }
    };

    return (
        <>
            <div className="hfu">
                <div className="hfu1">
                    <div className="hfu11">
                        <div className="hfu111">
                            <h1>Hire Our <span>Skilled</span>Graduates</h1>
                        </div>
                        <div className="hfu112">
                            <button className="btn btn1">START HIRING</button>
                            <img src="static/images/undraw_Hire_re_gn5j 1.png" alt="" />
                        </div>
                    </div>
                    <div className="hfu12">
                        <img src="static/images/undraw_Hiring_re_yk5n 1.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="hfu-1">
                <div className="hfu-11">
                    <div className="hfu-111">
                        <div className="hfu-1111">
                            <h4 className="text-green">Learn more about hiring</h4>
                            <p>Growing A Business Means Having The Right People In Your Team</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="eve-reg21">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" value={value.name} onChange={handleChange} placeholder="Recruiter Name" required />
                            </div>
                            <div className="eve-reg21">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" value={value.email} onChange={handleChange} placeholder="Recruiter Email" required />
                            </div>
                            <div className="eve-reg21">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" id="phone" name="phone" value={value.phone} onChange={handleChange} placeholder="Recruiter Phone" required />
                            </div>
                            <div className="eve-reg21">
                                <label htmlFor="designation">Designation</label>
                                <input type="text" id="designation" name="designation" value={value.designation} onChange={handleChange} placeholder="Recruiter Designation" />
                            </div>
                            <div className="eve-reg21">
                                <label htmlFor="company">Company</label>
                                <input type="text" id="company" name="company" value={value.company} onChange={handleChange} placeholder="Company Name" required />
                            </div>
                            <div className="eve-reg21">
                                <label htmlFor="message">Message</label>
                                <input type="text" id="message" name="message" value={value.message} onChange={handleChange} placeholder="Message" required />
                            </div>
                            <div style={{marginTop:"8px"}} className="hfu-agree">
                                <input type="checkbox" name="agree1" id="agree1" />
                                <label htmlFor="agree1">I want to receive product updates, marketing news, and other relevant content by email from KevathSchool.</label>
                            </div>
                            <div className="hfu-agree">
                                <input type="checkbox" name="agree2" id="agree2" required />
                                <label htmlFor="agree2">I have read and agreed to KevarthSchool Terms of Service and
                                    Privacy Policy.</label>
                            </div>
                            <div className="eve-reg22">
                                <button type="submit" className="btn btn1">submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="hfu-112">
                        <div className="row usp2101 hfu-usp2101">
                            <div className="usp12 hfu-usp12">
                                <div className="usp-line hfu-line">
                                    <img src="/static/images/Line 5.png" alt="" />
                                </div>
                                <div className="usp-imgs hfu-imgs">
                                    <div className="usp-img hfu-img">
                                        <img src="/static/images1/Vector.png" alt="" />
                                    </div>
                                    <div className="usp-img hfu-img">
                                        <img src="/static/images1/Group 4194 (1).png" alt="" />
                                    </div>
                                    <div className="usp-img hfu-img">
                                        <img src="/static/images1/Vector (2).png" alt="" />
                                    </div>
                                    <div className="usp-img hfu-img">
                                        <img src="/static/images1/Vector (3).png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="usp21">
                                <div className="usp211 hfu-usp211">
                                    <h3 className="h3">Lay down your talent requirements with us.</h3>
                                </div>
                                <div className="usp211 hfu-usp211">
                                    <h3 className="h3">Choose from the pool of our graduates.</h3>
                                </div>
                                <div className="usp211 hfu-usp211">
                                    <h3 className="h3">Review profile and portfolio.</h3>
                                </div>
                                <div className="usp211 hfu-usp211">
                                    <h3 className="h3">Hire the candidate best-suited for your team.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hfu-2">
                <div className="hfu-21">
                    <div className="hfu-211 text-center">
                        <h4>Why Kevathschool?</h4>
                    </div>
                    <div className="hfu-212">
                        <div className="hfu-card">
                            <div className="hfu-card1">
                                <div className="hfu-card-img">
                                    <img src="/static/images1/Group 4195 (1).png" alt="" />
                                </div>
                                <div className="hfu-card-text text-center">
                                    <h5>Best Talents</h5>
                                    <p>Training by best international
                                        experts and exposure to
                                        real-life dev environments in Cloud Labs</p>
                                </div>
                            </div>
                        </div>
                        <div className="hfu-card">
                            <div className="hfu-card1">
                                <div className="hfu-card-img">
                                    <img src="/static/images1/Group 4196 (1).png" alt="" />
                                </div>
                                <div className="hfu-card-text text-center">
                                    <h5>Proven Track-Record</h5>
                                    <p>Startups, unicorns, and Fortune
                                        500s like Amazon, Cognizant, Adobe, and more hire our learners</p>
                                </div>
                            </div>
                        </div>
                        <div className="hfu-card">
                            <div className="hfu-card1">
                                <div className="hfu-card-img">
                                    <img src="/static/images1/Group 4197 (1).png" alt="" />
                                </div>
                                <div className="hfu-card-text text-center">
                                    <h5>Zero Training Cost</h5>
                                    <p>Training by best international
                                        experts and exposure to
                                        real-life dev environments in Cloud Labs</p>
                                </div>
                            </div>
                        </div>
                        <div className="hfu-card">
                            <div className="hfu-card1">
                                <div className="hfu-card-img">
                                    <img src="/static/images1/Group 4198 (1).png" alt="" />
                                </div>
                                <div className="hfu-card-text text-center">
                                    <h5>Best Talents</h5>
                                    <p>Our learners are industry-ready,
                                        they have worked on several industry-grade projects under expert supervision</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hfu-213 text-center">
                        <button className="btn btn1">Start Hiring</button>
                    </div>
                </div>
            </div>
            <div className="hfu-3">
                <div className="hfu-31">
                    <div className="hfu-311">
                        <h4>Job Roles Available for Hiring</h4>
                        <p>Hire from India’s Largest online tech education company and the most preferred technical course platform for students.</p>
                    </div>
                    <div className="hfu-312">
                        <div className="hiring-card">
                            <div className="hiring-card1">
                                <div className="hiring-card11 bg-yellow">
                                    Full Stack Developers
                                </div>
                                <div className="hiring-card12">
                                    <img src="/static/images1/Vector (6).png" alt="" />
                                    <h5>Python Developers</h5>
                                </div>
                            </div>
                        </div>
                        <div className="hiring-card">
                            <div className="hiring-card1">
                                <div className="hiring-card11 bg-purple">
                                    Frontend Developers
                                </div>
                                <div className="hiring-card12">
                                    <img src="/static/images1/Vector (7).png" alt="" />
                                    <h5>C++ Developers</h5>
                                </div>
                            </div>
                        </div>
                        <div className="hiring-card">
                            <div className="hiring-card1">
                                <div className="hiring-card11 bg-blue">
                                    Backend Developers
                                </div>
                                <div className="hiring-card12">
                                    <img src="/static/images1/Vector (8).png" alt="" />
                                    <h5>Java Developers</h5>
                                </div>
                            </div>
                        </div>
                        <div className="hiring-card">
                            <div className="hiring-card1">
                                <div className="hiring-card11 bg-green">
                                    Data Scientist
                                </div>
                                <div className="hiring-card12">
                                    <img src="/static/images1/Vector (9).png" alt="" />
                                    <h5>Android Developers</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ladder">
                <div className="ladder1 hfu-ladder1">
                    <div className="ladder01">
                        <h3 className="h3 ladh3 hfu-lad3">What Makes Our Learners Extra Special?</h3>
                    </div>
                    <div className="ladder12 hfu-lad12">
                        <div className="ladder121">
                            <div className="ld-box">
                                <div className="ld-box1">
                                    <img src="/static/images1/Vector (10).png" alt="" />
                                    <p>Live Training by Experts</p>
                                </div>
                            </div>
                            <div className="ld-line"></div>
                            <div className="ld-box">
                                <div className="ld-box1">
                                    <img src="/static/images1/Vector (11).png" alt="" />
                                    <p>Immersive Learning</p>
                                </div>
                            </div>
                            <div className="ld-line"></div>
                            <div className="ld-box">
                                <div className="ld-box1">
                                    <img src="/static/images1/Vector (12).png" alt="" />
                                    <p>Cloud Labs</p>
                                </div>
                            </div>
                            <div className="ld-line"></div>
                            <div className="ld-box">
                                <div className="ld-box1">
                                    <img src="/static/images1/Vector (13).png" alt="" />
                                    <p>Learn Through Practice</p>
                                </div>
                            </div>
                            <div className="ld-line"></div>
                            <div className="ld-box">
                                <div className="ld-box1">
                                    <img src="/static/images1/Vector (14).png" alt="" />
                                    <p>Beyond Full-Stack</p>
                                </div>
                            </div>
                            <div className="ld-line"></div>
                            <div className="ld-box">
                                <div className="ld-box1">
                                    <img src="/static/images1/Vector (15).png" alt="" />
                                    <p>Global Network</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ladder-fig">
                    <img src="/static/images/Vector 1.png" alt="" />
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

export default Hfu;
