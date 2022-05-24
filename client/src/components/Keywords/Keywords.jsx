import { forwardRef, useEffect, useState } from 'react';
import DataAPI from '../../api/DataAPI';
import toteBag from '../../assets/images/toteBag.png';
import backpack from '../../assets/images/backpack.png';
import WordCloud from './WordCloud';
import Rank from './Rank';
import {
  PageContainer,
  Title,
  ContentsContainer,
  Category,
  ImageWrapper,
  Image,
  KeywordContainer,
  WordCloudContainer,
  RankContainer,
} from '../../styles/Keywords';


const Keywords = ({ category }, ref) => {
  const [data, setData] = useState(null);
  const [rank, setRank] = useState(null);

  useEffect(() => {
    const getKeywordData = async() => {
      const result = await DataAPI.getKeyword(category);
      setData(result);
      calculateRank(result);
    }

    getKeywordData();
  }, [category]);

  const calculateRank = (data) => {
    let keys = Object.keys(data);
    let values = Object.values(data);
    let tmp = null;

    for (let i=0; i<keys.length-1; i++) {
      for (let j=i+1; j<keys.length; j++) {
        if (values[i] < values[j]) {
          tmp = values[i];
          values[i] = values[j];
          values[j] = tmp;

          tmp = keys[i];
          keys[i] = keys[j];
          keys[j] = tmp;
        }
      }
    }

    setRank(keys);
  }

  if (!category) return null;
  return (
    <PageContainer
      ref={ref}
    >
      <Title>주요 언급 키워드</Title>
      <Category>{category}</Category>
      <ContentsContainer>
        <KeywordContainer>
        <ImageWrapper>
          <Image 
            value={category} 
            src={category === 'Backpack' ? backpack : toteBag}
            style={category === 'Tote Bag' ? {marginTop: '0.8em'} : {}}
          />
        </ImageWrapper>
        {data && <WordCloudContainer>
          <WordCloud 
            data={data}
            category={category}
          />
        </WordCloudContainer>}
        </KeywordContainer>
        {rank &&
        <RankContainer>
          {rank.map((keyword, i) => (
            <Rank 
              key={i} 
              rank={i+1} 
              keyword={keyword} 
            />
          ))}
        </RankContainer>}
      </ContentsContainer>
    </PageContainer>
  )
};

export default forwardRef(Keywords);