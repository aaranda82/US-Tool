import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

function About() {
  const { lightGrey } = ColorScheme;
  const About = styled.div`
    color: ${lightGrey};
    border: ${lightGrey} 3px solid;
    width: 50%;

    @media (max-width: 400px) {
      width: 75%;
    }
  `;
  return <About>About</About>;
}

export default About;
