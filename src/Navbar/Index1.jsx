import React from 'react';

const Index1 = () => {
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }
    
    function closeNav() {
        console.log('sdfsdf');
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <>
            <nav className="navbar navbar-1 mainNav">
                <div className="nav0 row">
                    <img src="/static/images/UI LOGO 1 1.png" alt="" />
                </div>
                <div className="nav01 row">
                    <div className="nav1 nav1-1">
                        <img src="/static/images2/Vector.png" alt="" />
                    </div>
                    <div className="nav1 nav1-1">
                        <img src="/static/images2/Vector (1).png" alt="" />
                    </div>
                    <div className="nav1 nav1-1">
                        <img src="/static/images2/Vector (2).png" alt="" />
                    </div>
                    <div className="nav1 nav1-2 row">
                        <img src="/static/images2/Ellipse 39.png" alt="" />
                        <div>
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
                    
                    <div className="row nav2">
                        <a onClick={closeNav} href="#">Courses</a>
                        <img src="/static/images/Arrow drodown.png" alt="" />
                    </div>

                    <a onClick={closeNav} href="#">Events</a>
                    <a onClick={closeNav} href="#">Fees & ISA</a>
                    <a onClick={closeNav} href="#">Hire From Us</a>
                    <a onClick={closeNav} href="#">Refer & Earn</a>
                    <button className="btn btn1">Login</button>
                </div>
            </div>

            <div className="navbtn">
                <svg onClick={openNav} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>

        </>
    )
}

export default Index1;
