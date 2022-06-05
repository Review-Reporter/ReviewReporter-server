import React from 'react';
import styled, { css } from 'styled-components';

const TagWrapper = styled.div`
  height: 2rem;
  border: 2px solid gray;
  margin: 0.3rem;
  padding: 0.5rem 0.8rem;
  border-radius: 7px;
  font-size: 0.98rem;
  font-family: ${ props => props.theme.fonts.title };
  cursor: pointer;

  ${props =>
    props.color &&
    css`
      background: ${props.theme.primary_color};
      border: 2px solid ${props.theme.primary_color};
    `
  };

  &:hover {opacity: 0.8};
  &:active {opacity: 0.7};
`;

const Tag = ({ keyword, setReviewKeyword, children }) => {
  return (
    <TagWrapper
      onClick={() => setReviewKeyword(children)}
      color={keyword === children ? "true" : undefined}
    >{children}</TagWrapper>
  )
};

export default Tag;