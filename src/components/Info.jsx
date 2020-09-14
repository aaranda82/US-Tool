import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { black, lightBlue } = ColorScheme;
const InfoTag = styled.div`
  color: ${black};
  width: 75%;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
const Title = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: 600;
  @media screen and (max-width: 650px) {
    font-size: 25px;
    padding-bottom: 15px;
  }
`;
const Container = styled.div`
  padding: 15px 30px 15px 30px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;
const InfoBox = styled.div`
  width: 33%;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
const Anchor = styled.a`
  text-decoration: none;
  color: ${black};
  &:hover {
    text-decoration: underline;
    color: ${lightBlue};
  }
  @media screen and (max-width: 650px) {
    font-size: 10px;
  }
`;
function Info() {
  return (
    <InfoTag id="info">
      <Title>WHERE TO FIND US</Title>
      <Container>
        <InfoBox>
          <Anchor
            target="_blank"
            href="https://www.google.com/maps/place/23274+Del+Lago+Dr,+Laguna+Hills,+CA+92653/@33.6242382,-117.7286447,17z/data=!3m1!4b1!4m5!3m4!1s0x80dce87ca623d0c3:0x179fc2a195991f79!8m2!3d33.6242338!4d-117.7264507"
          >
            23274 Del Lago Dr,
            <br />
            Laguna Hills,
            <br />
            CA 92653
          </Anchor>
        </InfoBox>
        <InfoBox></InfoBox>
        <InfoBox>
          <Anchor href="tel:19494549858">(949) 454 - 9858</Anchor>
          <br />
          <Anchor href="">info@ustooldie.com</Anchor>
        </InfoBox>
      </Container>
    </InfoTag>
  );
}

export default Info;
