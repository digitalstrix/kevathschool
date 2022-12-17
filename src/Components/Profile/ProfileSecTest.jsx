import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../../context/MainContext";
import { DEFAULT_TEST_ID } from "../../context/MainState";
import {
  getSessiondata,
  QUESTION_1,
  QUESTION_2,
} from "../../Service/localdata";
import "./style.css";

const ProfileSecTest = (props) => {
  const navigate = useNavigate();
  const context = useContext(MainContext);
  const [sessionData, setSessionData] = useState({});
  const [questionCount, setQuestionCount] = useState(1);
  const [selectedOption, setselectedOption] = useState(null);
  const [currQuestionData, setCurrQuestionData] = useState(null);
  //   const, s] = useState(second)
  const testQuestions = [QUESTION_1, QUESTION_2];

  useEffect(() => {
    context.getUserDetails();

    let user = localStorage.getItem("kevath_user");
    if (user) {
      user = JSON.parse(user);
      if (!user.token || user.token === "") {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
    (async () => {
      const data = await getSessiondata();
      setSessionData(data);
    })();

    props.setNavFlag1(false);
    props.setNavFlag2(false);
    props.setFootFlag(true);
  }, []);

  //  use effect to get question detail on changing of question
  useEffect(() => {
    setCurrQuestionData(testQuestions[+questionCount - 1]);
    getIfSubmitted(testQuestions[+questionCount - 1].id);
    setselectedOption(null);
  }, [questionCount]);

  const func1 = (e, option) => {
    console.log(e.target);
    // if (document.querySelector(".test-active")) {
    //   document.querySelector(".test-active").classList.remove("test-active");
    // }
    // e.target.parentNode.classList.add("test-active");
    setselectedOption(option);
  };

  const getCurrQuestion = () => {};

  const submitQuestion = () => {
    context.submitQuestion(
      {
        testId: DEFAULT_TEST_ID,
        questionId: currQuestionData.id,
        sessionId: sessionData.id,
        optionCode: selectedOption,
      },
      (res) => {
        console.log(res);

        if (res.status) {
          setQuestionCount(+questionCount + +1);
        }
      }
    );
  };
  const getIfSubmitted = (questionID) => {
    context.getSubmittedQuestion(
      {
        test_id: DEFAULT_TEST_ID,
        question_id: questionID,
        session_id: sessionData.id,
      },
      (res) => {
        console.log(res);
        if (res.data.status) {
          setselectedOption(res.data.data.optionCode);
        }
      }
    );
  };

  return (
    <>
      <div className="test-nav">
        <div className="test-nav1">
          <div className="test-nav11">
            <img
              src="/static/images2/UI_LOGO_1_1-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="test-nav12">TEST 1 BASICS OF PROGRAMMING</div>
        </div>
      </div>
      <div className="test-main">
        <div className="test-main1">
          <div className="test2">
            <div className="test22">
              <div className="test221">
                <div className="test1">
                  <h5>
                    Question:{" "}
                    <span className="text-green">
                      {questionCount} Of {testQuestions.length}
                    </span>
                  </h5>
                </div>
                <h4>Q{questionCount}</h4>
                <h5>{currQuestionData?.questionStatement}</h5>
              </div>
              <div className="test222">
                <h5>Select the correct answer</h5>
              </div>
              {currQuestionData != null && (
                <div className="test223">
                  <div
                    className={`radio ${
                      selectedOption == "A" ? "test-active" : ""
                    }`}
                  >
                    <input
                      id="radio-1"
                      name="radio"
                      checked={selectedOption == "A" ? true : false}
                      type="radio"
                      onClick={(e) => func1(e, "A")}
                    />
                    <label htmlFor="radio-1" className="radio-label">
                      <span className="test-op">A.</span>
                      {currQuestionData?.options[0]?.optionText}
                    </label>
                  </div>
                  <div
                    className={`radio ${
                      selectedOption == "B" ? "test-active" : ""
                    }`}
                  >
                    <input
                      id="radio-2"
                      name="radio"
                      checked={selectedOption == "B" ? true : false}
                      type="radio"
                      onClick={(e) => func1(e, "B")}
                    />
                    <label htmlFor="radio-2" className="radio-label">
                      <span className="test-op">B.</span>
                      {currQuestionData?.options[1]?.optionText}
                    </label>
                  </div>
                  <div
                    className={`radio ${
                      selectedOption == "C" ? "test-active" : ""
                    }`}
                  >
                    <input
                      id="radio-3"
                      checked={selectedOption == "C" ? true : false}
                      name="radio"
                      type="radio"
                      onClick={(e) => func1(e, "C")}
                    />
                    <label htmlFor="radio-3" className="radio-label">
                      <span className="test-op">C.</span>
                      {currQuestionData?.options[2]?.optionText}
                    </label>
                  </div>
                  <div
                    className={`radio ${
                      selectedOption == "D" ? "test-active" : ""
                    }`}
                  >
                    <input
                      id="radio-4"
                      checked={selectedOption == "D" ? true : false}
                      name="radio"
                      type="radio"
                      onClick={(e) => func1(e, "D")}
                    />
                    <label htmlFor="radio-4" className="radio-label">
                      <span className="test-op">D.</span>
                      {currQuestionData?.options[3]?.optionText}
                    </label>
                  </div>
                </div>
              )}

              {/* ----- buttons */}
              <div className="test23">
                {questionCount > 1 && (
                  <button
                    className="btn1 btn test-btn"
                    onClick={() => setQuestionCount(+questionCount - +1)}
                  >
                    Previous
                  </button>
                )}
                {testQuestions.length != questionCount && (
                  <button
                    className="btn1 btn test-btn"
                    onClick={() => setQuestionCount(+questionCount + 1)}
                  >
                    Skip
                  </button>
                )}
                {testQuestions.length != questionCount && (
                  <button
                    className="btn1 btn test-btn"
                    style={{
                      background: selectedOption == null ? "gray" : "#51b848",
                    }}
                    onClick={() => {
                      if (selectedOption != null) {
                        submitQuestion();
                      }
                    }}
                  >
                    Save & Next
                  </button>
                )}
                {testQuestions.length == questionCount && (
                  <button
                    className="btn1 btn test-btn"
                    style={{
                      background: selectedOption == null ? "gray" : "#51b848",
                    }}
                    onClick={() => {
                      if (selectedOption != null) {
                        //   setQuestionCount(+questionCount + +1);
                      }
                    }}
                  >
                    Submit
                  </button>
                )}
                {/* <button className="btn1 btn">NEXT</button> */}
              </div>
            </div>
            <div className="test21">
              <div className="test211">
                <div className="test-nav13">
                  <h5>00:58:10</h5>
                  <p>Time Remaining</p>
                  <button className="btn btn1">Submit</button>
                </div>
                <div className="test-sec1">
                  <h5>Aptitude</h5>
                  <div className="row">
                    <div className="test-pill bg-green">1</div>
                    <div className="test-pill bg-green">2</div>
                    <div className="test-pill bg-blue">3</div>
                    <div className="test-pill">4</div>
                    <div className="test-pill">5</div>
                    <div className="test-pill bg-green">6</div>
                    <div className="test-pill bg-green">7</div>
                    <div className="test-pill bg-blue">8</div>
                    <div className="test-pill">9</div>
                    <div className="test-pill">10</div>
                  </div>
                </div>
                <div className="test-sec1">
                  <h5>English</h5>
                  <div className="row">
                    <div className="test-pill bg-green">1</div>
                    <div className="test-pill bg-green">2</div>
                    <div className="test-pill bg-blue">3</div>
                    <div className="test-pill">4</div>
                    <div className="test-pill">5</div>
                    <div className="test-pill bg-green">6</div>
                    <div className="test-pill bg-green">7</div>
                    <div className="test-pill bg-blue">8</div>
                    <div className="test-pill">9</div>
                    <div className="test-pill">10</div>
                  </div>
                </div>
                <div className="test-sec1">
                  <h5>Physics</h5>
                  <div className="row">
                    <div className="test-pill bg-green">1</div>
                    <div className="test-pill bg-green">2</div>
                    <div className="test-pill bg-blue">3</div>
                    <div className="test-pill">4</div>
                    <div className="test-pill">5</div>
                    <div className="test-pill bg-green">6</div>
                    <div className="test-pill bg-green">7</div>
                    <div className="test-pill bg-blue">8</div>
                    <div className="test-pill">9</div>
                    <div className="test-pill">10</div>
                  </div>
                </div>
                <div className="test-sec1">
                  <h5>Biology</h5>
                  <div className="row">
                    <div className="test-pill bg-green">1</div>
                    <div className="test-pill bg-green">2</div>
                    <div className="test-pill bg-blue">3</div>
                    <div className="test-pill">4</div>
                    <div className="test-pill">5</div>
                    <div className="test-pill bg-green">6</div>
                    <div className="test-pill bg-green">7</div>
                    <div className="test-pill bg-blue">8</div>
                    <div className="test-pill">9</div>
                    <div className="test-pill">10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSecTest;
