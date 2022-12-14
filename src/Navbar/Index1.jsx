import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from 'react-avatar';

const Index1 = () => {
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }

    function closeNav() {
        console.log('sdfsdf');
        document.getElementById("mySidenav").style.width = "0";
    }

    const [isOpen, setOpen] = useState(false);

    const toggleDropdown = () => setOpen(!isOpen);

    return (
        <>
            <nav className="navbar navbar-1 mainNav">
                <div className="nav0 nav-0 row">
                    <img src="/static/images2/UI_LOGO_1_1-removebg-preview.png" alt="" />
                </div>
                <div className="nav01 row">
                    <div className="nav1-3">
                        <div className="nav1 nav1-1">
                            <img src="/static/images3/i11.png" alt="" />
                        </div>
                        <p>My Courses</p>
                    </div>
                    <div className="nav1-3">
                        <div className="nav1 nav1-1">
                            <img src="/static/images3/i12.png" alt="" />
                        </div>
                        <p>My Resources</p>
                    </div>
                    <div className="nav1-3">
                        <div className="nav1 nav1-1">
                            <img src="/static/images3/i13.png" alt="" />
                        </div>
                        <p>Cummunity</p>
                    </div>
                    <div className="nav1-3">
                        <div className="nav1 nav1-1">
                            <img src="/static/images3/i14.png" alt="" />
                        </div>
                        <p>Cummunity</p>
                    </div>
                    <div className="nav1-3">
                        <div className="nav1 nav1-1">
                            <img src="/static/images3/i15.png" alt="" />
                        </div>
                        <p>Cummunity</p>
                    </div>
                    <div className="nav1 nav1-2 row">
                        {/* <img src="/static/images2/Ellipse 39.png" alt="" /> */}
                        <Avatar name="Narendra" round={true} color="#51B848" size={'35px'}  textSizeRatio="2" />
                        <div style={{marginLeft:'7px'}}>
                            <p>Narendra Modi</p>
                            <p className="small">Prime Minister</p>
                        </div>
                    </div>
                </div>
                <div className="layer">
                    <img src="/static/images/Ellipse 3.png" alt="" />
                </div>
            </nav>

            <div id="mySidenav" className="sidenav">
                <div className="closebtn" onClick={closeNav}>&times;</div>
                <div className="sdi">
                    <a onClick={closeNav} href="#">My Courses</a>
                    <a onClick={closeNav} href="#">My Resources</a>
                    <a onClick={closeNav} href="#">Cummunity</a>
                    <a onClick={closeNav} href="#">Contest</a>
                    <a onClick={closeNav} href="#">Refer & Earn</a>

                    <div className='dropdown'>
                        <div className='dropdown-header' onClick={toggleDropdown}>
                            <div className="nav1 nav1-2 mob-nav1-2 row">
                                {/* <img src="/static/images2/Ellipse 39.png" alt="" /> */}
                                <Avatar name="Narendra" round={true} color="#51B848" size={'35px'}  textSizeRatio="2" />
                                <div style={{marginLeft:'7px'}}>
                                    <p>Narendra Modi</p>
                                    <p className="small">Prime Minister</p>
                                </div>
                            </div>
                        </div>
                        <div className={`dropdown-body mob-sdi ${isOpen && 'open'}`}>
                            <div className="dropdown-item">
                                <NavLink to="/">Profile Details</NavLink>
                            </div>
                            <div className="dropdown-item">
                                <NavLink to="/">Documents</NavLink>
                            </div>
                            <div className="dropdown-item">
                                <NavLink to="/">Pre-Test</NavLink>
                            </div>
                            <div className="dropdown-item">
                                <NavLink to="/">Help</NavLink>
                            </div>
                            <div className="dropdown-item">
                                <NavLink to="/">FAQs</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbtn">
                <div className="mob-logo">
                    <img src="/static/images2/UI_LOGO_1_1-removebg-preview.png" alt="" />
                </div>
                <svg onClick={openNav} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>

        </>
    )
}

export default Index1;
