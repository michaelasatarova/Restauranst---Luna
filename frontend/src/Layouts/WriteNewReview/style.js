import styled from "styled-components";
/* import restaurantPageBg from '../../Assets/images/restaurant-page-bg.webp'; */
import restaurantPageBg from '../../Assets/images/chocolate.jpg';

export const WriteNewReviewStyleBg = styled.section`
background-image:url(${restaurantPageBg});
background-repeat: no-repeat;
background-size: cover;
height:204px;
display:flex;



.restaurantName-and-reviews{
     color:${props => props.theme.whiteColor};
     width:100vw;
     height:204px;
     background-color:#323232;
     opacity:.5;
     
    h1{
        margin-left:5%;
        margin-top:40px;
        font-size:30px;
        font-weight:700;
        line-height:34.5px;
    }

    h2{
        font-size:24px;
        font-weight:300;
        line-height:27.6px;
        margin-left:5%;
        padding:10px 0;
    }
    .value-data{
        display:flex;
        margin-left:5%;
        font-size: 30px;
        align-items:center;
    }
    .reviews{
        padding-left:10px;
        font-size: 20px
    }
}


.restaurant-page-contact-map{
    background-color:${props => props.theme.whiteColor};
    width:361px;
    position: absolute;
    right:5%;
    margin-top:40px;
    border-radius:3px;
    .mapInRestaurantPage{
        width:361px;
        border-radius:3px 3px 0px 0px;
    }
    .restaurant-page-contact{
        display:flex;
        padding:10px;
        a,img, p{
            padding:10px;
        }
    }
}
`
export const WriteNewReviewStyle = styled.section`
display:flex;
height: 58vh;
flex-direction:column;
align-items: center;
background-color:${props => props.theme.backgroundColor};
justify-content:flex-start;
/* border: 1px solid green; */

.value-rating{
    width: 832px;
    height: auto;
    display:flex;
    padding-top: 50px;
    align-items:center;
    margin-left: 50px;
    font-size: 30px;
    /* border: 1px solid red; */
}


.stars-michi {
    width: auto;
    padding-left: 40px;
    /* border: 1px solid red; */
}

.rating-text{
    padding-left:30px;
    color: #6B6B6B;
    font-size: 20px;
}


.review-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 260px;
    width: 832px;
    margin-top: 15px;
    background-color: white;
    /* border: 1px solid blue; */
}

.review-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 800px;
    height: auto;
    font-size: 20px;
    padding-left: 20px;
    padding-top: 20px;
    background-color: white;
    border: none;
}

.submit-form {
    display: flex;
    width: 834px;
    padding-top: 8.5px;
    justify-content: space-between;
    /* border: 1px solid blue; */
}

.errorMessage {
    color: red;
}

.required {
    color: #9E0003;
}
.submit-btn {
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
`

