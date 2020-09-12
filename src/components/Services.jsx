import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';
import cncMillingImg from '../assets/images/cncMilling1000x800.jpg';
import cncTurning from '../assets/images/cncTurning1000x800.jpg';
import wireEDM from '../assets/images/wireEDM1000x800.jpg';
import stamping from '../assets/images/stamping1000x800.jpg';

const { lightGrey, black, lightBlue } = ColorScheme;
const ServicesContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  background-color: ${lightGrey};
`;

const ServicesContent = styled.div`
  margin: auto;
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const InfoCont = styled.div`
  width: 60%;
`;

const ServiceInfo = styled.div`
  width: 100%;
`;

const ServiceItem = styled.div`
  margin: 10px 0;
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  padding: 10px;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const ServiceTitle = styled.div`
  color: ${black};
  background-color: ${lightBlue};
  padding: 10px 0px 10px 0px;
`;

const ServiceImage = styled.img`
  width: 40%;
`;

function Machines(m) {
  const machinery = m.map((machine, index) => (
    <div
      style={{ margin: '10px 0', display: 'flex', flexWrap: 'wrap' }}
      key={index}
    >
      <i
        className="fas fa-dot-circle"
        style={{ textAlign: 'center', width: '20%' }}
      ></i>
      <div style={{ width: '80%' }}>{machine}</div>
    </div>
  ));
  return machinery;
}
function Service(name, background, serviceInfo) {
  return (
    <ServiceItem id="item">
      <ServiceImage id="image" src={background} alt={name} />
      <InfoCont>
        <ServiceTitle id="title">{name}</ServiceTitle>
        <ServiceInfo id="info">{Machines(serviceInfo)}</ServiceInfo>
      </InfoCont>
    </ServiceItem>
  );
}

function Services() {
  return (
    <ServicesContainer>
      <ServicesContent>
        <div style={{ width: '100%' }}>WHAT WE DO:</div>
        {Service('CNC Milling', cncMillingImg, [
          '2 - Fadal 3 axis CNC Mill',
          'Fadal 4 axis CNC Mill',
        ])}
        {Service('CNC Turning', cncTurning, [
          'Dynamic 3 axis CNC Lathe with Fagor controls',
          'Femco HL-25 CNC Lathe with Fanuc controls',
        ])}
        {Service('Wire EDM', wireEDM, [
          '2 - Fanuc alpha-OC',
          'Fanuc Robocut alpha-1iA',
        ])}
        {Service('Tool & Die', stamping, [
          'Blank Die',
          'Progressive Die',
          'Forming Die',
          'Short and Long Stamping Runs',
        ])}
      </ServicesContent>
    </ServicesContainer>
  );
}

export default Services;
