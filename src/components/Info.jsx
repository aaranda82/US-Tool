import React from 'react';
import styled from 'styled-components';
import { ColorScheme } from '../styles/colorScheme';

const { lightGrey } = ColorScheme;
const InfoTag = styled.div`
  color: ${lightGrey};
  border: ${lightGrey} 3px solid;
  width: 75%;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
`;

function Info() {
  return (
    <InfoTag>
      <Title>WHERE TO FIND US</Title>
    </InfoTag>
  );
}

export default Info;
