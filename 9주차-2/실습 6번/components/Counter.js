// react 라이브러리에서 useState 불러오기
import React, { useState } from "react";
import "../index.css";

function Counter() {
  // useState 함수 (초기값 0) 의 결과를 counter, setCounter 변수에 할당
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    // setState 함수(여기서는 setCounter는 인자로 값 대신 함수를 할당할 수 있습니다.
    // 할당된 함수의 매개변수로 이전 state 값을 가져옵니다.
    setCounter((counter) => counter + 1);
  };
  const decreaseCounter = () => {
    // counter 값을 1 줄이도록 코드 작성
    setCounter((counter) => counter - 1);
  };

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
