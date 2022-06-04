import { useState, useEffect, useRef, forwardRef } from 'react';
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

const Review = ({ category, keyword, setPageOffset }, ref) => {
  const [reviewKeyword, setReviewKeyword] = useState(keyword);
  const [keywords, setKeywords] = useState(null);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(-1);
  const [contents, setContents] = useState(null);
  const totalPage = useRef(0);
  const limit = useRef(10);

  const countOffset = () => {
    setOffset((currentPage - 1) * limit.current)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: ref.current.offsetTop - 20});
  }

  const sliceContents = (data) => {
    setContents(
      data.slice(offset, offset + limit.current).map((review, i) => 
        <ReviewContents
          key={i}
          id={review.id}
          keyword={reviewKeyword}
          vendor_name={review.vendor_name}
          product_name={review.product_name}
          date={review.date}
          contents={review.contents}
          url={review.url}
          currentPage={currentPage}
          reviewKeyword={reviewKeyword}
        />
    ))
  }

  useEffect(() => {
    if (!ref) return;

    const calculateOffset = () => {
      const offsetBottom = ref.current.offsetTop + ref.current.offsetHeight;
      
      setPageOffset(offsetBottom);
    }

    calculateOffset();
    window.addEventListener('resize', calculateOffset);
    return () => {
      window.removeEventListener('resize', calculateOffset);
    }
  }, []);
  
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
    setCurrentPage(1);
    getReviewData();
  }, [reviewKeyword]);

  useEffect(() => {
    countOffset();
  }, [currentPage]);

  useEffect(() => {
    if (data) sliceContents(data);
  }, [offset, data])

  useEffect(() => {
    setReviewKeyword(keyword);
  }, [keyword]);

  return (
    <PageContainer
      ref={ref}
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
          {contents &&
          <ReviewContainer>
            {contents}
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

export default forwardRef(Review);