import React from 'react';
import { useEffect } from 'react';
import Banner from '../CoursesUtil/Banner';
import Home1 from '../CoursesUtil/Home1';

const Courses = (props) => {
    useEffect(()=>{
        props.setFootFlag(true);
    },[]);
    return (
        <>
            <Banner />
            <Home1 />
        </>
    )
}

export default Courses;
