import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Header from '../../Components/Header/Header';
import SearchNavbar from '../../Components/SearchNavbar/SearchNavbar';
import RestaurantCard from '../../Components/RestaurantCard/RestaurantCard';
import Footer from '../../Components/Footer/Footer';
//store
import {GetRestaurants} from '../../Store/actions/Restaurants';
//css
import { RestaurantsStyleBg} from './style'

class Restaurants extends React.Component{

    componentDidMount(){
        console.log(this.props);
        this.props.dispatch(GetRestaurants())
    }

    render(){
        return(
            <div >
                <Header/>
                <SearchNavbar/>
                < RestaurantsStyleBg>
                    <div className="restaurant-tabs">
                        <nav>
                            <ul className="navlink-header">
                                <Link to="/restaurants"><li>Restaurants</li></Link>
                                <Link to="/reviews"><li>Reviews</li></Link>
                                <Link to="/users"><li>Users</li></Link>
                            </ul>                
                        </nav>
                    </div>
                    <div className="restaurants-card">
                    {this.props.restaurants.length ? this.props.restaurants.map((data, index)=>
                        <RestaurantCard key={index} name ={data.name} city={data.city} id={data.id} image={data.image} price_level={data.price_level}/>): 'Loading'} 
                    </div>    
                </ RestaurantsStyleBg>           
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Restaurants: ",state.restaurants);
    return {
   restaurants: state.restaurants,
}};

export default connect(mapStateToProps)(Restaurants);