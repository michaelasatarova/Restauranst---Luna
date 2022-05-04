import React from "react";

//styles
import {UserCardStyle} from './style';
 
//images
import person1 from '../../Assets/images/person1.png';

const UserCard =()=>{

    return(
        <UserCardStyle>
            <div className="review-header">
                <img src={ person1 } height="50px"alt="reviewer"/>
                <div className="name-box">
                    <h1 className="reviewer-name">Laurent H.</h1>
                    <h2 className="amount-reviews">6 Reviews in total</h2>
                </div>
            </div>
            <div className="restaurant-description">
                <div className="text-field">
                    <span className="text-review">Im professional photographer with an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes... </span>
                    <span className="read-more">read more</span>
                </div>
            </div>
        </UserCardStyle>
    )
}

export default UserCard;