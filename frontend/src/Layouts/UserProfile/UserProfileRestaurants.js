import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

//Components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Restaurants from '../../Components/Restaurants/Restaurants';
import About from '../../Components/About/About';
import AboutProfilHeader from '../../Components/AboutProfilHeader/AboutProfilHeader';
import {GetUserData} from '../../Store/actions/GetUserProfile';
import {GetUserRestaurants} from '../../Store/actions/GetUserRestaurants';

//css
import {UserProfileReviewStyle, UserProfileReviewStyleBg} from './style'

//img
import User from '../../Assets/images/User.png';
import starWhite from '../../Assets/svg-icons/star-nocolor.svg'
import comment from '../../Assets/svg-icons/comment.svg';
import restaurant from '../../Assets/svg-icons/restaurant.svg';
import edit from '../../Assets/svg-icons/edit.svg';

class UserProfileReview extends Component{
    
    componentDidMount(){
        console.log('mounting in UserProfileRestaurant');
        this.props.dispatch(GetUserData())
        this.props.dispatch(GetUserRestaurants())
    }

    getCurrentDate(arg){ 
        let d = new Date(arg),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [day, month, year].join('.');
      }
    
      render(){        
       return(
            <div>
            <Header/>
                <UserProfileReviewStyleBg>
                    {this.props.user_data ? <AboutProfilHeader name={this.props.user_data.first_name +" "+ this.props.user_data.last_name}
                    location={this.props.user_data.location}/>:'Loading' }        
                </UserProfileReviewStyleBg>
                <UserProfileReviewStyle className="restaurant-h">
            
                <div className="up-left">
                        {this.props.user_data ?<img src={this.props.user_data.profile_picture ? this.props.user_data.profile_picture : User } 
                         className="user" alt="User Picture"/>:'Loading'}
                        <h1>{this.props.user_data.first_name}´s profile</h1>
                        <Link to="/user_profile_review">
                            <div className="up-col  ">
                                <img src={starWhite} alt="review"/>
                                <p>Reviews</p>
                            </div>
                        </Link>
                        <Link to="/user_profile_comments">  
                            <div className="up-col ">
                                <img src={comment} alt="comment"/>
                                <p>Comments</p>
                            </div>
                        </Link> 
                        <Link to="/user_profile_restaurants">   
                            <div className="up-col active">
                                <img src={restaurant} alt="restaurant"/>
                                <p>Restaurant</p>
                            </div>
                        </Link>
                        <Link to="/user_profile_edit_profile">
                            <div className="up-col">
                                <img src={edit} alt="Edit profile"/>
                                <p>Edit Profile</p>
                            </div>
                        </Link>
                    </div>

                    <div className="up-middle">
                        <h2>RESTAURANTS</h2>
                        {this.props.user_restaurants.map((data, index)=><Restaurants key={index} restaurant_name={data.name} city={data.city} email={data.email} 
                        phone_number={data.phone_number} opening_hours={data.opening_hours}/>)}
                        
                        <div className="create-rest-btn">
                        <Link to="/new_restaurant">
                            <button>Create Restaurant</button>
                        </Link>
                        </div>
                        
                    </div>
                    
                    <div className="up-right">
                        {this.props.user_data ? <About location={this.props.user_data.location} created={this.getCurrentDate(this.props.user_data.created) } 
                        first_name={this.props.user_data.first_name} things_user_love={this.props.user_data.things_user_love} description={this.props.user_data.description}/>:'Loading'}
                    </div>
                </UserProfileReviewStyle>   
            <Footer/>
            </div>
        )}
}
const mapStateToProps = (state) => {
    console.log("User: ",state.user_data);
    console.log("User-restaurants: ",state.user_restaurants);
    return {
        token: state.token,
        user_data: state.user_data, 
        user_restaurants: state.user_restaurants,      
}};

export default connect(mapStateToProps)(UserProfileReview);