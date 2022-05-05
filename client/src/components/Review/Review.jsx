import { useState, useEffect, useRef } from 'react';
import DataAPI from '../../api/DataAPI';
import ReviewContents from './ReviewContents';
import Tag from './Tag';
import Pagination from './Pagination';
import {
  PageContainer,
  Background,
  ContentsContainer,
  PageTitle,
  TagContainer,
  ReviewContainer
} from '../../styles/Review';

const Review = ({ category, keyword }) => {
  const [reviewKeyword, setReviewKeyword] = useState(keyword);
  const [keywords, setKeywords] = useState(null);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const totalPage = useRef(0);
  const limit = useRef(10);
  const pageRef = useRef(10);

  const countOffset = () => {
    setOffset((currentPage - 1) * limit.current)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: pageRef.current.offsetTop - 20});
  }
  
  useEffect(() => {
    const getKeywordData = async() => {
      const result = await DataAPI.getKeyword(category);

      setKeywords(Object.keys(result));
    }

    getKeywordData();
  }, []);

  useEffect(() => {
    const getReviewData = async() => {
      const result = await DataAPI.getReview(category, reviewKeyword);
      
      setData(result);
      const totalData = result.length;
      totalPage.current = Math.ceil(totalData / limit.current);
    }

    getReviewData();
  }, [reviewKeyword]);

  useEffect(() => {
    countOffset(data);
  }, [currentPage]);

  return (
    <PageContainer
      ref={pageRef}
    >
      <PageTitle>키워드별 리뷰</PageTitle>
      <ContentsContainer>
        <Background>
          {keywords &&
          <TagContainer>
            {keywords.map((keyword, i) => (
              <Tag
                key={i}
                keyword={reviewKeyword}
                setReviewKeyword={setReviewKeyword}
              >{keyword}</Tag>
            ))}
          </TagContainer>
          }
          {data &&
          <ReviewContainer>
            {data.slice(offset, offset + limit.current).map((review, i) => 
              <ReviewContents
                key={i}
                id={review.id}
                vendor_name={review.vendor_name}
                product_name={review.product_name}
                date={review.date}
                contents={review.contents}
                url={review.url}
              />
            )}
          </ReviewContainer>}
          <Pagination 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={totalPage.current}
            scrollToTop={scrollToTop}
          />
        </Background>
      </ContentsContainer>
    </PageContainer>
  );
};

export default Review;