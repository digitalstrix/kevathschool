import React from "react";
import clock from "./assets/clock.jpg";
import week from "./assets/week.jpg";
import vect from "./assets/vect.png"
import bt from "./assets/bt.png";
import bl from "./assets/bl.png";
import bw from "./assets/bw.png";
import lb from "./assets/lb.png";
import age from "./assets/age.png";
import id from "./assets/id.png";
import comm from "./assets/comm.png";
import hard from "./assets/hard.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";
import vector from "./assets/vector.png";
import vector1 from "./assets/vector1.png";
import vector2 from "./assets/vector2.png";

export default function Home1() {
  return (
    <>
      <div className="ab">
        <div className="right">
          <div className="box">
            <h3 className="h3_1 h3_11">
              Full Stack Web
              <br />
              Development - Full Time
            </h3>
            <div className="line-1"></div>
            <div className="dashed-line">
              <ul className="para1">
                <li className="para1 li_1">Next Batch</li>
                <li className="para1 li_1"> Course Details</li>
                <li className="para1 li_1">Eligibility</li>
                <li className="para1 li_1">What You'll Learn </li>
                <li className="para1 li_1">What You Could Become</li>
                <li className="para1 li_1">Fees & ISA </li>
                <li className="para1 li_1">Admission Process </li>
                <li className="para1 li_1"> FAQS </li>
              </ul>
              <br />
              <button className="btn3_1">APPLY NOW FOR FREE</button>
              <br />
              <div className="bm"><img src={vect} alt="" className="vect img_1" /></div>
            </div>
          </div>

        </div>
        <div className="left">
          <div className="btn1_1">
            <button className="btn2_1">
              <img className="img_1" src={clock} alt="" />
              Full Time
            </button>
            <button className="btn2_1">
              <img className="img_1" src={week} alt="" />
              WEEKS
            </button>
          </div>
          <h1 className="n-h1">Next Batch</h1>
          <div className="n-box">
            <div className="box1">
              <h5 className="h5_1">
                Web 22
                <br />
                <br />
                Starts 29 August 2022
              </h5>
            </div>
            <div className="box2">
              Upcoming Batches
              <h3 className="para3 h3_1">
                <strong>
                  Web23&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Starts03
                  October 2022
                  <br />
                  Web24&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Starts07
                  November 2022
                </strong>
              </h3>
            </div>
          </div>
          <h1 className="n-h1">Course Details</h1>
          <p className="para4">
            In a duration of 30 weeks, the course requires a commitment from 9am
            to 9pm for 6 days a week in an intensive and immersive curriculum.
          </p>
          <div className="box-m">
            <div className="box3">
              <img src={bw} alt="" className="img1 img_1" />
              <h1 className="h-l">
                30 Weeks
                <br />
                (7 Months)
              </h1>
            </div>
            <div className="box3">
              <img src={bt} alt="" className="img1 img_1" />
              <h1 className="h-l">
                9 am to 9 pm
                <br />
                Monday to Saturday
              </h1>
            </div>
            <div className="box3">
              <img src={bl} alt="" className="img1 img_1" />
              <h1 className="h-l">
                100%
                <br />
                Placements
              </h1>
            </div>
          </div>
          <div className="box-n">
            <br />
            <h2 className="h2-n">Eligibility</h2>
            <p className="para5">
              You should meet the following requirements to be eligible for this
              course.
            </p>
            <div className="box-n11">
              <div className="box-n01">
                <img src={lb} alt="" className="imga img_1" />
                <h5 className="h-5 h5_1">
                  Qualification
                  <br />
                  <br />
                  <h4 className="h-4">
                    Cleared 12th Standard
                    <br />
                    or are diploma holders,
                    <br />
                    Ready To Take a Job Immediately
                    <br />
                    After Course Finishes
                  </h4>
                </h5>
              </div>
              <div className="box-n01">
                <img src={age} alt="" className="imgb img_1" />
                <h5 className="h-6 h5_1">
                  Age
                  <br />
                  <br />
                  <h4 className="h-m">
                    Min .18 yrs,
                    <br />
                    Max. 28 yrs
                  </h4>
                </h5>
              </div>

              <div className="box-n01">
                <img src={id} alt="" className="imgn img_1" />
                <h5 className="h-7 h5_1">

                  ID
                  <br />
                  <br />
                  <h4 className="h-o">
                    Valid PAN Card
                    <br />
                    and
                    <br />
                    Aadhar Card
                  </h4>
                </h5>
              </div>
              <div className="box-n01">
                <img src={comm} alt="" className="imgo img_1" />
                <h5 className="h-8 h5_1">
                  Communication Skills
                  <br />
                  <br />
                  <h4 className="h-p">
                    Basic English - speaking,
                    <br />
                    reading and writing
                  </h4>
                </h5>
              </div>
              <div className="box-n01">
                <img src={hard} alt="" className="imgp img_1" />
                <h5 className="h-9 h5_1">
                  Hardware
                  <br />
                  <br />
                  <h4 className="h-q">
                    A laptop, <br />
                    uninterrupted internet <br />
                    connection
                  </h4>
                </h5>
              </div>
            </div>
          </div>
          <h1 className="n-h1">What you'll learn</h1>
          <div className="img-skill">
            <img src={image2} alt="" className="i1 img_1" />
            <img src={image3} alt="" className="i2 img_1" />
            <img src={image4} alt="" className="i3 img_1" />
            <img src={image6} alt="" className="i4 img_1" />
            <img src={image5} alt="" className="i5 img_1" />
          </div>
          <div className="ba">
            <div className="right-w">
              <h4 className="h-w">Week 1-5</h4>
              <p className="p-w">
                Programming Basics in JavaScript, Developer tools and workflow,
                Introduction to Web, JavaScript on the browser, Data Structures
                and Algorithms
              </p>
              <h4 className="h-w">Week 1-5</h4>
              <p className="p-w">
                UI Libraries, Reusable Components, Routing and Advanced APIs,
                Deployment, Unit Testing, and end to end testing, Redux and
                Hooks, Data Structures and Algorithms
              </p>
              <h4 className="h-w">Week 21-25</h4>
              <p className="p-w">
                System design basics, How do they scale?, All about operating
                systems, Data Structures and Algorithms
              </p>
            </div>
            <div className="left-w">
              <h4 className="h-w">Week 1-5</h4>
              <p className="p-w">
                Modern Javascript, Basics of Unit Testing, Advanced CSS,
                Introduction to React and React Ecosystem, Data Structures and
                Algorithms
              </p>
              <br />
              <h4 className="h-w">Week 16-20</h4>
              <p className="p-w">
                Node.js and Express.js, Microservices, MongoDB, Data Structures
                and Algorithms
              </p>

              <br />
              <br />
              <br />
              <h4 className="h-w">Week 16-20</h4>
              <p className="p-w">Projects, Interview Preparation</p>
            </div>
          </div>
          <div className="text-center">
            <button type="sumbit" className="b-w">
              View Detailed Curriculum
            </button>
          </div>

          <div className="box7">
            <br />
            <h1 className="n-h2">What You Could Become</h1>
            <p className="p-7">
              Tech job landscape in itself is lucrative, dynamic and ever
              growing. The roles that are offered in software <br />
              development are also highly diverse.
            </p>
            <p className="p-e">
              Front-End Developer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Web
              Programmer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Full Stack
              Developer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Front-End Software
              Engineer
            </p>
            <p className="p-e">
              Backend Developer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              UI Engineer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Backend Engineer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
              Full Stack Engineer
            </p>
            <br />
            <p className="p-r">and many more...</p>
            <br />
          </div>

          <div>
            <h1 className="p-h1">Pay Through Income Share Agreement</h1>
            <p className="p-p">No loans, no collaterals, no interest rate.</p>

            <div className="box8">
              <div className="box81">
                <div className="boxa">
                  <img src={vector} alt="" className="imgx img_1" />
                </div>
                <p className="p-b">
                  Apply and study for ZERO <br />
                  upfront fee.
                </p>
              </div>
              <div className="box81">
                <div className="boxb">
                  <img src={vector1} alt="" className="imgy img_1" />
                </div>
                <p className="p-c">
                  Pay the course fee in 36 months
                  <br />
                  or less from your post-course <br />
                  salary,only when you earn
                  <br /> ₹ 5LPA (CTC) or more.
                </p>
              </div>
              <div className="box81">
                <div className="boxc">
                  <img src={vector2} alt="" className="imgx img_1" />
                </div>
                <p className="p-d">
                  The ISA
                  <br />
                  is capped at a maximum <br />
                  repayment of ₹ 3 Lakhs.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="ladder course-ladder">
              <div className="ladder1">
                <div className="ladder01">
                  <h3 className="h3 ladh3">Admission Process</h3>
                </div>
                <div className="ladder12">
                  <div className="ladder121 course-ladder121">
                    <div className="ld-box">
                      <div className="ld-box1">
                        <h3 className="h3 green">
                          1
                        </h3>
                        <p>Apply For The Program</p>
                      </div>
                    </div>
                    <div className="ld-line">
                      <img src="/static/images/Polygon 2.png" alt="" />
                    </div>
                    <div className="ld-box">
                      <div className="ld-box1">
                        <h3 className="h3 green">
                          2
                        </h3>
                        <p>Crack The Admission Test</p>
                      </div>
                    </div>
                    <div className="ld-line">
                      <img src="/static/images/Polygon 2.png" alt="" />
                    </div>
                    <div className="ld-box">
                      <div className="ld-box1">
                        <h3 className="h3 green">
                          3
                        </h3>
                        <p>Learn At 0 Upfront Fee</p>
                      </div>
                    </div>
                    <div className="ld-line">
                      <img src="/static/images/Polygon 2.png" alt="" />
                    </div>
                    <div className="ld-box">
                      <div className="ld-box1">
                        <h3 className="h3 green">
                          4
                        </h3>
                        <p>Get Placed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="w-h1">Frequently asked Questions</h1>
            <p className="l-h5">What is the medium of instruction?</p>
            <p className="m-p">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
            <hr />
            <p className="l-h5">What is the medium of instruction?</p>
            <p className="m-p">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
            <hr />
            <p className="l-h5">What is the medium of instruction?</p>
            <p className="m-p">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
            <hr />
            <p className="l-h5">What is the medium of instruction?</p>
            <p className="m-p">The medium of instruction at Kevath is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</p>
            <hr />
            <br />
            <br />
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
}
