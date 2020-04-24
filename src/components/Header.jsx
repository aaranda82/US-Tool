import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { lightGrey } = ColorScheme;
const HeaderTag = styled.div`
  color: ${lightGrey};
  border: ${lightGrey} 3px solid;
  width: 75%;
`;

function Header() {
  return <HeaderTag>Header</HeaderTag>;
}

export default Header;
