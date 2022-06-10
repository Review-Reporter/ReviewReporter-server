import React, { useState, forwardRef, useEffect } from 'react';
import Loading from '../common/Loading';
import PopUp from '../common/PopUp';
import DataAPI from '../../api/DataAPI';
import AnalysisData from '../../assets/data/total_analysis_data.json';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../modules/data';
import {
  PageContainer,
  TitleContainer,
  Title,
  Category,
  InfoIcon,
  ContentsContainer,
  ContentsTitle,
  GraphContainer,
  Graph,
  Background,
  AnalysisContainer,
  TextContainer,
  Text,
  HighLight,
  SummaryTitle,
  ButtonWrapper,
  Button,
  GraphTitle
} from '../../styles/TotalAnalysis';

const TotalAnalysis = ({ category, setIsClicked, setPageOffset }, ref) => {
  const [loading, setLoading] = useState(true);
  const [folder, setFolder] = useState(null);
  const [isInfoVisible, setIsInfoVisible] = useState(null);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [selectedGraph, setSelectedGraph] = useState('');
  const [keywords, setKeywords] = useState([]);
  const dispatch = useDispatch();

  const keywordsText = (keywords) => {
    let text = '';

    for (let keyword of keywords) {
      text += " '" + keyword + "',"
    }

    return text.slice(0, -1)
  }

  const analysisText = (category) => {
    const array = [];
    const category_analysis = AnalysisData[category];

    category_analysis['comment'].map((data, i) => {
      let elem = <Text key={i} dangerouslySetInnerHTML={{ __html: data}}></Text>
      array.push(elem);
    });
    
    return array;
  }

  const handlePopUpBackground = (isVisible) => {
    if (isVisible) {
      document.body.style.cssText = `
        position: fixed;
        top: -${window.pageYOffset}px;
        overflow-y: scroll;
        width: 100%;
      `
    }
    else {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
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
    handlePopUpBackground(isInfoVisible);
  }, [isInfoVisible]);

  useEffect(() => {
    handlePopUpBackground(selectedGraph);
  }, [selectedGraph])

  useEffect(() => {
    const getSelectedKeywordData = async() => {
      const result = await DataAPI.getSelectedKeyword(category);
      setSelectedKeywords(result);
    }

    const getKeywordData = async() => {
      const data = await DataAPI.getKeyword(category);

      setKeywords(Object.keys(data));
    }

    const getFolderName = () => {
      let str = category;
      return str.replace(/ /gi, "");
    }

    setLoading(true);
    setSelectedKeywords('');
    getSelectedKeywordData();
    getKeywordData()
    .then(() => setLoading(false))
    setFolder(getFolderName());
  }, [category])
  
  return (
    <PageContainer
      ref={ref}
    >
      {loading ? <Loading /> : <>
        <TitleContainer>
        <Title><Category>{category}</Category> 카테고리 통합 분석</Title>
        <InfoIcon size="24"
          onClick={() => setIsInfoVisible(true)}
        />
        <PopUp
          isVisible={isInfoVisible}
          setIsVisible={setIsInfoVisible}
        >[21.05.09 ~ 22.04.23] 기간 동안 'Google'과 'NAVER'에서의 검색량을 바탕으로 언급량을 측정하였습니다.</PopUp>
      </TitleContainer>
      {selectedKeywords &&
      <ContentsContainer>
          {selectedKeywords &&
           selectedKeywords.map((keyword, i) => (
            <GraphContainer key={i}>
              <Background
                graph
                title="클릭 시 이미지가 확대됩니다."
                isClicked={selectedGraph === keyword}
                onClick={() => setSelectedGraph(keyword)}
              >
                <GraphTitle >{keyword}</GraphTitle>
                <Graph
                  src={require(`../../assets/images/differencing/${folder}/${keyword}.png`)} 
                />
              </Background>
            </GraphContainer>
          ))}
      </ContentsContainer>}
      {keywords &&
      <ContentsContainer>
        <AnalysisContainer>
          <ContentsTitle>통합 분석 결과</ContentsTitle>
          <Background>
            <TextContainer>
              <Text>
                {category} 카테고리 리뷰 가운데, 출현 빈도수 기준 상위 10개의 키워드는 
                <HighLight>{keywordsText(keywords)}</HighLight>로 추출되었습니다.
              </Text>
              <Text>
                이 중에서 
                <HighLight> 판매량의 변화에 영향</HighLight>을 미친 것으로 판단되는 키워드는 
                <HighLight> {keywordsText(selectedKeywords)}</HighLight>으로 분석되었습니다.
              </Text>
              {analysisText(category)}
            </TextContainer>
          </Background>
          <Background style={{marginTop: '1rem'}}>
            <TextContainer>
              <SummaryTitle>추천 마케팅 전략</SummaryTitle>
              <Text dangerouslySetInnerHTML={{ __html: AnalysisData[category]['summary'][0] }}></Text>
            </TextContainer>
          </Background>
          <Background style={{marginTop: '1rem'}}>
            <TextContainer>
              <SummaryTitle>추천 마케팅 시기</SummaryTitle>
              <Text dangerouslySetInnerHTML={{ __html: AnalysisData[category]['summary'][1] }}></Text>
            </TextContainer>
          </Background>
        </AnalysisContainer>
      </ContentsContainer>}
      <ButtonWrapper>
        <Button
          onClick={() => {
            dispatch(setActivePage('keywords'));
            setIsClicked(true);
          }}
        >키워드별 세부 분석 보기</Button>
      </ButtonWrapper>
      {selectedGraph !== "" &&
      <PopUp
        graph
        isVisible={selectedGraph !== ""}
        setIsVisible={setSelectedGraph}
      >
        <GraphTitle>{selectedGraph}</GraphTitle>
        <Graph src={require(`../../assets/images/differencing/${folder}/${selectedGraph}.png`)}/>
      </PopUp>}</>}
    </PageContainer>
  )
};

export default forwardRef(TotalAnalysis);