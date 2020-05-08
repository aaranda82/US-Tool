import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';
import Contact from './Contact';

const { lightGrey, orange, black } = ColorScheme;
const HeaderTag = styled.div`
  position: relative;
  color: ${lightGrey};
  border: ${lightGrey} 1px solid;
  height: 60px;
  width: 75%;
  @media (max-width: 650px) {
    width: 100%;
  }
`;
const Button = styled.div`
  position: fixed;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: ${orange};
  font-size: 40px;
  text-align: center;
  right: 20px;
  top: 20px;
  z-index: 1;
`;
const Modal = styled.div`
  display: none;
  position: fixed;
  min-height: 660px;
  width: 80vw;
  background-color: ${black};
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  z-index: 1;
`;
function Header() {
  return (
    <>
      <Modal>
        <Contact></Contact>
      </Modal>
      <HeaderTag>
        Header
        <Button>+</Button>
      </HeaderTag>
    </>
  );
}

export default Header;
