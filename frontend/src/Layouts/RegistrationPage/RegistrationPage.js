import React, { useState } from 'react';
import baseUrl from '../../Helpers/BaseUrl';

// Components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


//css
import { RegistrationPageStyle, OrangeButtonStyle, FormStyle, DivFormStyle} from './style'
import { Link, useHistory } from 'react-router-dom';

const RegistrationPage =()=>{
    const [email, setEmail] = useState('') 
    const history=useHistory() 
    const onClickHandler = e => {
        e.preventDefault(); 
        
    const myInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email})
        } // putting all the information together on the object that we will pass as the second argument to the fetch function.
        console.log(baseUrl, myInit)
        fetch(`${baseUrl}/backend/api/registration/`, myInit)
            .then(response => {
                if(response.status===200) {
                    history.push('/registrationMessage_page')
                }
            })
            
    }

    const onChangeHandler = e => {
        setEmail(e.target.value)
    }

    return(
        <div >
            <Header/>
            < RegistrationPageStyle>
                < FormStyle>
                    <h3><span>REGISTRATION</span></h3>
                    < DivFormStyle>
                        <input id="input-txt" type="text" placeholder="E-Mail adresse" name="email" value={email} required onChange={onChangeHandler}/>
                    </DivFormStyle>
                </FormStyle>
                <OrangeButtonStyle>
                   <button type="submit" onClick={onClickHandler}>Register</button>
                </OrangeButtonStyle>       
            </ RegistrationPageStyle>           
            <Footer/>
        </div>
    )
}

export default RegistrationPage ;