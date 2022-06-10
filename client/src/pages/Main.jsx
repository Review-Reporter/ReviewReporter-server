import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setKeyword, setActivePage, setIsKeywordsVisible, setScrollPage } from '../modules/data';
import TotalAnalysis from '../components/TotalAnalysis/TotalAnalysis';
import Categories from "../components/Categories/Categories";
import Keywords from "../components/Keywords/Keywords";
import Analysis from "../components/Analysis/Analysis";
import Review from '../components/Review/Review';
import ScrollTop from '../components/common/ScrollTop';

const Main = () => {
  const { category, keyword, active_page, is_keywords_visible, scroll_page } = useSelector(state => state.data);
  const [scrollY, setScrollY] = useState(0);
  const [categoriesOffset, setCategoriesOffset] = useState(-1);
  const [totalAnalysisOffset, setTotalAnalysisOffset] = useState(-1);
  const [keywordsOffset, setKeywordsOffset] = useState(-1);
  const [analysisOffset, setAnalysisOffset] = useState(-1);
  const [reviewOffset, setReviewOffset] = useState(-1);
  const dispatch = useDispatch();
  const totalAnalysisRef = useRef(null);
  const keywordRef = useRef(null);
  const analysisRef = useRef(null);
  const reviewRef = useRef(null);

  useEffect(() => {
    dispatch(setActivePage(""));

    switch (active_page) {
      case 'categories':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'total_analysis':
        window.scrollTo({ top: totalAnalysisRef.current.offsetTop - 40, behavior: 'smooth' });
        break;
      case 'keywords':
        window.scrollTo({ top: keywordRef.current.offsetTop - 20, behavior: 'smooth' });
        break;
      case 'analysis':
        window.scrollTo({ top: analysisRef.current.offsetTop - 40, behavior: 'smooth' });
        break;
      case 'review':
        window.scrollTo({ top: reviewRef.current.offsetTop - 40, behavior: 'smooth' });
        break;
      default:
        return;
    }
  }, [active_page, dispatch]);

  useEffect(() => {
    dispatch(setKeyword(""));
    dispatch(setIsKeywordsVisible(false));
  }, [category]);

  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      setScrollY(pageYOffset);

      if (categoriesOffset >= 0) 
        if (pageYOffset >= 0 && pageYOffset <= categoriesOffset) 
          dispatch(setScrollPage("categories"));
      if (totalAnalysisOffset >= 0) 
        if (pageYOffset > categoriesOffset && pageYOffset <= totalAnalysisOffset) 
          dispatch(setScrollPage("total_analysis"));
      if (keywordsOffset >= 0)
        if (pageYOffset > totalAnalysisOffset && pageYOffset <= keywordsOffset) 
          dispatch(setScrollPage("keywords"));
      if (analysisOffset >= 0)
        if (pageYOffset > keywordsOffset && pageYOffset <= analysisOffset) 
          dispatch(setScrollPage("analysis"));
      if (reviewOffset >= 0) {
        if (pageYOffset > analysisOffset) 
          dispatch(setScrollPage("review"));
      }
    }
    
    const throttle = (callback, waitTime) => {
      let timerId = null;
      return () => {
        if (timerId) return;
        timerId = setTimeout(() => {
          callback();
          timerId = null;
        }, waitTime);
      };
    };

    const throttleScroll = throttle(handleScroll, 50);

    window.addEventListener('scroll', throttleScroll);
    return () => window.removeEventListener('scroll', throttleScroll);
  }, [scrollY]);

  return (
    <div>
      <Categories
        category={category}
        setPageOffset={setCategoriesOffset}
      />
      {category &&
      <TotalAnalysis
        ref={totalAnalysisRef}
        category={category}
        scrollPage={scroll_page}
        setPageOffset={setTotalAnalysisOffset}
        setIsClicked={() => dispatch(setIsKeywordsVisible(true))}
      />}
      {category &&
       is_keywords_visible &&
      <Keywords 
        ref={keywordRef}
        category={category}
        setPageOffset={setKeywordsOffset}
      />}
      {keyword &&
      <>
        <Analysis 
          ref={analysisRef}
          category={category}
          keyword={keyword}
          scrollPage={scroll_page}
          setPageOffset={setAnalysisOffset}
        />
        <Review
          ref={reviewRef}
          category={category}
          keyword={keyword}
          setPageOffset={setReviewOffset}
        />
      </>}
      <ScrollTop />
    </div>
  )
};

export default Main;