import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';
import cncMillingImg from '../assets/images/cncMilling1000x800.jpg';
import cncTurning from '../assets/images/cncTurning1000x800.jpg';
import wireEDM from '../assets/images/wireEDM1000x800.jpg';
import stamping from '../assets/images/stamping1000x800.jpg';

const { lightGrey } = ColorScheme;
const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${lightGrey};
`;

function Machines(m) {
  const machinery = m.map((machine, index) => <p key={index}>{machine}</p>);
  return machinery;
}
function ServiceCard(name, photo, serviceInfo) {
  return (
    <div className="col-sm">
      <div className="card m-3">
        <img src={photo} className="card-img-top" alt={name}></img>
        <div className="card-img-overlay">
          <h5 style={{ background: 'white' }} className="card-title">
            {name}
          </h5>
        </div>
        <div className="card-body">{Machines(serviceInfo)}</div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <ServicesContainer>
      <div className="container">
        <div className="row justify-content-around">
          {ServiceCard('WIRE EDM', wireEDM, [
            '2 - Fanuc alpha-OC',
            'Fanuc Robocut alpha-1iA',
          ])}
          {ServiceCard('CNC Milling', cncMillingImg, [
            '2 - Fadal 3 axis CNC Mill',
            'Fadal 4 axis CNC Mill',
          ])}
          <div className="w-100"></div>
          {ServiceCard('CNC Turning', cncTurning, [
            'Dynamic 3 axis CNC Lathe with Fagor controls',
            'Femco HL-25 CNC Lathe with Fanuc controls',
          ])}
          {ServiceCard('Tool & Die', stamping, [
            'Blank Die',
            'Progressive Die',
            'Forming Die',
            'Short and Long Stamping Runs',
          ])}
        </div>
      </div>
    </ServicesContainer>
  );
}

export default Services;
