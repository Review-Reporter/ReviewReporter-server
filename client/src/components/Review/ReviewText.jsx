import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const Text = styled.div`
  ${props =>
    !props.isOpen &&
    css`
      display: -webkit-box; 
      word-wrap: break-word; 
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical; 
      overflow: hidden; 
      text-overflow: ellipsis;
      height: 56px;
    `
  }
  
  line-height: 1.2;
  font-size: 1rem;
`;

const ReviewText = ({ isOpen, setIsFoldVisible, children, currentPage, reviewKeyword }) => {
  const text = useRef(null);

  const handleResize = () => {
    if (text.current.scrollHeight > 59) setIsFoldVisible(true);
    else setIsFoldVisible(false);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    handleResize();
  }, [currentPage, reviewKeyword]);

  return (
    <Text
      ref={text}
      isOpen={isOpen}
    >{children}</Text>
  )
};

export default ReviewText;