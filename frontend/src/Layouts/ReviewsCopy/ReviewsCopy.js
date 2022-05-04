import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

// Components
import Header from '../../Components/Header/Header';
import SearchNavbar from '../../Components/SearchNavbar/SearchNavbar';
import UserCard from '../../Components/UserCard/UserCard';
import Footer from '../../Components/Footer/Footer';

//css
import { ReviewsCopyStyleBg} from './style'

//store
import {getAllReviews} from '../../Store/actions/Reviews';

class ReviewsCopy extends React.Component{

    componentDidMount(){
        console.log(this.props);
        this.props.dispatch(getAllReviews())
    }

    render(){
    return(
        <div >
            <Header/>
            <SearchNavbar/>
            < ReviewsCopyStyleBg>
                <div className="restaurant-tabs">
                    <nav>
                        <ul className="navlink-header">
                            <Link to="/restaurants"><li>Restaurants</li></Link>
                            <Link to="/reviews"><li>Reviews</li></Link>
                            <Link to="/users"><li>Users</li></Link>
                        </ul>                
                    </nav>
                </div>
                <div className="user-card">
{/*                     {this.props.reviews.length ? this.props.reviews.map((data, index)=>
                    <UserCard key={index} user ={data.user} likes={data.likes} id={data.id} text_content={data.text_content}/>): 'Loading'}  */}
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                </div>      
            </ ReviewsCopyStyleBg>           
            <Footer/>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    console.log("Reviews: ",state.reviews);
    return {
        reviews: state.reviews,
}};

export default connect(mapStateToProps)(ReviewsCopy);