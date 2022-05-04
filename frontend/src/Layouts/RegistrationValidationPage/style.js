import styled from "styled-components";

export const RegistrationValidationPageStyle = styled.section`
background-color:${props => props.theme.backgroundColor};
width: 100%;
height: 100vh;
display: flex;
/* justify-content: center; */
align-items: center;
flex-direction: column;
/* border: 10px solid red; */

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
width: 100%;
height: 380px;
display: flex;
align-items: center;
flex-direction: column;
/* background-color: yellow; */
/* border: 10px solid darkgray; */

@media (max-width: 680px) {
    height: 580px;

}

`

export const ContainerVeriFormStyle = styled.div`
    width: 750px;
    height: 80px;
    display: flex;
    justify-content: space-around;
    /* background-color: green; */
    /* border: 10px solid royalblue; */
    /* border-bottom: 10px solid red; */
    
    @media (max-width: 680px) {
        
        width: 360px;
        height: 140px;
        /* order: -1; */
        flex-direction: column;
        justify-content: start;
    }

`;

export const DivFormStyle = styled.div`
    /* width: 340px; */
    /* margin: 10px 35%; */
    /* border-bottom: 10px solid red; */

    input {
        /* margin-top: 60px; */
        /* margin-left: 5%; */
        /* margin: 40px 0px; */
        width: 100%;
        height: 52px;
        background-color: white;
        /* border: 1px solid darkgray; */
        border-radius: 5px;
        /* border-color: solid red; */
    }

    #input-e-mail-txt {
        padding: 20px;
        font-size:20px;
        font-weight:700;
    }

    #input-etxt {
        padding: 20px;
        font-size:20px;
        font-weight:700;
    }

    #input-password {
        padding: 20px;
        font-size:20px;
        font-weight:700;
    }


`;

export const Left = styled.div`
    width: 340px;
    /* margin: 10px 35%; */
    /* border: 10px solid red; */

    input {
        /* margin: 10px; */
        /* margin-left: 5%; */
        margin: 10px 0px;
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

export const Right = styled.div`
    width: 340px;
    /* margin: 10px 35%; */
    /* border: 10px solid yellowgreen; */

    input {
        /* margin-top: 10px; */
        /* margin-left: 5px; */
        margin: 10px 0px;
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
    width:250px;
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
