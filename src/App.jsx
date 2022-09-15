import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Navbar/index';
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

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses_main" element={<CourseMain />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/events_reg" element={<EventReg1 />} />
                    <Route path="/events_reg1" element={<EventReg2 />} />
                    <Route path="/events_reg2" element={<EventReg3 />} />
                    <Route path="/hfu" element={<Hfu />} />
                    <Route path="/about_us" element={<About />} />
                    <Route path="/fee_isa" element={<FeeIsa />} />
                    <Route path="/verify_phone_number" element={<VerifyPhoneNumber />} />
                    <Route path="/profile_sec1" element={<ProfileSec1 />} />
                    <Route path="/profile_sec11" element={<ProfileSec11 />} />
                    <Route path="/profile_sec12" element={<ProfileSec12 />} />
                    <Route path="/profile_sec2" element={<ProfileSec2 />} />
                    <Route path="/profile_sec3" element={<ProfileSec3 />} />
                    <Route path="/profile_sec3_test" element={<ProfileSecTest />} />
                    <Route path="/profile_sec4" element={<ProfileSec4 />} />
                    <Route path="/profile_sec5" element={<ProfileSec5 />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forget_password" element={<Forget1 />} />
                    <Route path="/forget_password1" element={<Forget2 />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signup2ver" element={<SignUp2 />} />
                    <Route path="/user_default_dashboard" element={<Db1 />} />
                    <Route path="/user_default_dashboard2" element={<Db2 />} />
                    <Route path="/courses" element={<Courses1 />} />
                    <Route path="/user_dashboard" element={<Db3 />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;
