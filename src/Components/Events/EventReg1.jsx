import React, { useEffect } from 'react'
import Card3 from "../Card/Card3";
import { useNavigate } from 'react-router-dom';

const EventReg1 = (props) => {
  const navigate = useNavigate();
    
  useEffect(() => {
    let user = localStorage.getItem('kevath_user');
    if (user) {
      user = JSON.parse(user);
      if (!user.token || user.token === '') {
        props.setNavFlag1(true);
        props.setNavFlag2(false);
      }
      else {
        props.setNavFlag1(false);
        props.setNavFlag2(true);
      }
    }
    else {
      props.setNavFlag1(true);
      props.setNavFlag2(false);
    }
  }, []);

  return (
    <>
      <div className="img-cls">
        <div className="home eve-reg1-main">
          <div className="eve-reg1-main1">
            <img src="/static/images/Vector (1).png" alt="" />
          </div>
          <div className="home1 eve-reg1-1">
            <div className="row">
              <div className="home12 eve-reg1-12">
                <div className="evereg1_img1">
                  <img src="/static/images/unsplash_5QgIuuBxKwM.png" alt="" />
                </div>
                <div className="evereg1_img2">
                  <img src="/static/images/unsplash_fIq0tET6llw.png" alt="" />
                </div>
                <div className="evereg1_img3">
                  <img src="/static/images/unsplash_bzdhc5b3Bxs.png" alt="" />
                </div>
              </div>
              <div className="eve-reg1-11">
                <h1 style={{ marginTop: "20px" }}>
                  Education is not <span className="bg-green">preparation</span>{" "}
                  for life,{" "}
                </h1>
                <h1>
                  <span className="bg-green">education</span> is life itself
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="eve-reg12">
        <div className="eve-reg121">
          <div className="eve-reg1211">
            <h2>Discover Lifelong Learning</h2>
          </div>
          <div className="eve-reg1212">
            <div className="eve-reg12121 eve-reg12121-active">
              All Categories
            </div>
            <div className="eve-reg12121">AMA</div>
            <div className="eve-reg12121">BOOTCAMP</div>
            <div className="eve-reg12121">CRACK THE CODE</div>
          </div>
          <div className="eve-reg1213">
            <Card3 />
            <Card3 />
            <Card3 />
          </div>
          <div className="eve-reg1214">
            <button className="btn btn1">Learn More</button>
          </div>
        </div>
      </div>
      <div className="eve-reg13">
        <div className="eve-reg131">
          <div className="eve-reg1311">
            <img src="/static/images2/Polygon 9.png" alt="" />
          </div>
          <div className="eve-reg1312">
            <h3 className="text-green">Have more</h3>
            <h1>Question?</h1>
          </div>
          <div className="eve-reg1313">
            <img src="/static/images2/Polygon 8.png" alt="" />
            <button className="btn btn1">Contact us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventReg1;
