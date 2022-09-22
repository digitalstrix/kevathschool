import React, { useEffect } from 'react';
import './style.css';

const ProfileSecTest = (props) => {
    useEffect(() => {
        props.setNavFlag1(false);
        props.setNavFlag2(false);
    }, []);

    return (
        <>
            <div className="test-nav">
                <div className="test-nav1">
                    <div className="test-nav11">
                        <img src="/static/images/UI LOGO 1 1.png" alt="" />
                    </div>
                    <div className="test-nav12">
                        TEST 1 BASICS OF PROGRAMMING
                    </div>
                    <div className="test-nav13">
                        <h5>00:58:10</h5>
                        <p>Time Remaining</p>
                    </div>
                </div>
            </div>
            <div className="test-main">
                <div className="test-main1">
                    <div className="test1">
                        <h5>Question</h5>
                        <h5 className="text-green">1 Of 50</h5>
                    </div>
                    <div className="test2">
                        <div className="test21">
                            <div className="test211">
                                <div className="test-pill bg-green">
                                    1
                                </div>
                                <div className="test-pill bg-green">
                                    1
                                </div>
                                <div className="test-pill bg-red">
                                    1
                                </div>
                                <div className="test-pill bg-red">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                                <div className="test-pill">
                                    1
                                </div>
                            </div>
                            <div className="test212">
                                <div className="test2121 row">
                                    <div className="test-pill bg-green"></div>
                                    <p>Answered</p>
                                </div>
                                <div className="test2121 row">
                                    <div className="test-pill bg-red"></div>
                                    <p>Skipped</p>
                                </div>
                            </div>
                        </div>
                        <div className="test22">
                            <div className="test221">
                                <h4>How is an array initialised in C language?</h4>
                            </div>
                            <div className="test222">
                                <h5>Select the correct answer</h5>
                            </div>
                            <div className="test223">
                                <div class="radio">
                                    <input id="radio-1" name="radio" type="radio" />
                                    <label for="radio-1" class="radio-label"><span className="test-op">A.</span>Option 1</label>
                                </div>
                                <div class="radio">
                                    <input id="radio-2" name="radio" type="radio" />
                                    <label for="radio-2" class="radio-label"><span className="test-op">B.</span>Option 2</label>
                                </div>
                                <div class="radio">
                                    <input id="radio-3" name="radio" type="radio" />
                                    <label for="radio-3" class="radio-label"><span className="test-op">C.</span>Option 3</label>
                                </div>
                                <div class="radio">
                                    <input id="radio-4" name="radio" type="radio" />
                                    <label for="radio-4" class="radio-label"><span className="test-op">D.</span>Option 4</label>
                                </div>
                            </div>
                        </div>
                        <div className="test23">
                            <button className="btn1 btn test-btn">BACK</button>
                            <button className="btn1 btn">NEXT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSecTest;
