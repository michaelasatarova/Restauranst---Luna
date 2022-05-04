import React,{useEffect}  from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


//Components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import About from '../../Components/About/About';
import AboutProfilHeader from '../../Components/AboutProfilHeader/AboutProfilHeader';
import {GetUserData} from '../../Store/actions/GetUserProfile';


//function for validation
import useFormProfile from '../../FormValidation/useFormProfile';
import validateProfile from '../../FormValidation/validateProfile';

//css
import {UserProfileEditStyle, UserProfileReviewStyleBg} from './style'

//img
import User from '../../Assets/images/User.png';
import starWhite from '../../Assets/svg-icons/star-nocolor.svg';
import comment from '../../Assets/svg-icons/comment.svg';
import restaurant from '../../Assets/svg-icons/restaurant.svg';
import edit from '../../Assets/svg-icons/edit.svg';

const UserProfileEditProfile =()=>{
    
    //data from seFormProfile Component
    const{handleChange, handleSubmit, values, errors} = useFormProfile(validateProfile);
    const dispatch = useDispatch()
    
    useEffect(() => {
        console.log('mounting in UserProfileEdit');
        dispatch(GetUserData())
    }, [])

    let user_data = useSelector(state => state.user_data)

    function getCurrentDate(arg){ 
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
    
    return(
        <div >
           <Header/>
             <UserProfileReviewStyleBg>
                  <AboutProfilHeader name={user_data.first_name + " " + user_data.last_name} location={user_data.location}/>    
             </UserProfileReviewStyleBg>
            
            <UserProfileEditStyle>            
                    <div className="up-left">
                                {user_data ?<img src={user_data.profile_picture ? user_data.profile_picture : User } 
                                className="user" alt="User Picture"/>:'Loading'}
                            <h1>{user_data.first_name}´s profile</h1>
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
                                <div className="up-col">
                                    <img src={restaurant} alt="restaurant"/>
                                    <p>Restaurant</p>
                                </div>
                            </Link>
                            <Link to="/user_profile_edit_profile">
                                <div className="up-col active">
                                    <img src={edit} alt="Edit profile"/>
                                    <p>Edit Profile</p>
                                </div>
                            </Link>
                        </div>

                        <div className="up-middle">
                            <h2>EDIT USER PROFILE</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-col">
                                    <label for="Username">Username</label>
                                    <input type="text" name="username" value={values.username} onChange={handleChange}/>
                                    {errors.username &&<p className="errorMessage">{errors.username}</p>}
                                </div>
                                <div className="form-col">
                                    <label for="First Name">First Name</label>
                                    <input type="text" name="firstName"  value={values.firstName} onChange={handleChange}/>
                                    {errors.firstName &&<p className="errorMessage">{errors.firstName}</p>}
                                </div>
                                <div className="form-col">
                                    <label for="Last Name">Last Name</label>
                                    <input type="text" name="lastName" value={values.lastName} onChange={handleChange}/>
                                    {errors.lastName &&<p className="errorMessage">{errors.lastName}</p>}
                                </div>
                            <div className="form-col">
                                <label for="Email">Email</label>
                                    <input type="email" name="email" value={values.email} onChange={handleChange}/>
                                    {errors.email &&<p className="errorMessage">{errors.email}</p>}
                            </div>
                                <div className="form-col">
                                    <label for="Location">Location</label>
                                    <input type="text" name="location" value={values.location} onChange={handleChange}/>
                                    {errors.username &&<p className="errorMessage">{errors.username}</p>}
                                </div>
                                <div className="form-col">
                                    <label for="Phone">Phone</label>
                                    <input type="tel" name="tel" value={values.tel} onChange={handleChange}/>
                                    {errors.tel &&<p className="errorMessage">{errors.tel}</p>}
                                </div>
                                <div className="form-col">
                                    <label for="Things I Love">Things I Love</label>
                                    <input type="text"/>
                                </div>
                                <div className="form-col">
                                    <label for="Description">Description</label>
                                    <textarea  id="" cols="30" rows="5" name="description" value={values.description} onChange={handleChange}></textarea>
                                    {errors.description &&<p className="errorMessage">{errors.description}</p>}
                                </div> 
                                <div className="form-btns">
                                    <button className="btn-save" onSubmit={handleSubmit}>Save</button>
                                    <button className="btn-delete">Delete Account</button>
                                </div>                    
                            </form>
                            
                        </div>
                        <div className="up-right">
                            {user_data? <About location={user_data.location} description={user_data.description} first_name={user_data.first_name}
                            created={getCurrentDate(user_data.created)}/>:'loading'}
                        </div>                      
             </UserProfileEditStyle>   
           <Footer/>
        </div>
    )
}


export default UserProfileEditProfile;