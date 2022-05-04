import React, { useEffect } from 'react';

// Components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

//css
import { RegistrationMessagePageStyle, MessageStyle} from './style'
import { useHistory } from 'react-router-dom';
const RegistrationMessagePage =()=>{
    const history=useHistory()
    useEffect(() => {
        const relocate=() => {
            history.push('/registrationValidation_page')
        }
        setInterval(relocate, 15000);
      }, []);
    
    return(
        <div >
            <Header/>
            < RegistrationMessagePageStyle>
                < MessageStyle>
                    <h3><span>REGISTRATION</span></h3>
                    <h4>Thanks for your registration.<br/> 
                        Our hard working monkeys are preparing a digital 
                        message called E-Mail that will be sent to you soon.
                        Since monkeys arent good in writing the message could
                        end up in you junk folder. Our apologies for any 
                        inconvienience.</h4>
                </MessageStyle>     
            </ RegistrationMessagePageStyle>           
            <Footer/>
        </div>
    )
}

export default RegistrationMessagePage ;