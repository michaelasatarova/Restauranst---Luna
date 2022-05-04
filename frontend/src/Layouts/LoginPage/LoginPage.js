import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authAction } from '../../Store/actions/AuthAction.js';

// Components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

//css
import { LoginPageStyle, OrangeButtonStyle, FormStyle, ContainerVeriFormStyle, Left, Right} from './style'
import baseUrl from '../../Helpers/BaseUrl';

const LoginPage =()=>{
        const history = useHistory();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const dispatch = useDispatch();
    
        const handlePassword = (event) => {
            setPassword(event.target.value);
        }
    
        const handleEmail = (event) => {
            setEmail(event.target.value)
        }
    
        const handleSubmit = (event) => {
            event.preventDefault();
            const config = {
                body: JSON.stringify({email, password}),
                method: "POST",
                headers: new Headers ({
                    "Content-Type": "application/json",
                })
            }
            console.log(config);
        
            fetch(`${baseUrl}/backend/api/token/`, config)
                .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        dispatch(authAction(data.access));
                        localStorage.setItem("token", data.access)
                        history.push('/');      
                    });      
        }
    return(
        <div >
            <Header/>
            < LoginPageStyle>
                < FormStyle onSubmit={ handleSubmit }>
                    <h3><span>LOGIN</span></h3>
                    <ContainerVeriFormStyle>
                      < Left>
                            <input id="input-txt" type="text" value={ email } onChange={ handleEmail } placeholder="Username"/>
                        </Left>
                        < Right>
                            <input id="input-txt" type="password" value={ password } onChange={ handlePassword } placeholder="Password"/>
                        </ Right>
                    </ContainerVeriFormStyle> 
                    <OrangeButtonStyle>
                    <button type="submit">Login</button>
                    </OrangeButtonStyle>                
                </FormStyle>
                  
            </ LoginPageStyle>           
            <Footer/>
        </div>
    )
}

export default LoginPage ;