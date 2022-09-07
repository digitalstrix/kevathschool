import React from 'react'

const index = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav0 row">
                    <img src="/static/images/UI LOGO 1 1.png" alt="" />
                </div>
                <div className="nav01 row">
                    <div className="row nav2 nav1">
                        <p>Courses</p>
                        <img src="/static/images/Arrow drodown.png" alt="" />
                    </div>
                    <div className="nav1">
                        <p>Events</p>
                    </div>
                    <div className="nav1">
                        <p>Fees & ISA</p>
                    </div>
                    <div className="nav1">
                        <p>Hire From Us</p>
                    </div>
                    <div className="nav1 row">
                        <p>Refer & Earn</p>
                        <img src="/static/images/v 1.png" alt="" />
                    </div>
                    <div className="nav1">
                        <button className="btn btn1">Login</button>
                    </div>
                </div>
                <div className="layer">
                    <img src="/static/images/Ellipse 3.png" alt="" />
                </div>
            </nav>
        </>
    )
}

export default index;
