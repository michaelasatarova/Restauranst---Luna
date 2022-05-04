import React from 'react';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {store}  from '../../Store/index.js'
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantByIdAction } from '../../Store/actions/Restaurants';
import baseUrl from '../../Helpers/BaseUrl';

// Components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import RestaurantPageReviewRestaurant from '../../Components/RestaurantPageReviewRestaurant/RestaurantPageReviewRestaurant';

//css
import { RestaurantPageStyleBg, RestaurantPageStyle} from './style';
//3rd party
import StarRatingComponent from 'react-star-rating-component';

//img
import star from '../../Assets/svg-icons/star.svg';
import map from '../../Assets/images/map.png';
import pin from '../../Assets/svg-icons/pin.svg';
import phone from '../../Assets/svg-icons/phone.svg';
import web from '../../Assets/svg-icons/web.svg';
import clock from '../../Assets/svg-icons/clock.svg';
import price from '../../Assets/svg-icons/money.svg';

const RestaurantPage =(props)=>{

    const reviews = useSelector(state => state.reviews)
    const dispatch = useDispatch();
    const [restaurant, setRestaurant] = useState(null)
    const [rating, setRating] = useState(0);

    const onStarClick = (nextValue, prevValue, name) => {
        setRating(nextValue)
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
            < RestaurantPageStyleBg>
                <div className="restaurantName-and-reviews">
                    <h1>{restaurant.name}</h1>
                    <h2>Casual Dining & Bistro</h2> 
                    
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
                            
                        </div>
                        <div className="reviews">
                            <p>{restaurant.number_of_reviews} reviews</p>
                        </div>
                    </div>
                </div>   
                <div className="restaurant-page-contact-map">
                    <img src={map} alt="map" className="mapInRestaurantPage"/>
                    <div className="restaurant-page-contact">
                        <img src={pin} alt="localization" />
                        <p>Bahnhofstrasse 106</p>
                    </div>
                    <div className="restaurant-page-contact">
                        <img src={phone} alt="phone"/>
                        <p>+41 44 211 53 72</p>
                    </div>
                    <div className="restaurant-page-contact">
                        <img src={web} alt="website"/>
                        <a>leaderach.com</a>
                    </div>
                </div>
            </RestaurantPageStyleBg>  
            <RestaurantPageStyle>              
                <div className="restaurant-page-site-left">
                    <div className="filter">
                        <input type="search" placeholder="Filter list..."/>  
                        <button>Filter</button>                       
                    </div>
                    {restaurant.restaurant_review.length ? restaurant.restaurant_review.map((review) => 
                    <RestaurantPageReviewRestaurant key={review.id} review={review}/>) : "Loading..."}
                </div>
                <div className="restaurant-page-site-right">
                    <div className="working-time">
                        <img src={clock} alt="working time"/>
                        <p>Monday-Friday 9:00 am - 8:00 pm</p>
                    </div>
                    <div className="price">
                        <img src={price} alt="price"/>
                        <p>$$$</p>
                    </div>
                    <div className="btn-group">
                        <div className="btn-left">
                            <Link to={`/write_new_review/${props.match.params.id}`}>
                                <button>Write a review</button>
                            </Link>
                            {console.log('check the props', props)}         
                        </div>
                        <div className="btn-right">
                        <Link to="/new_restaurant">
                            <button>Edit data</button>
                        </Link>  
                        </div>
                    </div>
                </div>
            </RestaurantPageStyle>          
            <Footer/>
            </>}
        </div>
    )
}

export default RestaurantPage ;