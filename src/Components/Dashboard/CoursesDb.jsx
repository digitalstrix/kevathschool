import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Banner from '../CoursesUtil/Banner';
import Home1 from '../CoursesUtil/Home1';

const CoursesDb = (props) => {
    const navigate = useNavigate();
    
    useEffect(()=>{
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
        props.setFootFlag(true);
    },[]);

    return (
        <>
            <Banner />
            <Home1 />
        </>
    )
}

export default CoursesDb;
