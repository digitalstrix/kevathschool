import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = (props) => {
    const navigate = useNavigate();
    
    useEffect(() => {
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
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(value);
    };

    useEffect(() => {
        props.setNavFlag1(true);
        props.setNavFlag2(false);
    }, []);

    return (
        <>
            <div className="img-cls">
                <div className="prof4">
                    <h1><span className="bg-green">Connect</span>With Us</h1>
                </div>
            </div>
            <div className="prof-sec3 prof-sec04 prof-secm prof-secm1">
                <div className="prof-sec31 profile-sec-41">
                    <div className="prof-sec40">
                        <img src="/static/images2/Rectangle 1355.png" alt="" />
                    </div>
                    <div className="prof-sec4">
                        <div className="prof-sec411">
                            <div className="prof-sec4111">
                                <img src="/static/images2/i3.png" alt="" />
                                <h5>Chat with us</h5>
                                <div className="row">
                                    <img src="/static/images2/i4.png" alt="" />
                                    <p>+91 8987878787</p>
                                </div>
                            </div>
                            <div className="prof-sec4111">
                                <img src="/static/images2/i2.png" alt="" />
                                <h5>Connect with us</h5>
                                <div>
                                    <p>+91 8987878787</p>
                                </div>
                            </div>
                            <div className="prof-sec4111">
                                <img src="/static/images2/i1.png" alt="" />
                                <h5>Support</h5>
                                <div>
                                    <p>Support@kevath.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prof-sec41">
                        <div className="prof-sec42">
                            <div className="prof-sec421 text-center">
                                <h4>CONTACT US FORM</h4>
                            </div>
                            <div className="prof-sec422">
                                <div className="row prof-sec4221">
                                    <div className="prof-sec-input">
                                        <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={value.firstName} />
                                    </div>
                                    <div className="prof-sec-input">
                                        <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={value.lastName} />
                                    </div>
                                </div>
                                <div className="row prof-sec4221">
                                    <div className="prof-sec-input">
                                        <input type="text" placeholder="Email" name="email" onChange={handleChange} value={value.email} />
                                    </div>
                                    <div className="prof-sec-input">
                                        <input type="text" placeholder="Phone Number" name="phone" onChange={handleChange} value={value.phone} />
                                    </div>
                                </div>
                                <div className="prof-sec-textarea">
                                    <textarea name="message" onChange={handleChange} value={value.message} placeholder="Message" cols="30" rows="10"></textarea>
                                </div>
                                <div style={{marginTop:"15px"}} className="hfu-agree">
                                    <input type="checkbox" name="agree1" id="agree1" />
                                    <label htmlFor="agree1">I want to receive product updates, marketing news, and other relevant content by email from KevathSchool.</label>
                                </div>
                                <div className="hfu-agree">
                                    <input type="checkbox" name="agree2" id="agree2" />
                                    <label htmlFor="agree2">I have read and agreed to KevarthSchool Terms of Service and
                                        Privacy Policy.</label>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn1">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course3">
                <div className="course31">
                    <div className="course311">
                        <h1>Have more questions?</h1>
                    </div>
                    <div className="course312">
                        <div className="course3121">
                            <button className="btn btn3">CHECK OUR FAQS</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
