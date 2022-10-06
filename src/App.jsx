import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Navbar/index';
import Navbar1 from './Navbar/Index1'
import Footer from './Footer/Index';
import CourseMain from './Components/Course/CourseMain';
import Courses from './Components/Course/Courses';
import EventReg1 from './Components/Events/EventReg1';
import EventReg2 from './Components/Events/EventReg2';
import EventReg3 from './Components/Events/EventReg3';
import Hfu from './Components/HFU/Hfu';
import About from './Components/About/About';
import FeeIsa from './Components/FeeIsa/FeeIsa';
import VerifyPhoneNumber from './Components/FeeIsa/VerifyPhoneNumber';
import ProfileSec1 from './Components/Profile/ProfileSec1';
import ProfileSec2 from './Components/Profile/ProfileSec2';
import ProfileSec3 from './Components/Profile/ProfileSec3';
import ProfileSec11 from './Components/Profile/ProfileSec11';
import ProfileSec12 from './Components/Profile/ProfileSec12';
import ProfileSecTest from './Components/Profile/ProfileSecTest';
import ProfileSec4 from './Components/Profile/ProfileSec4';
import ProfileSec5 from './Components/Profile/ProfileSec5';
import Login from './Components/Authentication/Login';
import Forget1 from './Components/Authentication/Forget1';
import Forget2 from './Components/Authentication/Forget2';
import Signup from './Components/Authentication/Signup';
import SignUp2 from './Components/Authentication/SignUp2';
import Db1 from './Components/Dashboard/Db1';
import Db2 from './Components/Dashboard/Db2';
import Db3 from './Components/Dashboard/Db3';
import Courses1 from './Components/Course/Courses1';
import { useState } from 'react';
import Db4 from './Components/Dashboard/Db4';
import CoursesDb from './Components/Dashboard/CoursesDb';
import FaqPopup from './popup/FaqPopup';
import ContactPopup from './popup/ContactPopup';
import ContactUs from './Components/Contact/ContactUs';
import Faq from './Components/FAQ/Faq';
import C1 from './Components/Live/C1';
import C2 from './Components/Live/C2';
import C3 from './Components/Live/C3';
import C4 from './Components/Live/C4';
import C5 from './Components/Live/C5';
import Certificate1 from './Components/Certificate/Certificate1';
import Certificate2 from './Components/Certificate/Certificate2';
import MainState from './context/MainState';

const App = () => {
    const [navFlag1, setNavFlag1] = useState(true);
    const [navFlag2, setNavFlag2] = useState(false);
    const [footFlag, setFootFlag] = useState(true);
    return (
        <>
            <MainState>
                <BrowserRouter>
                    {navFlag1 ? <Navbar /> : null}
                    {navFlag2 ? <Navbar1 /> : null}
                    <Routes>
                        <Route path="/" element={<Home setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/courses-main" element={<CourseMain setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/courses" element={<Courses setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/events-reg" element={<EventReg1 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/events-reg1" element={<EventReg2 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/events-reg2" element={<EventReg3 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/hfu" element={<Hfu setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/about-us" element={<About setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/fee-isa" element={<FeeIsa setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/contact" element={<ContactUs setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/faq" element={<Faq setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/verify-phone-number" element={<VerifyPhoneNumber setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/profile-sec1" element={<ProfileSec1 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/profile-sec11" element={<ProfileSec11 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/profile-sec12" element={<ProfileSec12 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/profile-sec2" element={<ProfileSec2 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/profile-sec3" element={<ProfileSec3 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/profile-sec3-test" element={<ProfileSecTest setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/profile-sec4" element={<ProfileSec4 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/profile-sec5" element={<ProfileSec5 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/faq-popup" element={<FaqPopup setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/contact-popup" element={<ContactPopup setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/login" element={<Login setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/forget-password" element={<Forget1 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/forget-password1" element={<Forget2 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/signup" element={<Signup setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/signup2ver" element={<SignUp2 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/user-default-dashboard" element={<Db1 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/user-default-dashboard5" element={<Db2 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/user-default-dashboard4" element={<Db4 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/courses-db" element={<CoursesDb setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/user-dashboard" element={<Db3 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />} />
                        <Route path="/c1" element={<C1 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} setFootFlag={setFootFlag} />} />
                        <Route path="/c2" element={<C2 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} setFootFlag={setFootFlag} />} />
                        <Route path="/c3" element={<C3 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} setFootFlag={setFootFlag} />} />
                        <Route path="/c4" element={<C4 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} setFootFlag={setFootFlag} />} />
                        <Route path="/c5" element={<C5 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} setFootFlag={setFootFlag} />} />
                        <Route path="/certificate-1" element={<Certificate1 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} setFootFlag={setFootFlag} />} />
                        <Route path="/certificate-2" element={<Certificate2 setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} setFootFlag={setFootFlag} />} />
                    </Routes>
                    {footFlag ? <Footer /> : null}
                </BrowserRouter>
            </MainState>
        </>
    )
}

export default App;
