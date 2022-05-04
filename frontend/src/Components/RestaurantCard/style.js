import styled from "styled-components";

export const RestaurantStyle = styled.section`
width: 271px;
height:410px;
margin:20px;
//padding-bottom:30px;
background-color:${props => props.theme.whiteColor};
border: 1px solid #EBEBEB;
border-top: 8px solid ${props => props.theme.mainColor};
border-radius:3px;


h1{
    font-size:20px;
    line-height:23px;
    padding:10px 10px;
}
h2{
    font-size:18px;
    line-height:20.7px;
    margin:7px 0;
    padding:0 10px;
}
.value-data{
    display:flex;
    justify-content:space-between;
    padding:0 10px;
    
    .stars{
        img{
            width:27px;
            fill:yellow;
            border:none;
            cursor: pointer;
        }
    }
    .price{
        p{
            font-size:20px;
            line-height:23px;
            font-weight:300;
        }
    }
    
}
.restaurant-img{
    width:269px;
    margin-top:30px;
}

`