import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { lightGrey } = ColorScheme;
const ServicesTag = styled.div`
  color: ${lightGrey};
  border: ${lightGrey} 3px solid;
  width: 75%;
`;

function Services() {
  return <ServicesTag>Services</ServicesTag>;
}

export default Services;
