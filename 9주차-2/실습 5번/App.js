import React, { useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("오늘의 점심메뉴는?");

  // useEffect Hook은 컴포넌트가 렌더링 될 때 특정 작업을 실행해주는 Hook 입니다.
  // useEffect의 첫 번째 인자로 함수를 넣어주면 컴포넌트가 렌더링 될 때 마다 함수가 실행됩니다.
  // useEffect의 두 번째 인자로 빈 배열을 넣어주면 컴포넌트가 최초로 렌더링 될 때 1번만 실행됩니다.
  useEffect(() => {
    console.log("useEffect 동작!");

    setTimeout(() => {
      setMessage("바로~바로~ 닭갈비에 막국수!");
    }, 1000);
  });

  return <h1>{message}</h1>;
};

export default App;
