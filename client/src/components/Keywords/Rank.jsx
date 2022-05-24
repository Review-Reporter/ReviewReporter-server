import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setKeyword, setActivePage } from '../../modules/data';

const RankContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin: 1rem;
  margin-top: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.7;
  }
`;

const NumBackground = styled.div`
  background: ${props => props.theme.primary_color};
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  z-index: 2;
`;

const Num = styled.div`
  line-height: 2.4rem;
  text-align: center;
  font-weight: bold;
`;

const Keyword = styled.div`
  position: relative;
  display: flex;
`;

const RectBackground = styled.div`
  background: ${props => props.theme.light_bg_color};
  width: 10rem;
  height: 2.2rem;
  padding: 0.6rem;
  padding-left: 2rem;
  margin-left: -1rem;
  font-size: 1.25rem;
  text-align: center;
  z-index: 1;
`;

const RoundBackground = styled.div`
  position: absolute;
  right: -1rem;
  background: ${props => props.theme.light_bg_color};
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0 50% 50% 0;
  z-index: 0;
`;

const Rank = ({ rank, keyword }) => {
  const dispatch = useDispatch();

  return (
    <RankContainer
      onClick={() => {
        dispatch(setKeyword(keyword));
        dispatch(setActivePage('analysis'));
      }}
    >
      <NumBackground><Num>{rank}</Num></NumBackground>
      <Keyword>
        <RectBackground>{keyword}</RectBackground><RoundBackground />
      </Keyword>
    </RankContainer>
  )
};

export default Rank;