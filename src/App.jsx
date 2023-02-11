import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Navbar/index";
import Navbar1 from "./Navbar/Index1";
import Footer from "./Footer/Index";
import CourseMain from "./Components/Course/CourseMain";
import Courses from "./Components/Course/Courses";
import EventReg1 from "./Components/Events/EventReg1";
import EventReg2 from "./Components/Events/EventReg2";
import EventReg3 from "./Components/Events/EventReg3";
import Hfu from "./Components/HFU/Hfu";
import About from "./Components/About/About";
import FeeIsa from "./Components/FeeIsa/FeeIsa";
import VerifyPhoneNumber from "./Components/FeeIsa/VerifyPhoneNumber";
import ProfileSec1 from "./Components/Profile/ProfileSec1";
import ProfileSec2 from "./Components/Profile/ProfileSec2";
import ProfileSec3 from "./Components/Profile/ProfileSec3";
import ProfileSec11 from "./Components/Profile/ProfileSec11";
import ProfileSec12 from "./Components/Profile/ProfileSec12";
import ProfileSecTest from "./Components/Profile/ProfileSecTest";
import ProfileSec4 from "./Components/Profile/ProfileSec4";
import ProfileSec5 from "./Components/Profile/ProfileSec5";
import Login from "./Components/Authentication/Login";
import Forget1 from "./Components/Authentication/Forget1";
import Forget2 from "./Components/Authentication/Forget2";
import Signup from "./Components/Authentication/Signup";
import SignUp2 from "./Components/Authentication/SignUp2";
import Db1 from "./Components/Dashboard/Db1";
import Db2 from "./Components/Dashboard/Db2";
import Db3 from "./Components/Dashboard/Db3";
import Courses1 from "./Components/Course/Courses1";
import { useState } from "react";
import Db4 from "./Components/Dashboard/Db4";
import CoursesDb from "./Components/Dashboard/CoursesDb";
import FaqPopup from "./popup/FaqPopup";
import ContactPopup from "./popup/ContactPopup";
import ContactUs from "./Components/Contact/ContactUs";
import Faq from "./Components/FAQ/Faq";
import C1 from "./Components/Live/C1";
import C2 from "./Components/Live/C2";
import C3 from "./Components/Live/C3";
import C4 from "./Components/Live/C4";
import C5 from "./Components/Live/C5";
import Certificate1 from "./Components/Certificate/Certificate1";
import Certificate2 from "./Components/Certificate/Certificate2";
import MainState from "./context/MainState";
import Alert from "./Alerts/Alert";
import Forget3 from "./Components/Authentication/Forget3";
import Referral from "./Components/Authentication/Referral";
import Referral1 from "./Components/Referral/Referral1";
import VerifyEmail from "./Components/Authentication/VerifyEamil";
import Referral2 from "./Components/Referral/Referral2";

const App = () => {
  const [navFlag1, setNavFlag1] = useState(true);
  const [navFlag2, setNavFlag2] = useState(false);
  const [footFlag, setFootFlag] = useState(true);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [flag, setFlag] = useState(false);
  const [userFlag, setUserFlag] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [userInfoFlag, setUserInfoFlag] = useState(false);
  var tc;

  const setAlert = (message, color) => {
    setMessage(message);
    setColor(color);
    setFlag(true);

    tc = setTimeout(() => {
      setMessage("");
      setColor("");
      setFlag(false);
    }, 4000);
  };

  const closeAlert = () => {
    setFlag(false);
    clearTimeout(tc);
  };

  return (
    <>
      <MainState>
        <BrowserRouter>
          {navFlag1 ? <Navbar /> : null}
          {navFlag2 ? (
            <Navbar1
              userInfo={userInfo}
              setUserInfoFlag={setUserInfoFlag}
              setUserInfo={setUserInfo}
              userFlag={userFlag}
              setAlert={setAlert}
              setNavFlag1={setNavFlag1}
              setNavFlag2={setNavFlag2}
              setFootFlag={setFootFlag}
            />
          ) : null}
          {flag ? (
            <Alert color={color} message={message} closeAlert={closeAlert} />
          ) : null}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/courses-main"
              element={
                <CourseMain
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/courses"
              element={
                <Courses
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setFootFlag={setFootFlag}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/discover"
              element={
                <EventReg1
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/event-register/:id"
              element={
                <EventReg2
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setFootFlag={setFootFlag}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/event-register-verification"
              element={
                <EventReg3
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/hire-from-us"
              element={
                <Hfu
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/about-us"
              element={
                <About
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/fee-isa"
              element={
                <FeeIsa
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactUs
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/faq"
              element={
                <Faq
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setFootFlag={setFootFlag}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/verify-phone-number"
              element={
                <VerifyPhoneNumber
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/profile-section"
              element={
                <ProfileSec1
                  userInfo={userInfo}
                  setUserInfoFlag={setUserInfoFlag}
                  setUserInfo={setUserInfo}
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/change-password"
              element={
                <ProfileSec11
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/proifle-verify-phone"
              element={
                <ProfileSec12
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/documents"
              element={
                <ProfileSec2
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/pre-test"
              element={
                <ProfileSec3
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/test"
              element={
                <ProfileSecTest
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setFootFlag={setFootFlag}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/help"
              element={
                <ProfileSec4
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/profile-faq"
              element={
                <ProfileSec5
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/faq-popup"
              element={
                <FaqPopup
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/contact-popup"
              element={
                <ContactPopup
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  setFootFlag={setFootFlag}
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/forget-password"
              element={
                <Forget1
                  setFootFlag={setFootFlag}
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/forget-password1"
              element={
                <Forget2
                  setFootFlag={setFootFlag}
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/forget-password2"
              element={
                <Forget3
                  setFootFlag={setFootFlag}
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Signup
                  setFootFlag={setFootFlag}
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/signup-verification"
              element={
                <SignUp2
                  setFootFlag={setFootFlag}
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/verify-email"
              element={
                <VerifyEmail
                  setFootFlag={setFootFlag}
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/referral"
              element={
                <Referral
                  setFootFlag={setFootFlag}
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/referral1"
              element={
                <Referral1
                  setFootFlag={setFootFlag}
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/referral2"
              element={
                <Referral2
                  setFootFlag={setFootFlag}
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/our-courses"
              element={
                <Db1
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/dashboard-discover"
              element={
                <Db2
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/learn-for-free"
              element={
                <Db4
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/courses-db"
              element={
                <CoursesDb
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/my-library"
              element={
                <Db3
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/live-classes"
              element={
                <C1
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/program-contents"
              element={
                <C2
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/resources-course"
              element={
                <C3
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/assesments-course"
              element={
                <C4
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/assesments-course1"
              element={
                <C5
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/certificate-1"
              element={
                <Certificate1
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/certificate-2"
              element={
                <Certificate2
                  userFlag={userFlag}
                  setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
          </Routes>
          {footFlag ? <Footer /> : null}
        </BrowserRouter>
      </MainState>
    </>
  );
};

export default App;
