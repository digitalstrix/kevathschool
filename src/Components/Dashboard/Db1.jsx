import React, { useEffect } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card2 from '../Card/Card2';
import { useState } from 'react';

const Db1 = (props) => {
    const [perPage, setPerPage] = useState(3);
    useEffect(() => {
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
    }, []);

    return (
        <>
            <div className="user-dp-top">
                <div className="user-dp-top1 user-dp-top-active">
                    OUR COURSES
                </div>
                <div className="user-dp-top1">
                    OUR EVENTS
                </div>
                <div className="user-dp-top1">
                    FREE RESOURCES
                </div>
            </div>
            <div className="home course-main">
                <div className="home1">
                    <div className="home11">
                        <h1>Our </h1>
                        <h1>Courses</h1>
                        <p>Become a job-ready software developer in 30 weeks at no upfront fees. Pay us only if you get a job that pays you ₹5,00,000/- per year or more!</p>
                        <div className="row home-mid">
                            <button className="btn btn2 contact-btn">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course2">
                <div className="courses21">
                    <div className="courses211">
                        <h4>For Working Professionals</h4>
                    </div>
                    <div className="course212">
                        <div className="row course0">
                            <h3>Software & Tech</h3>
                            <a href="#">View all</a>
                        </div>
                        <Splide hasTrack={false} aria-label="My Favorite Images" options={{
                            perPage,
                            // rewind: true,
                            gap: '1rem',
                        }}>
                            <SplideTrack>
                                <SplideSlide>
                                    <Card2 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card2 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card2 />
                                </SplideSlide>
                            </SplideTrack>
                            <div className="splide__arrows">
                                <button className="splide__arrow splide__arrow--prev">
                                    <img src="/static/images/Vector 4.png" alt="" />
                                </button>
                                <button className="splide__arrow splide__arrow--next">
                                    <img src="/static/images/Vector 3.png" alt="" />
                                </button>
                            </div>
                        </Splide>
                    </div>

                    <div className="course212">
                        <div className="row course0">
                            <h3>Data Science</h3>
                            <a href="#">View all</a>
                        </div>
                        <Splide hasTrack={false} aria-label="My Favorite Images" options={{
                            perPage,
                            // rewind: true,
                            gap: '1rem',
                        }}>
                            <SplideTrack>
                                <SplideSlide>
                                    <Card2 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card2 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card2 />
                                </SplideSlide>
                            </SplideTrack>
                            <div className="splide__arrows">
                                <button className="splide__arrow splide__arrow--prev">
                                    <img src="/static/images/Vector 4.png" alt="" />
                                </button>
                                <button className="splide__arrow splide__arrow--next">
                                    <img src="/static/images/Vector 3.png" alt="" />
                                </button>
                            </div>
                        </Splide>
                    </div>

                    <div className="course212">
                        <div className="row course0">
                            <h3>MBA</h3>
                            <a href="#">View all</a>
                        </div>
                        <Splide hasTrack={false} aria-label="My Favorite Images" options={{
                            perPage,
                            // rewind: true,
                            gap: '1rem',
                        }}>
                            <SplideTrack>
                                <SplideSlide>
                                    <Card2 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card2 />
                                </SplideSlide>
                                <SplideSlide>
                                    <Card2 />
                                </SplideSlide>
                            </SplideTrack>
                            <div className="splide__arrows">
                                <button className="splide__arrow splide__arrow--prev">
                                    <img src="/static/images/Vector 4.png" alt="" />
                                </button>
                                <button className="splide__arrow splide__arrow--next">
                                    <img src="/static/images/Vector 3.png" alt="" />
                                </button>
                            </div>
                        </Splide>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn1">View More</button>
            </div>
            <div className="course3">
                <div className="course31">
                    <div className="course311">
                        <h1>Have more questions?</h1>
                    </div>
                    <div className="course312">
                        <div className="course3121">
                            <button className="btn btn3">CHECK OUR FAQS</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Db1;
