import React, { useState, useContext, useEffect } from 'react';
import MainContext from "../../context/MainContext";
import { useNavigate } from 'react-router-dom';

const Referral1 = (props) => {
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
    const context = useContext(MainContext);
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        confirmEmail: ""
    });

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="refe">
                <div className="row refe1">
                    <div className="refe11">
                        <h1>Referral <span className="text-green">Program</span></h1>
                        <h3>Exciting Brand Voucher & Mega Rewards</h3>
                    </div>
                    <div className="refe12">
                        <img src="/static/images4/refe-bg.png" alt="" />
                    </div>
                </div>
                <div className="refe2">
                    <h5 className="text-green">About your referral</h5>
                    <h5>First, please enter some details about your referral</h5>
                    <form onSubmit={handleSubmit} className="refe21">
                        <div className="refe211 row">
                            <div className="refe-input">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" name="firstName" onChange={handleChange} value={value.firstName} />
                            </div>
                            <div className="refe-input">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName" onChange={handleChange} value={value.lastName} />
                            </div>
                            <div className="refe-input">
                                <label htmlFor="phone">Phone number</label>
                                <input type="text" id="phone" name="phone" onChange={handleChange} value={value.phone} />
                            </div>
                            <div className="refe-input">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" onChange={handleChange} value={value.email} />
                            </div>
                            <div className="refe-input">
                                <label htmlFor="confirmEmail">Confirm email</label>
                                <input type="text" id="confirmEmail" name="confirmEmail" onChange={handleChange} value={value.confirmEmail} />
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn refe-btn">MAKE REFERRAL</button>
                        </div>
                    </form>
                </div>
                <div className="refe3 row">
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <div className="refe4">
                    <h5 className="text-green">Share with your friends</h5>
                    <div className="row refe41">
                        <h5>Referral Link: </h5>
                        <p>www.kevathschol.school.com</p>
                    </div>
                    <div className="row refe41">
                        <h5>Share on social: </h5>
                        <div className="refe411 row">
                            <div className="refe4111">
                                <img src="/static/images5/Icon.png" alt="" />
                            </div>
                            <div className="refe4111">
                                <img src="/static/images5/Icon (1).png" alt="" />
                            </div>
                            <div className="refe4111">
                                <img src="/static/images5/Icon (2).png" alt="" />
                            </div>
                            <div className="refe4111">
                                <img src="/static/images5/Icon (3).png" alt="" />
                            </div>
                            <div className="refe4111 refe4112">
                                <img src="/static/images5/whatsapp-logo-light-green-png-0 1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="refe5">
                    <h5 className="text-green">My Referral</h5>
                    <div className="refe51 row">
                        <div className="refe511 refe512">
                            <b className="text-white">Total Referral Entries</b>
                            <h5 className="text-white">0</h5>
                        </div>
                        <div className="refe511 refe513">
                            <b className="text-white">Total Successful Referral</b>
                            <h5 className="text-white">0</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="refe6">
                <h5 className="text-green">Your Latest Referrals</h5>
                <div className="refe61">
                    <div className="refe611 row">
                        <p>NAME</p>
                        <p>EMAIL</p>
                        <p>REGISTER DATE</p>
                        <p>STATUS</p>
                    </div>
                </div>
                <div className="refe62">
                    <div className="refe621 row">
                        <div className="refe-user row refe6211">
                            <img src="/static/images5/image 8.png" alt="" />
                            <p>Narendra R.</p>
                        </div>
                        <p className="refe6211">Narendra@gmail.com</p>
                        <p className="refe6211">09 DEC 2021</p>
                        <div className="refe-status row refe6211">
                            <div className="refe-status1">
                                <p>Success</p>
                            </div>
                            <div className="refe-status1">
                                <p>Failure</p>
                            </div>
                            <div className="refe-status1 refe-active">
                                <p>Referred</p>
                            </div>
                            <div className="refe-status1">
                                <p>Registered</p>
                            </div>
                        </div>
                    </div>
                    <div className="refe621 row">
                        <div className="refe-user row refe6211">
                            <img src="/static/images5/image 8.png" alt="" />
                            <p>Narendra R.</p>
                        </div>
                        <p className="refe6211">Narendra@gmail.com</p>
                        <p className="refe6211">09 DEC 2021</p>
                        <div className="refe-status row refe6211">
                            <div className="refe-status1">
                                <p>Success</p>
                            </div>
                            <div className="refe-status1">
                                <p>Failure</p>
                            </div>
                            <div className="refe-status1 refe-active">
                                <p>Referred</p>
                            </div>
                            <div className="refe-status1">
                                <p>Registered</p>
                            </div>
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

export default Referral1;
