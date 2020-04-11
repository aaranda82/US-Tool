import React from 'react';
import { ColorScheme } from './styles/colorScheme';
import styled from 'styled-components';

function App() {
  const Background = styled.main`
    background: ${ColorScheme.black};
  `;
  return <Background></Background>;
}

export default App;
