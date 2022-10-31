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

const App = () => {
  const [navFlag1, setNavFlag1] = useState(true);
  const [navFlag2, setNavFlag2] = useState(false);
  const [footFlag, setFootFlag] = useState(true);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [flag, setFlag] = useState(false);
  var tc;

  const setAlert=(message, color)=>{
    setMessage(message);
    setColor(color);
    setFlag(true);

    tc=setTimeout(() => {
      setMessage("");
      setColor("");
      setFlag(false);
    }, 4000);
  }

  const closeAlert=()=>{
    setFlag(false);
    clearTimeout(tc);
  };

  return (
    <>
      <MainState>
        <BrowserRouter>
          {navFlag1 ? <Navbar /> : null}
          {navFlag2 ? <Navbar1 /> : null}
            {flag ? <Alert color={color} message={message} closeAlert={closeAlert} /> : null}
          <Routes>
            <Route
              path="/"
              element={
                <Home setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/courses-main"
              element={
                <CourseMain
                setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/courses"
              element={
                <Courses setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/events-reg"
              element={
                <EventReg1
                setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/events-reg1"
              element={
                <EventReg2 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/events-reg2"
              element={
                <EventReg3 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/hfu"
              element={
                <Hfu setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/about-us"
              element={
                <About setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/fee-isa"
              element={
                <FeeIsa setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactUs setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/faq"
              element={
                <Faq setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/verify-phone-number"
              element={
                <VerifyPhoneNumber setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/profile-sec1"
              element={
                <ProfileSec1 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/profile-sec11"
              element={
                <ProfileSec11 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/profile-sec12"
              element={
                <ProfileSec12 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/profile-sec2"
              element={
                <ProfileSec2 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/profile-sec3"
              element={
                <ProfileSec3 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/profile-sec3-test"
              element={
                <ProfileSecTest setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/profile-sec4"
              element={
                <ProfileSec4 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/profile-sec5"
              element={
                <ProfileSec5 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/faq-popup"
              element={
                <FaqPopup setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/contact-popup"
              element={
                <ContactPopup setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/forget-password"
              element={
                <Forget1 setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/forget-password1"
              element={
                <Forget2 setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/forget-password2"
              element={
                <Forget3 setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/signup"
              element={
                <Signup setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/signup2ver"
              element={
                <SignUp2 setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/referral"
              element={
                <Referral setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/user-default-dashboard"
              element={
                <Db1 setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/user-default-dashboard5"
              element={
                <Db2 setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/user-default-dashboard4"
              element={
                <Db4 setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/courses-db"
              element={
                <CoursesDb setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                />
              }
            />
            <Route
              path="/user-dashboard"
              element={
                <Db3 setAlert={setAlert} setNavFlag1={setNavFlag1} setNavFlag2={setNavFlag2} />
              }
            />
            <Route
              path="/live-classes"
              element={
                <C1 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/program-contents"
              element={
                <C2 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/resources-course"
              element={
                <C3 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/assesments-course"
              element={
                <C4 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/assesments-course1"
              element={
                <C5 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/certificate-1"
              element={
                <Certificate1 setAlert={setAlert}
                  setNavFlag1={setNavFlag1}
                  setNavFlag2={setNavFlag2}
                  setFootFlag={setFootFlag}
                />
              }
            />
            <Route
              path="/certificate-2"
              element={
                <Certificate2 setAlert={setAlert}
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
