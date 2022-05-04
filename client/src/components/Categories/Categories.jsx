import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActivePage, setCategory } from '../../modules/data';
import toteBag from '../../assets/images/toteBag.jpg';
import backpack from '../../assets/images/backpack.jpg';
import {
  PageContainer,
  CategoryContainer,
  Category,
  Image,
  Text
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
            dispatch(setActivePage('keywords'));
          }}
        >
          <Image src={toteBag} />
          <Text>Tote Bag</Text>
        </Category>
        <Category
          onClick={() => {
            dispatch(setCategory('Backpack'));
            dispatch(setActivePage('keywords'));
          }}
        >
          <Image src={backpack} />
          <Text style={{left: '19%'}}>Backpack</Text>
        </Category>
      </CategoryContainer>
    </PageContainer>
  )
}

export default Categories;