import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FeeIsa = (props) => {
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

    return (
        <>
            <div className="img-cls">
                <div className="fees">
                    <div className="fees1">
                        <h1>Fees & ISA</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                </div>
            </div>
            <div className="fees2">
                <div className="fees21">
                    <p>We believe that potential is evenly distributed across Indian society, but opportunity is not. Kevath is democratising education with a unique Income Share greement(ISA). ISA allows you to study the course of your choice at INR 0 upfront fee.</p>
                    <p>You pay us only if you get a job of INR 5,00,000/- per year (CTC) or more, after course completion.</p>
                    <div className="fees211">
                        <img src="/static/images3/YOUTUBE PLAYER 1.png" alt="" />
                    </div>
                    <h4>Income-Share Agreement (ISA)</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. </p>
                </div>
            </div>
            <div className="fees3">
                <div className="fees31">
                    <div className="fees311">
                        <h5 className="text-green">How Does Our ISA Work?</h5>
                        <p>Income Share Agreement is a way for us to invest in your future and success. That means that we as an institution succeed only if you succeed as a developer. Here is how:</p>
                    </div>
                    <div className="fees312">
                        <div className="row">
                            <img src="/static/images3/f1.png" alt="" />
                            <div>
                                <p className="text-green">5 LPA (CTC)</p>
                                <p>You pay us only if you get a job of INR 5,00,000/- per year (CTC) or more, after course completion.</p>
                            </div>
                        </div>
                        <div className="row">
                            <img src="/static/images3/f2.png" alt="" />
                            <div>
                                <p className="text-green">1 Year</p>
                                <p>If you don’t get placed within 1 year after course completion, you pay nothing for learning.</p>
                            </div>
                        </div>
                        <div className="row">
                            <img className="img" src="/static/images3/f3.png" alt="" />
                            <div>
                                <p className="text-green">Enforcement</p>
                                <p>In the event you are not working or if your income drops below 5LPA, the ISA payments pause.*</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fees4">
                <div className="fees41">
                    <div className="fees411 fees311">
                        <h5 className="text-green">Course Fees</h5>
                        <p>These only take effect once you start earning ₹5,00,000/- (CTC) or more.</p>
                    </div>
                    <div className="fees412">
                        <div className="fees4121">
                            <h5 className="text-green">Full Time Courses</h5>
                            <div className="row">
                                <img src="/static/images3/f4.png" alt="" />
                                <div>
                                    <p>Full Stack Web Development : 3,00,000/- *</p>
                                    <p className="tax">*including taxes, if applicable</p>
                                </div>
                            </div>
                        </div>
                        <div className="fees4122">
                            <h5 className="text-green">Part Time Courses</h5>
                            <div className="row">
                                <img src="/static/images3/f4.png" alt="" />
                                <div>
                                    <p>Full Stack Web Development : 2,50,000/- *</p>
                                    <p className="tax">*including taxes, if applicable</p>
                                </div>
                            </div>
                            <div className="row">
                                <img src="/static/images3/f4.png" alt="" />
                                <div>
                                    <p>Data Analytics: 2,00,000/- *</p>
                                    <p className="tax">*including taxes, if applicable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fees413">
                        <p>Monthly Payable Table For Full Stack Web Development Full Time Course</p>
                        <div className="row">
                            <p className="tax">Your salary range (CTC)*</p>
                            <div className="fee-pill">
                                <p>Less than 5 LPA</p>
                            </div>
                            <div className="fee-pill">
                                <p>5 - 6.99 LPA</p>
                            </div>
                            <div className="fee-pill">
                                <p>7 - 8.99 LPA</p>
                            </div>
                            <div className="fee-pill">
                                <p>9 - 11.99 LPA</p>
                            </div>
                            <div className="fee-pill">
                                <p>12 LPA & above</p>
                            </div>
                        </div>
                    </div>
                    <div className="fees414">
                        <div className="fees4141">
                            <div className="fees41411">
                                YOUR SALARY RANGE (CTC)*
                            </div>
                            <div className="fees41412">
                                <p>MONTHLY PAYABLE AMOUNT</p>
                                <p>TENURE (IN MONTHS)</p>
                                <p>TOTAL PAYABLE FEE</p>
                                <p className="tax1">(INCLUDING TAXES, IF APPLICABLE)</p>
                            </div>
                        </div>
                        <div className="fees4142">
                            <div className="fees41411">
                                LESS THAN 5 LPA
                            </div>
                            <div className="fees41412">
                                <p>INR 0</p>
                                <p>NA</p>
                                <p>INR 0</p>
                            </div>
                        </div>
                    </div>
                    <div className="fees415">
                        <ol>
                            <li>CTC (Cost to Company) is defined as the total gross income earned, including but not limited, to variable pay, compensations and ESOPs. Find out more in the FAQ section.</li>
                            <li>This table is for Full Stack Web Development (Full Time) Course only. Reach out to us at Kevathschool.com to know more.</li>
                        </ol>
                        <div className="tax1">Terms and Conditions apply</div>
                    </div>
                </div>
            </div>
            <div className="fees4">
                <div className="fees41 fees50">
                    <h4 className="text-green">Drop out Clauses</h4>
                    <p>If you realise that KevathSchool is not for you, you may withdraw from our courses at anytime. Here is how the fee works in case you drop-out:</p>
                    <div className="fees5">
                        <div className="fees51">
                            <div className="fees511 text-green">
                                UNIT 1
                            </div>
                            <div className="fees511 text-green">
                                UNIT 2 - 3
                            </div>
                            <div className="fees511 text-green">
                                UNIT 4 - Onwards
                            </div>
                        </div>
                        <div className="fees51 fees54">
                            <img src="/static/images3/Group 4214.png" alt="" />
                        </div>
                        <div className="fees51">
                            <div className="fees512">
                                No Payment
                            </div>
                            <div className="fees512">
                                Partial Token Payment
                            </div>
                            <div className="fees512">
                                100% ISA Payment
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq">
                <div className="faq1">
                    <h5 className="text-center">Frequently asked Questions</h5>
                    <div className="faq11">
                        <p>What is the medium of instruction?</p>
                        <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                    </div>
                    <div className="faq11">
                        <p>What is the medium of instruction?</p>
                        <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                    </div>
                    <div className="faq11">
                        <p>What is the medium of instruction?</p>
                        <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                    </div>
                    <div className="faq11">
                        <p>What is the medium of instruction?</p>
                        <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                    </div>
                    <div className="faq11">
                        <p>What is the medium of instruction?</p>
                        <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                    </div>
                    <div className="faq11">
                        <p>What is the medium of instruction?</p>
                        <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                    </div>
                    <div className="faq11">
                        <p>What is the medium of instruction?</p>
                        <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                    </div>
                    <div className="faq11">
                        <p>What is the medium of instruction?</p>
                        <p className="text-green">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
                    </div>
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

export default FeeIsa;
