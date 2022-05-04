import styled from "styled-components";


export const NewRestaurantStyle = styled.section`
height:86vh;
text-align:center;
background:${props => props.theme.backgroundColor};
padding-top:20px;
h2{
    font-size:24px;
    font-weight:700;
    padding:50px;
    &:after{
        content: "";
        position: absolute;
        left: 50%;
        margin-left: -90px;
        /* bottom: 0; */
        top: 150px;
        width: 200px;
        border-bottom: 3px solid ${props => props.theme.mainColor};   
    }

}
form{
    margin:10px auto;
    padding:30px;
    padding-top:0;
    .form-basic{
        text-align:left;
        margin:10px auto;
        width:1150px;
        h1{
            font-size:17px;
            font-weight:700;
            font-family: 'Karla', sans-serif;
            margin:10px 0;
        }
       .form-row{
            display:flex;
            justify-content:center;
            .form-col{
                display:flex;
                flex-direction:column;
                label{
                    font-size:20px;
                    font-weight:700;
                    color:#979797;
                    text-align:left;
                    padding-left:10px;
                }
                input, select{
                    width:370px;
                    height:50px;
                    border-radius:3px;
                    background-color:${props => props.theme.whiteColor};
                    border:none;
                    outline:none;
                    font-size:18px;
                    margin:10px;
                    padding:10px;
                }
                .custom-file-box{
                    width:390px;
                    .custom-file{
                    background-color:${props => props.theme.backgroundColor};
                    width:198px;
                    &:before{
                        content: 'CHOOSE A FILE ...';
                        border:none;
                        border-radius: 28px;
                        outline: none;
                        padding:10px 25px;
                        cursor: pointer;
                        font-weight: 400;
                        font-size: 16px;
                        background-color:${props => props.theme.mainColor};
                        color: ${props => props.theme.whiteColor};
                        }
                    }
                }
                
            }
           
        }  
    }
   
}

.errorMessage{
    padding-left:11px;
    color:red;
}
.send-me{
    text-align:center;
    margin-bottom:50px ;
    width:200px;
    height:58px;
    background-color:${props => props.theme.mainColor};
    color: ${props => props.theme.whiteColor};
    font-size:20px;
    font-weight:400;
    border-radius:28px;
    border:none;
    outline:none;
        
}

//new restaurant cucess
.container-sucess{
    max-width: 500px;
    background-color:lightgreen;
    border:1px solid darkgreen;
    margin:auto;
    border-radius:10px;
    p{
        font-size:20px;
        font-weight:700;
        color:darkgreen;
        text-align:center;
        padding:30px;
    }
}

@media screen and (max-width: 1200px) {
    .form-basic{
        max-width:370px;
        h1{
            display:none;
        }
        .form-row{
            flex-direction:column;
            align-items:center;
        }
    }
    
}
`