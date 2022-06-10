import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 7px solid gray;
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;
`;

const Loading = () => {
  return (
    <Background>
      <Spinner />
    </Background>
  )
};

export default Loading;