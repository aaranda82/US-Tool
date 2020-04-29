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
const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
`;

function About() {
  return (
    <AboutTag>
      <Title>WHO WE ARE</Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Quam id leo in vitae
      turpis massa sed elementum. Tempor orci eu lobortis elementum. Vitae purus
      faucibus ornare suspendisse sed nisi. Cursus mattis molestie a iaculis at.
      Nisi porta lorem mollis aliquam. Facilisi nullam vehicula ipsum a arcu.
      Enim nunc faucibus a pellentesque sit amet. Morbi blandit cursus risus at
      ultrices mi tempus imperdiet nulla. Sodales ut eu sem integer vitae justo
      eget magna. Tincidunt tortor aliquam nulla facilisi. Semper viverra nam
      libero justo. Eu turpis egestas pretium aenean pharetra. Tempus imperdiet
      nulla malesuada pellentesque elit eget gravida. Orci dapibus ultrices in
      iaculis nunc. Aliquet bibendum enim facilisis gravida neque convallis a
      cras semper.
    </AboutTag>
  );
}

export default About;
