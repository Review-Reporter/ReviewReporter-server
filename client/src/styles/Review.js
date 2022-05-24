import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  padding: 2rem;
  margin: 0 auto;
  font-weight: 500;
  padding-bottom: 5rem;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const PageTitle = styled.div`
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  margin-left: 3rem;
`;

export const Background = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${props => props.theme.dark_bg_color};
`;

export const TagContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  border: 1px solid ${props => props.theme.border_color};
  padding: 0.1rem 0.5rem;
  align-items: center;
`;

export const ReviewContainer = styled.div`
  padding: 1rem 0;
  color: ${props => props.theme.sub_text_color};
`;

