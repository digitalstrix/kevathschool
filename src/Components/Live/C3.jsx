import React, { useEffect } from 'react'

const C3 = (props) => {
    useEffect(()=>{
        props.setNavFlag1(false);
        props.setNavFlag2(false);
        props.setFootFlag(false);
    },[]);

    return (
        <>
            <div className="live">
                <div className="live1">
                    <div className="live-sidebar">
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
                        <h4>Full Stack Web Development</h4>
                        <p>Course short description / tagline</p>
                    </div>
                    <div className="live21 c3">
                        <h3>Resources</h3>
                        <div className="c31 row">
                            <div className="c311 row">
                                <div className="c3111">
                                    <img src="/static/images4/e4.png" alt="" />
                                </div>
                                <div className="c3112">
                                    E - Books
                                </div>
                                <div className="c3113">
                                    <img src="/static/images4/e1.png" alt="" />
                                </div>
                            </div>
                            <div className="c311 row">
                                <div className="c3111">
                                    <img src="/static/images4/e3.png" alt="" />
                                </div>
                                <div className="c3112">
                                    E - Books
                                </div>
                                <div className="c3113">
                                    <img src="/static/images4/e1.png" alt="" />
                                </div>
                            </div>
                            <div className="c311 row">
                                <div className="c3111">
                                    <img src="/static/images4/e2.png" alt="" />
                                </div>
                                <div className="c3112">
                                    E - Books
                                </div>
                                <div className="c3113">
                                    <img src="/static/images4/e1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default C3;
