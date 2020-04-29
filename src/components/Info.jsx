import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { lightGrey } = ColorScheme;
const InfoTag = styled.div`
  color: ${lightGrey};
  border: ${lightGrey} 3px solid;
  width: 75%;
`;

function Info() {
  return <InfoTag>Info</InfoTag>;
}

export default Info;