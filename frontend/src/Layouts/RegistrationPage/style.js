import styled from "styled-components";

export const RegistrationPageStyle = styled.section`
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
export const FormStyle = styled.form`
margin-top: 50px;
width: 60%;
display: flex;
/* justify-content: center; */
align-items: center;
flex-direction: column;
/* background-color: yellow; */
`
export const DivFormStyle = styled.div`
    width: 380px;
    height: 100px;
    margin: 10px 35%;
    /* border-bottom: 10px solid red; */

    input {
        width: 100%;
        height: 52px;
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        /* border-color: solid red; */
    }

    #input-txt {
        padding: 20px;
        font-size:20px;
        font-weight:700;
    }


`;

export const OrangeButtonStyle = styled.section`
button{
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


/* @media (max-width: 580px) {
    button{
        height:30px;
        font-size:15px;
        max-width:100px;
    }
} */
`