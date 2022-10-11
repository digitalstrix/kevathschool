import React from 'react'
import { useEffect } from 'react';
import Banner from '../CoursesUtil/Banner';
import Home1 from '../CoursesUtil/Home1';

const CoursesDb = (props) => {
    useEffect(()=>{
        props.setNavFlag1(false);
        props.setNavFlag2(true);
    },[]);

    return (
        <>
            <Banner />
            <Home1 />
        </>
    )
}

export default CoursesDb;
