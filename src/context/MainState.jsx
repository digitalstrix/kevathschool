import React from "react";
import MainContext from "./MainContext";

const baseUrl = "https://api-dev.kevathschool.com/api/v1";

const MainState = (props) => {
  const signup = async (firstName, lastName, email, contact, password) => {
    console.log(firstName, lastName, email, contact, password);
    const response = await fetch(`${baseUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, contact, password }),
      redirect: "follow",
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  const login = async (email, password) => {
    const response = await fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      redirect: "follow",
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  const getUserDetails = async () => {
    const response = await fetch(`${baseUrl}/users`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token
          }`,
      },
      redirect: "follow",
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  const emailVerify = async (email, code) => {
    const response = await fetch(
      `${baseUrl}/users/email-verify?email=${email}&code=${code}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token
            }`,
        },
        redirect: "follow",
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  const sendEmailToVerify = async (email) => {
    const response = await fetch(
      `${baseUrl}/users/email-verify?email=${email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token
            }`,
        },
        redirect: "follow",
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  const emailVerify1 = async (email, code) => {
    const response = await fetch(
      `${baseUrl}/users/email-verify?email=${email}&code=${code}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token
            }`,
        },
        redirect: "follow",
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  const changePassword = async (email, currentPassword, newPassword) => {
    const response = await fetch(`${baseUrl}/users/change-password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token
          }`,
      },
      body: JSON.stringify({ email, currentPassword, newPassword }),
      redirect: "follow",
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  const forgetPassword1 = async (email) => {
    const response = await fetch(`${baseUrl}/users/forgot-password-initiate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
      redirect: "follow",
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  const forgetPassword2 = async (email, code, password) => {
    const response = await fetch(`${baseUrl}/users/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, code, password }),
      redirect: "follow",
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  const updateUserDetails = async (data) => {
    const response = await fetch(`${baseUrl}/users`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token
          }`
      },
      body: JSON.stringify(data),
      redirect: "follow",
    });
    const data1 = await response.json();
    console.log(data1);
    return data1;
  };

  const updateAddress = async (data1) => {
    const response = await fetch(`${baseUrl}/users/update-address`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token
          }`,
      },
      body: JSON.stringify(data1),
      redirect: "follow",
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  const referralRegister = async (
    referredReferralCode,
    email,
    fullName,
    userId
  ) => {
    const response = await fetch(`${baseUrl}/register-referral`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token
          }`,
      },
      body: JSON.stringify({ referredReferralCode, email, fullName, userId }),
      redirect: "follow",
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  const contactUs = async (
    firstName,
    lastName,
    contact,
    email,
    message,
    acceptTermsandConditions
  ) => {
    const response = await fetch(`${baseUrl}/contact-us`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token
          }`,
      },
      body: JSON.stringify({
        firstName,
        lastName,
        contact: Number(contact),
        email,
        message,
        acceptTermsandConditions,
      }),
      redirect: "follow",
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  const hireFromUs = async (
    name,
    email,
    contact,
    message,
    notifications,
    company,
    designation,
    acceptTermsandConditions
  ) => {
    const response = await fetch(`${baseUrl}/hire-from-us`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        contact,
        message,
        notifications,
        company,
        designation,
        acceptTermsandConditions,
      }),
      redirect: "follow",
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  const addCourse = async (
    data
  ) => {
    const response = await fetch(`${baseUrl}/course`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token}`
      },
      body: JSON.stringify(data),
      redirect: "follow",
    });
    const data1 = await response.json();
    console.log(data1);
    return data1;
  };

  const addBatches = async (
    data
  ) => {
    const response = await fetch(`${baseUrl}/batches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token}`
      },
      body: JSON.stringify(data),
      redirect: "follow",
    });
    const data1 = await response.json();
    console.log(data1);
    return data1;
  };

  const joinCourse = async (
    { courseId, first_name, last_name, email }
  ) => {
    const response = await fetch(`${baseUrl}/participant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token}`
      },
      body: JSON.stringify({
        courseId,
        first_name,
        last_name,
        email
      }),
      redirect: "follow",
    });
    const data1 = await response.json();
    console.log(data1);
    return data1;
  };

  const addEvent = async (
    data
  ) => {
    const response = await fetch(`${baseUrl}/event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token}`
      },
      body: JSON.stringify(data),
      redirect: "follow",
    });
    const data1 = await response.json();
    console.log(data1);
    return data1;
  };

  const registerParticipantEvent = async ({first_name, last_name, email, id}) => {
    const response = await fetch(`${baseUrl}/event/${id}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token}`
      },
      body: JSON.stringify({ first_name, last_name, email }),
      redirect: "follow",
    });
    const data1 = await response.json();
    console.log(data1);
    return data1;
  };

  const getMyCourses = async () => {
    const response = await fetch(`${baseUrl}/participant/get-courses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("kevath_user"))?.token}`
      },
      redirect: "follow",
    });
    const data1 = await response.json();
    console.log(data1);
    return data1;
  };

  const getCourses = async ({ page, perPage, meta, career_type }) => {
    // const response = await fetch(`${baseUrl}/course?page=${page}&per_page=${perPage}&meta=${meta}&career_type=${career_type}`, {
    const response = await fetch(`${baseUrl}/course`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    });
    const data = await response.json();
    // console.log(data);
    return data;
  };

  const getEvents = async () => {
    const response = await fetch(`${baseUrl}/event`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    });
    const data = await response.json();
    // console.log(data);
    return data;
  };

  return (
    <>
      <MainContext.Provider
        value={{
          signup,
          login,
          getUserDetails,
          emailVerify,
          emailVerify1,
          changePassword,
          forgetPassword1,
          forgetPassword2,
          sendEmailToVerify,
          updateUserDetails,
          updateAddress,
          referralRegister,
          contactUs,
          hireFromUs,
          getCourses,
          addCourse,
          addBatches,
          joinCourse,
          addEvent,
          registerParticipantEvent,
          getMyCourses,
          getEvents
        }}
      >
        {props.children}
      </MainContext.Provider>
    </>
  );
};

export default MainState;
