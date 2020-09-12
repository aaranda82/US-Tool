import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { black, lightBlue } = ColorScheme;
const AboutTag = styled.div`
  color: ${black};
  width: 75%;
  @media (max-width: 650px) {
    width: 100%;
  }
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  padding-top: 15px;
  @media media and (max-width: 400px) {
    font-size: 30px;
  }
`;
const Content = styled.div`
  padding: 15px 30px 15px 30px;
  font-size: 1.3em;
`;
const Name = styled.span`
  color: ${lightBlue};
  font-size: 1.4em;
`;
const Attr = styled.span`
  font-weight: 600;
`;
function About() {
  return (
    <AboutTag id="About">
      <Title></Title>
      <Content>
        <Name>U.S. Tool & Die</Name> is a family-owned business providing{' '}
        <Attr>high quality</Attr>, <Attr>on time</Attr> service since 1986.
      </Content>
    </AboutTag>
  );
}

export default About;
