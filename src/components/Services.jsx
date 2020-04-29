import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { lightGrey } = ColorScheme;
const ServicesTag = styled.div`
  color: ${lightGrey};
  border: ${lightGrey} 3px solid;
  width: 75%;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
`;

function Services() {
  return (
    <ServicesTag>
      <Title>WHAT WE DO</Title>
      <ol>
        <li>CNC Milling</li>
        <li>CNC Turning</li>
        <li>EDM</li>
        <li>Tool & Die</li>
      </ol>
    </ServicesTag>
  );
}

export default Services;
