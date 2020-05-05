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
  border: 1px solid ${lightBlue};
  @media (max-width: 400px) {
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
  margin: 40px 0px 40px 0px;
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
  height: 100%;
  width: 100%;
  z-index: 0;
  background-color: ${black};
  opacity: 0;
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
const ServiceImage = styled.div`
  position: relative;
  background-image: url(${props => props.background || defaultImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 50vmin;
  width: 62.5vmin;
`;
const ServiceItem = styled.div`
  margin: 10px 0px 10px 0px;
  &:hover ${ServiceInfo} {
    opacity: 1;
  }
  &:hover ${ServiceShadow} {
    opacity: 0.5;
  }
  &:hover {
    box-shadow: 5px 5px 10px ${darkGrey};
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
