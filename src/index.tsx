import React from 'react';
import ReactDOM from 'react-dom';
import './index.styled.ts';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from '../src/redux/store/index'

import styled from 'styled-components';
import GlobalStyle from './index.styled';
import Home from '../src/components/Home/Home'
const AppWrapper = styled.div`{
  padding: 0 20px;
  display:flex;
  justify-content:center;
  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
  }
}`

ReactDOM.render(

  <Provider store={store}>
    <AppWrapper>
      <GlobalStyle />
      <App />
    </AppWrapper>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
