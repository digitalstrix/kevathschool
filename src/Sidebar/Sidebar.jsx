import React from 'react'
import { useState } from 'react';

const Sidebar = () => {
    const [flag, setFlag] = useState(true);
    const func =()=>{
        if(flag)
        {
            document.querySelector('.sidebar1').style.left='0px';
            setFlag(!flag);
        }
        else
        {
            document.querySelector('.sidebar1').style.left='-290px';
            setFlag(!flag);
        }
    };

    return (
        <>
            <div onClick={func} className="sidebar-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
            <div className="sidebar1">
                <div className="sidebar11">
                    <div className="sidebar111 side-active">
                        <div className="row">
                            <img src="/static/images2/Vector (3).png" alt="" />
                            <p>Profile Details</p>
                        </div>
                    </div>
                    <div className="sidebar111">
                        <div className="row">
                            <img src="/static/images2/Vector (4).png" alt="" />
                            <p>Documents</p>
                        </div>
                    </div>
                    <div className="sidebar111">
                        <div className="row">
                            <img src="/static/images2/Group 661 (1).png" alt="" />
                            <p>Pre-Test</p>
                        </div>
                    </div>
                    <div className="side-p">
                        SUPPORT
                    </div>
                    <div className="sidebar111">
                        <div className="row">
                            <img src="/static/images2/info.png" alt="" />
                            <p>Help</p>
                        </div>
                    </div>
                    <div className="sidebar111">
                        <div className="row">
                            <img src="/static/images2/Vector (5).png" alt="" />
                            <p>FAQs</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
