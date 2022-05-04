import { forwardRef } from 'react';
import {
  PageContainer,
  Keyword,
  Category,
  ContentsContainer,
  GraphContainer,
  Graph,
  Title,
  Background,
  AnalysisContainer
} from '../../styles/Analysis';

const Analysis = ({ category, keyword }, ref) => {

  if (!category || !keyword) return null;
  return (
    <PageContainer
      ref={ref}
    >
      <Category>{category}</Category>
      <ContentsContainer>
        <GraphContainer>
          <Title><Keyword>'{keyword}'</Keyword> 언급량</Title>
          <Background
            graph
          ><Graph/></Background>
        </GraphContainer>
        <GraphContainer>
          <Title>판매량</Title>
          <Background
            graph
          ><Graph/></Background>
        </GraphContainer>
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