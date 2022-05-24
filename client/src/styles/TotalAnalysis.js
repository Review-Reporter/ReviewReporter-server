import styled, { css } from 'styled-components';
import { AiOutlineInfoCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5'

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  min-height: 100vh;
  padding: 2rem;
  padding-bottom: 4rem;
  margin: 0 auto;
  font-weight: 500;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
`;

export const SubTitle = styled.span`
  font-size: 1rem;
  color: lightgray;
`;

export const Category = styled.span`
  color: ${ props => props.theme.sub_color };
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
  color: ${props => props.theme.sub_color};
`;

export const ContentsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
`;

export const KeywordContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
  padding: 0 1rem;
`;

export const Keyword = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 0.9rem;
  margin: 0 0.5rem;

  ${props => {
    const isStatic = props.static;

    if (isStatic) return null;
    return css`
      cursor: pointer;
      &:hover { opacity: 0.8; };
      &:active { opacity: 0.7 };
    `
  }};

  color: ${props => props.isSelected ? "white" : "darkgray"};
`;

export const Line = styled.div`
  width: 1rem;
  height: 2px;
  margin-right: 0.4rem;
  background: ${props => props.color};
`;

export const ContentsTitle = styled.div`
  font-size: 1.25rem;
  margin-bottom: 0.7rem;
  padding-left: 0.5rem;
`;

export const GraphContainer = styled.div`
  padding: 1rem;
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