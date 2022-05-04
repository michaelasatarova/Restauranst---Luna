import styled from "styled-components";

export const ReviewsCopyStyleBg = styled.section`
height: 76vh;
width: 100%;
/* border: 1px solid red; */
display: flex;
flex-direction: column;
align-items: center;
background: #F8F8F8;

.restaurant-tabs {
    width: 100%;
    display: flex;
    justify-content: center;
}

.navlink-header{
    width:630px;
    display:flex; 
    font-size: 20px;
    justify-content:space-around;
    border-bottom: 1px solid #D8D8D8;
    list-style: none;
    li{
        padding:22px 10px 10px 10px;
        &:active, &:focus, &:hover{
             font-weight: 700;
             color:black;
             border-bottom:2px solid ${props => props.theme.mainColor};
            }
    }
}

.user-card {
    /* border: 1px solid green; */
    display:flex;
    width: 90%;
    justify-content:center;
    flex-wrap:wrap;
    flex-grow: 1;
    overflow: auto;
    min-height: 2em;
    padding-top: 40px;
}

@media (max-width: 400px) {
    span{
        border-bottom:none;
    }
}
`