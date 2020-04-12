import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

function Contact() {
  const { lightGrey } = ColorScheme;
  const Contact = styled.div`
    color: ${lightGrey};
    border: ${lightGrey} 3px solid;
    width: 75%;
  `;
  return <Contact>Contact</Contact>;
}

export default Contact;
