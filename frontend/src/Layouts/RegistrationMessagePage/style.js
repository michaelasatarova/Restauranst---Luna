import styled from "styled-components";

export const RegistrationMessagePageStyle = styled.section`
background-color:${props => props.theme.backgroundColor};
width: 100%;
height: 100vh;
display: flex;
/* justify-content: center; */
align-items: center;
flex-direction: column;

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
`
export const MessageStyle = styled.section`
margin-top: 50px;
width: 400px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* text-align: center; */
/* background-color: yellow; */

h4{
    font-size:20px;
    font-weight:400;
    text-align:center;
}




@media (max-width: 580px) {
    button{
        height:30px;
        font-size:15px;
        max-width:100px;
    }
} 
`

