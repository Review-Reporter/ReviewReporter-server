import React from 'react';
import styled from 'styled-components';
import { FiArrowUp } from 'react-icons/fi';

const Button = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  justify-content: center;
  align-items: center;
  background: white;
  opacity: 0.5;
  width: 3rem;
  height: 3rem;
  display: flex;
  border-radius: 50%;
  cursor: pointer;

  &:hover { opacity: 0.7 };
  &:active { opacity: 0.4 };
`;

const Icon = styled(FiArrowUp)`
  color: gray;
`;

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <Button
      onClick={scrollToTop}
    >
      <Icon size="32"/>
    </Button>
  )
};

export default ScrollTop;