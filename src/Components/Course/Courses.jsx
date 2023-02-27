import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../CoursesUtil/Banner';
import Home1 from '../CoursesUtil/Home1';

const Courses = (props) => {
    useEffect(()=>{
        props.setFootFlag(true);
    },[]);
    const {id}=useParams();

    return (
        <>
            <Banner />
            <Home1 id={id} />
        </>
    )
}

export default Courses;
