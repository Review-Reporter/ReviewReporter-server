import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setKeyword, setActivePage } from '../modules/data';
import TotalAnalysis from '../components/TotalAnalysis/TotalAnalysis';
import Categories from "../components/Categories/Categories";
import Keywords from "../components/Keywords/Keywords";
import Analysis from "../components/Analysis/Analysis";
import Review from '../components/Review/Review';
import ScrollTop from '../components/common/ScrollTop';

const Main = () => {
  const [isKeywordsVisible, setIsKeywordsVisible] = useState(false);
  const { category, keyword, active_page } = useSelector(state => state.data);
  const dispatch = useDispatch();
  const totalAnalysisRef = useRef(null);
  const keywordRef = useRef(null);
  const analysisRef = useRef(null);

  useEffect(() => {
    dispatch(setActivePage(""));

    switch (active_page) {
      case 'categories':
        setIsKeywordsVisible(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'total_analysis':
        setIsKeywordsVisible(false);
        dispatch(setKeyword(""));
        window.scrollTo({ top: totalAnalysisRef.current.offsetTop - 20, behavior: 'smooth' });
        break;
      case 'keywords':
        dispatch(setKeyword(""));
        window.scrollTo({ top: keywordRef.current.offsetTop - 10, behavior: 'smooth' });
        break;
      case 'analysis':
        window.scrollTo({ top: analysisRef.current.offsetTop - 20, behavior: 'smooth' });
        break
      default:
        return;
    }
  }, [active_page, dispatch]);

  return (
    <div>
      <Categories
        category={category}
      />
      {category &&
      <TotalAnalysis
        ref={totalAnalysisRef}
        category={category}
        setIsClicked={setIsKeywordsVisible}
      />
      }
      {category &&
       isKeywordsVisible &&
      <Keywords 
        ref={keywordRef}
        category={category}
      />
      }
      {keyword &&
      <>
        <Analysis 
          ref={analysisRef}
          category={category}
          keyword={keyword}
        />
        <Review 
          category={category}
          keyword={keyword}
        />
      </>
      }
      <ScrollTop />
    </div>
  )
};

export default Main;