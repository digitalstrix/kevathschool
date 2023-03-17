import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../../context/MainContext";

const Card3 = ({ data, setAlert }) => {
  const context=useContext(MainContext);
  const navigate=useNavigate();

  const handleSubmit = async () => {
    let user=localStorage.getItem('kevath_user1');
    if(!user)
    {
      navigate('/login');
    }
    else{
      user=JSON.parse(user);
    }

    let ans = await context.registerParticipantEvent({ first_name:user.firstName , last_name:user.lastName , email:user.email, id: data.id });
    console.log(ans);
    if (ans.status) {
      setAlert(ans.message, "success");
      // navigate("/event-register-verification");
    }
    else {
      setAlert(ans.message, "error");
    }
  };

  return (
    <>
      <div className="eve-reg1-card">
        <div className="eve-reg1-card1">
          <div className="eve-reg1-card-img">
            <img src="/static/images/unsplash_Vy2Y1cCLiT8.png" alt="" />
          </div>
          <div className="eve-reg-card-mid">
            <h5>{data?.title}</h5>
            <p>{data?.description}</p>
          </div>
          <div className="eve-reg-card-mid1">
            <div className="eve-reg-card-mid11">
              <div className="row">
                <img src="/static/images/Vector (2).png" alt="" />
                {/* <p>Mon, 15 Aug, 2022</p> */}
                <p>{`${new Date(data?.eventFromTime).toLocaleDateString('en-US', { weekday: 'short' })}, ${new Date(data?.eventFromTime).getDate()} ${new Date(data?.eventFromTime).toLocaleDateString('en-US', { month: 'short' })}, ${new Date(data?.eventFromTime).getFullYear()}`}</p>
              </div>
              <div className="row">
                <img src="/static/images/Vector (3).png" alt="" />
                <p>{data?.eventType}</p>
              </div>
            </div>
            <div className="eve-reg-card-mid11">
              <div className="row">
                <img src="/static/images/Vector (4).png" alt="" />
                {/* <p>3:00 PM - 4:00 PM</p> */}
                <p>{`${new Date(data?.eventFromTime).toLocaleString('en-US', { hour: 'numeric', hour12: true })} - ${new Date(data?.eventToTime).toLocaleString('en-US', { hour: 'numeric', hour12: true })}`}</p>
              </div>
              <div className="row">
                <img src="/static/images/Vector (5).png" alt="" />
                <p>{data?.status}</p>
              </div>
            </div>
          </div>
          <div className="eve-red-card-bottom row">
            <a href="#">more info</a>
            {/* <Link to={`/event-register/${data.id}`}> */}
            <button onClick={() => {
              handleSubmit();
            }} className="btn btn1">{data.participants ? "Join Now" : "Book your seat"}</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
