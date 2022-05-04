import styled from "styled-components";

export const ReviewsComponentStyle = styled.section`

.reviews-header{
    display:flex;
    justify-content: space-between;
    padding:10px;
    h1{
        font-size:20px;
        font-weight:400;
    } 
    p{
        font-size:13px;
        font-weight:300;
    }
    }

.stars, .lorem{
        margin:0px 10px ;
    }
    .lorem{
        padding-bottom:10px ;
        margin-top:5px;
        text-align:justify;
        border-bottom: 1px solid ${props => props.theme.darkbackground};
    }
`