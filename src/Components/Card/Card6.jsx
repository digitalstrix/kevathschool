import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';

const Card6 = ({ data1 }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(data1);
    console.log(data1);
  }, [data1]);

  const func1 = () => {
    document.querySelector('.db-card31').classList.toggle('none');
  };

  return (
    <div className="db-card">
      <div className="db-card1">
        {/* <img src="/static/images4/Rectangle 1281.png" alt="" /> */}
        <img src={data?.media?.image_url} alt="" />
      </div>
      <div className="db-card2">
        <div className="db-card21">
          <p>COURSE</p>
          <b>{data?.name}</b>
          <div className="db-card-211">
            <div className="row">
              <img src="/static/images4/209-2095776_transparent-time-clock-png-time-vector-icon-png 2.png" alt="" />
              <p>{data?.duration / 12} Months</p>
            </div>
            <div className="row">
              <img src="/static/images4/209-2095776_transparent-time-clock-png-time-vector-icon-png 3.png" alt="" />
              <p>{data?.description}</p>
            </div>
          </div>
          <div className="db-card-slider row">
            <progress id="file" value="25" max="100"> 32% </progress>
            <p>75% left</p>
          </div>
        </div>
        <div className="db-card22">
          <Link to={`/live-classes/${data?.batchId}/${data?.courseId}/${data?.parentId}`} className="btn btn1">Enter Program</Link>
        </div>
      </div>
      <div className="db-card3 row">
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
            <p>Unregister Program</p>
            <p>Course Content</p>
            <p>Class Registration Policy</p>
          </div>
        </OutsideClickHandler>
        <button className="btn btn5">Share</button>
      </div>
    </div>
  )
}

export default Card6
