import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

function Services() {
  const { lightGrey } = ColorScheme;
  const Services = styled.div`
    color: ${lightGrey};
    border: ${lightGrey} 3px solid;
    width: 75%;
  `;
  return <Services>Services</Services>;
}

export default Services;
