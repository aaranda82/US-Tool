import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

function Quote() {
  const { lightGrey } = ColorScheme;
  const Quote = styled.div`
    color: ${lightGrey};
    border: ${lightGrey} 3px solid;
    width: 25%;

    @media (max-width: 400px) {
      width: 75%;
    }
  `;
  return <Quote>Quote</Quote>;
}

export default Quote;
