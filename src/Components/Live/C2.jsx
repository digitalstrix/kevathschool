import React, { useEffect } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const C2 = (props) => {
    useEffect(()=>{
        props.setNavFlag1(false);
        props.setNavFlag2(false);
        props.setFootFlag(false);
    },[]);

    const func1=()=>{
        document.querySelector('.c2-live').style.display='none';
        document.querySelector('.live-open2').style.display='block';
    };

    const func2=()=>{
        document.querySelector('.c2-live').style.display='block';
        document.querySelector('.live-open2').style.display='none';
    };

    return (
        <>
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
                            <div onClick={func2} className="live-open2 live-open">
                                <img src="/static/images4/w3.png" alt="" />
                            </div>
                        </div>
                        <div className="live11">
                            <img src="/static/images4/q4.png" alt="" />
                            <p>Resources</p>
                        </div>
                        <div className="live11">
                            <img src="/static/images4/q5.png" alt="" />
                            <p>Assessment</p>
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
                    <div className="c200 row">
                        <div className="live21 c2-live">
                            <div className="c21 row">
                                <div className="row">
                                    <img src="/static/images4/w1.png" alt="" />
                                    <p>Contents</p>
                                </div>
                                <div onClick={func1} className="c211">
                                    <img src="/static/images4/w2.png" alt="" />
                                </div>
                            </div>
                            <div className="c22">
                                <Accordion allowMultipleExpanded allowZeroExpanded>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <div className="c221 row">
                                                    <div className="c2211">
                                                        <p>Chapter No. 1</p>
                                                        <h5>Topic No. 1</h5>
                                                    </div>
                                                    <div className="c2212">
                                                        <div className="db-card-slider">
                                                            <progress id="file" value="50" max="100"> 32% </progress>
                                                            <p>50% left</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className="c230">
                                                <div className="c23 row">
                                                    <div className="c231 c231-active">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="100" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231 c231-active">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="100" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="10" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="0" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <div className="c221 row">
                                                    <div className="c2211">
                                                        <p>Chapter No. 1</p>
                                                        <h5>Topic No. 1</h5>
                                                    </div>
                                                    <div className="c2212">
                                                        <div className="db-card-slider">
                                                            <progress id="file" value="50" max="100"> 32% </progress>
                                                            <p>50% left</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className="c230">
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="100" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="100" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="10" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="0" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <div className="c221 row">
                                                    <div className="c2211">
                                                        <p>Chapter No. 1</p>
                                                        <h5>Topic No. 1</h5>
                                                    </div>
                                                    <div className="c2212">
                                                        <div className="db-card-slider">
                                                            <progress id="file" value="50" max="100"> 32% </progress>
                                                            <p>50% left</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className="c230">
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="100" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="100" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="10" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="0" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <div className="c221 row">
                                                    <div className="c2211">
                                                        <p>Chapter No. 1</p>
                                                        <h5>Topic No. 1</h5>
                                                    </div>
                                                    <div className="c2212">
                                                        <div className="db-card-slider">
                                                            <progress id="file" value="50" max="100"> 32% </progress>
                                                            <p>50% left</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className="c230">
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="100" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="100" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="10" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="0" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <div className="c221 row">
                                                    <div className="c2211">
                                                        <p>Chapter No. 1</p>
                                                        <h5>Topic No. 1</h5>
                                                    </div>
                                                    <div className="c2212">
                                                        <div className="db-card-slider">
                                                            <progress id="file" value="50" max="100"> 32% </progress>
                                                            <p>50% left</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className="c230">
                                                <div className="c23 row">
                                                    <div className="c231 c231-active">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="100" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231 c231-active">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="100" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="10" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                                <div className="c23 row">
                                                    <div className="c231">
                                                        
                                                    </div>
                                                    <div className="c232">
                                                        Introduction
                                                    </div>
                                                    <div className="c233">
                                                        <progress id="file" value="0" max="100"> 32% </progress>
                                                    </div>
                                                    <div className="c234">
                                                        05:36
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                        <div className="c2">
                            <img src="/static/images4/player.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default C2;
