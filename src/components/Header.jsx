import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { lightGrey } = ColorScheme;
const HeaderTag = styled.div`
  position: relative;
  color: ${lightGrey};
  border: ${lightGrey} 1px solid;
  height: 60px;
  width: 75%;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

function Header() {
  return <HeaderTag>Header</HeaderTag>;
}

export default Header;
