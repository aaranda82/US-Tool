import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

function Header() {
  const { lightGrey } = ColorScheme;
  const Header = styled.div`
    color: ${lightGrey};
    border: ${lightGrey} 3px solid;
    width: 75%;
  `;
  return <Header>Header</Header>;
}

export default Header;
