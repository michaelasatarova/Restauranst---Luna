import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import HomePage from '../Layouts/HomePage/HomePage';
import RestaurantPage from '../Layouts/RestaurantPage/RestaurantPage';
import RegistrationPage from '../Layouts/RegistrationPage/RegistrationPage';
import RegistrationMessagePage from '../Layouts/RegistrationMessagePage/RegistrationMessagePage';
import RegistrationValidationPage from '../Layouts/RegistrationValidationPage/RegistrationValidationPage';
import LoginPage from '../Layouts/LoginPage/LoginPage';
import UserProfileReview from '../Layouts/UserProfile/UserProfileReview';
import UserProfileComments from '../Layouts/UserProfile/UserProfileComents';
import UserProfileRestaurants from '../Layouts/UserProfile/UserProfileRestaurants';
import UserProfileEditProfile from '../Layouts/UserProfile/UserProfileEditProfile';
import Restaurants from '../Layouts/Restaurants/Restaurants';
import Reviews from '../Layouts/Reviews/Reviews';
import ReviewsCopy from '../Layouts/ReviewsCopy/ReviewsCopy';
import NewRestaurant from '../Layouts/NewRestaurant/NewRestaurant';
import NewRestaurantSucess from '../Layouts/NewRestaurant/NewRestaurantSucess';
import WriteNewReview from '../Layouts/WriteNewReview/WriteNewReview';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/restaurant_page/:id' component={RestaurantPage} />
                <Route path='/registration_page' component={RegistrationPage} />
                <Route path='/registrationMessage_page' component={RegistrationMessagePage} />
                <Route path='/registrationValidation_page' component={RegistrationValidationPage} />
                <Route path='/login_page' component={LoginPage} />
                <Route path='/user_profile_review' component={UserProfileReview} />
                <Route path='/user_profile_comments' component={UserProfileComments} />
                <Route path='/user_profile_restaurants' component={UserProfileRestaurants} />
                <Route path='/user_profile_edit_profile' component={UserProfileEditProfile} />
                <Route path='/restaurants' component={Restaurants} />
                <Route path='/reviews' exact component={Reviews} />
                <Route path='/users' component={ReviewsCopy} />
                <Route path='/new_restaurant' component={NewRestaurant} />
                <Route path='/new_restaurant_sucess' component={NewRestaurantSucess} />
                <Route path='/write_new_review' exact component={WriteNewReview} />
                <Route path='/write_new_review/:id' component={WriteNewReview} />
            </Switch>
        </Router>
    );
};

export default Routes;
