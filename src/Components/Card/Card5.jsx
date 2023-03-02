import React from 'react'

const Card5 = ({data}) => {
    return (
        <>
            <div className="acourse1121">
                <div className="abcourse">
                    <img src="/static/images3/Rectangle 1302.png" alt="" />
                </div>
                <div className="acourse11211">
                    <div className="acourse112111">
                        {/* <img src="/static/images3/Ellipse 20.png" alt="" /> */}
                        <img src={data.image_url} alt="" />
                    </div>
                </div>
                <div className="acourse11212">
                    <h5>{data.title}</h5>
                    <p>{data.description}</p>
                </div>
            </div>
        </>
    )
}

export default Card5;
