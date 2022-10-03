import React, { useEffect } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const Faq = (props) => {
    useEffect(() => {
        props.setNavFlag1(true);
        props.setNavFlag2(false);
    }, []);

    return (
        <>
            <div className="prof-sec5 prof-secm">
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
            <div className="eve-reg13">
                <div className="eve-reg131">
                    <div className="eve-reg1311">
                        <img src="/static/images2/Polygon 9.png" alt="" />
                    </div>
                    <div className="eve-reg1312">
                        <h3 className="text-green">Have more</h3>
                        <h1>Question?</h1>
                    </div>
                    <div className="eve-reg1313">
                        <img src="/static/images2/Polygon 8.png" alt="" />
                        <button className="btn btn1">Contact us</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq
