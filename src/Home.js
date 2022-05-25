// import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import { BrowserRouter, Route } from "react-router-dom";

//평균 컴포넌트
import Avg from "./Avg";


const Home = () => {
  const history = useHistory();

  const day = ['월', '화', '수', '목', '금', '토', '일'];

  const week_days = Object.keys(day).map((_d, idx) => {
    // 오늘 날짜
    let today = new Date().getDay();

    let d =
      today + parseInt(_d) > 6
        ? today + parseInt(_d) - 7
        : today + parseInt(_d);

    return day[d];
  });

  let sum = 0;
  return (
    <ListStyle>
      <Title>내 일주일은?</Title>
      <ul>
        {week_days.map((day, idx) => {

          const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
          const num = getRandom(0, 5);

          //합계
          sum += num

          return (
            <li key={idx}>
              <span>{day}</span>
              <div className="circle">
                {Array.from({ length: 5 }, (v, i) => {
                  return <Circle key={i}
                    style={{ background: i <= num ? 'tomato' : '#ddd' }}
                  />
                })}
              </div>
              <Triangle onClick={() => {
                history.push(`/detail/${day}`);
              }} />
            </li>
          )
        })}
      </ul>
      <Avg avg={sum} />
    </ListStyle>
  )
}


// style
const ListStyle = styled.div`
  position:relative;
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 10px auto 20px;
  ul,li {
    list-style: none;
    margin :0;
    padding: 0;
  }
  li{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .circle {
    padding: 0 10px;
  }
  span {
    font-size:18px;
    padding-bottom: 5px;
  }
`;
const Title = styled.h2`
  margin: 0 0 25px 0;
  text-align: center;
  font-family: 'Cafe24Oneprettynight';
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ddd;
  border-radius: 30px;
  margin: 5px;
  display: inline-block;
`
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-left: 25px solid skyblue;
  cursor: pointer;
  margin-bottom: 5px;
`;



export default Home;