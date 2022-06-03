import { useState, useEffect, forwardRef } from 'react';
import DataAPI from '../../api/DataAPI';
import PopUp from '../common/PopUp';
import {
  PageContainer,
  Keyword,
  TitleContainer,
  Title,
  InfoIcon,
  ContentsContainer,
  GraphTitle,
  GraphContainer,
  Graph,
  ContentsTitle,
  Text,
  List,
  Value,
  HighLight,
  Background,
  AnalysisContainer
} from '../../styles/Analysis';


const Analysis = ({ category, keyword, setPageOffset }, ref) => {
  const [folder, setFolder] = useState(null);
  const [pValue, setPValue] = useState(null);
  const [lag, setLag] = useState(0);
  const [isRelated, setIsRelated] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [selectedGraph, setSelectedGraph] = useState('');
  
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
    const calculateOffset = () => {
      if (!ref) return;
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
    const getAnalysisData = async() => {
      const result = await DataAPI.getAnalysis(category, keyword);

      setPValue(result.p_value);
      setLag(result.lag_value);
      setIsRelated(result.isRelated);
    }

    getAnalysisData();
  }, [keyword]);

  useEffect(() => {
    if (folder) handlePopUpBackground(selectedGraph);
  }, [selectedGraph]);

  useEffect(() => {
    if (folder) handlePopUpBackground(isInfoVisible);
  }, [isInfoVisible]);

  useEffect(() => {
    let str = category;

    setFolder(str.replace(/ /gi, ""));
  }, [category]);

  if (!category || !keyword) return null;
  return (
    <PageContainer
      ref={ref}
    >
      <TitleContainer>
        <Title><Keyword>'{keyword}'</Keyword> 키워드 세부 분석</Title>     
        <InfoIcon size="24" onClick={() => setIsInfoVisible(true)}/>
        <PopUp
          isVisible={isInfoVisible}
          setIsVisible={setIsInfoVisible}
        > 
          <span style={{fontWeight: 'bold'}}>p-value란?</span><br/>
          <t/>Granger Causality TEST의 검정 값.<br/><br/>
          <li>0.05 &lt; p-value일 경우, 인과관계를 따르지 않음.<br/></li>
          <li>0.05 &gt; p-value일 경우, 인과관계를 따름.</li>
        </PopUp>
      </TitleContainer>
      <ContentsContainer>
        <GraphContainer>
          <Background
            graph
            onClick={() => setSelectedGraph('언급량')}
          >
            <GraphTitle>언급량</GraphTitle>
            {folder && 
            <Graph src={require(`../../assets/images/mention/${folder}/${keyword}.png`)} />}
          </Background>
        </GraphContainer>
        <GraphContainer>
          <Background
            graph
            title="클릭 시 이미지가 확대됩니다."
            onClick={() => setSelectedGraph('판매량')}
          >
            <GraphTitle>판매량</GraphTitle>
            <Graph src={require(`../../assets/images/sales/${category}.png`)} />
          </Background>
        </GraphContainer>
        <GraphContainer>
          <Background
            graph
            title="클릭 시 이미지가 확대됩니다."
            onClick={() => setSelectedGraph('분석 그래프')}
          >
            <GraphTitle>분석 그래프</GraphTitle>
            {folder &&
             <Graph src={require(`../../assets/images/differencing/${folder}/${keyword}.png`)}/>}
          </Background>
        </GraphContainer>
      </ContentsContainer>
      <ContentsContainer>
        <AnalysisContainer>
          <ContentsTitle>분석 결과</ContentsTitle>
          {lag &&
           pValue &&
           keyword &&
           <Background>
             <Value>
              <List>p-value : {pValue}</List>
              <List>lag : {lag}</List>
             </Value>
             <Text>
              <HighLight>'{keyword}'</HighLight>의 언급량과 판매량의 증감 추이를 비교하여 {lag}의 간격으로 조정을 가했을 때 가장 유사할 것으로 분석되었으{isRelated ? "며" : "나"},
              인과 검정 결과 <HighLight>{pValue}</HighLight>의 값으로 <HighLight style={{ fontWeight: 'bold' }}>인과 관계가 {isRelated ? "있습니다" : "없습니다"}.</HighLight>
            </Text>
          </Background>}
        </AnalysisContainer>
      </ContentsContainer>
      {selectedGraph &&
      <PopUp
        graph
        isVisible={selectedGraph !== ""}
        setIsVisible={setSelectedGraph}
      >
        <GraphTitle>{selectedGraph}</GraphTitle>
        {folder &&
         selectedGraph === '언급량' &&
         <Graph src={require(`../../assets/images/mention/${folder}/${keyword}.png`)} />}
        {selectedGraph === '판매량' &&
         <Graph src={require(`../../assets/images/sales/${category}.png`)} />}
        {folder &&
         selectedGraph === '분석 그래프' &&
         <Graph src={require(`../../assets/images/differencing/${folder}/${keyword}.png`)}/>}
      </PopUp>}
    </PageContainer>
  )
};

export default forwardRef(Analysis);