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
const BGCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
`;
const InstagramCont = styled.div`
  width: 100%;
  z-index: 0;
  display: flex;
  align-items: center;
`;

function Background() {
  return (
    <BGCont id="Background">
      <Fab
        mainButtonStyles={{ backgroundColor: orange, color: black }}
        position={{ top: 5, right: 5 }}
        icon={<i className="far fa-envelope" />}
        event="click"
      >
        <Contact />
      </Fab>
      <Header />
      <About />
      <Services />
      <InstagramCont>
        <div className="elfsight-app-8bd9a12d-958f-467a-beb2-dc6738f88a09"></div>
      </InstagramCont>
      <Info />
    </BGCont>
  );
}

export default Background;
