import React, { useState, useContext, useEffect } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import SelectBox from "../../Utils/SelectBox";
import Avatar from "react-avatar";
import MainContext from "../../context/MainContext";
import { useNavigate } from "react-router-dom";

const ProfileSec1 = (props) => {
  const navigate = useNavigate();
  const context = useContext(MainContext);
  console.log(props, "<<<<userInfo");
  const [value, setValue] = useState(props.userInfo);
  const [currentAddress, setCurrentAddress] = useState({});
  const [permanentAddress, setPermanentAddress] = useState({});

  // console.log(value, "<<<<settovallue", props.userInfo);

  // const [value, setValue] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   emerPhone: "",
  //   password: "",
  //   dob: "",
  //   gender: "",
  //   higherEdu: "",
  //   course: "",
  //   course1: "",
  //   specification: "",
  //   college: "",
  //   university: "",
  //   duration: "",
  //   status: "",
  //   yearOfPassing: "",
  //   percentage: "",
  //   companyName: "",
  //   role: "",
  //   skills: "",
  //   noYears: "",
  // });

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
    pincode1: "",
  });

  const getData = async () => {
    const data = await context.getUserDetails();
    console.log(data, "<<<<dataatcontext");
    setValue(data.data);
    setCurrentAddress(data.data.currentAddress);
    setPermanentAddress(data.data.permanentAddress);
    props.setUserInfo(data.data);
    localStorage.setItem("kevath_user1", JSON.stringify(data.data));
    // setValue({
    //   firstName: data.data.firstName,
    //   lastName: data.data.lastName,
    //   email: data.data.email,
    //   phone: data.data.contact,
    //   emerPhone: data.data.emergencyContact,
    //   password: "",
    //   dob: data.data.dob,
    //   gender: data.data.gender,
    //   //  data.data.higherEdu
    //   course: data.data.educationQualification?.graduation.course,
    //   course1: data.data.educationQualification?.postGraduation.course,
    //   specification:
    //     data.data.educationQualification?.graduation.specialization,
    //   specification1:
    //     data.data.educationQualification?.postGraduation.specialization,
    //   college: data.data.educationQualification?.graduation.college,
    //   college1: data.data.educationQualification?.postGraduation.college,
    //   university: data.data.educationQualification?.graduation.university,
    //   university1: data.data.educationQualification?.postGraduation.university,
    //   duration: data.data.educationQualification?.graduation.durationYears,
    //   duration1: data.data.educationQualification?.postGraduation.durationYears,
    //   duration2: data.data.educationQualification?.ssc.durationYears,
    //   duration3: data.data.educationQualification?.puc.durationYears,
    //   status: data.data.educationQualification?.graduation.status,
    //   status1: data.data.educationQualification?.postGraduation.status,
    //   yearOfPassing: data.data.educationQualification?.graduation.yearOfPassout,
    //   yearOfPassing1:
    //     data.data.educationQualification?.postGraduation.yearOfPassout,
    //   percentage: data.data.educationQualification?.graduation.percentage,
    //   percentage1: data.data.educationQualification?.postGraduation.percentage,
    //   percentage2: data.data.educationQualification?.ssc.percentage,
    //   percentage3: data.data.educationQualification?.puc.percentage,
    //   companyName: data.data.experience.companyName,
    //   role: data.data.experience.role,
    //   skills: data.data.experience.skills.toString(),
    //   noYears: data.data.experience.numberOfYears,
    //   passedOutYear: data.data.educationQualification?.ssc.yearOfPassout,
    //   passedOutYear1: data.data.educationQualification?.puc.yearOfPassout,
    // });
    return data;
  };

  useEffect(() => {
    let user = localStorage.getItem("kevath_user");
    if (user) {
      user = JSON.parse(user);
      if (!user.token || user.token === "") {
        navigate("/login");
      } else {
        props.setUserInfoFlag(false);
        getData();

        props.setUserInfoFlag(true);
      }
    } else {
      navigate("/login");
    }
    props.setNavFlag1(false);
    props.setNavFlag2(true);
  }, []);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleChange1 = (e) => {
    // dob;
    setValue1({ ...value1, [e.target.name]: e.target.value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    console.log(value);
    let ans = await context.updateUserDetails();
  };

  const submitHandle1 = async (e) => {
    e.preventDefault();
    console.log(value1);
    let ans = await context.updateAddress();
  };

  

  return (
    <>
      <Sidebar />
      <div className="prof-sec1">
        <div className="prof-sec11">
          <div className="prof-sec111">
            <h1>
              Hi {value?.firstName} {value?.lastName}!
            </h1>
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
                    <b>
                      {value.firstName} {value.lastName}
                    </b>
                    <p>Prime Minister</p>
                  </div>
                </div>
                <div className="psi13">
                  <div className="row psi131">
                    <div className="psi-input">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        value={value?.firstName}
                      />
                    </div>
                    <div className="psi-input">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        value={value?.lastName}
                      />
                    </div>
                  </div>
                  <div className="row psi131">
                    <div className="psi-input">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={value?.email}
                      />
                    </div>
                    <div className="psi-input">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={handleChange}
                        value={value?.contact}
                      />
                    </div>
                  </div>
                  <div className="row psi131">
                    <div className="psi-input">
                      <label htmlFor="emerPhone">
                        Emergency Contact Number
                      </label>
                      <input
                        type="text"
                        id="emerPhone"
                        name="emerPhone"
                        onChange={handleChange}
                        value={value?.emergencyContact}
                      />
                    </div>
                    <div className="psi-input">
                      <label htmlFor="password">Password</label>
                      <input
                        type="text"
                        name="password"
                        onChange={handleChange}
                        value={value?.password}
                      />
                    </div>
                  </div>
                  <div className="row psi131">
                    <div className="psi-input">
                      <div>
                        <label htmlFor="dob">DOB</label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          onChange={handleChange}
                          value={value?.dob}
                        />
                      </div>
                    </div>
                    <div className="psi-select">
                      <label>Gender</label>
                      <SelectBox
                        items={[
                          { value: "Male", id: 1 },
                          { value: "Femaale", id: 2 },
                          { value: "Other", id: 3 },
                        ]}
                        name="gender"
                        selectedItem={value.gender}
                        setValue={setValue}
                        // value={value.gender}
                      />
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
                        <SelectBox
                          items={[
                            { value: "United States", id: 1 },
                            { value: "Canada", id: 2 },
                            { value: "Mexico", id: 3 },
                            { value: "Japan", id: 4 },
                          ]}
                          name="higherEdu"
                          setValue={setValue}
                          value={value}
                        />
                      </div>
                      <div className="psi-select">
                        <label>Duration</label>
                        <SelectBox
                          items={[
                            { value: "United States", id: 1 },
                            { value: "Canada", id: 2 },
                            { value: "Mexico", id: 3 },
                            { value: "Japan", id: 4 },
                          ]}
                          name="course"
                          setValue={setValue}
                          value={value}
                        />
                      </div>
                      <div className="psi-input">
                        <div>
                          <label htmlFor="dob">Percentage</label>
                          <input
                            type="text"
                            id="dob"
                            name="dob"
                            onChange={handleChange}
                            value={value?.dob}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="psi2012">
                    <h5 className="text-green">12th</h5>
                    <div className="psi211 row">
                      <div className="psi-select">
                        <label>Passed Out Year</label>
                        <SelectBox
                          items={[
                            { value: "United States", id: 1 },
                            { value: "Canada", id: 2 },
                            { value: "Mexico", id: 3 },
                            { value: "Japan", id: 4 },
                          ]}
                          name="higherEdu"
                          setValue={setValue}
                          value={value}
                        />
                      </div>
                      <div className="psi-select">
                        <label>Duration</label>
                        <SelectBox
                          items={[
                            { value: "United States", id: 1 },
                            { value: "Canada", id: 2 },
                            { value: "Mexico", id: 3 },
                            { value: "Japan", id: 4 },
                          ]}
                          name="course"
                          setValue={setValue}
                          value={value}
                        />
                      </div>
                      <div className="psi-input">
                        <div>
                          <label htmlFor="dob">Percentage</label>
                          <input
                            type="text"
                            id="dob"
                            name="dob"
                            onChange={handleChange}
                            value={value?.dob}
                          />
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
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="course"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                    <div className="psi-select">
                      <label>Specification</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="specification"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                    <div className="psi-select">
                      <label>College Name</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="college"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                  </div>
                  <div className="psi211 row">
                    <div className="psi-select">
                      <label>University</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="university"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                    <div className="psi-select">
                      <label>Status</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="status"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                    <div className="psi-select">
                      <label>Year of Passing</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="yearOfPassing"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                  </div>
                  <div className="psi211 row">
                    <div className="psi-select">
                      <label>Duration</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="duration"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                    <div className="psi-select">
                      <label>Percentage</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="percentage"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                  </div>
                </div>

                <div className="psi21">
                  <h5 className="text-green">Masters/Postgraduation</h5>
                  <div className="psi211 row">
                    <div className="psi-select">
                      <label>Course</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="course"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                    <div className="psi-select">
                      <label>Specification</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="specification"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                    <div className="psi-select">
                      <label>College Name</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="college"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                  </div>
                  <div className="psi211 row">
                    <div className="psi-select">
                      <label>University</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="university"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                    <div className="psi-select">
                      <label>Status</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="status"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                    <div className="psi-select">
                      <label>Year of Passing</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="yearOfPassing"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                  </div>
                  <div className="psi211 row">
                    <div className="psi-select">
                      <label>Duration</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="duration"
                        setValue={setValue}
                        value={value}
                      />
                    </div>
                    <div className="psi-select">
                      <label>Percentage</label>
                      <SelectBox
                        items={[
                          { value: "United States", id: 1 },
                          { value: "Canada", id: 2 },
                          { value: "Mexico", id: 3 },
                          { value: "Japan", id: 4 },
                        ]}
                        name="percentage"
                        setValue={setValue}
                        value={value}
                      />
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
                      <input
                        type="text"
                        name="companyName"
                        onChange={handleChange}
                        value={value?.companyName}
                      />
                    </div>
                    <div className="psi-input">
                      <label htmlFor="role">Role</label>
                      <input
                        type="text"
                        name="role"
                        onChange={handleChange}
                        value={value?.role}
                      />
                    </div>
                  </div>
                  <div className="psi311 row">
                    <div className="psi-input">
                      <label htmlFor="skills">Skills</label>
                      <input
                        type="text"
                        name="skills"
                        onChange={handleChange}
                        value={value?.skills}
                      />
                    </div>
                    <div className="psi-input">
                      <label htmlFor="noYears">Number of Years</label>
                      <input
                        type="text"
                        name="noYears"
                        onChange={handleChange}
                        value={value?.noYears}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="psi-btn">
              <button className="btn btn1 btn4">Save</button>
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
                      <input
                        type="text"
                        name="addressLine1"
                        onChange={handleChange1}
                        value={currentAddress?.addressLine1}
                      />
                    </div>
                    <div className="psi-input">
                      <label htmlFor="addressLine2">Address Line 2</label>
                      <input
                        type="text"
                        name="addressLine2"
                        onChange={handleChange1}
                        value={currentAddress?.addressLine2}
                      />
                    </div>
                  </div>
                  <div className="row psi131">
                    <div className="psi-input">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        name="state"
                        onChange={handleChange1}
                        value={currentAddress?.state}
                      />
                    </div>
                    <div className="psi-input">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        name="city"
                        onChange={handleChange1}
                        value={currentAddress?.city}
                      />
                    </div>
                  </div>
                  <div className="row psi131">
                    <div className="psi-input">
                      <label htmlFor="landMark">Landmark</label>
                      <input
                        type="text"
                        name="landMark"
                        onChange={handleChange1}
                        value={currentAddress?.landMark}
                      />
                    </div>
                    <div className="psi-input psi-input1">
                      <div className="row psi131 psi40">
                        <div className="psi-input">
                          <label htmlFor="country">Country</label>
                          <input
                            type="text"
                            name="country"
                            onChange={handleChange1}
                            value={currentAddress?.country}
                          />
                        </div>
                        <div className="psi-input">
                          <label htmlFor="pincode">Pincode</label>
                          <input
                            type="text"
                            name="pincode"
                            onChange={handleChange1}
                            value={currentAddress?.pincode}
                          />
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
                      <input
                        type="text"
                        name="addressLine11"
                        onChange={handleChange1}
                        value={permanentAddress?.addressLine11}
                      />
                    </div>
                    <div className="psi-input">
                      <label htmlFor="addressLine21">Address Line 2</label>
                      <input
                        type="text"
                        name="addressLine21"
                        onChange={handleChange1}
                        value={permanentAddress?.addressLine21}
                      />
                    </div>
                  </div>
                  <div className="row psi131">
                    <div className="psi-input">
                      <label htmlFor="state1">State</label>
                      <input
                        type="text"
                        name="state1"
                        onChange={handleChange1}
                        value={permanentAddress?.state}
                      />
                    </div>
                    <div className="psi-input">
                      <label htmlFor="city1">City</label>
                      <input
                        type="text"
                        name="city1"
                        onChange={handleChange1}
                        value={permanentAddress?.city}
                      />
                    </div>
                  </div>
                  <div className="row psi131">
                    <div className="psi-input">
                      <label htmlFor="landMark1">Landmark</label>
                      <input
                        type="text"
                        name="landMark1"
                        onChange={handleChange1}
                        value={permanentAddress?.landMark}
                      />
                    </div>
                    <div className="psi-input psi-input1">
                      <div className="row psi131 psi40">
                        <div className="psi-input">
                          <label htmlFor="country1">Country</label>
                          <input
                            type="text"
                            name="country1"
                            onChange={handleChange1}
                            value={permanentAddress?.country}
                          />
                        </div>
                        <div className="psi-input">
                          <label htmlFor="pincode1">Pincode</label>
                          <input
                            type="text"
                            name="pincode1"
                            onChange={handleChange1}
                            value={permanentAddress?.pincode}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="psi-btn">
              <button className="btn btn1 btn4">Save</button>
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
            <p>
              Eliminate the process of reaching out to different agencies for
              finding the right source. We provide the right platform filled
              with an array of tech talents that enables you to hire the right
              resources instantly. Did we mention that you are not paying a
              single penny for this?
            </p>
          </div>
          <div className="hfu-413">
            <img src="/static/images1/Vector (16).png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSec1;
