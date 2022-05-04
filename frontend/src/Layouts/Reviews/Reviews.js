import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Header from '../../Components/Header/Header';
import SearchNavbar from '../../Components/SearchNavbar/SearchNavbar';
import ReviewCard from '../../Components/ReviewCard/ReviewCard';
import Footer from '../../Components/Footer/Footer';

//css
import { ReviewsStyleBg} from './style'

const Reviews =()=>{
    return(
        <div >
            <Header/>
            <SearchNavbar/>
            < ReviewsStyleBg>
                <div className="restaurant-tabs">
                    <nav>
                        <ul className="navlink-header">
                            <Link to="/restaurants"><li>Restaurants</li></Link>
                            <Link to="/reviews"><li>Reviews</li></Link>
                            <Link to="/users"><li>Users</li></Link>
                        </ul>                
                    </nav>
                </div>
                <div className="review-card">
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                </div>     
            </ ReviewsStyleBg>           
            <Footer/>
        </div>
    )
}

export default Reviews ;