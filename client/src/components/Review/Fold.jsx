import { useState } from 'react';
import styled from 'styled-components';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

export const FoldContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  margin-right: -1rem;
  margin-bottom: -0.7rem;
  cursor: pointer;
`;

export const FoldText = styled.span`
  font-size: 0.8rem;
  color: gray;
  margin-right: 4px;
`;

export const ArrowDown = styled(BsChevronDown)`
  width: 0.8rem;
  color: gray;
  padding-bottom: 2px;
`;

export const ArrowUp = styled(BsChevronUp)`
  width: 0.8rem;
  color: gray;
  padding-bottom: 2px;
`;


const Fold = ({ isVisible, isOpen, setIsOpen }) => {
  if (!isVisible) return null;
  return (
    <FoldContainer
      onClick={() => setIsOpen(!isOpen)}
    >
      <FoldText>{isOpen ? "접기" : "펼치기"}</FoldText>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
    </FoldContainer>

  )
};

export default Fold;