import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card2 = (props) => {
  const [data, setData] = useState({});
  
  useEffect(()=>{
    // console.log(props.f);
    setData(props.f);
  },[props.f]);

  return (
    <>
      <div className="course-card">
        <div className="course-card1">
          <div className="course-card-img">
            {/* <img src="/static/images/newRec.png" alt="" /> */}
            <img src={data?.media?.image_url} alt="" />
            {/* <h4>Full Stack Web Development</h4> */}
            {/* <h4>{data?.name}</h4> */}
          </div>
          <div className="course-card-text">
            <div className="course-card-text1">
              <div className="course-card-text01">
                <div className="course-card-text02">
                  <div style={{ justifyContent: "space-between" }} className="row course-card-text11 course-card-text110">
                    {/* <p>Part Time</p> */}
                    <p>{data?.courseType}</p>
                    <button className="btn btn1 course-card-btn">Zero Upfront Fees</button>
                  </div>
                  <div className="row course-card-text11">
                    <b className="text-green">Education: </b>
                    <p className="color-gray">Any Graduation</p>
                  </div>
                  <div className="row course-card-text11">
                    {/* <p className="text-purple">No Prior Coding Skills Required</p> */}
                    <p className="text-purple">{data?.description}</p>
                  </div>
                  {/* <h5>Full Stack Web Development</h5> */}
                  <h5>{data?.title}</h5>
                  <div className="row course-card-text11">
                    <img src="/static/images3/start 1.png" alt="" />
                    <p className="color-gray course-card-mt">Starts : 23 Oct 2022</p>
                  </div>
                  <div className="row course-card-text11">
                    <img src="/static/images3/Vector.png" alt="" />
                    {/* <p className="color-gray course-card-mt">Last Date to Apply : 30 Oct 2022</p> */}
                    <p className="color-gray course-card-mt">Last Date to Apply : {data?.lastDateToApply}</p>
                  </div>
                  <div className="row course-card-text11">
                    <img src="/static/images3/Vector (1).png" alt="" />
                    <p className="color-gray course-card-mt">Pay Only After You Earn 5LPA</p>
                    {/* <p className="color-gray course-card-mt">{}</p> */}
                  </div>
                  <div style={{ justifyContent: "space-between" }} className="row course-card-text11">
                    <div className="row">
                      <img src="/static/images3/Vector (2).png" alt="" />
                      <p className="color-gray">Online</p>
                    </div>
                    <div className="row">
                      <img src="/static/images3/209-2095776_transparent-time-clock-png-time-vector-icon-png 2.png" alt="" />
                      <p className="color-gray">{data?.no_of_weeks} Weeks</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row course-card-foot1">
                <div>
                  <button onClick={()=>{
                    if(props.isAuth)
                    {
                      props.setShowModal(!props.showModal);
                      props.setJoinUrl(data?.joinUrl);
                    }
                    else
                    {
                      props.joinCourse(data?.id);
                    }
                  }} className="btn btn1">Apply Now</button>
                </div>
                <div>
                  <Link className="color-gray" to={`/courses/${data.id}`}>VIEW PROGRAM</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
