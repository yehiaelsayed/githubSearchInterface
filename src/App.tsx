import React from 'react';
import logo from './logo.svg';
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

function App() {
  return (
    <Home />
  );
}

export default App;
