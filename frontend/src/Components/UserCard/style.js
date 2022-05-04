import styled from "styled-components";

export const UserCardStyle = styled.section`
width: 271px;
height:182px;
margin:20px;
display: flex;
flex-direction: column;

background-color:${props => props.theme.whiteColor};
border: 1px solid #EBEBEB;
border-top: 8px solid ${props => props.theme.mainColor};
border-radius:3px;

.review-header {
    display: flex;
    /* border: 1px solid red; */
    height: 52px;
    border-bottom: 1px solid ${props => props.theme.secondaryColor};
}

.name-box{
    display: flex;
    padding-left: 10px;
    flex-direction: column;
    justify-content: space-evenly;

}

.reviewer-name {
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.mainColor}
}

.amount-reviews {
    font-size: 14px;
    font-weight: 700;
    color: #3B3B3B;
}

.restaurant-description {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 140px;
    /* border: 1px solid green; */
    padding-left: 11px;
}

.restaurant-name {
    padding-top: 14px;
    color: ${props => props.theme.mainColor};
    font-weight: 700;
}

.text-field {
    padding-top: 15px;
    width: 245px;
    /* border: 1px solid red; */
    line-height: 16px;
}
.text-review {
    color: #3B3B3B;
    font-weight: 700;
    font-size: 14px;
}

.read-more {
    color: ${props => props.theme.mainColor};
    font-weight: 700;
    font-size: 14px;
}


`