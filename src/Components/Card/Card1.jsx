import React from 'react'
import { NavLink } from 'react-router-dom';

const Card1 = () => {
    return (
        <>
            <div className="fi-card">
                <div className="fi-card1">
                    <div className="fi-card-img">
                        <img src="/static/images/1 9.png" alt="" />
                        <div className="row fi-card-img1">
                            <h4 className="h4 white">Spark</h4>
                            <img src="/static/images/v1 1.png" alt="" />
                        </div>
                    </div>
                    <div className="fi-card-bottom">
                        <div className="row">
                            <img src="/static/images/check 1.png" alt="" />
                            <h5 className="h5">Software Development</h5>
                        </div>
                        <div className="row">
                            <img src="/static/images/check 1.png" alt="" />
                            <h5 className="h5">Graduates or Final Year Students</h5>
                        </div>
                        <div className="row">
                            <img src="/static/images/check 1.png" alt="" />
                            <h5 className="h5">No Prior Technical Knowledge Needed</h5>
                        </div>
                        <div className="row">
                            <img src="/static/images/check 1.png" alt="" />
                            <h5 className="h5">Pay After Placement of 5 LPA or Above</h5>
                        </div>
                        <div className="text-center card1-btn1">
                            <NavLink to="/courses" className="btn btn1 card1-btn">View Courses</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card1;
