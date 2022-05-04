import React from "react";
import {Link} from 'react-router-dom';

//styles
import {FooterStyle, FooterStyle2} from './style';

//images
import Facebook from '../../Assets/svg-icons/facebook.svg';
import Twitter from '../../Assets/svg-icons/twitter.svg';
import GooglePlus from '../../Assets/svg-icons/googleplus.svg';
import Instagram from '../../Assets/svg-icons/instagram.svg';

const Footer =()=>{
    return(
      <div>
        <FooterStyle>
            <div className="footer">
                <nav>
                    <ul className="navlink-footer">
                      <Link to="/"><li>About Us</li></Link>
                      <Link to="/"><li>Press</li></Link>
                      <Link to="/"><li>Blog</li></Link>
                      <Link to="/"><li>iOS</li></Link>
                      <Link to="/"><li>Android</li></Link>
                    </ul>
                </nav>
                <div className="social-links">
                    <a href="https://www.facebook.com/"><img src={Facebook}  alt="Facebook"/></a>  
                    <a href="https://twitter.com/?lang=en"><img src={Twitter}  alt="Twitter"/></a>  
                    <a href="https://myaccount.google.com/profile"><img src={GooglePlus}  alt="GooglePlus"/></a> 
                    <a href="https://www.instagram.com/"><img src={Instagram}  alt="Instagrami"/></a> 
                </div>
            </div>
        </FooterStyle>

        <FooterStyle2>
            <p>© Copyright Luna 2021</p>
        </FooterStyle2>
    </div>
    )
}

export default Footer ;