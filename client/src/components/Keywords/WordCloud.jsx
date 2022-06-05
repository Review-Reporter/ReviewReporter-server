import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setKeyword, setActivePage } from '../../modules/data';
import styled, { css } from 'styled-components';

const WordCloudContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WordBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  max-width: 180px;
  text-align: center;
  height: 66px;

  ${props => {
    let topValue = props.top/3 + "em";
    let leftValue = props.left/3 + "em";

    return css`
      top: ${topValue};
      left: ${leftValue};
    `
  }};
`;

const Word = styled.div`
  display: inline-block;
  font-weight: bold;
  width: 100%;
  font-size: 0.7em; // 20px ~ 100px , 20px ~ 50px
  color: ${props => props.theme[props.color]};

  
  cursor: pointer;
  &:hover { 
    opacity: 0.8;
    transform: scale(1.05);
  };
  &:active { opacity: 0.7 };

  ${props => {
    let value = 0.5 + parseFloat(props.value)*2 + "em";

    return css`
      font-size: ${value};
    `
  }};
`;

const ImgArea = styled.div`
  width: 30%;
`;

const DataContainer = styled.div`
  position: relative;
  width: 32%;
  margin-top: -4rem;
  max-width: 20rem;

  @media screen and (min-width: 1000px) {
    font-size: 3.1rem;
  }
`;

const position = {
  top: {
    0: [0, 1, 7, 10, 13],
    1: [0, 3, 6, 10, 13],
    2: [0, 2, 8, 11, 13],
    3: [0, 4, 7, 11, 12]
  },
  left: {
    0: [-2, 10, 0, 7, 4],
    1: [10, -2, 7, 3, 9],
    2: [10, -2, 8, 3, 9],
    3: [10, -2, 7, 10, 3]
  }
};

const color = [
  ["sub_color", "primary_color", "text_color", "sub_color", "primary_color"],
  ["text_color", "sub_color", "sub_color", "primary_color", "text_color"],
  ["text_color", "primary_color", "sub_color", "primary_color", "text_color"],
  ["sub_color", "text_color", "primary_color", "sub_color", "text_color"],
]



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
    let values = Object.values(data);
    let random_position = randomValue(0, 3);
    let random_color = randomValue(0, 3);

    const sum = values.reduce((sum, currentValue) => sum + currentValue);

    for (let i=from, j=0; i<to; i++, j++){
      array.push(
        <WordBox
          key={i}
          top={position.top[random_position][j]}
          left={position.left[random_position][j]}
        >
          <Word 
            onClick={() => {
              dispatch(setKeyword(keys[i]));
              dispatch(setActivePage('analysis'));
            }}
            value={values[i]/sum}
            color={color[random_color][j]}
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