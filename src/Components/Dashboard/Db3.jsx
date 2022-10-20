import React, { useEffect } from "react";
import Card6 from "../Card/Card6";

const Db3 = (props) => {
  useEffect(() => {
    props.setNavFlag1(false);
    props.setNavFlag2(true);
  }, []);

  return (
    <>
      <div className="db3">
        <div className="db31">
          <div className="db311 text-center">Welcome back, Narendra!</div>
          <div className="db312">My Library</div>
        </div>
      </div>
      <div className="db32">
        <div className="db321">
          <Card6 />
          <Card6 />
          <Card6 />
        </div>
      </div>
      <div className="prof-sec-hfu">
        <div className="hfu-4">
          <div className="hfu-41">
            <div className="hfu-411">
              <img src="/static/images1/5787097 1.png" alt="" />
            </div>
            <div className="hfu-412">
              <p>
                Eliminate the process of reaching out to different agencies for
                finding the right source. We provide the right platform filled
                with an array of tech talents that enables you to hire the right
                resources instantly. Did we mention that you are not paying a
                single penny for this?
              </p>
            </div>
            <div className="hfu-413">
              <img src="/static/images1/Vector (16).png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Db3;
