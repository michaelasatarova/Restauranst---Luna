import styled from "styled-components";

export const RestaurantPageCommentsStyle = styled.section`

.comment{
    display:flex;
    justify-content:space-between;
    padding:10px;
    border-bottom:5px solid ${props => props.theme.backgroundColor};
    .comment-name{      
        h1{
            color:${props => props.theme.mainColor};
            font-size:14px;
            font-weight:700;
        }   
        p{
            font-size:14px;
            font-weight:300; 
        }
    }
    .comment-date{
        font-size:12px;
        font-weight:300; 
    }
}
`