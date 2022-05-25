import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from 'react-router-dom';


const Detail = () => {
  const today = useParams();
  const history = useHistory();

  //평점은 state에 넣고 관리
  const [circle, setCircle] = useState(0);

  // 숫자키
  React.useEffect(() => {
    const press = (e) => {
      if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
        setCircle(parseInt(e.key));
      }
    };
    window.addEventListener("keydown", press);
    return () => window.removeEventListener("keydown", press);
  }, []);

  return (
    <Container>
      <DayText><span>{today.day}요일 </span> 평점 남기기</DayText>
      <div className="circleList">
        {Array.from({ length: 5 }, (e, i) => {
          return <Circle
            key={i}
            onClick={() => {
              setCircle(i + 1);
              console.log(circle);
            }}
            style={{ background: i <= circle - 1 ? 'tomato' : '#ddd' }}
          />
        })}
      </div>
      <input type={"submit"} value={"평점 남기기"}
        onClick={() => {
          history.push('/');
        }}
      />
    </Container>
  )
}
const Container = styled.div`
  padding: 30px 0;
.circleList {
  text-align: center;
  margin: 20px 0 20px;
}
input {
  padding: 10px 55px;
  margin: 25px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #436ED1;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-family: 'Cafe24Oneprettynight';
  font-size: 18px;
  cursor: pointer;
}
  
`
const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 30px;
  margin: 6px;
  display: inline-block;
  cursor: pointer;
`
const DayText = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  

  span {
    background-color: #F0CF43;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    margin-right: 6px;
  }
`



export default Detail;