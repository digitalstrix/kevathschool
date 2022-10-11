import React from 'react'

const Card6 = () => {
    const func1 =(e)=>{
        e.target.parentNode.nextElementSibling.nextElementSibling.classList.toggle('none');
    };

    return (
        <div className="db-card">
            <div className="db-card1">
                <img src="/static/images4/Rectangle 1281.png" alt="" />
            </div>
            <div className="db-card2">
                <div className="db-card21">
                    <p>COURSE</p>
                    <b>Full Stack Web Development</b>
                    <div className="db-card-211">
                        <div className="row">
                            <img src="/static/images4/209-2095776_transparent-time-clock-png-time-vector-icon-png 2.png" alt="" />
                            <p>18 Months</p>
                        </div>
                        <div className="row">
                            <img src="/static/images4/209-2095776_transparent-time-clock-png-time-vector-icon-png 3.png" alt="" />
                            <p>Microsoft Certified</p>
                        </div>
                    </div>
                    <div className="db-card-slider row">
                        <progress id="file" value="25" max="100"> 32% </progress>
                        <p>75% left</p>
                    </div>
                </div>
                <div className="db-card22">
                    <button className="btn btn1">Enter Program</button>
                </div>
            </div>
            <div className="db-card3 row">
                <div onClick={func1} className="db-card-b">
                    <b>. . .</b>
                </div>
                <button className="btn btn5">Share</button>
                <div className="db-card31 none">
                    <p>Unregister Program</p>
                    <p>Course Content</p>
                    <p>Class Registration Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Card6
