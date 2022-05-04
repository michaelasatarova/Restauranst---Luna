import styled from "styled-components";

export const RestaurantReviewCardStyleMargin = styled.section`
margin:10px 20px;
`
export const RestaurantReviewCardStyle = styled.section`
display:flex;
justify-content:space-between;
max-width:650px;
background-color: ${props => props.theme.whiteColor};
border-bottom:4px solid ${props => props.theme.backgroundColor};

.review-credentials-data{
    display:flex;
    .name-and-reviews{
        margin: auto auto;
        padding-left:7px;        
        h1{
            font-size:23px;
            font-weight:700;
            color:${props => props.theme.mainColor};
            padding:5px 0;
            }
    }
}

.value-data{
    margin: auto auto;  
}

.date{
    padding:10px;
}

`
export const RestaurantReviewCardStyledDown = styled.section`
max-width:650px;
background-color: ${props => props.theme.whiteColor};
p{
    padding:10px;
}
.likes-and-comments{
    padding:10px;
    display:flex;
    justify-content:space-between;
    color:${props => props.theme.whiteColor};
    p{
        color:${props => props.theme.mainColor};
    }
    .btn-group{
        display:flex;
        .btn-left{
            display:flex;
            border-radius: 30px 0px 0px 30px;
            .i{
               margin:10px;
               margin-right:0;
            }
        }
        .btn-right{
            border-radius: 0px 30px 30px 0px;
        }
        .btn-left, .btn-right{   
            background-color:rgba(145, 145, 145, 0.6);
            margin:1px; 
            p{
                color:${props => props.theme.whiteColor};
                font-size:16px;
                cursor: pointer;
            }
        }
    }
}
`

export const RestaurantReviewCardStyledDropDown = styled.section`
 background-color: ${props => props.theme.whiteColor};
 position:relative;
 top:-50px;

.filter-drop-down{
 display:flex;
 justify-content:space-around;
 align-items:center;
 border-bottom:5px solid ${props => props.theme.backgroundColor};

 .searchInput{
     width:414px;
     height:31px;
     border:1px solid rgba(145, 145, 145, 0.6);
 }
 button{
    width:120px;
    height:31px 
 }
 p{
     font-size:18px;
     color:${props => props.theme.mainColor};
     
 }
}
@media (max-width: 650px) {
    .searchInput{
        max-width:300;
    }
}
`