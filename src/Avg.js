import React, { useState } from "react";
import styled from "styled-components";

// 평균 컴포넌트
const Avg = (props) => {
  // 평균 계산
  // let avg = (((props.avg) + 7) / 7).toFixed(1);

  const [avg, setAvg] = useState((((props.avg) + 7) / 7).toFixed(1));

  return (
    <Container>
      <span className="avgText">평균 평점 :</span>
      <ScoreNum>{avg}</ScoreNum>
      <ScoreBtn onClick={() => {
        setAvg('0.0')
      }}>초기화</ScoreBtn>
    </Container>
  )
}

// style
const Container = styled.div`
margin-top: 25px;
position: relative;
padding: 0 30px;
font-size: 18px;
.avgText {
  padding: 0;
  font-size: 22px;
}
`;

const ScoreNum = styled.strong`
margin-left:5px;
font-size: 22px;
`;

const ScoreBtn = styled.button`
float : right;
width : 100px;
padding: 5px 20px;
font-size: 18px;
color: #fff;
background: #1c313a;
border: none;
border-radius: 5px;
cursor: pointer;
font-family: 'Cafe24Oneprettynight';
`;


export default Avg;