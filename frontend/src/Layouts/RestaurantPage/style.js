import styled from "styled-components";
import restaurantPageBg from '../../Assets/images/chocolate.jpg';

export const RestaurantPageStyleBg = styled.section`
background-image:url(${restaurantPageBg});
background-repeat: no-repeat;
background-size: cover;
background-position:60% 40%;
height:500px;
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
        align-items:center;
        font-size: 30px;
    }
    .reviews{
        padding-left:10px;
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


@media (max-width: 873px) {
flex-direction:column;
height:550px;
align-items:center;
.restaurant-page-contact-map{
    position:relative;
    margin:0 auto;
}
}
`

export const RestaurantPageStyle = styled.section`
display:flex;
flex-direction:row;
background-color:${props => props.theme.backgroundColor};
justify-content:center;

.restaurant-page-site-left{
    .filter{
        margin:20px;
        max-width:650px;
        display:flex;
        justify-content:space-between;
    }
    input{
        width:510px;
        height:40px;
        border-radius:3px;
        padding:10px;
        border: none;
        outline:none;
    }
    button{
        width:120px;
        height:40px;
        border-radius:28px;
        color:${props => props.theme.whiteColor};
        background-color:${props => props.theme.mainColor};
        border: none;
        outline:none;
    }
}

.restaurant-page-site-right{
    padding:20px;
    width:508px;
    background-color:${props => props.theme.backgroundColor2};
    .working-time, .price, .btn-group{
        display:flex;
        img, p{
            padding:10px;
        }
    }
    .working-time{
        border-bottom:1px solid rgba(145,145,145,0.6);
    }
    .btn-group{
        display:flex;
        justify-content:space-between;
        margin:20px 10px;

        .btn-left, .btn-right{
            button{
                background-color:${props => props.theme.mainColor};
                border: none;
                outline:none;
                width:200px;
                height:39px;
                border-radius:28px;
                color:${props => props.theme.whiteColor};
                font-size:16px;
                font-weight:400px;
                cursor: pointer;
            }
        }
    }
}

@media (max-width: 1200px) {
    flex-direction:column;
    align-items:center;
}
@media (max-width: 650px) {
    .filter{
        max-width:450px;
        input{
            max-width:300px;
        }
    }
}
`