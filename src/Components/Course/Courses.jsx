import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainContext from '../../context/MainContext';
import Banner from '../CoursesUtil/Banner';
import Home1 from '../CoursesUtil/Home1';

const Courses = (props) => {
    useEffect(()=>{
        props.setFootFlag(true);
    },[]);
    const {id}=useParams();
    const navigate=useNavigate();
    const context = useContext(MainContext);

    const joinCourse = async () => {
        let user = localStorage.getItem('kevath_user1');
        if (!user) {
          navigate('/login');
        }
        else {
          user = JSON.parse(user);
        }
        // console.log(id);
        const ans = await context.joinCourse({
          courseId: id,
          first_name: user.firstName,
          last_name: user.lastName,
          email: user.email
        });
        console.log(ans);
        if (ans.status) {
          props.setAlert(ans.message, "success");
        }
        else {
          props.setAlert(ans.message, "error");
        }
      };

    return (
        <>
            <Banner joinCourse={joinCourse} />
            <Home1 joinCourse={joinCourse} id={id} />
        </>
    )
}

export default Courses;
