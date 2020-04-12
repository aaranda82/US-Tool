import React from 'react';
// import { ColorScheme } from './styles/colorScheme';
import styled from 'styled-components';

function App() {
  const Background = styled.div`
    background: #2d3436;
    text-align: center;
  `;
  const Header = styled.div`
    color: #dfe6e9;
    border: #dfe6e9 3px solid;
    height: 10vh;
  `;
  const About = styled.div`
    width: 59%;
    height: 30vh;
    color: #dfe6e9;
    border: #dfe6e9 3px solid;
    display: inline-block;
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
  const Contact = styled.div`
    height: 25vh;
    color: #dfe6e9;
    border: #dfe6e9 3px solid;
  `;
  return (
    <Background>
      <Header>Header</Header>
      <About>About</About>
      <Quote>Quote</Quote>
      <Services>Services</Services>
      <Contact>Contact</Contact>
    </Background>
  );
}

export default App;
