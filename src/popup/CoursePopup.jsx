import React from 'react'
import { useNavigate } from 'react-router-dom';

const CoursePopup = ({showModal, setShowModal, joinUrl}) => {
    return (
        <>
            <div className="course-pop">
                <div className="course-pop1">
                    <div onClick={()=>{
                        setShowModal(!showModal);
                    }} className="close-pop">X</div>
                    <div className="course-pop-title">
                        <h2>Please login on zoop using the same email you have used while registering for the course</h2>
                    </div>
                    <div className="course-pop-foot row">
                        <a href='https://zoom.us/signin#/login' target="_blank" className="zoom-btn btn">Zoom Login</a>
                        <a href={joinUrl} target="_blank" className="btn btn1">Join Course</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoursePopup;
