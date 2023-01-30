// react 라이브러리에서 useState 불러오기
import React, { useState, useEffect } from "react";
import "../index.css";

function Counter() {
  // useState 함수 (초기값 0) 의 결과를 counter, setCounter 변수에 할당
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    // counter 값을 1 늘리도록 코드 작성
    setCounter((counter) => counter + 1);
  };
  const decreaseCounter = () => {
    // counter 값을 1 줄이도록 코드 작성
    setCounter((counter) => counter - 1);
  };

  // useEffect 함수를 사용하여 document.title 변경
  // useEffect의 두 번째 인자인 배열 안에 변수 및 state를 넣으면 해당 값이 변경될 때 useEffect가 실행됩니다.
  // 실습 코드에선 counter state가 변경될 때 마다 document.title이 변경되어야 하므로 배열 안에 counter state를 등록해줍니다.
  useEffect(() => {
    document.title = `현재 카운터 숫자: ${counter}`;
  }, [counter]);

  return (
    <div className="counter">
      <h2> 카운터 </h2>
      <div>{counter}</div>
      <button onClick={increaseCounter}>증가하기</button>
      <button onClick={decreaseCounter}>감소하기</button>
    </div>
  );
}

export default Counter;
