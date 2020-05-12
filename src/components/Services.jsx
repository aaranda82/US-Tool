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
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  color: ${lightGrey};
  font-size: 30px;
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
    height: 160px;
    width: 200px;
  }
  @media (max-width: 650px) {
    height: 79.5vmin;
    width: 100%;
  }
`;
const ServiceItem = styled.div`
  margin: 10px 0px 10px 0px;
  cursor: pointer;
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
const ServiceModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  width: 80%;
  background-color: ${lightBlue};
  z-index: 1;
  font-size: 30px;
  color: ${black};
`;
const Exit = styled.div`
  background-color: ${lightGrey};
  cursor: pointer;
`;
function Service(props) {
  return (
    <ServiceItem onClick={props.onClick}>
      <ServiceTitle>{props.service}</ServiceTitle>
      <ServiceImage background={props.background}>
        <ServiceShadow></ServiceShadow>
        <ServiceInfo>{props.serviceInfo}</ServiceInfo>
      </ServiceImage>
    </ServiceItem>
  );
}

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      modalContent: 'Hello world',
    };
    this.modal = this.modal.bind(this);
  }
  modal(view, modalContent) {
    this.setState({ view, modalContent });
  }
  render() {
    return (
      <ServicesTag>
        {this.state.view ? (
          <ServiceModal>
            <Exit onClick={() => this.modal('', '')}>X</Exit>
            {this.state.modalContent}
          </ServiceModal>
        ) : null}
        <Title>WHAT WE DO</Title>
        <ServiceContainer>
          <Service
            service="CNC Milling"
            background={cncMillingImg}
            serviceInfo="We do CNC Milling work!"
            onClick={() => this.modal('show', 'service1')}
          ></Service>
          <Service
            service="CNC Turning"
            background={cncTurning}
            serviceInfo="We do CNC Turning work!"
            onClick={() => this.modal('show', 'service2')}
          ></Service>
          <Service
            service="Wire EDM"
            background={wireEDM}
            serviceInfo="We do Wire EDM work!"
            onClick={() => this.modal('show', 'service3')}
          ></Service>
          <Service
            service="Tool & Die"
            background={stamping}
            serviceInfo="We do Tool & Die work!"
            onClick={() => this.modal('show', 'service4')}
          ></Service>
        </ServiceContainer>
      </ServicesTag>
    );
  }
}

export default Services;
