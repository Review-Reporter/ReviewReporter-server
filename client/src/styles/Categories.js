import styled from 'styled-components';

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

export const CategoryContainer = styled.div`
  margin-top: 3rem;
  display: flex;
`;

export const Category = styled.div`
  display: inline-block;
  max-width: 400px;
  margin: 2rem 1rem;
  cursor: pointer;
  position: relative;

  :not(:hover) {
    opacity: 0.85;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

export const Image = styled.img`
  width: 100%;
`;