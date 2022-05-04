import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: Helvetica;
    font-weight:400;
    box-sizing: border-box;

    }

    a{
    text-decoration:none;
    color: #000;
} 
`;

export const theme = {
    mainColor: '#E47D31', /*orange*/
    secondaryColor: '#D8D8D8', /*grey */
    whiteColor: '#fff',
    blackColor: '#000',
    backgroundColor:'#F2F2F2',  /*lightgrey*/
    backgroundColor2:'#F5F5F5',  /*lightgrey*/
    darkbackground:'rgba(145, 145, 145, 0.6)',  /*lightgrey*/
};

