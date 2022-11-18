import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Referral2 = (props) => {
    const navigate = useNavigate();

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

            }
        }
        else {
            props.setNavFlag1(true);
            props.setNavFlag2(false);
        }
    }, []);

    return (
        <>
            <div className="refe-2">
                <div className="refe-21 row">
                    <div className="refe-211 text-center">
                        <h3>Refer your Friends & Earn</h3>
                        <h1 className='text-green'>Rewards</h1>
                        <h3>When you refer a friend to KevathSchool you'll get a referral bonus of RS 3000 or Gift Vouchure.</h3>
                        <div className="refe2-btn text-center">
                            <NavLink to="/signup" className="btn btn1">Refer Now</NavLink>
                        </div>
                    </div>
                    <div className="refe-212">
                        <img src="/static/images5/Vector.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="refe-22">
                <h3 className='text-center'>How Refer & Earn Works ?</h3>
                <div className="refe-221 row">
                    <div className="refe-2211">
                        <img src="/static/images5/rwd 1.png" alt="" />
                    </div>
                    <div className="refe-2212 row">
                        <div className="refe-22121">
                            <div className='refe-line'></div>
                            <div className="refe-line1 row">
                                <div className="refe-line12">
                                    1
                                </div>
                                <div className="refe-line12">
                                    2
                                </div>
                                <div className="refe-line12">
                                    3
                                </div>
                            </div>
                        </div>
                        <div className="refe-22122">
                            <b>Refer your <span className="text-green">friend</span> to our <span className="text-green">any courses.</span></b>
                            <b>Ask them to <span className="text-green">sign up</span> using your <span className="text-green">referral link or code.</span></b>
                            <b>Get Assured <span className="text-green">Rewards</span></b>
                        </div>
                    </div>
                </div>
                <div className="text-center refe2-btn1">
                    <NavLink to="/signup" className="btn btn1">REFER NOW</NavLink>
                </div>
            </div>
            <div className="refe-23">
                <h1 className='text-center'>Frequently Asked Questions</h1>
                <div className="refe231">
                    <p>What is the medium of instruction?</p>
                    <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                </div>
                <div className="refe231">
                    <p>What is the medium of instruction?</p>
                    <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                </div>
                <div className="refe231">
                    <p>What is the medium of instruction?</p>
                    <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                </div>
                <div className="refe231">
                    <p>What is the medium of instruction?</p>
                    <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                </div>
                <div className="refe231">
                    <p>What is the medium of instruction?</p>
                    <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                </div>
                <div className="refe231">
                    <p>What is the medium of instruction?</p>
                    <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                </div>
                <div className="refe231">
                    <p>What is the medium of instruction?</p>
                    <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                </div>
            </div>
            <div className="course3">
                <div className="course31">
                    <div className="course311">
                        <h1>Have more questions?</h1>
                    </div>
                    <div className="course312">
                        <div className="course3121">
                            <NavLink to="/faq" className="btn btn3">CHECK OUR FAQS</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Referral2;
