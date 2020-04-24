import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { lightGrey } = ColorScheme;
const AboutTag = styled.div`
  color: ${lightGrey};
  border: ${lightGrey} 3px solid;
  width: 50%;

  @media (max-width: 400px) {
    width: 75%;
  }
`;

function About() {
  return <AboutTag>About</AboutTag>;
}

export default About;
