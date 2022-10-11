import React, { useEffect } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import Sidebar from '../../Sidebar/Sidebar';

const ProfileSec5 = (props) => {
    useEffect(() => {
        props.setNavFlag1(false);
        props.setNavFlag2(true);
    }, []);

    return (
        <>
            <Sidebar />
            <div className="prof-sec5 bg-light">
                <div className="prof-sec51">
                    <div className="prof-sec511">
                        <h1>Frequently Asked <span className="bg-green">Questions</span></h1>
                    </div>
                    <div className="prof-sec512">
                        <div className="prof-sec5121">
                            <h5>QUESTION CATEGORIES</h5>
                            <p>General Questions</p>
                            <p>ISA Questions</p>
                            <p>Application Questions</p>
                            <p>Placement Questions</p>
                        </div>
                        <div className="prof-sec5122">
                            <div className="prof-sec51221">
                                <h4>General Questions</h4>
                                <Accordion allowMultipleExpanded allowZeroExpanded>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What harsh truths do you prefer to ignore?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                                cupidatat occaecat ut occaecat consequat est minim minim
                                                esse tempor laborum consequat esse adipisicing eu
                                                reprehenderit enim.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className="prof-sec51221">
                                <h4>ISA Questions</h4>
                                <Accordion allowMultipleExpanded allowZeroExpanded>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What harsh truths do you prefer to ignore?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                                cupidatat occaecat ut occaecat consequat est minim minim
                                                esse tempor laborum consequat esse adipisicing eu
                                                reprehenderit enim.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className="prof-sec51221">
                                <h4>Application Questions</h4>
                                <Accordion allowMultipleExpanded allowZeroExpanded>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What harsh truths do you prefer to ignore?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                                cupidatat occaecat ut occaecat consequat est minim minim
                                                esse tempor laborum consequat esse adipisicing eu
                                                reprehenderit enim.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className="prof-sec51221">
                                <h4>Placement Questions</h4>
                                <Accordion allowMultipleExpanded allowZeroExpanded>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What harsh truths do you prefer to ignore?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                                cupidatat occaecat ut occaecat consequat est minim minim
                                                esse tempor laborum consequat esse adipisicing eu
                                                reprehenderit enim.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prof-sec-hfu">
                <div className="hfu-4">
                    <div className="hfu-41">
                        <div className="hfu-411">
                            <img src="/static/images1/5787097 1.png" alt="" />
                        </div>
                        <div className="hfu-412">
                            <p>Eliminate the process of reaching out to different agencies for finding the right source. We provide the right platform filled with an array of tech talents that enables you to hire the right resources instantly. Did we mention that you are not paying a single penny for this?</p>
                        </div>
                        <div className="hfu-413">
                            <img src="/static/images1/Vector (16).png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSec5;
