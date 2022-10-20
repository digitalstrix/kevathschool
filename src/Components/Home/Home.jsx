import React from "react";
import { Link } from "react-router-dom";
import Card1 from "../Card/Card1";
import Ladder from "../Common/Ladder";
import Usp from "../Common/Usp";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home1">
          <div className="row">
            <div className="home11">
              <h1>A New Way of</h1>
              <h1 className="green">Digital Literacy</h1>
              <p>
                Let's shape our future generation with a more efficent way of
                learning, helped by existing technology.
              </p>
              <div className="row home-mid">
                <Link to="/contact">
                  <button className="btn btn1 contact-btn">Contact Us</button>
                </Link>
                <a href="#">Limited seats left</a>
              </div>
            </div>
            <div className="home12">
              <img src="/static/images/girls 2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Ladder />
      <div className="fields">
        <div className="fields1">
          <div className="text-center">
            <p className="p1">Fields</p>
            <h3 className="h3">High Growth Career Options</h3>
          </div>
          <div className="fields12">
            <div className="fields121">
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
            </div>
            <div className="fields-fig">
              <img src="/static/images/Ellipse 1.png" alt="" />
            </div>
          </div>
          <div className="learn_more">
            <button className="btn btn1">Learn More</button>
          </div>
        </div>
      </div>
      <div className="usp">
        <div className="usp1">
          <h1 className="h1 text-center">Our USP</h1>
          <div className="usp011">
            <div className="usp-fig">
              <img src="/static/images/Ellipse 2.png" alt="" />
            </div>
            <div className="row usp012">
              <div className="usp210">
                <img src="/static/images/USP 1.png" alt="" />
              </div>
              <Usp />
            </div>
          </div>
        </div>
      </div>
      <div className="yb">
        <div className="yb1">
          <div className="row">
            <div className="yb11">
              <div className="yb111">
                <h3 className="h3">Watch Youtube</h3>
                <h3 className="h3">Videos</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt reprehenderit nam quae ducimus adipisci blanditiis,
                  accusamus in temporibus esse dicta enim laudantium minima
                  aliquid, doloribus cumque voluptates illo, excepturi vitae?
                  Optio, magni. Molestiae quae natus ex magnam fugiat cumque
                  illum modi! Similique libero expedita, eos quam quidem magnam
                  temporibus, ipsum eveniet accusantium debitis aperiam ullam.
                </p>
              </div>
            </div>
            <div className="yb12">
              <div className="yb121">
                <img src="/static/images/Base.png" alt="" />
              </div>
              <div className="yb122">
                <img src="/static/images/Rectangle 378.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="people">
        <div className="people1">
          <div className="row">
            <h1 className="h1">Open for people from all streams</h1>
            <div className="people-img">
              <img src="/static/images/team 1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="question">
        <div className="question1">
          <div className="row question0">
            <div className="question11">
              <h3 className="h3">Have more</h3>
              <h1 className="h1">Questions?</h1>
            </div>
            <div className="question01 row">
              <div className="question12">
                <img src="/static/images/image 1.png" alt="" />
              </div>
              <div className="question13">
                <Link>
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

export default Home;
