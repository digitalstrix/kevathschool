import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const ProfileSecTest = (props) => {
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
    }, []);

    const func1=(e)=>{
        console.log(e.target);
        if(document.querySelector('.test-active'))
        {
            document.querySelector('.test-active').classList.remove('test-active');
        }
        e.target.parentNode.classList.add('test-active');
    };

    return (
        <>
            <div className="test-nav">
                <div className="test-nav1">
                    <div className="test-nav11">
                        <img src="/static/images2/UI_LOGO_1_1-removebg-preview.png" alt="" />
                    </div>
                    <div className="test-nav12">
                        TEST 1 BASICS OF PROGRAMMING
                    </div>
                </div>
            </div>
            <div className="test-main">
                <div className="test-main1">
                    <div className="test2">
                        <div className="test22">
                            <div className="test221">
                                <div className="test1">
                                    <h5>Question: <span className="text-green">1 Of 50</span></h5>
                                </div>
                                <h4>Q1</h4>
                                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h5>
                            </div>
                            <div className="test222">
                                <h5>Select the correct answer</h5>
                            </div>
                            <div className="test223">
                                <div className="radio">
                                    <input id="radio-1" name="radio" type="radio" onClick={func1} />
                                    <label htmlFor="radio-1" className="radio-label"><span className="test-op">A.</span>Option 1</label>
                                </div>
                                <div className="radio">
                                    <input id="radio-2" name="radio" type="radio" onClick={func1} />
                                    <label htmlFor="radio-2" className="radio-label"><span className="test-op">B.</span>Option 2</label>
                                </div>
                                <div className="radio">
                                    <input id="radio-3" name="radio" type="radio" onClick={func1} />
                                    <label htmlFor="radio-3" className="radio-label"><span className="test-op">C.</span>Option 3</label>
                                </div>
                                <div className="radio">
                                    <input id="radio-4" name="radio" type="radio" onClick={func1} />
                                    <label htmlFor="radio-4" className="radio-label"><span className="test-op">D.</span>Option 4</label>
                                </div>
                            </div>
                            <div className="test23">
                                <button className="btn1 btn test-btn">BACK</button>
                                <button className="btn1 btn">NEXT</button>
                            </div>
                        </div>
                        <div className="test21">
                            <div className="test211">
                                <div className="test-nav13">
                                    <h5>00:58:10</h5>
                                    <p>Time Remaining</p>
                                    <button className="btn btn1">Submit</button>
                                </div>
                                <div className="test-sec1">
                                    <h5>Aptitude</h5>
                                    <div className="row">
                                        <div className="test-pill bg-green">
                                            1
                                        </div>
                                        <div className="test-pill bg-green">
                                            2
                                        </div>
                                        <div className="test-pill bg-blue">
                                            3
                                        </div>
                                        <div className="test-pill">
                                            4
                                        </div>
                                        <div className="test-pill">
                                            5
                                        </div>
                                        <div className="test-pill bg-green">
                                            6
                                        </div>
                                        <div className="test-pill bg-green">
                                            7
                                        </div>
                                        <div className="test-pill bg-blue">
                                            8
                                        </div>
                                        <div className="test-pill">
                                            9
                                        </div>
                                        <div className="test-pill">
                                            10
                                        </div>
                                    </div>
                                </div>
                                <div className="test-sec1">
                                    <h5>English</h5>
                                    <div className="row">
                                        <div className="test-pill bg-green">
                                            1
                                        </div>
                                        <div className="test-pill bg-green">
                                            2
                                        </div>
                                        <div className="test-pill bg-blue">
                                            3
                                        </div>
                                        <div className="test-pill">
                                            4
                                        </div>
                                        <div className="test-pill">
                                            5
                                        </div>
                                        <div className="test-pill bg-green">
                                            6
                                        </div>
                                        <div className="test-pill bg-green">
                                            7
                                        </div>
                                        <div className="test-pill bg-blue">
                                            8
                                        </div>
                                        <div className="test-pill">
                                            9
                                        </div>
                                        <div className="test-pill">
                                            10
                                        </div>
                                    </div>
                                </div>
                                <div className="test-sec1">
                                    <h5>Physics</h5>
                                    <div className="row">
                                        <div className="test-pill bg-green">
                                            1
                                        </div>
                                        <div className="test-pill bg-green">
                                            2
                                        </div>
                                        <div className="test-pill bg-blue">
                                            3
                                        </div>
                                        <div className="test-pill">
                                            4
                                        </div>
                                        <div className="test-pill">
                                            5
                                        </div>
                                        <div className="test-pill bg-green">
                                            6
                                        </div>
                                        <div className="test-pill bg-green">
                                            7
                                        </div>
                                        <div className="test-pill bg-blue">
                                            8
                                        </div>
                                        <div className="test-pill">
                                            9
                                        </div>
                                        <div className="test-pill">
                                            10
                                        </div>
                                    </div>
                                </div>
                                <div className="test-sec1">
                                    <h5>Biology</h5>
                                    <div className="row">
                                        <div className="test-pill bg-green">
                                            1
                                        </div>
                                        <div className="test-pill bg-green">
                                            2
                                        </div>
                                        <div className="test-pill bg-blue">
                                            3
                                        </div>
                                        <div className="test-pill">
                                            4
                                        </div>
                                        <div className="test-pill">
                                            5
                                        </div>
                                        <div className="test-pill bg-green">
                                            6
                                        </div>
                                        <div className="test-pill bg-green">
                                            7
                                        </div>
                                        <div className="test-pill bg-blue">
                                            8
                                        </div>
                                        <div className="test-pill">
                                            9
                                        </div>
                                        <div className="test-pill">
                                            10
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

export default ProfileSecTest;
