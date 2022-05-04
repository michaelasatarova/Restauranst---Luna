import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'; 
import { GlobalStyle, theme } from "./GlobalStyles/global-style";
import {ThemeProvider} from "styled-components";
//Redux
import { authAction } from "./Store/actions/AuthAction";
import { store } from "./Store/index";
import { Provider } from 'react-redux';

const token = localStorage.getItem("token");

if (token) {
store.dispatch(authAction(token));
}

ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store } > 
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <GlobalStyle/>
            <App />
          </BrowserRouter>
        </ThemeProvider>     
      </Provider>
    </React.StrictMode>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
