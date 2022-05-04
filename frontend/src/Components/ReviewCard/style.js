import styled from "styled-components";

export const ReviewCardStyle = styled.section`
width: 271px;
height:410px;
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
    padding-top: 10px;
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

.actions{
    display:flex;
    justify-content: center;
    /* border: 1px solid red; */
    padding-top: 5px;
    font-size:16px;
    font-family: Helvetica, sans-serif; 
    font-weight: 300;
    color:${props => props.theme.whiteColor};
    text-align:center;
    line-height:18.4px;
    width:100%;
    height:40px;
    
} 
.btn-like, .btn-comment{   
        background-color: #AFAFAF;
        margin:1px; 
        a{         
            p{
                margin:7px; 
                color:${props => props.theme.whiteColor};
            }
        }     
    }
.btn-like{
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 33px;
    border-radius: 30px 0px 0px 30px;
    width: 125px;
    /* border: 1px solid blue; */
}
.btn-comment{
    display: flex;
    height: 33px;
    width: 122px;
    border-radius: 0px 30px 30px 0px;
    /* border: 1px solid yellow; */
}


.img-like {
    margin-right: 5px;
    /* border: 1px solid yellow; */
}

.latest-comments {
    /* border: 1px solid yellow; */
    font-size: 20px;
    font-weight: 300;
    margin-top: 17px;
    padding-left: 10px;
}

.single-comment {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    margin-top: 19px;
    padding-left: 10px;
}

.colin {
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.mainColor};
}

.colin-comment {
    font-size: 14px;
    font-weight: 300;
}

`