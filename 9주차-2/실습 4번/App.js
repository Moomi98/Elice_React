import React, { useState } from "react";

const App = () => {
  // useState의 매개변수를 넣어주면 해당 매개변수를 state의 초기값으로 활용할 수 있습니다.
  // 아래의 message의 초기값은 useState의 매개변수 값인 "오늘의 점심메뉴는?" 입니다.
  const [message, setMessage] = useState("오늘의 점심메뉴는?");

  return <h1>{message}</h1>;
};

export default App;
