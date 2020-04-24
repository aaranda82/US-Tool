import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

function Info() {
  const { lightGrey } = ColorScheme;
  const Info = styled.div`
    color: ${lightGrey};
    border: ${lightGrey} 3px solid;
    width: 75%;
  `;
  return <Info>Info</Info>;
}

export default Info;
