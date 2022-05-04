import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

//Components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import About from '../../Components/About/About';
import AboutProfilHeader from '../../Components/AboutProfilHeader/AboutProfilHeader';
import {GetUserData} from '../../Store/actions/GetUserProfile';
//css
import {UserProfileReviewStyle, UserProfileReviewStyleBg} from './style'

//img
import User from '../../Assets/images/User.png';
import starWhite from '../../Assets/svg-icons/star-nocolor.svg';
import comment from '../../Assets/svg-icons/comment.svg';
import restaurant from '../../Assets/svg-icons/restaurant.svg';
import edit from '../../Assets/svg-icons/edit.svg';

class UserProfileComments extends Component{
    
    componentDidMount(){
        console.log('mounting in UserProfileComments');
        this.props.dispatch(GetUserData())
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
                <UserProfileReviewStyle >
                    
                        <div className="up-left">
                        {this.props.user_data ?<img src={this.props.user_data.profile_picture ? this.props.user_data.profile_picture : User }
                        className="user" alt="User Picture"/>:'Loading'}
                            <h1>{this.props.user_data.first_name}´s profile</h1>
                            <Link to="/user_profile_review">
                                <div className="up-col ">
                                    <img src={starWhite} alt="review"/>
                                    <p>Reviews</p>
                                </div>
                            </Link>
                            <Link to="/user_profile_comments">  
                                <div className="up-col active">
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
                            <h2>COMMENTS</h2>
                            <div className="profile-comments">
                                <div className="row">
                                    <h1>Review 1</h1> 
                                    <p>01.01.2018 15:22</p>
                                </div>
                                <p>This is horrible</p>
                            </div>
                            <div className="profile-comments">
                                <div className="row">
                                    <h1>Review 2</h1> 
                                    <p>01.01.2018 15:22</p>
                                </div>
                                <p>This is good idea!</p>
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
    return {
        token: state.token,
        user_data: state.user_data,       
}};
export default connect(mapStateToProps)(UserProfileComments);