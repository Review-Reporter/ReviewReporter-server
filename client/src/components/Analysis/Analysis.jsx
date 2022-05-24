import { useState, forwardRef } from 'react';
import {
  PageContainer,
  Keyword,
  TitleContainer,
  Category,
  InfoIcon,
  ContentsContainer,
  GraphContainer,
  Graph,
  Title,
  Background,
  CloseIcon,
  OpenIcon,
  AnalysisContainer
} from '../../styles/Analysis';

const Analysis = ({ category, keyword }, ref) => {
  const [isMentionGraphClicked, setIsMentionGraphClicked] = useState(false);
  const [isSalesGraphClicked, setIsSalesGraphClicked] = useState(false);

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

  if (!category || !keyword) return null;
  return (
    <PageContainer
      ref={ref}
    >
      <TitleContainer>
        <Category>{category}</Category>      
        <InfoIcon size="24" />
      </TitleContainer>
      <ContentsContainer>
        {!isSalesGraphClicked &&
        <GraphContainer>
          <Title><Keyword>'{keyword}'</Keyword> 언급량</Title>
          <Background
            graph
            isClicked={isMentionGraphClicked}
            onClick={() => onGraphClicked('mention')}
          >
            <Graph src={require(`../../assets/images/mention/${category}/${keyword}.png`)} />
            {isMentionGraphClicked ? <CloseIcon size="30" /> : <OpenIcon size="24" />}
          </Background>
        </GraphContainer>}
        {!isMentionGraphClicked &&
        <GraphContainer>
          <Title>판매량</Title>
          <Background
            graph
            isClicked={isSalesGraphClicked}
            onClick={() => onGraphClicked('sales')}
          >
            <Graph src={require(`../../assets/images/sales/${category}_sales.png`)} />
            {isSalesGraphClicked ? <CloseIcon size="30" /> : <OpenIcon size="24" />}
          </Background>
        </GraphContainer>}
      </ContentsContainer>
      <ContentsContainer>
        <AnalysisContainer>
          <Title>분석 결과</Title>
          <Background></Background>
        </AnalysisContainer>
      </ContentsContainer>
    </PageContainer>
  )
};

export default forwardRef(Analysis);