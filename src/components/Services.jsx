import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';
import cncMillingImg from '../assets/images/cncMilling1000x800.jpg';
import cncTurning from '../assets/images/cncTurning1000x800.jpg';
import wireEDM from '../assets/images/wireEDM1000x800.jpg';
import stamping from '../assets/images/stamping1000x800.jpg';

const { lightGrey, lightBlue } = ColorScheme;
const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${lightGrey};
  border-radius: 10px;
`;

function Machines(m) {
  const machinery = m.map((machine, index) => <p key={index}>{machine}</p>);
  return machinery;
}
function ServiceCard(name, photo, serviceInfo) {
  return (
    <div className="col-sm">
      <div className="card m-3 border-dark">
        <img src={photo} className="card-img-top" alt={name}></img>
        <div className="card-img-overlay">
          <h5
            style={{ background: lightBlue }}
            className="card-title rounded border border-dark"
          >
            {name}
          </h5>
        </div>
        <div className="card-body rounded">{Machines(serviceInfo)}</div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <ServicesContainer>
      <div className="container m-3">
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
            'Blank, Progressive, and Forming Dies',
            'Short and Long Stamping Runs',
          ])}
        </div>
      </div>
    </ServicesContainer>
  );
}

export default Services;
