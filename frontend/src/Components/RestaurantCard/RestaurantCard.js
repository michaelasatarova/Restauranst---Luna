import React from "react";
import {Link} from 'react-router-dom';
//styles
import {RestaurantStyle} from './style';
 
//images
import restaurant1 from '../../Assets/images/restaurant1.png';
import star from '../../Assets/svg-icons/star.svg';

const RestaurantCard =(props)=>{

    return(
        <RestaurantStyle>
            <Link to ={`/restaurant_page/${props.id}`}>
            <div className="restaurant">
             
                <h1>{props.name}</h1>
                <h2>{props.city}</h2>
                <div className="value-data">
                    <div className="stars">
                        <img src={star} alt="customers like this restaurant"/>
                        <img src={star} alt="customers like this restaurant"/>
                        <img src={star} alt="customers like this restaurant"/>
                        <img src={star} alt="customers like this restaurant"/>
                        <img src={star} alt="customers like this restaurant"/>
                        
                    </div>
                    <div className="price">
                        <p>{props.price_level}</p>
                    </div>
                </div>
                <img src={props.image ? props.image : restaurant1} alt="restaurant" className="restaurant-img"/>
            </div>
            </Link>
        </RestaurantStyle>
    )
}

export default RestaurantCard;