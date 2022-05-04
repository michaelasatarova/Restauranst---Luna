import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

//components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

//style
import {NewRestaurantStyle} from './style'

const NewRestaurantSucess =()=>{

    const history = useHistory()

    // useEffect(() => {
    //     setInterval(()=>history.push('/new_restaurant'),3000)
    // }, []);

    return(
        <div>
            <Header/>
            <NewRestaurantStyle>    
                 <div className="container-sucess">
                     <p>Your restaurant was sucessfully created</p>
                </div>     
            </NewRestaurantStyle>
            <Footer/>
        </div>
    )
}

export default NewRestaurantSucess;