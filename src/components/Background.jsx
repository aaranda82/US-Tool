import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';
import About from './About';
import Info from './Info';
import Header from './Header';
import Contact from './Contact';
import Services from './Services';

const { black } = ColorScheme;
const BackgroundTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${black};
  text-align: center;
  justify-content: center;
  align-items: center;
`;

function Background() {
  return (
    <BackgroundTag>
      <Header>Header</Header>
      <About>About</About>
      <Contact>Contact</Contact>
      <Services>Services</Services>
      <Info>Info</Info>
    </BackgroundTag>
  );
}

export default Background;
