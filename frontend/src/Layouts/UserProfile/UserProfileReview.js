import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

//Components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Reviews from '../../Components/Reviews/Reviews';
import About from '../../Components/About/About';
import AboutProfilHeader from '../../Components/AboutProfilHeader/AboutProfilHeader';
import {GetUserData} from '../../Store/actions/GetUserProfile';
import {GetUserReview} from '../../Store/actions/GetUserReview';

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
        console.log('mounting in UserProfileReview');
        this.props.dispatch(GetUserData())
        this.props.dispatch(GetUserReview())
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
            {this.props.user_data ?
                <UserProfileReviewStyleBg>     
                    <AboutProfilHeader name={this.props.user_data.first_name +" " +this.props.user_data.last_name}
                    location={this.props.user_data.location}/>             
                </UserProfileReviewStyleBg>:'Loading'}
                
                {this.props.user_data ?
                <UserProfileReviewStyle className="reviews-h">
                <div className="up-left">
                        <img src={this.props.user_data.profile_picture ? this.props.user_data.profile_picture : User } 
                         className="user" alt="User Picture"/>
                        <h1>{this.props.user_data.first_name}´s profile</h1>
                        <Link to="/user_profile_review">
                            <div className="up-col active ">
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
                            <div className="up-col">
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
                        <h2>REVIEWS</h2>
                        {this.props.user_reviews.map((data, index)=><Reviews key={index} text_content={data.text_content} restaurant_name={data.restaurant.name}
                        date_created={this.getCurrentDate(data.date_created)} rating={data.rating}/> )}
                        
                    </div>
                    <div className="up-right">
                         <About location={this.props.user_data.location} created={this.getCurrentDate(this.props.user_data.created)} 
                        things_user_love={this.props.user_data.things_user_love} description={this.props.user_data.description} first_name={this.props.user_data.first_name}/>
                    </div>
                </UserProfileReviewStyle>:'Loading' }     
            <Footer/>
            </div>
        )}
}
const mapStateToProps = (state) => {
    console.log("User: ",state.user_data);
    console.log("User-review: ",state.user_reviews);
    return {
        token: state.token,
        user_data: state.user_data,   
        user_reviews: state.user_reviews,   
}};


export default connect(mapStateToProps)(UserProfileReview);