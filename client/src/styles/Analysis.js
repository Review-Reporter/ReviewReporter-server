import styled, { css } from 'styled-components';
import { AiOutlineInfoCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1080px;
  padding: 2rem;
  margin: 0 auto;
  font-weight: 500;
  margin-bottom: 2rem;
  margin-top: 6rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
  color: lightgray;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover { opacity: 0.8; };
  &:active { opacity: 0.7 };
`;

export const Keyword = styled.span`
  color: ${props => props.theme.highlight_color};
`;

export const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  width: 100%;
  margin-bottom: 2rem;
`;

export const GraphTitle = styled.h3`
  font-size: 1.25rem;
  color: lightgray;
  border-bottom: 1px solid gray;
  padding-bottom: 0.5rem;
  margin-bottom: 0.7rem;
  padding-left: 0.5rem;
`;

export const GraphContainer = styled.div`
  padding: 1rem;
  font-size: 5vw;
`;

export const Graph = styled.img`
  width: 100%;
`;

export const ContentsTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
  padding-left: 0.5rem;
`;

export const SubTitle = styled.span`
  font-size: 1rem;
  color: lightgray;
`;

export const Background = styled.div`
  position: relative;
  padding: 2rem;
  background: ${props => props.theme.dark_bg_color};
  width: 100%;

  ${props =>
    props.graph &&
    css`
      width: 7.5em;
      max-width: 26rem;
      padding: 0;
      padding: 1rem;
      cursor: pointer;
      &:hover { opacity: 0.8; };
      &:active { opacity: 0.7 };
    `
  };
`;

export const Text = styled.p`
  color: ${ props => props.theme.sub_text_color };
  font-size: 1.1rem;
  line-height: 1.3;
`;

export const List = styled.li`

`;

export const Value = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const HighLight = styled.span`
  color: ${props => props.theme.highlight_color};
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