import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import MainContext from "../../context/MainContext";
import Card6 from "../Card/Card6";

const Db3 = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    let user = localStorage.getItem('kevath_user');
    if (user) {
      user = JSON.parse(user);
      if (!user.token || user.token === '') {
        navigate('/login');
      }
    }
    else {
      navigate('/login');
    }

    props.setNavFlag1(false);
    props.setNavFlag2(true);
  }, []);

  const [perPage, setPerPage] = useState(3);
  const context = useContext(MainContext);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [joinUrl, setJoinUrl] = useState("");

  useEffect(() => {
    let user = localStorage.getItem('kevath_user');
    if (user) {
      user = JSON.parse(user);
      if (!user.token || user.token === '') {
        navigate('/login');
      }
    }
    else {
      navigate('/login');
    }

    var x = window.matchMedia("(max-width: 812px)");
    if (x.matches) {
      setPerPage(2);
    }
    var y = window.matchMedia("(max-width: 604px)");
    if (y.matches) {
      setPerPage(1);
    }
    props.setNavFlag1(false);
    props.setNavFlag2(true);
    props.setFootFlag(true);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await context.getMyCourses();
    console.log(data);
    setData(data.data);
    // let tempArr = [];
    // let tempArr1 = [];
    // let ind = -1;
    // for (let i of data.data) {
    //     // console.log(i);
    //     if (!tempArr.includes(i.careerType)) {
    //         tempArr.push(i.careerType);
    //         tempArr1.push([i]);
    //         ind++;
    //     }
    //     else {
    //         tempArr1[ind].push(i);
    //     }
    // }
    // // console.log(tempArr1);
    // setData(tempArr1);
  };

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
          {data.length>0 ? data?.map((e,index)=>{
            return (
              <Card6 key={index} data1={e} />
            )
          }) : "No Courses found"}
          
          {/* <Card6 />
          <Card6 /> */}
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
