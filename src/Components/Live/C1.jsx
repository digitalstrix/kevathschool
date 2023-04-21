import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import MainContext from '../../context/MainContext';

const C1 = (props) => {
  const navigate = useNavigate();
  const { batchId, courseId, parentId } = useParams();
  const { getBatches } = useContext(MainContext);
  const [data, setData] = useState({});
  // const [data, setData] = useState({});
  // const data = {
  //   "media": {
  //     "image_url": "https://cdn.kevathschool.com/full-stack.png"
  //   },
  //   "id": "53ed0181-a200-4ea5-9d41-fafabd0df4f6",
  //   "type": "course",
  //   "courseType": "PartTime",
  //   "careerType": "Spark",
  //   "title": "Full Stack Developer",
  //   "description": "description of the course",
  //   "courseSyllabus": [
  //     {
  //       "unitName": "unit1",
  //       "name": "java",
  //       "description": "complete java",
  //       "durationWeeks": 4
  //     },
  //     {
  //       "unitName": "unit2",
  //       "name": "Node",
  //       "description": "node js",
  //       "durationWeeks": 4
  //     },
  //     {
  //       "unitName": "unit3",
  //       "name": "python",
  //       "description": "complete python",
  //       "durationWeeks": 6
  //     },
  //     {
  //       "unitName": "unit4",
  //       "name": "UI",
  //       "description": "complete UI",
  //       "durationWeeks": 6
  //     },
  //     {
  //       "unitName": "unit5",
  //       "name": "Practice",
  //       "description": "complete java",
  //       "durationWeeks": 4
  //     },
  //     {
  //       "unitName": "unit6",
  //       "name": "Interview Prperation",
  //       "description": "Interview Prperation and mock interviews",
  //       "durationWeeks": 6
  //     }
  //   ],
  //   "no_of_weeks": 30,
  //   "eligibility": [
  //     {
  //       "image_url": "string",
  //       "data": "string",
  //       "_id": "63b701815be48cf155826634"
  //     }
  //   ],
  //   "instructors": [
  //     {
  //       "name": "Narendra",
  //       "title": "Trainer for python",
  //       "description": "string",
  //       "image_url": "https://cdn.kevathschool.com/backend-dev.png"
  //     },
  //     {
  //       "name": "Narendra",
  //       "title": "Trainer for python",
  //       "description": "string",
  //       "image_url": "string"
  //     },
  //     {
  //       "name": "Narendra",
  //       "title": "Trainer for python",
  //       "description": "string",
  //       "image_url": "string"
  //     }
  //   ],
  //   "whatYouColudBecome": {
  //     "description": "Tech job landscape in itself is lucrative, dynamic and ever growing. The roles that are offered in software development are also highly diverse.",
  //     "roles": [
  //       "Front-End Developer",
  //       "Front-End Developer",
  //       "Front-End Developer",
  //       "Front-End Developer"
  //     ]
  //   },
  //   "allowedParticipants": 100,
  //   "status": "Registered",
  //   "isDeleted": false,
  //   "lastDateToApply": "string",
  //   "createdDate": "2023-01-05T16:57:06.957Z",
  //   "createdBy": null,
  //   "modifiedDate": "2023-01-05T16:57:06.957Z",
  //   "modifiedBy": null,
  //   "whatYouWillLearn": [],
  //   "batchId": "89888254763"
  // };

  useEffect(() => {
    let user = localStorage.getItem('kevath_user');
    if (user) {
      user = JSON.parse(user);
      if (!user.token || user.token === '') {
        navigate('/login');
      }
    }
    else {
      navigate('/login');
    }

    props.setNavFlag1(false);
    props.setNavFlag2(false);
    props.setFootFlag(false);
  }, []);

  useEffect(()=>{
    getData();
  },[batchId, courseId, parentId]);

  const getData=async()=>{
    const ans = await getBatches(batchId);
    console.log(ans);
    setData(ans.data[0]);
  };

  const func1 = () => {
    document.querySelector('.db-card31').classList.toggle('none');
  };

  const toggle = (flag) => {
    if (flag) {
      document.querySelector('.live1').style.display = 'none';
      document.querySelector('.hambug1').style.display = 'block';
    }
    else {
      document.querySelector('.live1').style.display = 'block';
      document.querySelector('.hambug1').style.display = 'none';
    }
  };

  return (
    <>
      <div className="live">
        <div className="live1">
          <div className="live-sidebar">
            <div onClick={() => {
              toggle(true);
            }} className="hambug">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </div>
            <div className="live-logo">
              <img src="/static/images4/q1.png" alt="" />
            </div>
            <NavLink to={`/live-classes/${batchId}/${courseId}/${parentId}`} className="live11">
              <img src="/static/images4/q2.png" alt="" />
              <p>Live Classes</p>
            </NavLink>
            <NavLink to={`/program-contents/${batchId}/${courseId}/${parentId}`} className="live11">
              <img src="/static/images4/q3.png" alt="" />
              <p>Self Learning</p>
            </NavLink>
            <NavLink to={`/resources-course/${batchId}/${courseId}/${parentId}`} className="live11">
              <img src="/static/images4/q4.png" alt="" />
              <p>Resources</p>
            </NavLink>
            <div className="live11">
              <img src="/static/images4/q5.png" alt="" />
              <p>Assessment</p>
            </div>
            <div className="live11">
              <img src="/static/images4/q6.png" alt="" />
              <p>Certificate</p>
            </div>
          </div>
        </div>

        <div className="live2">
          <div className="live-header">
            <div onClick={() => {
              toggle(false);
            }} className="hambug hambug1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </div>
            <h4>{data?.name}</h4>
            <p>{data?.description}</p>
          </div>

          <div className="live21">
            <div className="live211">
              <div className="live2111">
                <div className="live21111">
                  <div className="live-21">
                    {/* <h5>{data?.title} - Live Classes Training</h5> */}
                    <h5>{data?.name}</h5>
                  </div>
                  <div className="live-22 row">
                    <img src="/static/images4/q7.png" alt="" />
                    <div className="live-221">
                      <div className="live-2211">
                        <p className="small">Starts</p>
                        {/* <p>Mon, 15 Aug, 2022 </p> */}
                        <p>{new Date(data?.startDate).toLocaleDateString("en-US", {weekday: 'short'})}, {new Date(data?.startDate).getDate()} {new Date(data?.startDate).toLocaleDateString("en-US", {month: "short"})}, {new Date(data?.startDate).getFullYear()}</p>
                      </div>
                      <div className="live-2211">
                        <p className="small">Ends</p>
                        {/* <p> Sun, 21 Aug, 2022 Online</p> */}
                        <p>{new Date(data?.endDate).toLocaleDateString("en-US", {weekday: 'short'})}, {new Date(data?.endDate).getDate()} {new Date(data?.endDate).toLocaleDateString("en-US", {month: "short"})}, {new Date(data?.endDate).getFullYear()}</p>
                      </div>
                    </div>
                    <div className="live-221">
                      <div className="live-222 row">
                        <img src="/static/images4/q9.png" alt="" />
                        <p>3:00 PM - 4:00 PM</p>
                      </div>
                      <div className="live-222 row">
                        <img src="/static/images4/q10.png" alt="" />
                        <p>{data?.mode}</p>
                      </div>
                    </div>
                  </div>
                  <div className="live-23 row">
                    <div className="live-p">
                      Add to
                    </div>
                    <div className="live-231">
                      <img src="/static/images4/q8.png" alt="" />
                      <p>Google Calendar</p>
                    </div>
                    <div className="live-231">
                      <img src="/static/images4/Group.png" alt="" />
                      <p>Google Calendar</p>
                    </div>
                    <div className="live-231">
                      <img className="cal-img" src="/static/images4/Group (1).png" alt="" />
                      <p>Google Calendar</p>
                    </div>
                  </div>
                </div>
                <div className="live21112">
                  <h5>3/{data?.noOfClass} Class</h5>
                  <div className="db-card-slider row">
                    <progress id="file" value="50" max="100"> 32% </progress>
                  </div>
                  <p>Attend atleast 4 Classes of this course</p>
                </div>
                <div className="db-card3 row live-db">
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      if (!document.querySelector('.db-card31')?.classList?.contains('none')) {
                        document.querySelector('.db-card31')?.classList?.add('none');
                      }
                    }}
                  >
                    <div onClick={func1} className="db-card-b">
                      <b>. . .</b>
                    </div>
                    <div className="db-card31 none">
                      <p>Class Reg.Policy</p>
                      <p>Option 2</p>
                    </div>
                  </OutsideClickHandler>
                  <button className="btn btn5">Share</button>
                </div>
              </div>
              <div className="live2112">
                {/* <div className="live21121">
                  <p>Classes</p>
                </div> */}
                {/* <div className="live21122">
                  <div className="live-cal">
                    <div className="live-cal1 row">
                      <p>Mon</p>
                      <h4>15</h4>
                      <p>Sep</p>
                    </div>
                    <div className="live-cal2">
                      <div className="live-cal21">
                        <img src="/static/images4/q13.png" alt="" />
                        <p>Attended</p>
                      </div>
                      <div className="live-cal22">
                        <img src="/static/images4/q14.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="live-cal">
                    <div className="live-cal1 row">
                      <p>Mon</p>
                      <h4>15</h4>
                      <p>Sep</p>
                    </div>
                    <div className="live-cal2">
                      <div className="live-cal21">
                        <img src="/static/images4/q15.png" alt="" />
                        <p>Upcoming</p>
                      </div>
                    </div>
                  </div>
                  <div className="live-cal">
                    <div className="live-cal1 row">
                      <p>Mon</p>
                      <h4>15</h4>
                      <p>Sep</p>
                    </div>
                    <div className="live-cal2">
                      <div className="live-cal21">
                        <p>Upcoming</p>
                      </div>
                    </div>
                  </div>
                  <div className="live-cal">
                    <div className="live-cal1 row">
                      <p>Mon</p>
                      <h4>15</h4>
                      <p>Sep</p>
                    </div>
                    <div className="live-cal2">
                      <div className="live-cal21">
                        <p>Upcoming</p>
                      </div>
                    </div>
                  </div>
                  <div className="live-cal">
                    <div className="live-cal1 row">
                      <p>Mon</p>
                      <h4>15</h4>
                      <p>Sep</p>
                    </div>
                    <div className="live-cal2">
                      <div className="live-cal21">
                        <p>Upcoming</p>
                      </div>
                    </div>
                  </div>
                  <div className="live-cal">
                    <div className="live-cal1 row">
                      <p>Mon</p>
                      <h4>15</h4>
                      <p>Sep</p>
                    </div>
                    <div className="live-cal2">
                      <div className="live-cal21">
                        <p>Upcoming</p>
                      </div>
                    </div>
                  </div>
                  <div className="live-cal">
                    <div className="live-cal1 row">
                      <p>Mon</p>
                      <h4>15</h4>
                      <p>Sep</p>
                    </div>
                    <div className="live-cal2">
                      <div className="live-cal21">
                        <p>Upcoming</p>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="text-center w-full">
                  {/* <button className="btn btn1">Join Now</button> */}
                  <a href={data?.joinUrl} target="_blank" className="btn btn1">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default C1;
