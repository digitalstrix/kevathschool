import React, { useEffect } from "react";

const C5 = (props) => {
  useEffect(() => {
    props.setNavFlag1(false);
    props.setNavFlag2(false);
    props.setFootFlag(false);
  }, []);

  const func1 = (e) => {
    console.log(e.target);
    if (document.querySelector(".test-active")) {
      document.querySelector(".test-active").classList.remove("test-active");
    }
    e.target.parentNode.classList.add("test-active");
  };

  const func2 = () => {
    document.querySelector(".c51").style.display = "none";
    document.querySelector(".live-open4").style.display = "block";
  };

  const func3 = () => {
    document.querySelector(".c51").style.display = "block";
    document.querySelector(".live-open4").style.display = "none";
  };

  return (
    <div className="live">
      <div className="live1">
        <div className="live-sidebar">
          <div className="live-logo">
            <img src="/static/images4/q1.png" alt="" />
          </div>
          <div className="live11">
            <img src="/static/images4/q2.png" alt="" />
            <p>Live Classes</p>
          </div>
          <div className="live11">
            <img src="/static/images4/q3.png" alt="" />
            <p>Self Learning</p>
          </div>
          <div className="live11">
            <img src="/static/images4/q4.png" alt="" />
            <p>Resources</p>
          </div>
          <div className="live11">
            <img src="/static/images4/q5.png" alt="" />
            <p>Assessment</p>
            <div onClick={func3} className="live-open4 live-open">
              <img src="/static/images4/w3.png" alt="" />
            </div>
          </div>
          <div className="live11">
            <img src="/static/images4/q6.png" alt="" />
            <p>Certificate</p>
          </div>
        </div>
      </div>
      <div className="live2">
        <div className="live-header">
          <h4>Full Stack Web Development</h4>
          <p>Course short description / tagline</p>
        </div>
        <div className="live21 c5">
          <div onClick={func2} className="c51">
            <div className="c511 row">
              <h5>Assessment</h5>
              <img src="/static/images4/w2.png" alt="" />
            </div>
            <div className="c512">
              Minimum one test should be completed/passes as a part of
              certification unlocking criteria
            </div>
            <div className="c513">
              <div className="c5-card">
                <div className="c5-card1 row">
                  <p>Test 1</p>
                  <div className="c5-card11">Passed</div>
                </div>
                <div className="c5-card2">
                  <h5>Test Topic No. 1</h5>
                </div>
                <div className="c5-card3">
                  <progress id="file" value="78" max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
                <div className="c5-card4 row">
                  <p>2/3 Attempts</p>
                  <p className="text-green">01:00:00</p>
                </div>
              </div>

              <div className="c5-card">
                <div className="c5-card1 row">
                  <p>Test 1</p>
                  <div className="c5-card11">Passed</div>
                </div>
                <div className="c5-card2">
                  <h5>Test Topic No. 1</h5>
                </div>
                <div className="c5-card3">
                  <progress id="file" value="78" max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
                <div className="c5-card4 row">
                  <p>2/3 Attempts</p>
                  <p className="text-green">01:00:00</p>
                </div>
              </div>

              <div className="c5-card">
                <div className="c5-card1 row">
                  <p>Test 1</p>
                  <div className="c5-card11">Passed</div>
                </div>
                <div className="c5-card2">
                  <h5>Test Topic No. 1</h5>
                </div>
                <div className="c5-card3">
                  <progress id="file" value="78" max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </div>
                <div className="c5-card4 row">
                  <p>2/3 Attempts</p>
                  <p className="text-green">01:00:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="test-main">
            <div className="test-main1">
              <div className="test2">
                <div className="test22">
                  <div className="test221">
                    <div className="test1">
                      <h5>
                        Question: <span className="text-green">1 Of 50</span>
                      </h5>
                    </div>
                    <h4>Q1</h4>
                    <h5>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.{" "}
                    </h5>
                  </div>
                  <div className="test222">
                    <h5>Select the correct answer</h5>
                  </div>
                  <div className="test223">
                    <div className="radio">
                      <input
                        id="radio-1"
                        name="radio"
                        type="radio"
                        onClick={func1}
                      />
                      <label htmlFor="radio-1" className="radio-label">
                        <span className="test-op">A.</span>Option 1
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        id="radio-2"
                        name="radio"
                        type="radio"
                        onClick={func1}
                      />
                      <label htmlFor="radio-2" className="radio-label">
                        <span className="test-op">B.</span>Option 2
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        id="radio-3"
                        name="radio"
                        type="radio"
                        onClick={func1}
                      />
                      <label htmlFor="radio-3" className="radio-label">
                        <span className="test-op">C.</span>Option 3
                      </label>
                    </div>
                    <div className="radio">
                      <input
                        id="radio-4"
                        name="radio"
                        type="radio"
                        onClick={func1}
                      />
                      <label htmlFor="radio-4" className="radio-label">
                        <span className="test-op">D.</span>Option 4
                      </label>
                    </div>
                  </div>
                  <div className="test23">
                    <button className="btn1 btn test-btn">BACK</button>
                    <button className="btn1 btn">NEXT</button>
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
        </div>
      </div>
    </div>
  );
};

export default C5;
