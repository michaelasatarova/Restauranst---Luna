import React from 'react';
import {UserProfileAboutStyle} from './style'

const About =(props)=>{
    return(
        <UserProfileAboutStyle>
            <div className="up-right">
                <h1>ABOUT {props.first_name}</h1>
                <div className="about-data">
                    <h3>Location</h3>
                    <p>{props.location}</p>
                </div>
                <div className="about-data">
                    <h3>Luna member since</h3>
                    <p>{props.created}</p>
                </div>
                <div className="about-data">
                    <h3>Things I love</h3>
                    <p>{props.things_user_love}</p>
                </div>
                <div className="about-data">
                    <h3>Description</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </UserProfileAboutStyle>
    )
}
export default About;