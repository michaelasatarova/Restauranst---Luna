import React from 'react';

//css
import {RestaurantPageCommentsStyle} from './style'

const RestaurantPageComments =()=>{
    return(
        <RestaurantPageCommentsStyle>
            <div className="comment">
                <div className="comment-name">
                    <h1>Collin Wirz</h1>
                    <p>Actually you have no taste!</p>
                </div>
                <div className="comment-date">
                    <p>01.01.2018 15:22</p>
                </div>
            </div>
        </RestaurantPageCommentsStyle> 
    )
}
export default RestaurantPageComments;