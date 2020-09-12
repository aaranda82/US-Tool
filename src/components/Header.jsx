import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { black, lightBlue } = ColorScheme;
const HeaderTag = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${lightBlue};
  text-align: left;
  font-size: 50px;
  font-weight: 900;
  color: ${black};
  height: 60px;
  width: 100%;
  @media media and (max-width: 650px) {
    width: 100%;
    font-size: 40px;
  }
`;

function Header() {
  return <HeaderTag id="Header">U.S. TOOL & DIE</HeaderTag>;
}

export default Header;
