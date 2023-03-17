import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const Faq = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    let user = localStorage.getItem("kevath_user");
    if (user) {
      user = JSON.parse(user);
      if (!user.token || user.token === "") {
        props.setNavFlag1(true);
        props.setNavFlag2(false);
      } else {
        props.setNavFlag1(false);
        props.setNavFlag2(true);
      }
    } else {
      props.setNavFlag1(true);
      props.setNavFlag2(false);
      props.setFootFlag(true);
    }
  }, []);

  return (
    <>
      <div className="prof-sec5 prof-secm">
        <div className="prof-sec51">
          <div className="prof-sec511">
            <h1>
              Frequently Asked <span className="bg-green">Questions</span>
            </h1>
          </div>
          <div className="prof-sec512">
            <div className="prof-sec5121">
              <h5>QUESTION CATEGORIES</h5>
              <p>General Questions</p>
              <p>Admission Process Questions</p>
              <p>KSAT or Admission Questions</p>
              <p>Pay After Placement (PAP) Questions</p>
              <p>Application Questions</p>
              <p>Placement Questions</p>
            </div>
            <div className="prof-sec5122">
              <div className="prof-sec51221">
                <h4>General Questions</h4>
                <Accordion allowMultipleExpanded allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is KevathSchool?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        KevathSchool is a educational training platform which
                        will help users to get training for free of cost, But
                        user needs to pay some part of money as per PAP Program.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Where KevathSchool is located?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>Banglore, India</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What if i drop course in middle?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        After PAP Agreement if you drop the course then you have
                        to pay partial payment to your course.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is course attendance mandatory?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes attendence is mandatory as this is live course and
                        industry oriendted practical training.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Does KevathSchool helps me to get job?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, KevathSchool will help you to learn things,
                        preparing for an interview and getting placements
                        oppurtunities.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is there any hidden charges?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>No, As Pay After Placement(PAP) Agreement.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Will i receive any certificate after completing course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, You are going to receive course completion
                        certificate.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can i attend course at my own timings?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        No, Because these are live trainings. But there are
                        multiple batches will be going on based on your
                        availabilty you can choose the course.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Who all eligible for a KevathSchool courses?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Any graduated or graduation pursuing students. No matter
                        what degree it is. Candidate must have Aadhar.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What are the pre-requisites?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Any graduated or graduation pursuing students, Latop or
                        computer and basic English Knowledge. Make sure you have
                        good internet connection.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What computer/laptop specs that required for course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Latop or computer with minimum 4gb ram. 8Gb is
                        preferrable if you are purchasing newely.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Does my CGPA or grades play any role?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>No, Not really.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is there any chance that i can get loan for laptop and
                        other expenses?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>No, We are not supporting currently.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is PAN Card and Aadhar Card Mandatory?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Aadhar Card is Mandatory at the time of admission. After
                        completing Unit-1 before going for Pay After
                        Placement(PAP) Agreement Pan Card is Mandatory.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is the course fees?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        No Up front Fees, You will be charged based on Pay After
                        Placement(PAP) Agreement once you get a job with minimum
                        package mentioned as per course.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is the medium of teaching at KevathSchool?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>English.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="prof-sec51221">
                <h4>Admission Process Questions</h4>
                <Accordion allowMultipleExpanded allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do i need to verify my email?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>Yes it is required for the admission process.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is aadhar is mandatory?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>Yes, Aadhar is mandatory for Admission Process.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is KSAT is mandatory to clear?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>Yes it is mandatory.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is personal and educational information required?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes you have to provide personal and educational
                        information for communication and educational
                        eligibility purpose.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="prof-sec51221">
                <h4>KSAT or Admission Questions</h4>
                <Accordion allowMultipleExpanded allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is the duration of the test?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        It depends on number of questions and complexity of it.
                        While taking test it will be shown.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What if i don't clear the exam?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        There will be chance of re-attending the exam after
                        preperation, but passing test is mandatoy.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is there any syllabus to clear KSAT?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, It is general english, apptitude, reasoning and
                        programming basics.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="prof-sec51221">
                <h4>Pay After Placement(PAP) Questions</h4>
                <Accordion allowMultipleExpanded allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is PAP Program and how does it work?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        The Pay After Placement(PAP) Agreement is a way to pay
                        your KevathSchool course fees. Pay After Placement(PAP)
                        at KevathSchool is an agreement between students and
                        KevathSchool under which you accept & agree to pay a
                        fixed monthly payment for 36 months or less. The payment
                        starts only once you earn a salary above the threshold
                        amount. The threshold amount is the minimum salary you
                        have to earn before you start paying KevathSchool your
                        course fee. If you do not get the promised outcome, a
                        job that pays INR 5,00,000/- (CTC) or more, you pay us
                        nothing at all. Your education is free.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is CTC as part of offer letter?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        CTC (Cost to Company) is defined as “Your total salary
                        (including variable pay), compensations, and gross
                        income and including, but not limited to, benefits such
                        as HRA, insurance, fitness/health benefits, other
                        benefits and allowances including, but not limited to,
                        leave travel allowance, house rent allowance,
                        conveyance, travelling and phone allowance, daily
                        perdium, vehicle allowance and other allowances provided
                        to you from employment or pursuant to self-employment”.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        When do my repayment starts?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        After placing job with minimum package mentiond in
                        course.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What if i get fired or loose job?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Your repayment will be paused, It will be resumed once
                        you get one more job with minimum package mentioned in
                        course.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What if i don't get threashold of amount for my course?
                        (Ex: 10 LPA for Illustrate, 5LPA for Spark and Ignito
                        courses/programs)?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Our hiring partners will offer good packages and our
                        team will take care of that, In worst case if you don't
                        get, You no need to pay anything.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How to i pay my PAP amount?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Our assigned NBFC partner will approve a one time
                        zero-interest capital, which you can pay monthly for a
                        maximum 36 months. The monthly payment would start only
                        after you have successfully secured an offer letter of 5
                        LPA (CTC) or above, for our courses. 10LPA(CTC) or more
                        for the Kevath Illustate courses.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do i need to submit any documents after getting job?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, You will be required to submit documents like,
                        Offer letter, payslips and bank statements, ITR returns
                        and form 16.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is there any Interest on Pay After Placement(PAP)
                        payments?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>No.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can i see a copy of PAP Document before?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, After completion of successfull registration of the
                        course you can see the sample copy of Pay After
                        Placement(PAP) Agreement.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="prof-sec51221">
                <h4>Application Questions</h4>
                <Accordion allowMultipleExpanded allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What are KevathSchool Careers?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        KevathSchool have three different careers. Spark, Ignite
                        and Illustate. Spark - This will be for pursuing
                        graduation or graduated students can opt and it is a
                        full time course. Ignite - This will be for pursuing
                        graduation or graduated students can opt and it is a
                        part time or fast track course. Illustrate - This will
                        be only for graduated and minimum 1 year experienced
                        students, it is a part time or fast track course.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is pre-admission test or KSAT?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        KSAT is a pre-admission test designed by KevathSchool
                        professors. It will help us to understand what kind of
                        training we have to provide.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What are the steps to register to kevath and get
                        admission?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Steps to register: 1. Signup to KevathSchool 2. Verify
                        your 3. Fill all personal and educational information.
                        4. Provide the cureent educational status documents and
                        Aadhar Card. 5. Clear the Admission Test. 6. You will be
                        landed to course, You can continue your learning.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can i contact KevathSchool team?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You can reach kevathSchool for admissions:
                        admissions@kevathschool.com. If any other quesries
                        help@kevathschool.com
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="prof-sec51221">
                <h4>Placement Questions</h4>
                <Accordion allowMultipleExpanded allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Does Kevath is going to prepare me for the interview as
                        well?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, Our dedicated team will help you to prepare
                        interviews.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Does Kevath guarantee a job offer after the completion
                        of course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        No, Will give the industry best training and will show
                        the oppurtunities.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How many hiring partners does Kevath Have?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>We are growing and we have 1000 + hiring partners.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is Kevath Final Assesment/Evalution Test?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes it is mandatory to clear, If you attend our sessions
                        and practice the Evalution test will be easy.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is Kevath Final Evalution test is Difficult?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        No, If you attend our live classes regularly and
                        practice then it will be easy.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is there any mock interviews?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, As part of interview preperation we will conduct
                        mock interviews and suggestions to improve.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        When will the placement starts and what will be the
                        procedure?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Placement will start based on the course completion, Our
                        dedicated hiring team will give the instructions to
                        attend the interviews.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
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
            <NavLink to="/contact" className="btn btn1">
              Contact us
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
