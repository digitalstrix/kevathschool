import React from 'react'

const Alert = (props) => {
    return (
        <>
            <div className="alert">
                <div className="alert1">
                    <div className={props.color==="success" ? "alert11" : "alert11 alert22"}></div>
                    <div className="alert12">
                        <div className="alert121">
                            {props.color==='success' ? <img src="/static/images4/h2.png" alt="" /> : <img src="/static/images4/h1.png" alt="" />}
                        </div>
                        <div className="alert122">
                            <b>{props.message}</b>
                            {props.color==='success' ? <p>Thanks for choosing us</p> : <p>Error</p>}
                            <b className={props.color==='success' ? "text-green" : "text-red"}>Learn More</b>
                        </div>
                    </div>
                </div>
                <div className="alert-close">
                    <b onClick={props.closeAlert}>X</b>
                </div>
            </div>
        </>
    )
}

export default Alert
