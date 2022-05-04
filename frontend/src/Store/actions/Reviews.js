
import baseUrl from '../../Helpers/BaseUrl'
import { useHistory } from 'react-router-dom';

export const reviewAction = (reviews) => {
    return {
        type: "GET_REVIEWS",
        payload: reviews,
    };
};

// Get the list of the reviews for single restaurant
export const getAllReviewsOfRestaurantAction = (restaurant_id) => (dispatch, getState) => {
    const token = getState().token;
    const headers = new Headers({
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    })
    const config = {
        method: "GET",
        headers: headers
    }
    fetch(`${baseUrl}/backend/api/reviews/restaurant/${restaurant_id}`, config)
        .then((response) => response.json())
         .then((reviews) => dispatch(reviewAction(reviews)));
}

// Get a list of all the reviews
export const getAllReviewsAction = () => (dispatch, getState) => {
    const token = getState().token;
    const headers = new Headers({
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    })
    const config = {
        method: "GET",
        headers: headers
    }
    fetch('https://luna-aries.propulsion-learn.ch/backend/api/reviews/ ', config)
        .then((response) => response.json())
         .then((reviews) => dispatch(reviewAction(reviews)));
}

// Get all the reviews
export const getAllReviews = () => (dispatch, getState) => {
    const token = getState().token
    const config={
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          }),
    };
    console.log(baseUrl)
    fetch(`${baseUrl}/backend/api/reviews/`, config)
        .then(response => response.json())
        .then((data)=>{
            console.log(data);
         dispatch({type: 'GET_REVIEWS', payload: data})
        });
        
}

// create a new review
export const postNewReviewAction = (rating, createdReviews, restaurant_id, history) => (dispatch, getState) => {
    const token = getState().token;
    const headers = new Headers ({
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    })
    const config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({text_content: createdReviews, rating}),
    }

    fetch(`${baseUrl}/backend/api/reviews/new/${restaurant_id}/`, config)
        .then((res) => res.json())
            .then((data) => {
                history.push(`/restaurant_page/${restaurant_id}/`);
                }
            ); 
}