import { useState } from 'react';
import styled from 'styled-components';
import Fold from './Fold';
import ReviewText from './ReviewText';

const ReviewContentsContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.border_color};
  padding: 1.2rem 1rem;
`;

const ReviewLink = styled.a`
  text-decoration: none;
  color: white;
`;

const Meta = styled.div`
  display: inline-block;
  font-size: 0.75rem;
  color: gray;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;



const ReviewContents = ({ keyword, vendor_name , date, product_name, contents, url, currentPage, reviewKeyword }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFoldVisible, setIsFoldVisible] = useState(false);

  const Text = () => {
    const reviewText = contents.replaceAll(keyword, 
      `<span style="background: #e4d7c0; color: black">${keyword}</span>`
    );
    return <div dangerouslySetInnerHTML={{ __html: reviewText }}></div>;
  }
  
  return (
    <ReviewContentsContainer>
      <ReviewLink
        href={url}
        title="해당 상품의 상세 사이트로 이동합니다."
        target="_blank"
      > 
        <Meta>{vendor_name} · {date} · {product_name}</Meta>
      </ReviewLink>
      <ReviewText
        isFoldVisible={isFoldVisible}
        setIsFoldVisible={setIsFoldVisible}
        isOpen={isOpen}
        currentPage={currentPage}
        reviewKeyword={reviewKeyword}
      >{Text()}</ReviewText>
      <Fold
        isVisible={isFoldVisible}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </ReviewContentsContainer>
  )
};

export default ReviewContents;