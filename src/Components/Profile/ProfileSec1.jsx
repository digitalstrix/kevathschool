import React, { useState, useContext, useEffect } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import SelectBox from "../../Utils/SelectBox";
import Avatar from "react-avatar";
import MainContext from "../../context/MainContext";
import { useNavigate } from "react-router-dom";

const ProfileSec1 = (props) => {
  const navigate = useNavigate();
  const context = useContext(MainContext);
  // console.log(props, "<<<<userInfo");
  const [value, setValue] = useState(props.userInfo);
  // const [currentAddress, setCurrentAddress] = useState({});
  const [address, setAddress] = useState({});
  // const [permanentAddress, setPermanentAddress] = useState({});

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

  // const [value1, setValue1] = useState({
  //   addressLine1: "",
  //   addressLine2: "",
  //   city: "",
  //   state: "",
  //   landMark: "",
  //   country: "India",
  //   pincode: "",
  //   addressLine11: "",
  //   addressLine21: "",
  //   city1: "",
  //   state1: "",
  //   landMark1: "",
  //   country1: "India",
  //   pincode1: "",
  // });

  const getData = async () => {
    const data = await context.getUserDetails();
    console.log(data, "<<<<dataatcontext");
    // setValue(data.data);
    // setCurrentAddress(data.data.currentAddress);
    // setPermanentAddress(data.data.permanentAddress);
    props.setUserInfo(data.data);
    localStorage.setItem("kevath_user1", JSON.stringify(data.data));

    setValue({
      firstName: data.data?.firstName,
      lastName: data.data?.lastName,
      email: data.data?.email,
      contact: data.data?.contact,
      emergencyContact: data.data?.emergencyContact,
      password: data.data?.password,
      dob: data.data?.dob,
      gender: data.data?.gender,
      isEmailVerified: data.data.isEmailVerified,
      //  data.data.higherEdu
      course: data.data?.educationQualification?.graduation?.course,
      course1: data.data?.educationQualification?.postGraduation?.course,
      specification:
        data.data?.educationQualification?.graduation?.specialization,
      specification1:
        data.data?.educationQualification?.postGraduation?.specialization,
      college: data.data?.educationQualification?.graduation?.college,
      college1: data.data?.educationQualification?.postGraduation?.college,
      university: data.data?.educationQualification?.graduation?.university,
      university1:
        data.data?.educationQualification?.postGraduation?.university,
      duration: data.data?.educationQualification?.graduation?.durationYears,
      duration1:
        data.data?.educationQualification?.postGraduation?.durationYears,
      duration2: data.data?.educationQualification?.ssc?.durationYears,
      duration3: data.data?.educationQualification?.puc?.durationYears,
      status: data.data?.educationQualification?.graduation?.status,
      status1: data.data?.educationQualification?.postGraduation?.status,
      yearOfPassing:
        data.data?.educationQualification?.graduation?.yearOfPassout,
      yearOfPassing1:
        data.data?.educationQualification?.postGraduation?.yearOfPassout,
      percentage: data.data?.educationQualification?.graduation?.percentage,
      percentage1:
        data.data?.educationQualification?.postGraduation?.percentage,
      percentage2: data.data?.educationQualification?.ssc?.percentage,
      percentage3: data.data?.educationQualification?.puc?.percentage,
      companyName: data.data?.experience?.companyName,
      role: data.data?.experience?.role,
      skills: data.data?.experience?.skills.toString(),
      noYears: data.data?.experience?.numberOfYears,
      passedOutYear: data.data?.educationQualification?.ssc?.yearOfPassout,
      passedOutYear1: data.data?.educationQualification?.puc?.yearOfPassout,
    });

    setAddress({
      addressLine1: data.data?.currentAddress?.addressLine1,
      addressLine2: data.data?.currentAddress?.addressLine2,
      state: data.data?.currentAddress?.state,
      city: data.data?.currentAddress?.city,
      landMark: data.data?.currentAddress?.landmark,
      country: data.data?.currentAddress?.country,
      pincode: data.data?.currentAddress?.pinCode,
      addressLine11: data.data?.permanentAddress?.addressLine1,
      addressLine21: data.data?.permanentAddress?.addressLine2,
      state1: data.data?.permanentAddress?.state,
      city1: data.data?.permanentAddress?.city,
      landMark1: data.data?.permanentAddress?.landmark,
      country1: data.data?.permanentAddress?.country,
      pincode1: data.data?.permanentAddress?.pinCode,
    });

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
    props.setFootFlag(true);
  }, []);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleChange1 = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    // console.log(value);

    // const checkArr = ['firstName', 'lastName', 'email', 'phone', 'password'];
    const checkArr = ["firstName", "lastName", "email", "phone"];

    let flag = false;
    for (let i of Object.keys(value)) {
      if (checkArr.includes(i)) {
        console.log(i);
        if (value[i].length === 0) {
          if (!document.getElementById(`${i}-err`)) {
            let nc = document.createElement("div");
            nc.setAttribute("id", `${i}-err`);
            nc.setAttribute("class", "err-show");
            nc.innerHTML = "Field is required";
            if (i === "phone") {
              document
                .getElementsByName(i)[0]
                .parentNode.parentNode.appendChild(nc);
            } else {
              document.getElementsByName(i)[0].parentNode.appendChild(nc);
            }
          }
        } else {
          document.getElementById(`${i}-err`)?.remove();

          if (i === "firstName") {
            if (value[i].length < 3) {
              let nc = document.createElement("div");
              nc.setAttribute("id", `${i}-err`);
              nc.setAttribute("class", "err-show");
              nc.innerHTML = "Must includes at least 3 characters";
              document.getElementsByName(i)[0].parentNode.appendChild(nc);
            } else {
              document.getElementById(`${i}-err`)?.remove();
            }
          }

          if (i === "phone") {
            if (value[i].length < 10) {
              let nc = document.createElement("div");
              nc.setAttribute("id", `${i}-err`);
              nc.setAttribute("class", "err-show");
              nc.innerHTML = "Must includes at least 10 characters";
              document
                .getElementsByName(i)[0]
                .parentNode.parentNode.appendChild(nc);
            } else {
              document.getElementById(`${i}-err`)?.remove();
            }
          }

          // if (i === "Password") {
          //   let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          //   if (reg.exec(value[i]) === null) {
          //     console.log('sdf');
          //     let nc = document.createElement('div');
          //     nc.setAttribute('id', `${i}-err`);
          //     nc.setAttribute('class', 'err-show');
          //     nc.innerHTML = "Password must be at least 8 characters and contain 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character";
          //     console.log(document.getElementsByName(i)[0].parentNode);
          //     console.log(nc);
          //     document.getElementsByName(i)[0].parentNode.appendChild(nc);
          //   }
          //   else {
          //     document.getElementById(`${i}-err`)?.remove();
          //   }
          // }
        }
      }
    }

    const checkErr = document.querySelectorAll(".err-show");

    if (checkErr.length === 0) {
      flag = true;
    }

    if (flag) {
      console.log(value);

      let gender = value?.gender;
      if (value?.gender === "Not to say") {
        gender = "Others";
      }

      let objToSend = {
        firstName: value?.firstName,
        lastName: value?.lastName,
        contact: Number(value?.contact),
        emergencyContact: Number(value?.emergencyContact),
        dob: value?.dob,
        gender: gender,
        educationQualification: {
          ssc: {
            percentage: Number(value?.percentage2),
            yearOfPassout: Number(value?.passedOutYear),
            durationYears: Number(value?.duration2),
          },
          puc: {
            percentage: Number(value?.percentage3),
            yearOfPassout: Number(value?.passedOutYear1),
            durationYears: Number(value?.duration3),
          },
          graduation: {
            percentage: Number(value?.percentage),
            yearOfPassout: Number(value?.yearOfPassing),
            durationYears: Number(value?.duration),
            status: value?.status,
            specialization: value?.specification,
            course: value?.course,
            university: value?.university,
            college: value?.college,
          },
          // "postGraduation": {
          //   "percentage": Number(value?.percentage1),
          //   "yearOfPassout": Number(value?.yearOfPassing1),
          //   "durationYears": Number(value?.duration1),
          //   "status": value?.status1,
          //   "specialization": value?.specification1,
          //   "course": value?.course1,
          //   "university": value?.university1,
          //   "college": value?.college1
          // }
        },
        experience: {
          skills: [value?.skills],
          role: value?.role,
          numberOfYears: Number(value?.noYears),
          companyName: value?.companyName,
        },
        resume: "null",
        preferences: {
          notifications: {
            push: true,
            sms: true,
          },
        },
      };

      if (document.getElementById("is-master").checked) {
        console.log("yes");
        objToSend.educationQualification = {
          ...objToSend.educationQualification,
          postGraduation: {
            percentage: Number(value?.percentage1),
            yearOfPassout: Number(value?.yearOfPassing1),
            durationYears: Number(value?.duration1),
            status: value?.status1,
            specialization: value?.specification1,
            course: value?.course1,
            university: value?.university1,
            college: value?.college1,
          },
        };
      }

      console.log(objToSend);
      let ans = await context.updateUserDetails(objToSend);
      console.log(ans);
      if (ans.status) {
        props.setAlert(ans.message, "success");
      } else {
        props.setAlert(ans.more_info, "error");
      }
    }
  };

  const submitHandle1 = async (e) => {
    e.preventDefault();

    // console.log(address);
    // console.log(Object.keys(address).length);
    // let n = Object.keys(address).length;
    // if(document.getElementById("same").checked)
    // {

    // }

    let flag = false;
    for (let i of document.querySelectorAll('.address-input')) {
      // console.log(i);
      // console.log(i.name);
      // console.log(i.value);
      if (i.value.length === 0) {
        if (!document.getElementById(`${i.name}-err`)) {
          let nc = document.createElement("div");
          nc.setAttribute("id", `${i.name}-err`);
          nc.setAttribute("class", "err-show");
          nc.innerHTML = `${i.previousElementSibling.innerText} is required`;
          i.parentNode.appendChild(nc);
        }
      } else {
        document.getElementById(`${i.name}-err`)?.remove();
      }
    }

    const checkErr = document.querySelectorAll(".err-show");

    if (checkErr.length === 0) {
      flag = true;
    }

    if (flag) {
      // console.log(address);
      let obj = {
        currentAddress: {
          addressLine1: address?.addressLine1,
          addressLine2: address?.addressLine2,
          state: address?.state,
          city: address?.city,
          landmark: address?.landMark,
          country: address?.country,
          pinCode: Number(address?.pincode),
        },
      };

      if (document.getElementById("same").checked) {
        obj = { ...obj, isSameAddress: true };
      } else {
        obj = {
          ...obj,
          isSameAddress: false,
          permanentAddress: {
            addressLine1: address?.addressLine11,
            addressLine2: address?.addressLine21,
            state: address?.state1,
            city: address?.city1,
            landmark: address?.landMark1,
            country: address?.country1,
            pinCode: Number(address?.pincode1),
          },
        };
      }

      console.log(obj);
      let ans = await context.updateAddress(obj);
      console.log(ans);

      if (ans.status) {
        props.setAlert(ans.message, "success");
      } else {
        props.setAlert(ans.more_info, "error");
      }
    }
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

          <form onSubmit={submitHandle} className="prof-sec112">
            <div className="prof-sec-top">
              <p>PERSONAL INFORMATION</p>
            </div>
            <div className="prof-sec-inner">
              <div className="psi1">
                {/* <div className="psi11">
                  <p>Photo</p>
                </div> */}
                <div className="row psi12">
                  <div className="prof-dp">
                    {/* <img src="/static/images2/Ellipse 41.png" alt="" /> */}
                    <Avatar
                      name={value?.firstName}
                      round={true}
                      color="#51B848"
                    />
                    {/* <div className="prof-dp1"> */}
                    {/* <img src="/static/images2/Vector (6).png" alt="" /> */}
                    {/* </div> */}
                  </div>
                  <div>
                    <b>
                      {value?.firstName} {value?.lastName}
                    </b>
                    {/* <p>Prime Minister</p> */}
                  </div>
                </div>
                <div className="psi13">
                  <div className="row psi131">
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="firstName">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          onChange={handleChange}
                          value={value?.firstName}
                        />
                      </div>
                    </div>
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="lastName">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          value={value?.lastName}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row psi131">
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="email">Email *</label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          onChange={handleChange}
                          value={value?.email}
                        />
                        <div className="text-end mt-2">
                          {value?.isEmailVerified ? (
                            <b className="text-green">Verified</b>
                          ) : (
                            <b
                              onClick={async () => {
                                let ans = await context.sendEmailToVerify(
                                  value.email
                                );
                                if (ans.status == true) {
                                  navigate("/verify-email");
                                }
                                // console.log(ans, "emailsent");
                              }}
                              className="text-red pointer"
                            >
                              Verify
                            </b>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="contact">Phone Number *</label>
                        <input
                          type="number"
                          id="contact"
                          name="contact"
                          onChange={handleChange}
                          value={value?.contact}
                        />
                        <div className="text-end mt-2">
                          {value?.isContactVerified ? (
                            <b className="text-green">Verified</b>
                          ) : (
                            <b
                              onClick={() => {
                                navigate("/profile-sec12");
                              }}
                              className="text-red pointer"
                            >
                              Verify
                            </b>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row psi131 psi131-warp">
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="emergencyContact">
                          Emergency Contact Number *
                        </label>
                        <input
                          type="number"
                          id="emergencyContact"
                          name="emergencyContact"
                          onChange={handleChange}
                          value={value?.emergencyContact}
                          required
                        />
                      </div>
                    </div>
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="Password">Password</label>
                        <div className="password">
                          <input
                            type="password"
                            id="Password"
                            name="password"
                            onChange={handleChange}
                            value={value?.password}
                          />
                          <div onClick={() => {
                            const pass = document.getElementById('Password');
                            if (pass.type === "text") {
                              pass.type = 'password';
                            }
                            else {
                              pass.type = 'text';
                            }
                          }} className="pass-eye pass-eye1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ marginBottom: "0px" }}
                      className="row psi131 psi-ex2"
                    >
                      <div className="psi-input">
                        <div>
                          <label htmlFor="dob">DOB *</label>
                          <input
                            type="date"
                            id="dob"
                            name="dob"
                            onChange={handleChange}
                            value={value?.dob}
                            required
                          />
                        </div>
                      </div>
                      <div className="psi-select">
                        <label>Gender *</label>
                        <SelectBox
                          items={[
                            { value: "Male", id: 1 },
                            { value: "Female", id: 2 },
                            { value: "Not to say", id: 3 },
                          ]}
                          small={true}
                          name="gender"
                          setValue={setValue}
                          value={value}
                          value1={
                            value?.gender === "false" ? "" : value?.gender
                          }
                          required={true}
                          isEditable={true}
                        />
                      </div>
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
                    {/* <div className="psi-ex1"></div> */}
                    <div className="psi211 psi-ex11 row">
                      <div className="psi-select psi-select-101">
                        <label>Passed Out Year</label>
                        <SelectBox
                          items={[
                            { value: "2021", id: 1 },
                            { value: "2020", id: 2 },
                            { value: "2019", id: 3 },
                            { value: "2017", id: 5 },
                            { value: "2016", id: 6 },
                            { value: "2015", id: 7 },
                            { value: "2014", id: 8 },
                            { value: "2013", id: 9 },
                            { value: "2012", id: 10 },
                            { value: "2011", id: 11 },
                          ]}
                          small={true}
                          name="passedOutYear"
                          setValue={setValue}
                          value1={value?.passedOutYear}
                          value={value}
                          isEditable={true}
                        />
                      </div>
                      <div className="psi-select psi-select-102">
                        <label>Duration</label>
                        <SelectBox
                          items={[
                            { value: "1", id: 1 },
                            { value: "2", id: 2 },
                          ]}
                          small={true}
                          name="duration2"
                          setValue={setValue}
                          value1={value?.duration2}
                          value={value}
                          isEditable={true}
                        />
                      </div>
                      <div className="psi-input smallInp">
                        <div>
                          <label htmlFor="percentage2">Percentage</label>
                          <input
                            type="number"
                            id="percentage2"
                            name="percentage2"
                            onChange={handleChange}
                            value={value?.percentage2}
                          // required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="psi2012">
                    <h5 className="text-green">12th</h5>
                    <div className="psi211 psi-ex11 row">
                      <div className="psi-select psi-select-101">
                        <label>Passed Out Year</label>
                        <SelectBox
                          items={[
                            { value: "2021", id: 1 },
                            { value: "2020", id: 2 },
                            { value: "2019", id: 3 },
                            { value: "2017", id: 5 },
                            { value: "2016", id: 6 },
                            { value: "2015", id: 7 },
                            { value: "2014", id: 8 },
                            { value: "2013", id: 9 },
                            { value: "2012", id: 10 },
                            { value: "2011", id: 11 },
                          ]}
                          small={true}
                          name="passedOutYear1"
                          setValue={setValue}
                          value1={value?.passedOutYear1}
                          value={value}
                          isEditable={true}
                        />
                      </div>
                      <div className="psi-select psi-select-102">
                        <label>Duration</label>
                        <SelectBox
                          items={[
                            { value: "1", id: 1 },
                            { value: "2", id: 2 },
                            { value: "3", id: 3 },
                          ]}
                          small={true}
                          name="duration3"
                          setValue={setValue}
                          value1={value?.duration3}
                          value={value}
                          isEditable={true}
                        />
                      </div>
                      <div className="psi-input smallInp">
                        <div>
                          <label htmlFor="percentage3">Percentage</label>
                          <input
                            type="number"
                            id="percentage3"
                            name="percentage3"
                            onChange={handleChange}
                            value={value?.percentage3}
                          // required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="psi21">
                  <h5 className="text-green">Bachelors/Graduation</h5>

                  <div className="psi211 row">
                    <div className="psi-select psi-ex">
                      <label>Course</label>
                      <SelectBox
                        items={[
                          { value: "BSC", id: 1 },
                          { value: "BCA", id: 2 },
                          { value: "BCOM", id: 3 },
                          { value: "BBM", id: 4 },
                          { value: "BA", id: 5 },
                        ]}
                        name="course"
                        setValue={setValue}
                        value1={value?.course}
                        value={value}
                        isEditable={true}
                      />
                    </div>
                    <div className="psi-select psi-ex">
                      <label>Specification</label>
                      <SelectBox
                        items={[
                          { value: "Computer", id: 1 },
                          { value: "Math", id: 2 },
                          { value: "Science", id: 3 },
                          { value: "Biology", id: 4 },
                          { value: "Commerce", id: 5 },
                          { value: "Social", id: 6 },
                          { value: "Account", id: 7 },
                        ]}
                        name="specification"
                        setValue={setValue}
                        value1={value?.specification}
                        value={value}
                        isEditable={true}
                      />
                    </div>
                  </div>

                  <div className="psi211 row">
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="college">College Name</label>
                        <input
                          type="text"
                          id="college"
                          name="college"
                          onChange={handleChange}
                          value={value?.college}
                        // required
                        />
                      </div>
                    </div>
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="dob">University</label>
                        <input
                          type="text"
                          id="dob"
                          name="university"
                          onChange={handleChange}
                          value={value?.university}
                        // required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="psi211 row">
                    <div className="psi-211 psi-ex">
                      <div className="psi-select psi-2111">
                        <label>Status</label>
                        <SelectBox
                          items={[
                            { value: "Pursuing", id: 1 },
                            { value: "Completed", id: 2 },
                            { value: "Dropout", id: 3 },
                          ]}
                          name="status"
                          setValue={setValue}
                          value1={value?.status}
                          value={value}
                        />
                      </div>
                      <div className="psi-select psi-2112">
                        <label>Year of Passing</label>
                        <SelectBox
                          items={[
                            { value: "2021", id: 1 },
                            { value: "2020", id: 2 },
                            { value: "2019", id: 3 },
                            { value: "2017", id: 5 },
                            { value: "2016", id: 6 },
                            { value: "2015", id: 7 },
                            { value: "2014", id: 8 },
                            { value: "2013", id: 9 },
                            { value: "2012", id: 10 },
                            { value: "2011", id: 11 },
                          ]}
                          name="yearOfPassing"
                          setValue={setValue}
                          value1={value?.yearOfPassing}
                          value={value}
                          isEditable={true}
                        />
                      </div>
                    </div>
                    <div className="psi-212">
                      <div className="psi-select psi-2121">
                        <label>Duration</label>
                        <SelectBox
                          items={[
                            { value: "2", id: 1 },
                            { value: "3", id: 2 },
                            { value: "4", id: 3 },
                            { value: "5", id: 4 },
                          ]}
                          name="duration"
                          setValue={setValue}
                          value1={value?.duration}
                          value={value}
                          isEditable={true}
                        />
                      </div>
                      <div className="psi-input psi-2122">
                        <label htmlFor="percentage">Percentage</label>
                        <input
                          type="number"
                          id="percentage"
                          name="percentage"
                          onChange={handleChange}
                          value={value?.percentage}
                        // required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prof-checkbox">
                  <input
                    type="checkbox"
                    id="is-master"
                    onClick={() => {
                      // document.getElementById('address-form').toggleAttribute('novalidate');
                      document
                        .querySelector(".masters-add")
                        .classList.toggle("none");
                    }}
                  />
                  <label>Fill Master Details</label>
                </div>

                <div className="none psi21 masters-add">
                  <h5 className="text-green">Masters/Postgraduation</h5>
                  <div className="psi211 row">
                    <div className="psi-select psi-ex">
                      <label>Course</label>
                      <SelectBox
                        items={[
                          { value: "MCA", id: 1 },
                          { value: "MTECH", id: 2 },
                          { value: "MSC", id: 3 },
                          { value: "MA", id: 4 },
                          { value: "Others", id: 5 },
                        ]}
                        name="course1"
                        setValue={setValue}
                        value1={value?.course1}
                        value={value}
                        isEditable={true}
                      />
                    </div>
                    <div className="psi-select psi-ex">
                      <label>Specification</label>
                      <SelectBox
                        items={[
                          { value: "Computer", id: 1 },
                          { value: "Math", id: 2 },
                          { value: "Science", id: 3 },
                          { value: "Biology", id: 4 },
                          { value: "Commerce", id: 5 },
                          { value: "Social", id: 6 },
                          { value: "Account", id: 7 },
                        ]}
                        name="specification1"
                        setValue={setValue}
                        value1={value?.specification1}
                        value={value}
                        isEditable={true}
                      />
                    </div>
                  </div>
                  <div className="psi211 row">
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="college1">College Name</label>
                        <input
                          type="text"
                          id="college1"
                          name="college1"
                          onChange={handleChange}
                          value={value?.college1}
                        // required
                        />
                      </div>
                    </div>
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="university1">University</label>
                        <input
                          type="text"
                          id="university1"
                          name="university1"
                          onChange={handleChange}
                          value={value?.university1}
                        // required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="psi211 row">
                    <div className="psi-211 psi-ex">
                      <div className="psi-select psi-2111">
                        <label>Status</label>
                        <SelectBox
                          items={[
                            { value: "Pursuing", id: 1 },
                            { value: "Completed", id: 2 },
                            { value: "Dropout", id: 3 },
                          ]}
                          name="status1"
                          setValue={setValue}
                          value1={value?.status1}
                          value={value}
                        />
                      </div>
                      <div className="psi-select psi-2112">
                        <label>Year of Passing</label>
                        <SelectBox
                          items={[
                            { value: "2021", id: 1 },
                            { value: "2020", id: 2 },
                            { value: "2019", id: 3 },
                            { value: "2017", id: 5 },
                            { value: "2016", id: 6 },
                            { value: "2015", id: 7 },
                            { value: "2014", id: 8 },
                            { value: "2013", id: 9 },
                            { value: "2012", id: 10 },
                            { value: "2011", id: 11 },
                          ]}
                          name="yearOfPassing1"
                          setValue={setValue}
                          value1={value?.yearOfPassing1}
                          value={value}
                          isEditable={true}
                        />
                      </div>
                    </div>
                    <div className="psi-212">
                      <div className="psi-select psi-2121">
                        <label>Duration</label>
                        <SelectBox
                          items={[
                            { value: "2", id: 1 },
                            { value: "3", id: 2 },
                            { value: "4", id: 3 },
                            { value: "5", id: 4 },
                          ]}
                          name="duration1"
                          setValue={setValue}
                          value1={value?.duration1}
                          value={value}
                          isEditable={true}
                        />
                      </div>
                      <div className="psi-input psi-2122">
                        <label htmlFor="percentage1">Percentage</label>
                        <input
                          type="number"
                          id="percentage1"
                          name="percentage1"
                          onChange={handleChange}
                          value={value?.percentage1}
                        // required
                        />
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
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          onChange={handleChange}
                          value={value?.companyName}
                        //required
                        />
                      </div>
                    </div>
                    <div className="psi-input psi-ex">
                      <div className="psi-ex3">
                        <label htmlFor="role">Role</label>
                        <input
                          type="text"
                          name="role"
                          onChange={handleChange}
                          value={value?.role}
                        // required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="psi311 row">
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="skills">Skills</label>
                        <input
                          type="text"
                          name="skills"
                          onChange={handleChange}
                          value={value?.skills}
                        // required
                        />
                      </div>
                    </div>
                    <div className="psi-input psi-ex">
                      <div className="psi-ex4">
                        <label htmlFor="noYears">Number of Years</label>
                        <input
                          type="number"
                          name="noYears"
                          onChange={handleChange}
                          value={value?.noYears}
                        // required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="psi-btn">
              <button type="submit" className="btn btn1 btn4">
                Save
              </button>
            </div>
          </form>

          <form
            id="address-form"
            onSubmit={submitHandle1}
            className="prof-sec112"
          >
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
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="addressLine1">Address Line</label>
                        <input
                          type="text"
                          name="addressLine1"
                          onChange={handleChange1}
                          className="address-input"
                          value={address?.addressLine1}
                        />
                      </div>
                    </div>
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="addressLine2">Address Line 2</label>
                        <input
                          type="text"
                          name="addressLine2"
                          onChange={handleChange1}
                          className="address-input"
                          value={address?.addressLine2}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row psi131">
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="state">State</label>
                        <input
                          type="text"
                          name="state"
                          onChange={handleChange1}
                          className="address-input"
                          value={address?.state}
                        />
                      </div>
                    </div>
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          name="city"
                          onChange={handleChange1}
                          className="address-input"
                          value={address?.city}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row psi131">
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="landMark">Landmark</label>
                        <input
                          type="text"
                          name="landMark"
                          onChange={handleChange1}
                          className="address-input"
                          value={address?.landMark}
                        />
                      </div>
                    </div>
                    <div className="psi-input psi-input1 psi-ex">
                      <div className="row psi131 psi40 psi-ex1">
                        <div className="psi-input">
                          <label htmlFor="country">Country</label>
                          <input
                            type="text"
                            name="country"
                            onChange={handleChange1}
                            className="address-input"
                            value={address?.country}
                          />
                        </div>
                        <div className="psi-input">
                          <label htmlFor="pincode">Pincode</label>
                          <input
                            type="number"
                            name="pincode"
                            onChange={handleChange1}
                            className="address-input"
                            value={address?.pincode}
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

                <div className="prof-checkbox">
                  <input
                    type="checkbox"
                    id="same"
                    onClick={() => {
                      for (let i of document.querySelectorAll('.address-form2')) {
                        i.classList.toggle('address-input');
                        document.getElementById(`${i.name}-err`)?.remove();
                      }
                      document
                        .querySelector(".perm-add")
                        .classList.toggle("none");
                    }}
                  />
                  <label>Same as above</label>
                </div>

                <div className="psi13 perm-add">
                  <div className="row psi131">
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="addressLine11">Address Line</label>
                        <input
                          type="text"
                          name="addressLine11"
                          onChange={handleChange1}
                          value={address?.addressLine11}
                          className="address-form2 address-input"
                        />
                      </div>
                    </div>
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="addressLine21">Address Line 2</label>
                        <input
                          type="text"
                          name="addressLine21"
                          onChange={handleChange1}
                          value={address?.addressLine21}
                          className="address-form2 address-input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row psi131">
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="state1">State</label>
                        <input
                          type="text"
                          name="state1"
                          onChange={handleChange1}
                          value={address?.state1}
                          className="address-form2 address-input"
                        />
                      </div>
                    </div>
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="city1">City</label>
                        <input
                          type="text"
                          name="city1"
                          onChange={handleChange1}
                          value={address?.city1}
                          className="address-form2 address-input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row psi131">
                    <div className="psi-input psi-ex">
                      <div className="psi-ex1">
                        <label htmlFor="landMark1">Landmark</label>
                        <input
                          type="text"
                          name="landMark1"
                          onChange={handleChange1}
                          value={address?.landMark1}
                          className="address-form2 address-input"
                        />
                      </div>
                    </div>
                    <div className="psi-input psi-input1 psi-ex">
                      <div className="row psi131 psi40 psi-ex1">
                        <div className="psi-input">
                          <label htmlFor="country1">Country</label>
                          <input
                            type="text"
                            name="country1"
                            onChange={handleChange1}
                            value={address?.country1}
                            className="address-form2 address-input"
                          />
                        </div>
                        <div className="psi-input">
                          <label htmlFor="pincode1">Pincode</label>
                          <input
                            type="number"
                            name="pincode1"
                            onChange={handleChange1}
                            value={address?.pincode1}
                            className="address-form2 address-input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="psi-btn">
              <button type="submit" className="btn btn1 btn4">
                Save
              </button>
            </div>
          </form>
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
