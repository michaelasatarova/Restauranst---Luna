import React from 'react';

//img
import star from '../../Assets/svg-icons/star.svg';

//css
import {ReviewsComponentStyle} from './style';

const Reviews =(props)=>{

    return(
        <ReviewsComponentStyle>
            <div className="reviews-header">
                <h1>{props.restaurant_name}</h1>
                <p>{props.date_created}</p> 
            </div>
            <div className="stars">
                {/* {props.rating.map((e, i) => <img src={star} alt="customers like this restaurant"/>)} */}
                {props.rating}<img src={star} alt="customers like this restaurant"/>        
                
                
            </div>
            <div className="lorem">
                <p>{props.text_content}</p>
            </div>
        </ReviewsComponentStyle>
        
    )
}
export default Reviews;