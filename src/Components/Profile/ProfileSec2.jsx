import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';

const ProfileSec2 = (props) => {
    const navigate = useNavigate();

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
        props.setNavFlag2(true);
        props.setFootFlag(true);
    }, []);

    return (
        <>
            <Sidebar />
            <div className="prof-sec1">
                <div className="prof-sec11">
                    <div className="prof-sec111 prof-sec222">
                        <div className="prof-sec1111 prof-sec00021">
                            <div className="prof-sec-top">
                                <p>ISA DOCUMENTS</p>
                            </div>
                            <div className="prof-sec0002">

                                {/* <div className="prof-sec2">
                                    <h5>Signed ISA</h5>
                                    <div className="prof-sec21">
                                        <img src="/static/images4/isa 1.png" alt="" />
                                    </div>
                                    <div className="prof-sec22">
                                        Upload
                                        <img className="prof-upload" src="/static/images4/Vector (3).png" alt="" />
                                    </div>
                                    <div className="prof-sec23 row">
                                        <div className="prof-sec231 prof-sec231-active">
                                            Pending
                                        </div>
                                        <div className="prof-sec231">
                                            Verify
                                        </div>
                                        <div className="prof-sec231">
                                            Rejected
                                        </div>
                                    </div>
                                    <div className="prof-sec24">
                                        <p>Comments</p>
                                        <ul>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                        </ul>
                                    </div>
                                </div> */}

                                <div className="prof-sec2">
                                    <h5>Download COD</h5>
                                    <div className="prof-sec21">
                                        <img src="/static/images4/isa 1.png" alt="" />
                                    </div>
                                    <div className="prof-sec22">
                                        Download
                                        <img className="prof-down" src="/static/images4/Vector (2).png" alt="" />
                                    </div>
                                    <div className="prof-sec24">
                                        <p>Comments</p>
                                        <ul>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="prof-sec2">
                                    <h5>Download ISA</h5>
                                    <div className="prof-sec21">
                                        <img src="/static/images4/isa 1.png" alt="" />
                                    </div>
                                    <div className="prof-sec22">
                                        Download
                                        <img className="prof-down" src="/static/images4/Vector (2).png" alt="" />
                                    </div>
                                    <div className="prof-sec24">
                                        <p>Comments</p>
                                        <ul>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="text-end">
                                <button className="btn btn1">Save</button>
                            </div>
                        </div>
                    </div>

                    {/* <div className="prof-sec111 prof-sec222">
                        <div className="prof-sec1111 prof-sec00021">
                            <div className="prof-sec-top">
                                <p>CODE OF CONDUCT</p>
                            </div>
                            <div className="prof-sec0002">

                                <div className="prof-sec2">
                                    <h5>Signed COD</h5>
                                    <div className="prof-sec21">
                                        <img src="/static/images4/isa 1.png" alt="" />
                                    </div>
                                    <div className="prof-sec22">
                                        Upload
                                        <img className="prof-upload" src="/static/images4/Vector (3).png" alt="" />
                                    </div>
                                    <div className="prof-sec23 row">
                                        <div className="prof-sec231">
                                            Pending
                                        </div>
                                        <div className="prof-sec231">
                                            Verify
                                        </div>
                                        <div className="prof-sec231">
                                            Rejected
                                        </div>
                                    </div>
                                    <div className="prof-sec24">
                                        <p>Comments</p>
                                        <ul>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="prof-sec2">
                                    <h5>Download COD</h5>
                                    <div className="prof-sec21">
                                        <img src="/static/images4/isa 1.png" alt="" />
                                    </div>
                                    <div className="prof-sec22">
                                        Download
                                        <img className="prof-down" src="/static/images4/Vector (2).png" alt="" />
                                    </div>
                                    <div className="prof-sec24">
                                        <p>Comments</p>
                                        <ul>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="text-end">
                                <button className="btn btn1">Save</button>
                            </div>
                        </div>
                    </div> */}

                    <div className="prof-sec111 prof-sec222">
                        <div className="prof-sec1111 prof-sec00021">
                            <div className="prof-sec-top">
                                <p>IDENTITY DOCUMENTS</p>
                            </div>
                            <div className="prof-sec0002">
                                <div className="prof-sec2">
                                    <h5>Aadhar</h5>
                                    <div className="prof-sec2-inp">
                                        <input type="text" name="aadhar" placeholder="Enter 14 didgits Aadhar Number" />
                                    </div>
                                    <div className="prof-sec22">
                                        Upload
                                        <img className="prof-upload" src="/static/images4/Vector (3).png" alt="" />
                                    </div>
                                    <div className="prof-sec23 row">
                                        <div className="prof-sec231">
                                            Pending
                                        </div>
                                        <div className="prof-sec231">
                                            Verify
                                        </div>
                                        <div className="prof-sec231">
                                            Rejected
                                        </div>
                                    </div>
                                    <div className="prof-sec24">
                                        <p>Comments</p>
                                        <ul>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="prof-sec2">
                                    <h5>PAN</h5>
                                    <div className="prof-sec2-inp">
                                        <input type="text" name="pan" placeholder="Enter PAN Number" />
                                    </div>
                                    <div className="prof-sec22">
                                        Upload
                                        <img className="prof-upload" src="/static/images4/Vector (3).png" alt="" />
                                    </div>
                                    <div className="prof-sec23 row">
                                        <div className="prof-sec231">
                                            Pending
                                        </div>
                                        <div className="prof-sec231">
                                            Verify
                                        </div>
                                        <div className="prof-sec231">
                                            Rejected
                                        </div>
                                    </div>
                                    <div className="prof-sec24">
                                        <p>Comments</p>
                                        <ul>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="text-end">
                                <button className="btn btn1">Save</button>
                            </div>
                        </div>
                    </div>

                    <div className="prof-sec111 prof-sec222">
                        <div className="prof-sec1111 prof-sec00021">
                            <div className="prof-sec-top">
                                <p>EDUCATIONAL DOCUMENTS</p>
                            </div>
                            <div className="prof-sec0002">
                                <div className="prof-sec2">
                                    <h5>Provisonal Degree</h5>
                                    <div className="prof-sec22">
                                        Upload
                                        <img className="prof-upload" src="/static/images4/Vector (3).png" alt="" />
                                    </div>
                                    <div className="prof-sec23 row">
                                        <div className="prof-sec231">
                                            Pending
                                        </div>
                                        <div className="prof-sec231">
                                            Verify
                                        </div>
                                        <div className="prof-sec231">
                                            Rejected
                                        </div>
                                    </div>
                                    <div className="prof-sec24">
                                        <p>Comments</p>
                                        <ul>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="prof-sec2">
                                    <h5>Convocation Degree</h5>
                                    <div className="prof-sec22">
                                        Upload
                                        <img className="prof-upload" src="/static/images4/Vector (3).png" alt="" />
                                    </div>
                                    <div className="prof-sec23 row">
                                        <div className="prof-sec231">
                                            Pending
                                        </div>
                                        <div className="prof-sec231">
                                            Verify
                                        </div>
                                        <div className="prof-sec231">
                                            Rejected
                                        </div>
                                    </div>
                                    <div className="prof-sec24">
                                        <p>Comments</p>
                                        <ul>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="prof-sec2">
                                    <h5>Resume</h5>
                                    <div className="prof-sec22">
                                        Upload
                                        <img className="prof-upload" src="/static/images4/Vector (3).png" alt="" />
                                    </div>
                                    <div className="prof-sec23 row">
                                        <div className="prof-sec231">
                                            Pending
                                        </div>
                                        <div className="prof-sec231">
                                            Verify
                                        </div>
                                        <div className="prof-sec231">
                                            Rejected
                                        </div>
                                    </div>
                                    <div className="prof-sec24">
                                        <p>Comments</p>
                                        <ul>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                            <li>Comments Uploaded image is not clear. Please upload correct one.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="text-end">
                                <button className="btn btn1">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSec2;
