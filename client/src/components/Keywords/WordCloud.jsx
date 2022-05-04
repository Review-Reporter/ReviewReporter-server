import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setKeyword, setActivePage } from '../../modules/data';
import styled, { css } from 'styled-components';

const WordCloudContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
`;

const WordBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 66px;
  ${props => {
    let topValue = props.top + "rem";
    let leftValue = props.left + "rem";

    return css`
      top: ${topValue};
      left: ${leftValue};
    `
  }};
`;

const Word = styled.div`
  display: inline-block;
  font-size: 40px; // 20px ~ 100px , 20px ~ 50px
  cursor: pointer;
  &:hover { 
    opacity: 0.8;
    transform: scale(1.05);
  };
  &:active { opacity: 0.7 };
`;

const ImgArea = styled.div`
  width: 22rem;
  height: 420px;
  margin: 0 auto;
`;

const DataContainer = styled.div`
  position: relative;
  width: 25rem;
  margin-top: -3rem;
`;

const position = {
  top: {
    0: [0, 1, 8, 13, 20],
    1: [0, 4, 8, 13, 20],
    2: [0, 2, 8, 16, 20],
    3: [0, 4, 7, 12, 18]
  },
  left: {
    0: [-1, 13, 0, 10, 4],
    1: [13, 0, 10, 3, 8],
    2: [13, -1, 8, 3, 8],
    3: [13, -1, 7, 12, 3]
  }
};



const WordCloud = ({ data }) => {
  const [array1, setArray1] = useState(null);
  const [array2, setArray2] = useState(null);
  const dispatch = useDispatch();

  const randomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const divideArray = (from, to) => {
    let array = [];
    let keys = Object.keys(data);
    let random = randomValue(0, 3);

    for (let i=from, j=0; i<to; i++, j++){
      array.push(
        <WordBox
          key={i}
          top={position.top[random][j]}
          left={position.left[random][j]}
        >
          <Word 
            onClick={() => {
              dispatch(setKeyword(keys[i]));
              dispatch(setActivePage('analysis'));
            }}
            value={data[keys[i]]}
          >{keys[i]}</Word>
        </WordBox>
      )
    }
    
    return array;
  };

  useEffect(() => {
    setArray1(divideArray(0, 5));
    setArray2(divideArray(5, 10));
  }, [data]);

  return (
    <WordCloudContainer>
      <DataContainer>
        {array1}
      </DataContainer>
      <ImgArea />
      <DataContainer>
        {array2}
      </DataContainer>
    </WordCloudContainer>
  )
};

export default WordCloud;