import React, { useState } from "react";
import { session_data } from "../Service/localdata";
import MainContext from "./MainContext";

export const DEFAULT_TEST_ID = "df7dd771-1d3c-41a1-81f0-816dc8394d60";
const baseUrl = "https://kevathschool.com/api/v1";

const getToken = async () =>
  await JSON.parse(localStorage.getItem("kevath_user"))?.token;

export const getSessionData = async () => {};

const MainState = (props) => {
  //  states
  const [userData, setUserData] = useState({ name: "akshay" });

  // ------
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
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("kevath_user"))?.token
        }`,
      },
      redirect: "follow",
    });
    const data = await response.json();
    console.log(data);
    setUserData(data.data);

    return data;
  };

  const emailVerify = async (email, code) => {
    const response = await fetch(
      `${baseUrl}/users/email-verify?email=${email}&code=${code}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("kevath_user"))?.token
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
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("kevath_user"))?.token
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
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("kevath_user"))?.token
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("kevath_user"))?.token
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
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("kevath_user"))?.token
        }`,
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
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("kevath_user"))?.token
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
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("kevath_user"))?.token
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
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("kevath_user"))?.token
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

  // test modules=------------------------

  const createSession = async (userId, testId, callBack) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + (await getToken()));
    myHeaders.append("Content-Type", "application/json");
    console.log(userId, testId, "payload at create session");

    var raw = JSON.stringify({
      // userId: "286fdcb6-6f94-4d21-b092-4abdb58ce3cf",
      // testId: "df7dd771-1d3c-41a1-81f0-816dc8394d60",
      userId,
      testId,
      correctScore: 0,
      totalScore: 60,
      questions: {
        total: 0,
        attempted: 0,
        unAttempted: 0,
        correct: 0,
        wrong: 0,
      },
      isCleared: false,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(baseUrl + "/session", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result, "<<<<started session result");
        const data = JSON.parse(result);
        if (data.status == true) {
          console.log(data);
          localStorage.setItem(session_data, JSON.stringify(data.data));
          callBack(data);
        }
      })
      .catch((error) => console.log("error", error));
  };
  const getSaveduserData = () => userData;

  //

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
          userData,
          createSession,
          getSaveduserData,
        }}
      >
        {props.children}
      </MainContext.Provider>
    </>
  );
};

export default MainState;
