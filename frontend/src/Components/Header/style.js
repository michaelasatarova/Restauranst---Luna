import styled from "styled-components";

export const HeaderStyle = styled.section`
border-bottom: 1px solid ${props => props.theme.secondaryColor};
width: 100vw;

.header{
    padding: 0 1%;
    display:flex;
    justify-content: space-between;
    align-items:baseline;
    font-family: Helvetica, sans-serif; 

    .header-left{
        display:flex;
        justify-content:space-between;
        align-items:baseline;
       // width: 100vw;
        h1{
            font-family: BradleyHand, serif;
            font-weight:700;
            font-size:36px;
            }  
    }
   
    .header-right{
        display:flex;
        justify-content: space-between;
        align-items:baseline;
    }
}

.header-menu{
display:none;
}

.navlink-header{
    width:300px;
    display:flex; 
    justify-content:space-around;
    list-style: none;
    li{
        padding:22px 10px;
        &:active, &:focus, &:hover{
             font-weight: 700;
             color:black;
             border-bottom:1px solid ${props => props.theme.mainColor};
            }
        }
     }


.btn-group{
    display:flex;
    font-size:16px;
    font-family: Helvetica, sans-serif; 
    font-weight: 400;
    color:${props => props.theme.whiteColor};
    text-align:center;
    line-height:18.4px;
    
} 
.btn-left, .btn-right{   
        background-color:${props => props.theme.mainColor};
        margin:1px; 
        a{         
            p{
                margin:10px 20px;
                color:${props => props.theme.whiteColor};
            }
        }     
    }
.btn-left{
    border-radius: 30px 0px 0px 30px;
}
.btn-right{
    border-radius: 0px 30px 30px 0px;
}
@media (max-width: 580px) {
    .header-left{
        width:100vw;
    }
    .header-menu{
        display:block;
    }
    .navlink-header, .header, .header-right{
        flex-direction:column;
        align-items:center;
    }
    .btn-group{
        margin: auto;
    }
  }
`