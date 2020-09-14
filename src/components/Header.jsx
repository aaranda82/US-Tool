import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { black, lightBlue } = ColorScheme;
const HeaderCont = styled.div`
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
  display: flex;
  align-items: center;
  @media media and (max-width: 650px) {
    width: 100%;
    font-size: 40px;
  }
`;

const Logo = styled.div`
  font-size: 30px;
  margin-left: 10px;
`;

function Header() {
  return (
    <HeaderCont id="Header">
      <Logo>U.S. TOOL & DIE</Logo>
    </HeaderCont>
  );
}

export default Header;
