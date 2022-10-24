import React from 'react';
import MainContext from './MainContext';

const baseUrl="http://kevathschool.com/api/v1";

const MainState = (props) => {
    const signup=async (firstName, lastName, email, contact, password)=>{
        console.log(firstName, lastName, email, contact, password);
        const response=await fetch(`${baseUrl}/users/register`,{
            method:"POST",
            body:JSON.stringify({firstName, lastName, email, contact, password})
        });
        const data=await response.json();
        console.log(data);
        return data;
    };
 
    const login=async (email, password)=>{
        const response=await fetch(`${baseUrl}/users/login`,{
            method:"POST",
            body:JSON.stringify({email, password})
        });
        const data=await response.json();
        console.log(data);
        return data;
    };
 
    const getUserDetails=async ()=>{
        const response=await fetch(`${baseUrl}/users`,{
            method:"GET"
        });
        const data=await response.json();
        console.log(data);
        return data;
    };
 
    const emailVerify=async (email)=>{
        const response=await fetch(`${baseUrl}/users/email-verify?email=${email}`,{
            method:"POST"
        });
        const data=await response.json();
        console.log(data);
        return data;
    };
 
    const emailVerify1=async (email, code)=>{
        const response=await fetch(`${baseUrl}/users/email-verify?email=${email}&code=${code}`,{
            method:"POST"
        });
        const data=await response.json();
        console.log(data);
        return data;
    };
 
    const changePassword=async (email, currentPassword, newPassword)=>{
        const response=await fetch(`${baseUrl}/users/change-password`,{
            method:"POST",
            body:JSON.stringify({email, currentPassword, newPassword})
        });
        const data=await response.json();
        console.log(data);
        return data;
    };
 
    const forgetPassword1=async (email)=>{
        const response=await fetch(`${baseUrl}/users/forgot-password-initiate`,{
            method:"POST",
            body:JSON.stringify({email})
        });
        const data=await response.json();
        console.log(data);
        return data;
    };
 
    const forgetPassword2=async (email, code, password)=>{
        const response=await fetch(`${baseUrl}/users/forgot-password-initiate`,{
            method:"POST",
            body:JSON.stringify({email, code, password})
        });
        const data=await response.json();
        console.log(data);
        return data;
    };

    const updateUserDetails=async (data)=>{
        const response=await fetch(`${baseUrl}/users`,{
            method:"PATCH",
            body:JSON.stringify(data)
        });
        const data1=await response.json();
        console.log(data1);
        return data1;
    };
 
    const updateAddress=async (data1)=>{
        const response=await fetch(`${baseUrl}/users/update-address`,{
            method:"PATCH",
            body:JSON.stringify(data1)
        });
        const data=await response.json();
        console.log(data);
        return data;
    };

    return (
        <>
            <MainContext.Provider value={{signup, login, getUserDetails, emailVerify, emailVerify1, changePassword, forgetPassword1, forgetPassword2, updateUserDetails, updateAddress}}>
                {props.children}
            </MainContext.Provider>
        </>
    )
}

export default MainState;
