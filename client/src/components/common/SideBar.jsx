import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage } from '../../modules/data';

const SideBarContainer = styled.div`
  @media screen and (max-width: 1480px) {
    display: none;
  }

  color: #e4e4e4;
  position: fixed;
  top: 10rem;
  left: 2.5rem;
  width: 10rem;
`;

const Title = styled.h3`
  font-weight: bold;
  padding: 0 0.5rem;
  font-size: 1.3rem;
  font-family: ${ props => props.theme.fonts.menu };
  border-bottom: 1px solid gray;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ContentsContainer = styled.div``;

const Contents = styled.div`
  color: darkgray;
  padding: 0 0.7rem;
  margin-bottom: 0.4rem;
  font-size: 0.95rem;
  cursor: pointer;
  &:hover { opacity: 0.8 };
  &:active { opacity: 0.7 };

  transition: 0.2s ease-out;

  ${ props => {
     if (props.isSelected) 
      return css`
        font-size: 1.1rem;
        padding: 0;
        color: white;
      `
  }};
`;


const SideBar = () => {
  const { category, keyword, is_keywords_visible, scroll_page, is_popup_visible } = useSelector(state => state.data);
  const dispatch = useDispatch();

  if (is_popup_visible) return null;
  return (
    <SideBarContainer>
      <Title>Contents</Title>
      <ContentsContainer>
        <Contents 
          isSelected={scroll_page === 'categories' ? true : false}
          onClick={() => dispatch(setActivePage('categories'))}
        >
          카테고리 선택 
        </Contents>
        { category &&
          <Contents
            isSelected={scroll_page === 'total_analysis' ? true : false}
            onClick={() => dispatch(setActivePage('total_analysis'))}
        >카테고리 통합 분석</Contents>}
        { category &&
          is_keywords_visible &&
        <Contents
          isSelected={scroll_page === 'keywords' ? true : false}
          onClick={() => dispatch(setActivePage('keywords'))}
        >주요 언급 키워드</Contents>}
        { category &&
          keyword &&
          <>
            <Contents
              isSelected={scroll_page === 'analysis' ? true : false}
              onClick={() => dispatch(setActivePage('analysis'))}
            >키워드 세부 분석</Contents>
            <Contents
              isSelected={scroll_page === 'review' ? true : false}
              onClick={() => dispatch(setActivePage('review'))}
            >키워드별 리뷰</Contents>
          </>}
      </ContentsContainer>
    </SideBarContainer>
  )
};

export default SideBar;