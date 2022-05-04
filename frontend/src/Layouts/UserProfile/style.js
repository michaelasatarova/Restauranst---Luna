import styled from "styled-components";
import UserProfileBg from '../../Assets/images/userbg.webp';

export const UserProfileReviewStyleBg = styled.section`
background-image:url(${UserProfileBg});
//background-color: rgba(0, 0, 0, 0.5);
background-repeat: no-repeat;
background-size: cover;
background-position: 60% 40%;
height:155px;
color: ${props => props.theme.whiteColor};
.black-overlay{
    background:rgba(0, 0, 0, 0.5);
}

.profile-data{
    width:650px;
    margin: auto;
    padding-top:33px;
    padding-left: 20px;
    
  h1{
    text-align:left;
    font-size:24px;
    font-weight:700;
    }  
p{
    font-size:18px;
    font-weight:300; 
    padding:5px; 
    }
}


`
export const UserProfileReviewStyle = styled.section`
display:flex;
align-items:flex-start;
justify-content:center;
background-color:${props => props.theme.backgroundColor};
width:100vw;
height:100vh; 

.errorMessage{
    padding-top:10px;
    color:red;
    font-size:16px;
    font-weight:400;
}


.up-left{
    width:232px;
    position:relative;
    top:-128px;
    background-color:${props => props.theme.whiteColor};
    .user{
        width:232px;
    }
    h1{
        font-size:18px;
        font-weight:700;
        padding: 10px 0;
        margin-bottom:10px;
        margin-left:10px;
    }
    .up-col{
        display:flex;
        border-bottom:1px solid ${props => props.theme.darkbackground};
        border-top:1px solid ${props => props.theme.darkbackground};
        img{
            padding: 5px 5px 5px 0px;
            margin: 0 10px;
        }
        p{
            padding: 20px 10px 10px 0px; 
        }
    }
}
.active{
    border-left:3px solid ${props => props.theme.mainColor};
    background-color:rgba(0, 0, 0, 0.0837013);
}

.create-rest-btn{
    padding-top:30px;
    text-align:center;
    background-color:${props => props.theme.backgroundColor};
    button{
         width:200px;
        height:57px;
        background-color:${props => props.theme.mainColor};
        border-radius:28px;
        color:${props => props.theme.whiteColor};
        border:none;
        outline:none;
        font-size:20px;
        font-weight:400;
        margin:auto; 
        cursor:pointer;
    }
  
}

.up-middle{
    width:650px;
   // padding:0 10px;
    background-color:${props => props.theme.whiteColor};
    margin-left:4px;
    h2{
        font-size:20px;
        font-weight:700;
        margin:10px;
        margin-top:20px;
    }
    .profile-comments{
         border-bottom:1px solid ${props => props.theme.darkbackground};
        p{
           padding:10px 10px;         
       }
        .row{
           display:flex;
           justify-content:space-between;
          h1{
            font-size:20px;
            font-weight:400;
            padding:10px;
         } 
         p{
            font-size:12px;
            font-weight:300;
         }
       }
      
    }
    form{
        padding:10px;
        .form-col{
            display:flex;
            flex-direction:column;
            margin-top:15px;
            label{
                font-size:20px;
                font-weight:700;
                color:#979797;
                margin-bottom:5px;
            }
            input{
                width:324px;
                height:52px;
                border-radius:3px;
                outline:none;
                border: 1px solid #EBEBEB;
                font-size:20px;
                padding-left:10px;
            }
            textarea{
                border-radius:3px;
                outline:none;
                border: 1px solid #EBEBEB;
                font-size:20px;
                padding-left:10px;
            }
        }
        .form-btns{
            display:flex;
            justify-content:space-between;
            margin: 30px 20px;
            .btn-save{
              width:200px;
              height:56px;
              border-radius:28px;
              color:${props => props.theme.whiteColor};  
              background-color:${props => props.theme.mainColor}; 
              font-size:20px;
              font-weight:400px;
              outline:none;
              border:none;
              cursor: pointer;
            }
            .btn-delete{
               font-size:20px;
               font-weight:400px;
               outline:none;
               border:none;  
               color:red;  //should be #BA0000
               background:none;
               cursor:pointer;

            }
        }
    }
}
.up-right{
    h1{
        font-size:20px;
        font-weight:700;
        padding:10px;
        margin-bottom:10px;
    }
    .about-data{
        padding:10px;
        h3{
        font-size:20px;
        font-weight:700;  
        }
        p{
        font-size:20px;
        font-weight:300;
        max-width:314px;   
        }
    }
}
@media only screen and (max-width:1262px){
    flex-wrap:wrap;
    height:100%;
    .up-left{
        position:relative;
        top:0;
    }
    .up-right{
        visibility:hidden;
    }
}
@media only screen and (max-width:874px){
    .up-right{
        visibility:visible;
        padding:20px 0;
        position:relative;
        right: 80px;
    }
    .up-left{
        position: absolute;
        top: 1250px; 
        right: 80px;
    }
}
@media only screen and (max-width:655px){
    .up-left{
        position: relative;
        top: 0px; 
        right: 0px;
    }
    .up-right{
        right:0;
    }
}
`

//this is copy from previous only heit is different is it possible to do it more effective?
export const UserProfileEditStyle = styled.section`
display:flex;
align-items:flex-start;
justify-content:center;
background-color:${props => props.theme.backgroundColor};
width:100vw;
height:100%; 

.errorMessage{
    padding-top:10px;
    color:red;
    font-size:16px;
    font-weight:400;
}


.up-left{
    width:232px;
    position:relative;
    top:-128px;
    background-color:${props => props.theme.whiteColor};
    .user{
        width:232px;
    }
    h1{
        font-size:18px;
        font-weight:700;
        padding: 10px 0;
        margin-bottom:10px;
        margin-left:10px;
    }
    .up-col{
        display:flex;
        border-bottom:1px solid ${props => props.theme.darkbackground};
        border-top:1px solid ${props => props.theme.darkbackground};
        img{
            padding: 5px 5px 5px 0px;
            margin: 0 10px;
        }
        p{
            padding: 20px 10px 10px 0px; 
        }
    }
}
.active{
    border-left:3px solid ${props => props.theme.mainColor};
    background-color:rgba(0, 0, 0, 0.0837013);
}

.create-rest-btn{
    padding-top:30px;
    text-align:center;
    background-color:${props => props.theme.backgroundColor};
    button{
         width:200px;
        height:57px;
        background-color:${props => props.theme.mainColor};
        border-radius:28px;
        color:${props => props.theme.whiteColor};
        border:none;
        outline:none;
        font-size:20px;
        font-weight:400;
        margin:auto; 
        cursor:pointer;
    }
  
}

.up-middle{
    width:650px;
   // padding:0 10px;
    background-color:${props => props.theme.whiteColor};
    margin-left:4px;
    h2{
        font-size:20px;
        font-weight:700;
        margin:10px;
        margin-top:20px;
    }
    .profile-comments{
         border-bottom:1px solid ${props => props.theme.darkbackground};
        p{
           padding:10px 10px;         
       }
        .row{
           display:flex;
           justify-content:space-between;
          h1{
            font-size:20px;
            font-weight:400;
            padding:10px;
         } 
         p{
            font-size:12px;
            font-weight:300;
         }
       }
      
    }
    form{
        padding:10px;
        .form-col{
            display:flex;
            flex-direction:column;
            margin-top:15px;
            label{
                font-size:20px;
                font-weight:700;
                color:#979797;
                margin-bottom:5px;
            }
            input{
                width:324px;
                height:52px;
                border-radius:3px;
                outline:none;
                border: 1px solid #EBEBEB;
                font-size:20px;
                padding-left:10px;
            }
            textarea{
                border-radius:3px;
                outline:none;
                border: 1px solid #EBEBEB;
                font-size:20px;
                padding-left:10px;
            }
        }
        .form-btns{
            display:flex;
            justify-content:space-between;
            margin: 30px 20px;
            .btn-save{
              width:200px;
              height:56px;
              border-radius:28px;
              color:${props => props.theme.whiteColor};  
              background-color:${props => props.theme.mainColor}; 
              font-size:20px;
              font-weight:400px;
              outline:none;
              border:none;
              cursor: pointer;
            }
            .btn-delete{
               font-size:20px;
               font-weight:400px;
               outline:none;
               border:none;  
               color:red;  //should be #BA0000
               background:none;
               cursor:pointer;

            }
        }
    }
}
.up-right{
    h1{
        font-size:20px;
        font-weight:700;
        padding:10px;
        margin-bottom:10px;
    }
    .about-data{
        padding:10px;
        h3{
        font-size:20px;
        font-weight:700;  
        }
        p{
        font-size:20px;
        font-weight:300;
        max-width:314px;   
        }
    }
}
@media only screen and (max-width:1262px){
    flex-wrap:wrap;
    height:100%;
    .up-left{
        position:relative;
        top:0;
    }
    .up-right{
        visibility:hidden;
    }
}
@media only screen and (max-width:874px){
    .up-right{
        visibility:visible;
        padding:20px 0;
        position:relative;
        right: 80px;
    }
    .up-left{
        position: absolute;
        top: 1310px; 
        right: 80px;
    }
}
@media only screen and (max-width:655px){
    .up-left{
        position: relative;
        top: 0px; 
        right: 0px;
    }
    .up-right{
        right:0;
    }
}
`