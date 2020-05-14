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

const { lightGrey, black, orange } = ColorScheme;
const BackgroundTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${lightGrey};
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
`;
const Instagram = styled.div`
  width: 100%;
  z-index: 0;
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
      <Instagram>
        <div className="elfsight-app-8bd9a12d-958f-467a-beb2-dc6738f88a09"></div>
      </Instagram>
      <Info>Info</Info>
    </BackgroundTag>
  );
}

export default Background;
