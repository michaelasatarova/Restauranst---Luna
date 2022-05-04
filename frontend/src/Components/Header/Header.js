import React, {useState} from "react";
import {Link} from 'react-router-dom';

//styles
import {HeaderStyle} from './style';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify} from '@fortawesome/free-solid-svg-icons';


const Header =()=>{
  const[collapse,setCollapse] = useState(true)

    return(
        <HeaderStyle>
            <div className="header">
                <div className="header-left">
                    <div className="logo">
                        <h1>LUNA</h1>
                    </div>

                    <div className="header-menu" onClick={()=>{setCollapse(prev=> !prev)}}>     
                        <FontAwesomeIcon className="i" icon={faAlignJustify} size = '1x' />
                    </div> 
                </div>
            

                {collapse === true ?
                <div className="header-right">
                    <nav>
                        <ul className="navlink-header">
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/restaurants"><li>Search</li></Link>
                            <Link to="/user_profile_review"><li>Profile</li></Link>
                        </ul>                
                    </nav>

                    <div className="btn-group">
                        <div className="btn-left">
                           <Link to="/registration_page"className="button"><p>SIGN UP</p></Link> 
                        </div>
                        <div className="btn-right">
                           <Link to="/login_page" className="button"><p>LOGIN</p></Link> 
                        </div>
                    </div>
                </div> : null
                  }

            </div>
        </HeaderStyle>
    )
}

export default Header ;