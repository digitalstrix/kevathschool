import React from "react";
import { Link } from "react-router-dom";

const Card3 = (props) => {
  return (
    <>
      <div className="eve-reg1-card">
        <div className="eve-reg1-card1">
          <div className="eve-reg1-card-img">
            <img src="/static/images/unsplash_Vy2Y1cCLiT8.png" alt="" />
          </div>
          <div className="eve-reg-card-mid">
            <h5>The LearnWorlds Site Builder</h5>
            <p>How to Build Dynamic & Engaging Websites</p>
          </div>
          <div className="eve-reg-card-mid1">
            <div className="eve-reg-card-mid11">
              <div className="row">
                <img src="/static/images/Vector (2).png" alt="" />
                <p>Mon, 15 Aug, 2022</p>
              </div>
              <div className="row">
                <img src="/static/images/Vector (3).png" alt="" />
                <p>Online</p>
              </div>
            </div>
            <div className="eve-reg-card-mid11">
              <div className="row">
                <img src="/static/images/Vector (4).png" alt="" />
                <p>3:00 PM - 4:00 PM</p>
              </div>
              <div className="row">
                <img src="/static/images/Vector (5).png" alt="" />
                <p>Free</p>
              </div>
            </div>
          </div>
          <div className="eve-red-card-bottom row">
            <a href="#">more info</a>
            <Link to="/event-register/id">
              <button className="btn btn1">Book your seat</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
