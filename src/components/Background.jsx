import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';
import About from './About';
import Info from './Info';
import Header from './Header';
import Contact from './Contact';
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
      <Contact>Contact</Contact>
      <Services>Services</Services>
      <Info>Info</Info>
    </Background>
  );
}

export default Background;
