import React from 'react';
import { useState} from 'react';
import useFormNewReview from '../../FormValidation/useFormNewReview';
import validateNewReview from '../../FormValidation/validateNewReview';
import { useDispatch, useSelector} from 'react-redux';
import { postNewReviewAction } from "../../Store/actions/Reviews";
import { useHistory} from 'react-router-dom';
import baseUrl from '../../Helpers/BaseUrl';
import { useEffect } from 'react';
import {store}  from '../../Store/index.js'


// Components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

//css
import { WriteNewReviewStyleBg, WriteNewReviewStyle} from './style';

//img
import star_nofill from '../../Assets/svg-icons/star_nofill.svg';

//3rd party
import StarRatingComponent from 'react-star-rating-component';


const WriteNewReview = (props) => {

    /* const{handleCreatedReview, handleReviewSubmit, createdReviews, errors, history} = useFormNewReview(validateNewReview); */
    const [rating, setRating] = useState(0);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [createdReviews, setCreatedReviews] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const token = useSelector(state => state.token);
    const [restaurant, setRestaurant] = useState(null)
    
    const onStarClick = (nextValue, prevValue, name) => {
        setRating(nextValue)
      };

    const handleCreatedReview = e => {
    const { value } = e.target;
    setCreatedReviews(value);
    console.log(createdReviews);
    };

    const handleReviewSubmit = (restaurant_id, history) => {
    
    setCreatedReviews('')
    dispatch(postNewReviewAction(rating, createdReviews, restaurant_id, history))
    
    setErrors(validateNewReview(createdReviews));
    setIsSubmitting(true);
    };

    useEffect(() => {
        const getRestaurantById = async () => {
         /*    setRestaurant(dispatch(getRestaurantByIdAction(props.match.params.id)));   */
            const token = store.getState().token;
            const headers = new Headers({
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            })
            const config = {
                method: "GET",
                headers: headers
            }
            const response = await fetch(`${baseUrl}/backend/api/restaurants/${props.match.params.id}`, config)
            const restaurant = await response.json() 
            setRestaurant(restaurant)
        } 
        getRestaurantById();
    }, [])

    return(
        <div >
            {console.log("restaurantvalue", restaurant)}
            {restaurant && <> 
            <Header/>
            < WriteNewReviewStyleBg>
                <div className="restaurantName-and-reviews">
                    <h1>{restaurant.name}</h1>
                    <h2>Casual Dining & Bistro</h2> 
                    
                    <div className="value-data">
                        <div className="stars-michi">
                            <StarRatingComponent 
                            name="rate1" 
                            starCount={5}
                            value={rating}
                            emptyStarColor="#fff"
                            renderStarIcon="50px"
                            onStarClick={ onStarClick }
                            />
                        </div>
                        <div className="reviews">
                            <p>{restaurant.number_of_reviews} reviews</p>
                        </div>
                    </div>
                </div>   
            </WriteNewReviewStyleBg> 
            <WriteNewReviewStyle>
                <div className="value-rating">
                    <div className="star-rating-comp">
                        <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={rating}
                        emptyStarColor="#fff"
                        renderStarIcon="50px"
                        onStarClick={ onStarClick }
                        />
                    </div>
                    <div className="rating-text">
                        <p>Select your rating</p>
                    </div>
                </div>
                <form onSubmit={ e => {e.preventDefault(); handleReviewSubmit(props.match.params.id, history)}  }>
                    <div className="review-box">
                        <input className="review-input" type="text" name="createdReviews" value= { createdReviews } onChange= { handleCreatedReview }
                            required placeholder="Your review helps others learn about great local businesses.">
                        </input>
                    </div>
                    <div className="submit-form" >
                        { console.log(errors) }
                        {errors.createdReviews &&<p className="errorMessage">{errors.createdReviews}</p>}
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
            </WriteNewReviewStyle>
            <Footer/>
            </>}
        </div>
    )
}

export default WriteNewReview ;