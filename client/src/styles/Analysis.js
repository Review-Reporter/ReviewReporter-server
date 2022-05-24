import styled, { css } from 'styled-components';
import { AiOutlineInfoCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  padding: 2rem;
  margin: 0 auto;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const Category = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
  color: lightgray;
  margin-left: 1rem;
  cursor: pointer;

  &:hover { opacity: 0.8; };
  &:active { opacity: 0.7 };
`;

export const Keyword = styled.span`
  color: ${props => props.theme.sub_color};
`;

export const ContentsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
`;

export const GraphContainer = styled.div`
  padding: 1rem;
`;

export const Graph = styled.img`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  margin-bottom: 0.7rem;
  padding-left: 0.5rem;
`;

export const Background = styled.div`
  position: relative;
  padding: 2rem;
  background: ${props => props.theme.dark_bg_color};
  width: 100%;

  ${props =>
    props.graph &&
    css`
      width: 100%;
      padding: 1rem;
      cursor: pointer;
    `
  };
`;

export const CloseIcon = styled(IoCloseOutline)`
  color: darkgray;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  &:hover { opacity: 0.8; };
  &:active { opacity: 0.7 };
`;

export const OpenIcon = styled(AiOutlinePlusCircle)`
  color: darkgray;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  &:hover { opacity: 0.8; };
  &:active { opacity: 0.7 };
`;

export const AnalysisContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;