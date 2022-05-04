import React, { useState } from 'react';
import baseUrl from '../../Helpers/BaseUrl';
import { useHistory } from 'react-router-dom';

// Components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

//css
import { RegistrationValidationPageStyle, OrangeButtonStyle, FormStyle, ContainerVeriFormStyle, Left, Right} from './style'


const RegistrationValidationPage =()=>{
    const history = useHistory();
    const [formData, setFormData] = useState({
        email: '',
        code: '',
        username: '',
        location: '',
        password: '',

    }) 
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const onClickHandler = e => {
        e.preventDefault(); 
        const myInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
            } // putting all the information together on the object that we will pass as the second argument to the fetch function.
            console.log(baseUrl, myInit)
            fetch(`${baseUrl}/backend/api/registration/validation/`, myInit)
                .then(response => {
                    if(response.status===200) {
                        history.push('/login_page')
                    }
                })
    }

    const onChangeHandler = e => {
        const {value, name} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const onChangePasswordRepeat = e => {
        setPasswordRepeat(e.target.value)
    }

    return(
        <div >
            <Header/>
            < RegistrationValidationPageStyle>
            < FormStyle>
                    <h3><span>VERIFICATION</span></h3>
                    <ContainerVeriFormStyle>
                      < Left>
                             <input id="input-txt" type="text" placeholder="E-Mail" name="email" value={formData.email} required onChange={onChangeHandler}/>
                        </Left>
                        < Right>
                            <input id="input-txt" type="text" placeholder="Valdiation code" name="code" value={formData.code} required onChange={onChangeHandler}/>
                        </ Right>
                    </ContainerVeriFormStyle> 
                    <ContainerVeriFormStyle>
                      < Left>  
                            <input id="input-txt" type="text" placeholder="Username" name="username" value={formData.username} required onChange={onChangeHandler}/>
                        </Left>
                        < Right>
                                <input id="input-txt" type="text" placeholder="Location" name="location" value={formData.location} required onChange={onChangeHandler}/>
                        </ Right>
                    </ContainerVeriFormStyle> 
                    <ContainerVeriFormStyle>
                      < Left>
                            <input id="input-txt" type="password" placeholder="Password" name="password" value={formData.password} required onChange={onChangeHandler}/>
                        </Left>
                        < Right>
                                <input id="input-txt" type="password" placeholder="Password repeat" name="password_repeat" value={passwordRepeat} required onChange={(e) => setPasswordRepeat(e.target.value)}/>
                        </ Right>
                    </ContainerVeriFormStyle>              
                </FormStyle>
                <OrangeButtonStyle>
                <button type="submit" onClick={onClickHandler}>Finish Registration</button>
                </OrangeButtonStyle>       
            </ RegistrationValidationPageStyle>           
            <Footer/>
        </div>
    )
}

export default RegistrationValidationPage ;

