import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';
import defaultImg from '../assets/images/default.png';
import cncMillingImg from '../assets/images/cncMilling1000x800.jpg';
import cncTurning from '../assets/images/cncTurning1000x800.jpg';
import wireEDM from '../assets/images/wireEDM1000x800.jpg';
import stamping from '../assets/images/stamping1000x800.jpg';

const { lightGrey, darkGrey, black, lightBlue } = ColorScheme;
const ServicesTag = styled.div`
  color: ${lightGrey};
  width: 75%;
  position: relative;
  @media (max-width: 650px) {
    width: 100%;
  }
`;
const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 20px;
  @media (max-width: 650px) {
    font-size: 30px;
  }
`;
const ServiceTitle = styled.div`
  color: ${black};
  background-color: ${lightBlue};
  padding: 10px 0px 10px 0px;
  z-index: 1;
  font-size: 30px;
  font-weight: 600;
`;
const ServiceShadow = styled.div`
  position: absolute;
  height: 0%;
  width: 100%;
  z-index: 0;
  background: ${lightBlue};
  transition: all 0.5s;
`;
const ServiceInfo = styled.div`
  position: absolute;
  width: 100%;
  padding: 5px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  color: ${lightGrey};
  font-size: 25px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.7s;
`;
const ServiceImage = styled.div`
  position: relative;
  background-image: url(${props => props.background || defaultImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 480px;
  width: 600px;
  transition: all 0.5s;
  @media (max-width: 1600px) {
    height: 320px;
    width: 400px;
  }
  @media (max-width: 1100px) {
    height: 240px;
    width: 300px;
  }
  @media (max-width: 800px) {
    height: 320px;
    width: 400px;
  }
  @media (max-width: 650px) {
    height: 79.5vmin;
    width: 100%;
  }
`;
const ServiceItem = styled.div`
  margin: 10px 0px 10px 0px;
  &:hover ${ServiceInfo} {
    opacity: 1;
  }
  &:hover ${ServiceShadow} {
    height: 100%;
  }
  &:hover {
    box-shadow: 0px 0px 10px ${darkGrey};
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;
function Service(props) {
  return (
    <ServiceItem>
      <ServiceTitle>{props.service}</ServiceTitle>
      <ServiceImage background={props.background}>
        <ServiceShadow></ServiceShadow>
        <ServiceInfo>{props.serviceInfo}</ServiceInfo>
      </ServiceImage>
    </ServiceItem>
  );
}

function Machines(m) {
  const machinery = m.map((machine, index) => <div key={index}>{machine}</div>);
  return machinery;
}

function Services() {
  return (
    <ServicesTag>
      <Title>WHAT WE DO</Title>
      <ServiceContainer>
        <Service
          service="CNC Milling"
          background={cncMillingImg}
          serviceInfo={Machines([
            '2 - Fadal 3 axis CNC Mill',
            'Fadal 4 axis CNC Mill',
          ])}
        ></Service>
        <Service
          service="CNC Turning"
          background={cncTurning}
          serviceInfo={Machines([
            'Dynamic 3 axis CNC Lathe with Fagor controls',
            'Femco HL-25 CNC Lathe with Fanuc controls',
          ])}
        ></Service>
        <Service
          service="Wire EDM"
          background={wireEDM}
          serviceInfo={Machines([
            '2 - Fanuc alpha-OC',
            'Fanuc Robocut alpha-1iA',
          ])}
        ></Service>
        <Service
          service="Tool & Die"
          background={stamping}
          serviceInfo={Machines([
            'Blank Die',
            'Progressive Die',
            'Forming Die',
            'Short and Long Stamping Runs',
          ])}
        ></Service>
      </ServiceContainer>
    </ServicesTag>
  );
}

export default Services;
