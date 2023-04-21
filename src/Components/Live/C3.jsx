import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import MainContext from '../../context/MainContext';

const C3 = (props) => {
    const navigate = useNavigate();
    const { batchId, courseId, parentId } = useParams();
    const { getResources } = useContext(MainContext);
    const [data, setData] = useState([]);
    const [links, setLinks] = useState([]);

    useEffect(() => {
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
        props.setNavFlag2(false);
        props.setFootFlag(false);
    }, []);

    useEffect(() => {
        getData();
    }, [batchId, courseId, parentId]);

    const getData = async () => {
        const ans = await getResources(parentId);
        console.log(ans);
        setData(ans.data);
    };

    const toggle = (flag) => {
        if (flag) {
            document.querySelector('.live1').style.display = 'none';
            document.querySelector('.hambug1').style.display = 'block';
        }
        else {
            document.querySelector('.live1').style.display = 'block';
            document.querySelector('.hambug1').style.display = 'none';
        }
    };

    const func = (e) => {
        for (let i of e.eBooksResources) {
            // console.log(i);
            let nc = document.createElement('a');
            nc.href = i;
            nc.setAttribute('download', true);
            nc.setAttribute('target', "_blank");
            document.body.appendChild(nc);
            nc.click();
            nc.parentElement.removeChild(nc);
        }
        let tempArr=[];
        for(let i of e.usefulLinks)
        {
            tempArr.push(i);
        }
        setLinks(tempArr);

        document.querySelector('.resource-modal').classList.remove('resource-modal-hidden');
    };

    const copyFunc=(text)=>{
        navigator.clipboard.writeText(text);
        document.querySelector('.copyAlert').style.display='block';
        setTimeout(() => {
            document.querySelector('.copyAlert').style.display='none';
        }, 3000);
    }

    return (
        <>
            <div className="resource-modal resource-modal-hidden">
                <div className="resource-modal1">
                    <div className="close pointer" onClick={()=>{
                        document.querySelector('.resource-modal').classList.add('resource-modal-hidden');
                    }}>X</div>
                    <div className="resource-modal11">
                        <h2>Useful Links</h2>
                        <h5>Click to copy</h5>
                        <b className='copyAlert'>Text Copied!</b>
                        <div className="copy-main">
                            {links.map((e, index) => {
                                return (
                                    <div key={index} className="copy pointer" onClick={()=>{
                                        copyFunc(e);
                                    }}>
                                        { e }
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="live">
                <div className="live1">
                    <div className="live-sidebar">
                        <div onClick={() => {
                            toggle(true);
                        }} className="hambug">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </div>
                        <div className="live-logo">
                            <img src="/static/images4/q1.png" alt="" />
                        </div>
                        <NavLink to={`/live-classes/${batchId}/${courseId}/${parentId}`} className="live11">
                            <img src="/static/images4/q2.png" alt="" />
                            <p>Live Classes</p>
                        </NavLink>
                        <NavLink to={`/program-contents/${batchId}/${courseId}/${parentId}`} className="live11">
                            <img src="/static/images4/q3.png" alt="" />
                            <p>Self Learning</p>
                        </NavLink>
                        <NavLink to={`/resources-course/${batchId}/${courseId}/${parentId}`} className="live11">
                            <img src="/static/images4/q4.png" alt="" />
                            <p>Resources</p>
                        </NavLink>
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
                        <div onClick={() => {
                            toggle(false);
                        }} className="hambug hambug1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </div>
                        <h4>Full Stack Web Development</h4>
                        <p>Course short description / tagline</p>
                    </div>
                    <div className="live21 c3">
                        <h3>Resources</h3>
                        <div className="c31 row">
                            {data.map((e, index) => {
                                return (
                                    <div key={index} className="c311 row pointer" onClick={() => {
                                        func(e);
                                    }}>
                                        <div className="c3111">
                                            <img src="/static/images4/e4.png" alt="" />
                                        </div>
                                        <div className="c3112">
                                            E - Books
                                        </div>
                                        <div className="c3113">
                                            <img src="/static/images4/e1.png" alt="" />
                                        </div>
                                    </div>
                                );
                            })}

                            {/* <div className="c311 row">
                                <div className="c3111">
                                    <img src="/static/images4/e3.png" alt="" />
                                </div>
                                <div className="c3112">
                                    E - Books
                                </div>
                                <div className="c3113">
                                    <img src="/static/images4/e1.png" alt="" />
                                </div>
                            </div>
                            <div className="c311 row">
                                <div className="c3111">
                                    <img src="/static/images4/e2.png" alt="" />
                                </div>
                                <div className="c3112">
                                    E - Books
                                </div>
                                <div className="c3113">
                                    <img src="/static/images4/e1.png" alt="" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default C3;
