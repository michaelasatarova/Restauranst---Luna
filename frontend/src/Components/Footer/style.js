import styled from "styled-components";

export const FooterStyle = styled.section`
width:100vw;
border-bottom: 1px solid ${props => props.theme.secondaryColor};

.footer{
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 5px 1%;

}

.navlink-footer{
    width:25vw;
    display:flex; 
    justify-content:space-between;
    list-style: none;
}
.social-links{
    a{
         padding:0px 10px;
    }    
}
@media (max-width: 1040px) {
    .navlink-footer{
        width:50vw;
    }
}
@media (max-width: 520px) {
    .navlink-footer, .footer{
        flex-direction:column;
        text-align:center;
    }
    .navlink-footer{
        padding:15px;
        li{
            padding:5px;
        }
    }
}
`

export const FooterStyle2 = styled.section`
 padding: 10px 1%;

 @media (max-width: 520px) {
    text-align:center
}
`