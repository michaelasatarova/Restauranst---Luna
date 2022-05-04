import React from 'react';

//img
import star from '../../Assets/svg-icons/star.svg';

//css
import {ReviewsComponentStyle} from '../Reviews/style';

const Restaurants =(props)=>{

    return(
        <ReviewsComponentStyle>
            <div className="reviews-header">
                <h1>{props.restaurant_name}</h1>
                <p>{props.date_created}</p> 
            </div>
            <div className="stars">
                {/* {props.rating.map((e, i) => <img src={star} alt="customers like this restaurant"/>)} */}
                {props.rating}<img src={star} alt="customers like this restaurant"/>        
                <p>Address: {props.city}</p>
                <p>Contact: {props.email}  {props.phone_number}</p>
                <p>Opening-hours: {props.opening_hours}</p>
                
            </div>
            <div className="lorem">
                <p>{props.text_content}</p>
            </div>
        </ReviewsComponentStyle>
        
    )
}
export default Restaurants;