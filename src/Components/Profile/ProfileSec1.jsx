import React, { useState, useContext, useEffect } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import SelectBox from '../../Utils/SelectBox';
import Avatar from 'react-avatar';
import MainContext from "../../context/MainContext";
import { useNavigate } from 'react-router-dom';

const ProfileSec1 = (props) => {
    const navigate = useNavigate();
    const context = useContext(MainContext);

    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        emerPhone: "",
        password: "",
        dob: "",
        gender: "",
        // higherEdu: "",
        course: "",
        course1: "",
        specification: "",
        specification1: "",
        college: "",
        college1: "",
        university: "",
        university1: "",
        duration: "",
        duration1: "",
        duration2: "",
        duration3: "",
        status: "",
        status1: "",
        yearOfPassing: "",
        yearOfPassing1: "",
        percentage: "",
        percentage1: "",
        percentage2: "",
        percentage3: "",
        companyName: "",
        role: "",
        skills: "",
        noYears: "",
        passedOutYear: "",
        passedOutYear1: ""
    });

    const [value1, setValue1] = useState({
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        landMark: "",
        country: "India",
        pincode: "",
        addressLine11: "",
        addressLine21: "",
        city1: "",
        state1: "",
        landMark1: "",
        country1: "India",
        pincode1: ""
    });

    const getData = async () => {
        const data = await context.getUserDetails();
        props.setUserInfo(data.data);
        localStorage.setItem('kevath_user1', JSON.stringify(data.data));
        setValue({
            firstName: data.data.firstName,
            lastName: data.data.lastName,
            email: data.data.email,
            phone: data.data.contact,
            emerPhone: data.data.emergencyContact,
            password: "",
            dob: data.data.dob,
            gender: data.data.gender,
            //  data.data.higherEdu
            course: data.data.educationQualification.graduation.course,
            course1: data.data.educationQualification.postGraduation.course,
            specification: data.data.educationQualification.graduation.specialization,
            specification1: data.data.educationQualification.postGraduation.specialization,
            college: data.data.educationQualification.graduation.college,
            college1: data.data.educationQualification.postGraduation.college,
            university: data.data.educationQualification.graduation.university,
            university1: data.data.educationQualification.postGraduation.university,
            duration: data.data.educationQualification.graduation.durationYears,
            duration1: data.data.educationQualification.postGraduation.durationYears,
            duration2: data.data.educationQualification.ssc.durationYears,
            duration3: data.data.educationQualification.puc.durationYears,
            status: data.data.educationQualification.graduation.status,
            status1: data.data.educationQualification.postGraduation.status,
            yearOfPassing: data.data.educationQualification.graduation.yearOfPassout,
            yearOfPassing1: data.data.educationQualification.postGraduation.yearOfPassout,
            percentage: data.data.educationQualification.graduation.percentage,
            percentage1: data.data.educationQualification.postGraduation.percentage,
            percentage2: data.data.educationQualification.ssc.percentage,
            percentage3: data.data.educationQualification.puc.percentage,
            companyName: data.data.experience.companyName,
            role: data.data.experience.role,
            skills: data.data.experience.skills.toString(),
            noYears: data.data.experience.numberOfYears,
            passedOutYear: data.data.educationQualification.ssc.yearOfPassout,
            passedOutYear1: data.data.educationQualification.puc.yearOfPassout
        })
        return data;
    };

    useEffect(() => {
        let user = localStorage.getItem('kevath_user');
        if (user) {
            user = JSON.parse(user);
            if (!user.token || user.token === '') {
                navigate('/login');
            }
            else
            {
                props.setUserInfoFlag(false);
                getData();
                props.setUserInfoFlag(true);
            }
        }
        else {
            navigate('/login');
        }
        props.setNavFlag1(false);
        props.setNavFlag2(true);
    }, []);

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const handleChange1 = (e) => {
        setValue1({ ...value1, [e.target.name]: e.target.value });
    };

    const submitHandle = async (e) => {
        e.preventDefault();
        console.log(value);
        // let ans = await context.updateUserDetails();
    };

    const submitHandle1 = async (e) => {
        e.preventDefault();
        console.log(value1);
        // let ans = await context.updateAddress();
    };

    return (
        <>
            <Sidebar />
            <div className="prof-sec1">
                <div className="prof-sec11">
                    <div className="prof-sec111">
                        <h1>Hi Narendra!</h1>
                        <h5>Welcome Back to KevathSchool!</h5>
                    </div>
                    <div className="prof-sec112">
                        <div className="prof-sec-top">
                            <p>PERSONAL INFORMATION</p>
                        </div>
                        <div className="prof-sec-inner">
                            <div className="psi1">
                                <div className="psi11">
                                    <p>Photo</p>
                                </div>
                                <div className="row psi12">
                                    <div className="prof-dp">
                                        {/* <img src="/static/images2/Ellipse 41.png" alt="" /> */}
                                        <Avatar name="Narendra" round={true} color="#51B848" />
                                        <div className="prof-dp1">
                                            <img src="/static/images2/Vector (6).png" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <b>Narendra Modi</b>
                                        <p>Prime Minister</p>
                                    </div>
                                </div>
                                <div className="psi13">
                                    <div className="row psi131">
                                        <div className="psi-input">
                                            <label htmlFor="firstName">First Name</label>
                                            <input type="text" name="firstName" onChange={handleChange} value={value.firstName} />
                                        </div>
                                        <div className="psi-input">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input type="text" name="lastName" onChange={handleChange} value={value.lastName} />
                                        </div>
                                    </div>
                                    <div className="row psi131">
                                        <div className="psi-input">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" id="email" name="email" onChange={handleChange} value={value.email} />
                                        </div>
                                        <div className="psi-input">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="text" id="phone" name="phone" onChange={handleChange} value={value.phone} />
                                        </div>
                                    </div>
                                    <div className="row psi131">
                                        <div className="psi-input">
                                            <label htmlFor="emerPhone">Emergency Contact Number</label>
                                            <input type="text" id="emerPhone" name="emerPhone" onChange={handleChange} value={value.emerPhone} />
                                        </div>
                                        <div className="psi-input">
                                            <label htmlFor="password">Password</label>
                                            <input type="text" name="password" onChange={handleChange} value={value.password} />
                                        </div>
                                    </div>
                                    <div className="row psi131">
                                        <div className="psi-input">
                                            <div>
                                                <label htmlFor="dob">DOB</label>
                                                <input type="date" id="dob" name="dob" onChange={handleChange} value={value.dob} />
                                            </div>
                                        </div>
                                        <div className="psi-select mb-0">
                                            <label>Gender</label>
                                            <SelectBox items={[
                                                { value: "Select Gender", id: 0 },
                                                { value: "Male", id: 1 },
                                                { value: "Female", id: 2 },
                                                { value: "Others", id: 3 },
                                            ]} name="gender" setValue={setValue} value={value} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="psi2">
                                <div className="prof-sec-top">
                                    <p>EDUCATIONAL INFORMATION</p>
                                </div>
                                <div className="psi201">
                                    <div className="psi2011">
                                        <h5 className="text-green">10th</h5>
                                        <div className="psi211 row">
                                            <div className="psi-select">
                                                <label>Passed Out Year</label>
                                                <SelectBox items={[
                                                    { value: "Select Year", id: 0 },
                                                    { value: "2021", id: 1 },
                                                    { value: "2020", id: 2 },
                                                    { value: "2019", id: 3 },
                                                    { value: "2018", id: 4 },
                                                    { value: "2017", id: 5 }
                                                ]} name="passedOutYear" setValue={setValue} value={value} />
                                            </div>
                                            <div className="psi-select">
                                                <label>Duration</label>
                                                <SelectBox items={[
                                                    { value: "Select Duration", id: 0 },
                                                    { value: "1 Year", id: 1 },
                                                    { value: "2 Year", id: 2 },
                                                    { value: "3 Year", id: 3 },
                                                    { value: "4 Year", id: 4 }
                                                ]} name="duration" setValue={setValue} value={value} />
                                            </div>
                                            <div className="psi-input">
                                                <div>
                                                    <label htmlFor="percentage">Percentage</label>
                                                    <input type="text" id="percentage" name="percentage" onChange={handleChange} value={value.percentage} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="psi2012">
                                        <h5 className="text-green">12th</h5>
                                        <div className="psi211 row">
                                            <div className="psi-select">
                                                <label>Passed Out Year</label>
                                                <SelectBox items={[
                                                    { value: "Select Year", id: 0 },
                                                    { value: "2021", id: 1 },
                                                    { value: "2020", id: 2 },
                                                    { value: "2019", id: 3 },
                                                    { value: "2018", id: 4 },
                                                    { value: "2017", id: 5 }
                                                ]} name="passedOutYear1" setValue={setValue} value={value} />
                                            </div>
                                            <div className="psi-select">
                                                <label>Duration</label>
                                                <SelectBox items={[
                                                    { value: "Select Duration", id: 0 },
                                                    { value: "1 Year", id: 1 },
                                                    { value: "2 Year", id: 2 },
                                                    { value: "3 Year", id: 3 },
                                                    { value: "4 Year", id: 4 }
                                                ]} name="duration1" setValue={setValue} value={value} />
                                            </div>
                                            <div className="psi-input">
                                                <div>
                                                    <label htmlFor="percentage1">Percentage</label>
                                                    <input type="text" id="percentage1" name="percentage1" onChange={handleChange} value={value.percentage1} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="psi21">
                                    <h5 className="text-green">Bachelors/Graduation</h5>
                                    <div className="psi211 row">
                                        <div className="psi-select">
                                            <label>Course</label>
                                            <SelectBox items={[
                                                { value: "Select Course", id: 0 },
                                                { value: "Course 1", id: 1 },
                                                { value: "Course 2", id: 2 },
                                                { value: "Course 3", id: 3 }
                                            ]} name="course" setValue={setValue} value={value} />
                                        </div>
                                        <div className="psi-select">
                                            <label>Specification</label>
                                            <SelectBox items={[
                                                { value: "Select Specification", id: 0 },
                                                { value: "spec 1", id: 1 },
                                                { value: "spec 2", id: 2 },
                                                { value: "spec 3", id: 3 }
                                            ]} name="specification" setValue={setValue} value={value} />
                                        </div>
                                        <div className="psi-input">
                                            <div>
                                                <label htmlFor="college">College Name</label>
                                                <input type="text" id="college" name="college" onChange={handleChange} value={value.college} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="psi211 row">
                                        <div className="psi-select">
                                            <label>Status</label>
                                            <SelectBox items={[
                                                { value: "Select Status", id: 0 },
                                                { value: "Status 1", id: 1 },
                                                { value: "Status 2", id: 2 },
                                                { value: "Status 3", id: 3 }
                                            ]} name="status" setValue={setValue} value={value} />
                                        </div>
                                        <div className="psi-select">
                                            <label>Year of Passing</label>
                                            <SelectBox items={[
                                                { value: "Select Year", id: 0 },
                                                { value: "2021", id: 1 },
                                                { value: "2020", id: 2 },
                                                { value: "2019", id: 3 },
                                                { value: "2018", id: 4 },
                                                { value: "2019", id: 5 }
                                            ]} name="yearOfPassing" setValue={setValue} value={value} />
                                        </div>
                                        <div className="psi-input">
                                            <div>
                                                <label htmlFor="university">University</label>
                                                <input type="text" id="university" name="university" onChange={handleChange} value={value.university} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="psi211 row">
                                        <div className="psi-select">
                                            <label>Duration</label>
                                            <SelectBox items={[
                                                { value: "Select Duration", id: 0 },
                                                { value: "1 Year", id: 1 },
                                                { value: "2 Year", id: 2 },
                                                { value: "3 Year", id: 3 },
                                                { value: "4 Year", id: 4 }
                                            ]} name="duration2" setValue={setValue} value={value} />
                                        </div>
                                        <div className="psi-input">
                                            <div>
                                                <label htmlFor="percentage2">Percentage</label>
                                                <input type="text" id="percentage2" name="percentage2" onChange={handleChange} value={value.percentage2} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="psi21">
                                    <h5 className="text-green">Masters/Postgraduation</h5>
                                    <div className="psi211 row">
                                        <div className="psi-select">
                                            <label>Course</label>
                                            <SelectBox items={[
                                                { value: "Select Course", id: 0 },
                                                { value: "Course 1", id: 1 },
                                                { value: "Course 2", id: 2 },
                                                { value: "Course 3", id: 3 }
                                            ]} name="course1" setValue={setValue} value={value} />
                                        </div>
                                        <div className="psi-select">
                                            <label>Specification</label>
                                            <SelectBox items={[
                                                { value: "Select Specification", id: 0 },
                                                { value: "spec 1", id: 1 },
                                                { value: "spec 2", id: 2 },
                                                { value: "spec 3", id: 3 }
                                            ]} name="specification1" setValue={setValue} value={value} />
                                        </div>
                                        <div className="psi-input">
                                            <div>
                                                <label htmlFor="college1">College Name</label>
                                                <input type="text" id="college1" name="college1" onChange={handleChange} value={value.college1} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="psi211 row">
                                        <div className="psi-select">
                                            <label>Status</label>
                                            <SelectBox items={[
                                                { value: "Select Status", id: 0 },
                                                { value: "Status 1", id: 1 },
                                                { value: "Status 2", id: 2 },
                                                { value: "Status 3", id: 3 }
                                            ]} name="status1" setValue={setValue} value={value} />
                                        </div>
                                        <div className="psi-select">
                                            <label>Year of Passing</label>
                                            <SelectBox items={[
                                                { value: "Select Year", id: 0 },
                                                { value: "2021", id: 1 },
                                                { value: "2020", id: 2 },
                                                { value: "2019", id: 3 },
                                                { value: "2018", id: 4 },
                                                { value: "2019", id: 5 }
                                            ]} name="yearOfPassing1" setValue={setValue} value={value} />
                                        </div>
                                        <div className="psi-input">
                                            <div>
                                                <label htmlFor="university1">University</label>
                                                <input type="text" id="university1" name="university1" onChange={handleChange} value={value.university1} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="psi211 row">
                                        <div className="psi-select">
                                            <label>Duration</label>
                                            <SelectBox items={[
                                                { value: "Select Duration", id: 0 },
                                                { value: "1 Year", id: 1 },
                                                { value: "2 Year", id: 2 },
                                                { value: "3 Year", id: 3 },
                                                { value: "4 Year", id: 4 }
                                            ]} name="duration3" setValue={setValue} value={value} />
                                        </div>
                                        <div className="psi-input">
                                            <div>
                                                <label htmlFor="percentage3">Percentage</label>
                                                <input type="text" id="percentage3" name="percentage3" onChange={handleChange} value={value.percentage3} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="psi3">
                                <div className="prof-sec-top">
                                    <p>EMPLOYMENT INFORMATION</p>
                                </div>
                                <div className="psi31">
                                    <div className="psi311 row">
                                        <div className="psi-input">
                                            <label htmlFor="companyName">Company Name</label>
                                            <input type="text" name="companyName" onChange={handleChange} value={value.companyName} />
                                        </div>
                                        <div className="psi-input">
                                            <label htmlFor="role">Role</label>
                                            <input type="text" name="role" onChange={handleChange} value={value.role} />
                                        </div>
                                    </div>
                                    <div className="psi311 row">
                                        <div className="psi-input">
                                            <label htmlFor="skills">Skills</label>
                                            <input type="text" name="skills" onChange={handleChange} value={value.skills} />
                                        </div>
                                        <div className="psi-input">
                                            <label htmlFor="noYears">Number of Years</label>
                                            <input type="text" name="noYears" onChange={handleChange} value={value.noYears} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="psi-btn">
                            <button onClick={submitHandle} className="btn btn1 btn4">Save</button>
                        </div>
                    </div>
                    <div className="prof-sec112">
                        <div className="prof-sec-top">
                            <p>ADDRESS INFORMATION</p>
                        </div>
                        <div className="prof-sec-inner">
                            <div className="psi1">
                                <div className="psi11">
                                    <h5 className="text-green">Current Address</h5>
                                </div>
                                <div className="psi13">
                                    <div className="row psi131">
                                        <div className="psi-input">
                                            <label htmlFor="addressLine1">Address Line</label>
                                            <input type="text" name="addressLine1" onChange={handleChange1} value={value1.addressLine1} />
                                        </div>
                                        <div className="psi-input">
                                            <label htmlFor="addressLine2">Address Line 2</label>
                                            <input type="text" name="addressLine2" onChange={handleChange1} value={value1.addressLine2} />
                                        </div>

                                    </div>
                                    <div className="row psi131">
                                        <div className="psi-input">
                                            <label htmlFor="state">State</label>
                                            <input type="text" name="state" onChange={handleChange1} value={value1.state} />
                                        </div>
                                        <div className="psi-input">
                                            <label htmlFor="city">City</label>
                                            <input type="text" name="city" onChange={handleChange1} value={value1.city} />
                                        </div>
                                    </div>
                                    <div className="row psi131">
                                        <div className="psi-input">
                                            <label htmlFor="landMark">Landmark</label>
                                            <input type="text" name="landMark" onChange={handleChange1} value={value1.landMark} />
                                        </div>
                                        <div className="psi-input psi-input1">
                                            <div className="row psi131 psi40">
                                                <div className="psi-input">
                                                    <label htmlFor="country">Country</label>
                                                    <input type="text" name="country" onChange={handleChange1} value={value1.country} />
                                                </div>
                                                <div className="psi-input">
                                                    <label htmlFor="pincode">Pincode</label>
                                                    <input type="text" name="pincode" onChange={handleChange1} value={value1.pincode} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="psi1">
                                <div className="psi11">
                                    <h5 className="text-green">Permanent Address</h5>
                                </div>
                                <div className="psi13">
                                    <div className="row psi131">
                                        <div className="psi-input">
                                            <label htmlFor="addressLine11">Address Line</label>
                                            <input type="text" name="addressLine11" onChange={handleChange1} value={value1.addressLine11} />
                                        </div>
                                        <div className="psi-input">
                                            <label htmlFor="addressLine21">Address Line 2</label>
                                            <input type="text" name="addressLine21" onChange={handleChange1} value={value1.addressLine21} />
                                        </div>
                                    </div>
                                    <div className="row psi131">
                                        <div className="psi-input">
                                            <label htmlFor="state1">State</label>
                                            <input type="text" name="state1" onChange={handleChange1} value={value1.state1} />
                                        </div>
                                        <div className="psi-input">
                                            <label htmlFor="city1">City</label>
                                            <input type="text" name="city1" onChange={handleChange1} value={value1.city1} />
                                        </div>
                                    </div>
                                    <div className="row psi131">
                                        <div className="psi-input">
                                            <label htmlFor="landMark1">Landmark</label>
                                            <input type="text" name="landMark1" onChange={handleChange1} value={value1.landMark1} />
                                        </div>
                                        <div className="psi-input psi-input1">
                                            <div className="row psi131 psi40">
                                                <div className="psi-input">
                                                    <label htmlFor="country1">Country</label>
                                                    <input type="text" name="country1" onChange={handleChange1} value={value1.country1} />
                                                </div>
                                                <div className="psi-input">
                                                    <label htmlFor="pincode1">Pincode</label>
                                                    <input type="text" name="pincode1" onChange={handleChange1} value={value1.pincode1} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="psi-btn">
                            <button onClick={submitHandle1} className="btn btn1 btn4">Save</button>
                        </div>
                    </div>
                </div>
            </div>
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
        </>
    )
}

export default ProfileSec1;
