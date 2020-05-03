import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';
import defaultImg from '../assets/images/default.png';
import cncMillingImg from '../assets/images/cncMilling1000x800.jpg';
import cncTurning from '../assets/images/cncTurning1000x800.jpg';
import wireEDM from '../assets/images/wireEDM1000x800.jpg';
import stamping from '../assets/images/stamping1000x800.jpg';

const { lightGrey, black, salmon } = ColorScheme;
const ServicesTag = styled.div`
  color: ${lightGrey};
  border: ${lightGrey} 3px solid;
  width: 75%;
`;
const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
`;
const ServiceBackground = styled.div`
  background-image: url(${props => props.background || defaultImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 320px;
  width: 400px;
  margin: 10px;
  border-radius: 20px;
`;
const ServiceTitle = styled.div`
  border: ${black} 2px solid;
  color: ${black};
  background-color: ${salmon};
  position: absolute;
  padding: 10px 20px 10px 20px;
  box-shadow: 15px 10px ${lightGrey};
  margin: 10px;
`;
function Service(props) {
  return (
    <ServiceBackground background={props.background}>
      <ServiceTitle>{props.service}</ServiceTitle>
    </ServiceBackground>
  );
}

function Services() {
  return (
    <ServicesTag>
      <Title>WHAT WE DO</Title>
      <ServiceContainer>
        <Service service="CNC Milling" background={cncMillingImg}></Service>
        <Service service="CNC Turning" background={cncTurning}></Service>
        <Service service="Wire EDM" background={wireEDM}></Service>
        <Service service="Tool & Die" background={stamping}></Service>
      </ServiceContainer>
    </ServicesTag>
  );
}

export default Services;
