import styled, { css } from 'styled-components';

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

export const Category = styled.div`
  width: 100%;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
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
  width: 50%;
  padding: 1rem;
`;

export const Graph = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  margin-bottom: 0.7rem;
  padding-left: 0.5rem;
`;

export const Background = styled.div`
  padding: 2rem;
  background: ${props => props.theme.dark_bg_color};
  width: 100%;
  // height 추후 삭제
  height: 50rem;

  ${props =>
    props.graph &&
    css`
      width: 100%;
      height: 20rem;
      padding: 1rem;

      &:hover {
        transform: scale(1.3);
      }
    `
  };
`;


export const AnalysisContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;