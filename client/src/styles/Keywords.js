import styled, { css } from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  height: 100vh;
  padding: 2rem;
  margin: 0 auto;
  font-weight: 500;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 845px;
`;

export const Category = styled.div`
  ${({theme}) => {
    return css`
      font-family: ${theme.fonts.category};
      color: ${theme.light_bg_color};
    `;
  }};
  letter-spacing: 2px;
  font-size: 10rem;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -4rem;
`;

export const Image = styled.img`
  width: 19rem;
  height: 400px;
`;

export const KeywordContainer = styled.div``;

export const WordCloudContainer = styled.div`
  margin-top: -22rem;
`;

export const RankContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 4rem;
`;
