import React from 'react'

const AboutProfilHeader = (props) => {
    return (
        <div className="black-overlay">
            <div className="profile-data">
                <h1>{props.name}</h1>
                <p>{props.location}</p> 
                <p>6 reviews</p> 
                <p>210 comments</p> 
            </div>
        </div>  
    )
}

export default AboutProfilHeader
