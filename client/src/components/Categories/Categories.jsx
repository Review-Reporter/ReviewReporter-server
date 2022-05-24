import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActivePage, setCategory } from '../../modules/data';
import toteBag from '../../assets/images/category/Tote Bag.png';
import backpack from '../../assets/images/category/Backpack.png';
import {
  PageContainer,
  CategoryContainer,
  Category,
  Image,
} from '../../styles/Categories';


const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory(null));
  }, []);

  return (
    <PageContainer>
      <CategoryContainer>
        <Category
          onClick={() => {
            dispatch(setCategory('Tote Bag'));
            dispatch(setActivePage('total_analysis'));
          }}
        >
          <Image src={toteBag} />
        </Category>
        <Category
          onClick={() => {
            dispatch(setCategory('Backpack'));
            dispatch(setActivePage('total_analysis'));
          }}
        >
          <Image src={backpack} />
        </Category>
      </CategoryContainer>
    </PageContainer>
  )
}

export default Categories;