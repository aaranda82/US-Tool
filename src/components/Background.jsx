import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Quote from './Quote';
import Services from './Services';

function Background() {
  const { black } = ColorScheme;
  const Background = styled.div`
    display: flex;
    flex-wrap: wrap;
    background: ${black};
    text-align: center;
    justify-content: center;
    align-items: center;
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

export default Background;
