import styled from "styled-components";

export const SearchNavbarStyle = styled.section`
border-bottom: 1px solid ${props => props.theme.secondaryColor};
width: 100vw;

.search-navbar {
    width: 100%;
    height: 50px;
    font-size: 20px;
    display: flex;
}

.nav-left {
    width:80%;
    border: none;
    padding-left: 30px;
    font-size: 20px;
    font-weight: 500;
    color: #CFCFCF;
}

/* .dropdown-btn {
  background-color: white;
  border: none;
}
.dropdown-icon {
  /* border: 1px solid green; 
  justify-content: center;
  align-items: center;
  padding-left: 16px; */

.nav-dropdown {
  display:flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: center;
  width:21%;
  font-size: 20px;
  padding-left: 38px;
  border: none;
  border-left: 1px solid ${props => props.theme.secondaryColor};
  /* border: 1px solid green; */
}

.required{
  width:200px;
  height:50px;
  border-radius:3px;
  background-color:${props => props.theme.whiteColor};
  border:none;
  outline:none;
  font-size:18px;
  padding:5px;
  color: #CFCFCF;
  font-weight: 500;
  /* border: 1px solid green; */
}
`

/* 
.dropdown-btn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-btn:hover, .dropbtn:focus {
  background-color: orange;
}

.container-dd {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.container-dd a:hover {background-color: #ddd;}

.show {display: block;}
} */