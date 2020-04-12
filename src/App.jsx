import React from 'react';
import styled from 'styled-components';
import Background from './components/Background';

function App() {
  const Header = styled.div`
    color: #dfe6e9;
    border: #dfe6e9 3px solid;
    height: 10vh;
  `;

  const Quote = styled.div`
    width: 40%;
    height: 30vh;
    color: #dfe6e9;
    border: #dfe6e9 3px solid;
    display: inline-block;
  `;
  const Services = styled.div`
    height: 30vh;
    color: #dfe6e9;
    border: #dfe6e9 3px solid;
  `;

  return <Background />;
}

export default App;
