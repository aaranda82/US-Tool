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
  font-family: 'Montserrat', sans-serif;
`;
const Container = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

function Background() {
  return (
    <BackgroundTag>
      <Header>Header</Header>
      <Container>
        <About>About</About>
        <Contact>Contact</Contact>
      </Container>
      <Services>Services</Services>
      <Info>Info</Info>
    </BackgroundTag>
  );
}

export default Background;
