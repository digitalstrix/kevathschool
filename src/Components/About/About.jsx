import React from "react";
import { Link } from "react-router-dom";
import Card4 from "../Card/Card4";

const About = () => {
  return (
    <>
      <div className="img-cls">
        <div className="about-main">
          <div className="about-main1">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>
      </div>
      <div className="about1">
        <div className="about11">
          <div className="about111">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt.
          </div>
          <div className="about112">
            <img src="/static/images1/YOUTUBE PLAYER 1.png" alt="" />
          </div>
          <div className="about113">
            <img src="/static/images1/Group 4208.png" alt="" />
          </div>
        </div>
      </div>
      <div className="about2">
        <div className="about21">
          <div className="about211">
            <h3>Our Investors</h3>
            <p>The better we know you, the more we can do.</p>
          </div>
          <div className="about213">
            <div className="about212">
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
              <Card4 />
            </div>
          </div>
        </div>
      </div>
      <div className="question about3">
        <div className="question1 about31">
          <div className="row question0">
            <div className="question11">
              <h3 className="h3">Have more</h3>
              <h1 className="h1">Questions?</h1>
            </div>
            <div className="question01 about01 row">
              <div className="question12">
                <img src="/static/images/image 1.png" alt="" />
              </div>
              <div className="question13 about13">
                <Link to="/contact">
                  <button className="btn btn1">Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
