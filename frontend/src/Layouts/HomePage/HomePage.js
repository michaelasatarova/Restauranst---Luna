import React from 'react';
import {connect} from 'react-redux';

// Components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import RestaurantCard from '../../Components/RestaurantCard/RestaurantCard';

//store
import {GetRestaurants} from '../../Store/actions/Restaurants';
//css
import {RestaurantStyleBg, RestaurantStyle, OrangeButtonStyle} from './style';

class HomePage extends React.Component{
    
    componentDidMount(){
        console.log(this.props);
        this.props.dispatch(GetRestaurants())
    }

    render(){
        return(
            <div >
                <Header/>
                <RestaurantStyleBg>
                    <input type="search" placeholder="Search..."/>
                    <OrangeButtonStyle>
                        <button>Search</button>
                    </OrangeButtonStyle>               
                </RestaurantStyleBg>
                <RestaurantStyle>
                    <h3><span>BEST RATED RESTAURANTS </span></h3>
                    <div className="best-restaurents-card">

                    {this.props.restaurants.length ? this.props.restaurants.slice(0, 4).map((data, index)=>
                        <RestaurantCard key={index} name ={data.name} city={data.city} image={data.image} price_level={data.price_level}/>): 'Loading'} 

                        
                    </div>          
                </RestaurantStyle>
                
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

export default connect(mapStateToProps)(HomePage);