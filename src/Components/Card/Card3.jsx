import React from "react";
import { Link } from "react-router-dom";

const Card3 = ({data}) => {
  return (
    <>
      <div className="eve-reg1-card">
        <div className="eve-reg1-card1">
          <div className="eve-reg1-card-img">
            <img src="/static/images/unsplash_Vy2Y1cCLiT8.png" alt="" />
          </div>
          <div className="eve-reg-card-mid">
            <h5>{data?.title}</h5>
            <p>{data?.description}</p>
          </div>
          <div className="eve-reg-card-mid1">
            <div className="eve-reg-card-mid11">
              <div className="row">
                <img src="/static/images/Vector (2).png" alt="" />
                {/* <p>Mon, 15 Aug, 2022</p> */}
                <p>{`${new Date(data?.eventFromTime).toLocaleDateString('en-US', {weekday:'short'})}, ${new Date(data?.eventFromTime).getDate()} ${new Date(data?.eventFromTime).toLocaleDateString('en-US', {month: 'short'})}, ${new Date(data?.eventFromTime).getFullYear()}`}</p>
              </div>
              <div className="row">
                <img src="/static/images/Vector (3).png" alt="" />
                <p>{data?.eventType}</p>
              </div>
            </div>
            <div className="eve-reg-card-mid11">
              <div className="row">
                <img src="/static/images/Vector (4).png" alt="" />
                {/* <p>3:00 PM - 4:00 PM</p> */}
                <p>{`${new Date(data?.eventFromTime).toLocaleString('en-US', { hour: 'numeric', hour12: true })} - ${new Date(data?.eventToTime).toLocaleString('en-US', { hour: 'numeric', hour12: true })}`}</p>
              </div>
              <div className="row">
                <img src="/static/images/Vector (5).png" alt="" />
                <p>{data?.status}</p>
              </div>
            </div>
          </div>
          <div className="eve-red-card-bottom row">
            <a href="#">more info</a>
            <Link to={`/event-register/${data.id}`}>
              <button className="btn btn1">Book your seat</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
