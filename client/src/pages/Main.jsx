import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setKeyword, setActivePage } from '../modules/data';
import Categories from "../components/Categories/Categories";
import Keywords from "../components/Keywords/Keywords";
import Analysis from "../components/Analysis/Analysis";
import Review from '../components/Review/Review';

const Main = () => {
  const { category, keyword, active_page } = useSelector(state => state.data);
  const dispatch = useDispatch();
  const keywordRef = useRef(null);
  const analysisRef = useRef(null);

  useEffect(() => {
    if (active_page === 'categories'){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (active_page === 'keywords'){
      dispatch(setKeyword(""));
      dispatch(setActivePage(""));
      window.scrollTo({ top: keywordRef.current.offsetTop - 20, behavior: 'smooth' });
    }
    else if (active_page === 'analysis') {
      dispatch(setActivePage(""));
      window.scrollTo({ top: analysisRef.current.offsetTop - 20, behavior: 'smooth' });
    }
  }, [active_page, dispatch]);

  return (
    <div>
      <Categories
        category={category}
      />
      {category &&
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
    </div>
  )
};

export default Main;