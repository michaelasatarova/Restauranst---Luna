import styled from "styled-components";
import restaurantBg from '../../Assets/images/restaurant-bg.webp';

export const RestaurantStyleBg = styled.section`
height:351px;
width: 100vw;
background-image:url(${restaurantBg});
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
display:flex;
align-items:center;
justify-content:center;

input{
    width:530px;
    height:55px;
    border-radius: 3px;
    font-size:20px;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    padding-left: 10px;
}
}
@media (max-width: 580px) {
    input{
        height:30px;
        font-size:15px
    }
}

`
export const OrangeButtonStyle = styled.section`
button{
    width:200px;
    height:58px;
    border-radius:28px;
    background-color:${props => props.theme.mainColor}; 
    color:${props => props.theme.whiteColor};
    border: none;
    outline:none;
    margin-left:10px;
    cursor: pointer;
    font-size:20px;
    line-height:23px;
}

@media (max-width: 580px) {
    button{
        height:30px;
        font-size:15px;
        max-width:100px;
    }
}
`

export const RestaurantStyle = styled.section`
height:63vh;
background-color:${props => props.theme.backgroundColor};
//padding-bottom:50px;

h3{ 
    text-align:center;
    margin-bottom:42px;
    padding: 20px;
    span{
        padding:10px;
        border-bottom:3px solid ${props => props.theme.mainColor};  
        font-size:24px;
        font-weight:700;
        line-height:27.6px;            
    }
}
.best-restaurents-card{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
}

@media screen and (max-width: 400px) {
    h3{
        span{
        border-bottom:none;
        } 
    } 
}
`