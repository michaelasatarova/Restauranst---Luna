import React, {useState} from 'react';
import RestaurantPageComments from '../RestaurantPageComments/RestaurantPageComments'
//css
 import {RestaurantReviewCardStyle, RestaurantReviewCardStyledDown, RestaurantReviewCardStyleMargin, RestaurantReviewCardStyledDropDown} from './style'

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

//img
import star from '../../Assets/svg-icons/star.svg';
import laurentH from '../../Assets/images/laurentH.png';

//3rd party
import StarRatingComponent from 'react-star-rating-component';



const RestaurantPageReviewRestaurant =({ review })=>{
    const[collapseComments,setCollapseComments] = useState(false)
    const [rating, setRating] = useState(0);

    const onStarClick = (nextValue, prevValue, name) => {
        setRating(nextValue)
      };

    return(
        <RestaurantReviewCardStyleMargin>
            <RestaurantReviewCardStyle>
            <div className="review-credentials-data">
                <img src={laurentH} alt="customer review"/>
                    <div className="name-and-reviews">             
                        <h1>{review.user.first_name}</h1>
                        <p>{review.number_of_reviews} reviews in total</p>
                    </div>
            </div>
            

            <div className="value-data">
                    <div className="stars">
                    <StarRatingComponent 
                            name="rate1" 
                            starCount={5}
                            value={rating}
                            emptyStarColor="#fff"
                            renderStarIcon="50px"
                            onStarClick={ onStarClick }
                            />
                        <img src={star} alt="customers like this restaurant"/>
                        <img src={star} alt="customers like this restaurant"/>
                        <img src={star} alt="customers like this restaurant"/>
                        <img src={star} alt="customers like this restaurant"/>
                        <img src={star} alt="customers like this restaurant"/>           
                    </div>
                </div>
                <div className="date">
                    <p>01.01.2018 15:22</p>
                </div>
            </RestaurantReviewCardStyle>          
            <RestaurantReviewCardStyledDown>
                <p>{review.text_content}</p>     
                <div className="likes-and-comments">
                    <div className="btn-group">
                        <div className="btn-left">
                            <FontAwesomeIcon className="i" icon={faThumbsUp} size = '1x' />
                            <p>Like 63</p> 
                        </div>
                        <div className="btn-right">
                            <p>Comment 23</p>
                        </div>
                    </div>
                    <p onClick={()=>{setCollapseComments(prev=> !prev)}}>View all comments</p>
                </div>
            </RestaurantReviewCardStyledDown>

            {collapseComments === true ?
            <RestaurantReviewCardStyledDropDown>
                <div className="filter-drop-down">
                    <input type="search" className="searchInput" placeholder="Type something here"/>
                    <button>Post</button>
                    <p onClick={()=>{setCollapseComments(prev=> !prev)}}>Hide</p>
                </div>
                <RestaurantPageComments/>
                <RestaurantPageComments/>
                <RestaurantPageComments/>    
            </RestaurantReviewCardStyledDropDown>: null
                  }
        </RestaurantReviewCardStyleMargin>  
    )
}

export default RestaurantPageReviewRestaurant ;