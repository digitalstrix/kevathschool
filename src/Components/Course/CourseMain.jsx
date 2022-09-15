import React from 'react'

const CourseMain = () => {
    return (
        <>
            <div className="home course-main">
                <div className="home1">
                    <div className="home11">
                        <h1>Our </h1>
                        <h1>Courses</h1>
                        <p>Become a job-ready software developer in 30 weeks at no upfront fees. Pay us only if you get a job that pays you ₹5,00,000/- per year or more!</p>
                        <div className="row home-mid">
                            <button className="btn btn2 contact-btn">Explore More</button>
                        </div>
                    </div>
                    <div className="home12 course-main12">
                        <img src="/static/images/Ellipse 9.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="course2">
                <div className="courses21">
                    <div className="courses211">
                        <h5>For Working Professionals</h5>
                    </div>
                    <div className="course212">
                        <div className="row course0">
                            <h3>Software & Tech</h3>
                            <a href="#">View all</a>
                        </div>
                        <div className="couse-card">
                            <div className="course-card1">
                                <div className="course-card-img">
                                    <img src="/static/images/Rectangle 1281.png" alt="" />
                                </div>
                                <div className="course-card-text">
                                    <div className="course-card-text1">
                                        <h5>Full Stack Web Development</h5>
                                        <div className="row course-card-text11">
                                            <img src="/static/images/209-2095776_transparent-time-clock-png-time-vector-icon-png 2.png" alt="" />
                                            <p>18 Months</p>
                                        </div>
                                        <div className="row course-card-text11">
                                            <img src="/static/images/209-2095776_transparent-time-clock-png-time-vector-icon-png 3.png" alt="" />
                                            <p>Microsoft Certified</p>
                                        </div>
                                        <button className="btn btn1">Apply Now</button>
                                        <a href="#">VIEW PROGRAM</a>
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

export default CourseMain;
