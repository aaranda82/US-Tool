import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';
import About from './About';
import Info from './Info';
import Header from './Header';
import Contact from './Contact';
import Services from './Services';

import { Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

const { black, orange } = ColorScheme;
const BackgroundTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${black};
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
`;
function Background() {
  return (
    <BackgroundTag>
      <Fab
        mainButtonStyles={{ backgroundColor: orange, color: black }}
        position={{ top: 5, right: 5 }}
        icon={<i className="fas fa-reply"></i>}
        event="click"
      >
        <Contact></Contact>
      </Fab>
      <Header>Header</Header>
      <About>About</About>
      <Services>Services</Services>
      <Info>Info</Info>
    </BackgroundTag>
  );
}

export default Background;
