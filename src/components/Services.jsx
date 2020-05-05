import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';
import defaultImg from '../assets/images/default.png';
import cncMillingImg from '../assets/images/cncMilling1000x800.jpg';
import cncTurning from '../assets/images/cncTurning1000x800.jpg';
import wireEDM from '../assets/images/wireEDM1000x800.jpg';
import stamping from '../assets/images/stamping1000x800.jpg';

const { lightGrey, black, lightBlue } = ColorScheme;
const ServicesTag = styled.div`
  color: ${lightGrey};
  width: 75%;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid ${lightGrey};
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin: 40px 0px 40px 0px;
`;
const ServiceTitle = styled.div`
  border: ${black} 2px solid;
  color: ${black};
  background-color: ${lightBlue};
  position: absolute;
  padding: 10px 20px 10px 20px;
  box-shadow: 15px 10px ${lightGrey};
  margin: 10px;
  z-index: 1;
  @media (max-width: 780px) {
    position: initial;
    width: 50%;
  }
`;
const ServiceShadow = styled.div`
  position: absolute;
  height: 320px;
  width: 400px;
  border-radius: 20px;
  z-index: 0;
  background-color: ${black};
  opacity: 0;
  @media (max-width: 1240px) {
    width: 250px;
    height: 200px;
  }
  @media (max-width: 840px) {
    width: 200px;
    height: 160px;
  }
`;
const ServiceInfo = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  color: ${lightGrey};
  font-size: 30px;
  font-weight: 600;
  opacity: 0;
`;
const ServiceBackground = styled.div`
  border: solid 1px ${lightGrey};
  position: relative;
  background-image: url(${props => props.background || defaultImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 320px;
  width: 400px;
  margin: 30px;
  border-radius: 20px;
  &:hover ${ServiceInfo} {
    opacity: 1;
  }
  &:hover ${ServiceShadow} {
    opacity: 0.5;
  }
  &:hover {
    box-shadow: 5px 5px 10px ${lightBlue};
  }

  @media (max-width: 1240px) {
    width: 250px;
    height: 200px;
  }
  @media (max-width: 840px) {
    width: 200px;
    height: 160px;
  }
`;
function Service(props) {
  return (
    <ServiceBackground background={props.background}>
      <ServiceTitle>{props.service}</ServiceTitle>
      <ServiceShadow></ServiceShadow>
      <ServiceInfo>{props.serviceInfo}</ServiceInfo>
    </ServiceBackground>
  );
}

function Services() {
  return (
    <ServicesTag>
      <Title>WHAT WE DO</Title>
      <ServiceContainer>
        <Service
          service="CNC Milling"
          background={cncMillingImg}
          serviceInfo="We do CNC Milling work!"
        ></Service>
        <Service
          service="CNC Turning"
          background={cncTurning}
          serviceInfo="We do CNC Turning work!"
        ></Service>
        <Service
          service="Wire EDM"
          background={wireEDM}
          serviceInfo="We do Wire EDM work!"
        ></Service>
        <Service
          service="Tool & Die"
          background={stamping}
          serviceInfo="We do Tool & Die work!"
        ></Service>
      </ServiceContainer>
    </ServicesTag>
  );
}

export default Services;
