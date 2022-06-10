import styled, { css } from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5'

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1080px;
  min-height: 100vh;
  padding: 2rem;
  padding-bottom: 4rem;
  margin: 0 auto;
  margin-top: 6rem;
  font-weight: 500;
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

export const SubTitle = styled.span`
  font-size: 1rem;
  color: lightgray;
`;

export const Category = styled.span`
  color: ${ props => props.theme.highlight_color };
  font-weight: bold;
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
  color: darkgray;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover { opacity: 0.8; };
  &:active { opacity: 0.7 };
`;

export const HighLight = styled.span`
  color: ${props => props.theme.highlight_color};
`;

export const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  width: 100%;
  margin-bottom: 2rem;
`;

export const ContentsTitle = styled.div`
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
  padding-left: 0.5rem;
  font-weight: bold;
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
  height: auto;
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

export const CloseIcon = styled(IoCloseOutline)`
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

export const TextContainer = styled.div`
  color: ${props => props.theme.sub_text_color};
`;

export const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.3;
  margin-bottom: 1rem;

  &:last-child { margin-bottom: 0 };
`;

export const ButtonWrapper = styled.div``;

export const Button = styled.div`
  color: lightgray;
  font-size: 1.3rem;
  text-decoration: underline;
  cursor: pointer;

  &:hover { opacity: 0.8; };
  &:active { opacity: 0.7 };
`;

export const SummaryTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  border-bottom: 1px solid gray;
  padding-bottom: 0.7rem;
  margin-bottom: 0.7rem;
`;