import React, { useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card2 from "../Card/Card2";
import { useState } from "react";
import { useContext } from "react";
import MainContext from "../../context/MainContext";

const CourseMain = (props) => {
  const navigate = useNavigate();
  const context = useContext(MainContext);

  const [perPage, setPerPage] = useState(3);
  const [data, setData] = useState([]);

  useEffect(() => {
    props.setFootFlag(true);
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

  useEffect(() => {
    var x = window.matchMedia("(max-width: 812px)");
    if (x.matches) {
      setPerPage(2);
    }
    var y = window.matchMedia("(max-width: 604px)");
    if (y.matches) {
      setPerPage(1);
    }
  }, []);

  useEffect(() => {
    getData(1, 3, true, 'Spark');
  }, []);

  const getData = async (page, perPage, meta, career_type) => {
    const data = await context.getCourses({
      page,
      perPage,
      meta,
      career_type
    });
    console.log(data);
    let tempArr = [];
    let tempArr1 = [];
    let ind = -1;
    for (let i of data.data) {
      // console.log(i);
      if (!tempArr.includes(i.careerType)) {
        tempArr.push(i.careerType);
        tempArr1.push([i]);
        ind++;
      }
      else {
        tempArr1[ind].push(i);
      }
    }
    console.log(tempArr1);
    setData(tempArr1);
  };

  const joinCourse = async (id) => {
    let user=localStorage.getItem('kevath_user1');
    if(!user)
    {
      navigate('/login');
    }
    else{
      user=JSON.parse(user);
    }
    // console.log(id);
    const ans = await context.joinCourse({
      courseId: id,
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email
    });
    console.log(ans);
  };

  return (
    <>
      <div className="home course-main">
        <div className="home1">
          <div className="home11">
            <h1 style={{ fontSize: "4.5rem" }}>Our </h1>
            <h1 style={{ fontSize: "4.5rem" }}>Courses</h1>
            <p>
              Become a job-ready software developer in 30 weeks at no upfront
              fees. Pay us only if you get a job that pays you ₹5,00,000/- per
              year or more!
            </p>
            <div className="row home-mid">
              <button className="btn btn2 contact-btn">Explore More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="course2">
        <div className="courses21">
          <div className="courses211">
            <h4>For Working Professionals</h4>
          </div>

          {data.map((e, index) => {
            // console.log(e);
            return (
              <div key={index} className="course212">
                <div className="row course0">
                  {/* <h3>Software & Tech</h3> */}
                  <h3>{e[0].careerType}</h3>
                  <a href="#">View all</a>
                </div>

                <Splide
                  hasTrack={false}
                  aria-label="My Favorite Images"
                  options={{
                    perPage,
                    // rewind: true,Web 22
                    gap: "1rem",
                  }}
                >
                  <SplideTrack>
                    {e.map((f, index1) => {
                      return (
                        <SplideSlide key={index1}>
                          <Card2 joinCourse={joinCourse} f={f} />
                        </SplideSlide>
                      )
                    })}
                  </SplideTrack>

                  <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev">
                      <img src="/static/images/Vector 4.png" alt="" />
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                      <img src="/static/images/Vector 3.png" alt="" />
                    </button>
                  </div>
                </Splide>
              </div>
            );
          })}


          {/* <div className="course212">
            <div className="row course0">
              <h3>Data Science</h3>
              <a href="#">View all</a>
            </div>
            <Splide
              hasTrack={false}
              aria-label="My Favorite Images"
              options={{
                perPage,
                // rewind: true,
                gap: "1rem",
              }}
            >
              <SplideTrack>
                <SplideSlide>
                  <Card2 joinCourse={joinCourse} />
                </SplideSlide>
                <SplideSlide>
                  <Card2 joinCourse={joinCourse} />
                </SplideSlide>
                <SplideSlide>
                  <Card2 joinCourse={joinCourse} />
                </SplideSlide>
              </SplideTrack>
              <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                  <img src="/static/images/Vector 4.png" alt="" />
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <img src="/static/images/Vector 3.png" alt="" />
                </button>
              </div>
            </Splide>
          </div>

          <div className="course212">
            <div className="row course0">
              <h3>MBA</h3>
              <a href="#">View all</a>
            </div>
            <Splide
              hasTrack={false}
              aria-label="My Favorite Images"
              options={{
                perPage,
                // rewind: true,
                gap: "1rem",
              }}
            >
              <SplideTrack>
                <SplideSlide>
                  <Card2 joinCourse={joinCourse} />
                </SplideSlide>
                <SplideSlide>
                  <Card2 joinCourse={joinCourse} />
                </SplideSlide>
                <SplideSlide>
                  <Card2 joinCourse={joinCourse} />
                </SplideSlide>
              </SplideTrack>
              <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                  <img src="/static/images/Vector 4.png" alt="" />
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <img src="/static/images/Vector 3.png" alt="" />
                </button>
              </div>
            </Splide>
          </div> */}

        </div>
      </div>
      <div className="text-center">
        <button className="btn btn1">View More</button>
      </div>
      <div className="course3">
        <div className="course31">
          <div className="course311">
            <h1>Have more questions?</h1>
          </div>
          <div className="course312">
            <div className="course3121">
              <NavLink to="/faq" className="btn btn3">CHECK OUR FAQS</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseMain;
