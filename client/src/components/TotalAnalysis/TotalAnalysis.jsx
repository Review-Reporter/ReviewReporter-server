import { useState, forwardRef, useEffect } from 'react';
import Info from '../common/Info';
import DataAPI from '../../api/DataAPI';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../modules/data';
import backpackTotalMentionGraph from '../../assets/images/total/backpack_total_mention_graph.png';
import totebagTotalMentionGraph from '../../assets/images/total/totebag_total_mention_graph.png';
import backpackSalesGraph from '../../assets/images/sales/Backpack_sales.png';
import totebagSalesGraph from '../../assets/images/sales/Tote Bag_sales.png';
import {
  PageContainer,
  TitleContainer,
  Title,
  SubTitle,
  Category,
  InfoIcon,
  KeywordContainer,
  Keyword,
  Line,
  ContentsContainer,
  ContentsTitle,
  GraphContainer,
  Graph,
  Background,
  CloseIcon,
  OpenIcon,
  AnalysisContainer,
  TextContainer,
  Text,
  HighLight,
  ButtonWrapper,
  Button
} from '../../styles/TotalAnalysis';

const TotalAnalysis = ({ category, setIsClicked }, ref) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isMentionGraphClicked, setIsMentionGraphClicked] = useState(false);
  const [isSalesGraphClicked, setIsSalesGraphClicked] = useState(false);
  const [graphKeywords, setGraphKeywords] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [keywords, setKeywords] = useState([]);
  const dispatch = useDispatch();

  const keywordsText = () => {
    let text = '';

    for (let keyword of keywords) {
      text += " '" + keyword + "',"
    }

    return text.slice(0, -1)
  }

  const onGraphClicked = (value) => {
    if (value === 'sales') {
      setIsSalesGraphClicked(!isSalesGraphClicked);
      setIsMentionGraphClicked(false);
    }
    else {
      setIsSalesGraphClicked(false);
      setIsMentionGraphClicked(!isMentionGraphClicked);
    }
  }

  useEffect(() => {
    if (isInfoVisible) {
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
  }, [isInfoVisible]);

  useEffect(() => {
    setIsMentionGraphClicked(false);
    setIsSalesGraphClicked(false);
  }, [category]);

  useEffect(() => {
    const getSelectedKeywordData = async() => {
      const result = await DataAPI.getSelectedKeyword(category);

      setGraphKeywords(result);
    }

    const getKeywordData = async() => {
      const data = await DataAPI.getKeyword(category);

      setKeywords(Object.keys(data));
    }

    getSelectedKeywordData();
    getKeywordData();
  }, [category])

  const color = [ "#4fa6e0", "#e8bc2c", "#e394aa", "#8cd16f" ];
  
  return (
    <PageContainer
      ref={ref}
    >
      <TitleContainer>
        <Title><Category>{category}</Category> 카테고리 통합 분석</Title>
        <InfoIcon size="24"
          onClick={() => setIsInfoVisible(true)}
        />
        <Info
          isVisible={isInfoVisible}
          setIsVisible={setIsInfoVisible}
        >[21.05.09 ~ 22.04.23] 기간 동안 'Google'과 'NAVER'에서의 검색량을 바탕으로 언급량을 측정하였습니다.</Info>
      </TitleContainer>
      <ContentsContainer>
        {!isSalesGraphClicked &&
        <GraphContainer>
          <ContentsTitle>언급량 <SubTitle>- 판매량 연관 키워드</SubTitle></ContentsTitle>
          <Background
            graph
            title={!isMentionGraphClicked ? "클릭 시 이미지가 확대됩니다." : "클릭 시 이미지가 축소됩니다."}
            isClicked={isMentionGraphClicked}
            onClick={() => onGraphClicked('mention')}
          >
            <Graph
              src={category === 'Backpack' ? backpackTotalMentionGraph : totebagTotalMentionGraph} 
            />
            {isMentionGraphClicked ? <CloseIcon size="30" /> : <OpenIcon size="24" />}
            {graphKeywords &&
            <KeywordContainer>
              {graphKeywords.map((keyword, i) => 
                <Keyword 
                  key={i}
                  title="클릭 시 선택한 키워드와 판매량의 그래프가 나타납니다."
                  isSelected={selectedKeyword === keyword ? true : false}
                  onClick={() => setSelectedKeyword(keyword)}
                >
                  <Line color={color[i]}/>{keyword}
                </Keyword>
              )}
            </KeywordContainer>}
          </Background>
        </GraphContainer>
        }
        {!isMentionGraphClicked &&
        <GraphContainer>
          <ContentsTitle>판매량</ContentsTitle>
          <Background
            graph
            title={!isSalesGraphClicked ? "클릭 시 이미지가 확대됩니다." : "클릭 시 이미지가 축소됩니다."}
            isClicked={isSalesGraphClicked}
            onClick={() => onGraphClicked('sales')}
          >
            <Graph
              src={category === 'Backpack' ? backpackSalesGraph : totebagSalesGraph}  
            />
            {isSalesGraphClicked ? <CloseIcon size="30" /> : <OpenIcon size="24" />}
            <KeywordContainer>
              <Keyword static><Line color="white"/>판매량</Keyword>
            </KeywordContainer>
          </Background>
        </GraphContainer>}
      </ContentsContainer>
      {keywords &&
      <ContentsContainer>
        <AnalysisContainer>
          <ContentsTitle>통합 분석 결과</ContentsTitle>
          <Background>
            <TextContainer>
              <Text>
                {category} 카테고리 리뷰 가운데, 출현 빈도수 기준 상위 10개의 키워드는 
                <HighLight>{keywordsText()}</HighLight>로 추출되었습니다.
              </Text>
              <Text>
                이 중에서 
                <HighLight> 판매량의 변화에 영향</HighLight>을 미친 것으로 판단되는 키워드는 
                <HighLight> '학교', '학생'</HighLight>으로 분석되었습니다.
              </Text>
              <Text>
                학교, 학생과 같은 키워드가 영향을 미치는 것으로 보아 
                <HighLight> 학교가 개학하는 시기에 판매량이 증가</HighLight>하는 것을 파악할 수 있습니다.
              </Text>
              <Text>
                또한 학교나 학생의 언급량이 증가한 시점으로부터 2개월 뒤 판매량이 집중되는 것을 보아, 
              </Text>
              <Text>
                <HighLight>추천 마켓팅 전략</HighLight>은
                <br/>
                <HighLight>추천 마켓팅 시기</HighLight>는
              </Text>
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
    </PageContainer>
  )
};

export default forwardRef(TotalAnalysis);