import React from 'react'

const Card1 = () => {
    return (
        <>
            <div className="fi-card">
                <div className="fi-card1">
                    <div className="fi-card-img">
                        <img src="/static/images/coursecarddesign 1.png" alt="" />
                        <h4 className="h4 white">Software Development</h4>
                    </div>
                    <div className="fi-card-mid">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia cumque, totam ut quasi
                            vero quam reiciendis accusantium, porro eligendi nostrum, numquam similique culpa
                            mollitia. Repellendus perferendis eum aspernatur dignissimos porro!</p>
                    </div>
                    <div className="fi-card-bottom">
                        <div className="row">
                            <img src="/static/images/money 1.png" alt="" />
                            <h5 className="h5">Pay Only After You Earn 5LPA (CTC)</h5>
                        </div>
                        <div className="row">
                            <img src="/static/images/time 1.png" alt="" />
                            <h5 className="h5">Full Time | Part Time</h5>
                        </div>
                        <div className="row row1">
                            <div className="row">
                                <img src="/static/images//program 1.png" alt="" />
                                <h5 className="h5">3 Programs</h5>
                            </div>
                            <div>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card1;
