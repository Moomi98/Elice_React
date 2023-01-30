import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import React, { useState } from "react";

// 나만의 Hook인 Custom Hook은 "use"라는 이름을 붙여 생성해야 합니다.
const useUser = () => {
  // useState()를 이용해 state 변수를 만드세요.
  const [nickname, setNickname] = useState("");

  // Custom Hook에서 실제로 업데이트를 담당하는 함수를 작성합니다.
  const updateNickname = (event) => {
    const nickname = event.target.value;

    setNickname(nickname);
  };

  // useState를 사용할 때와 같이 배열 안에 state와 setState로 사용될 함수를 넣어 반환합니다.
  return [nickname, updateNickname];
};

const User = () => {
  // 위에서 만든 Custom Hook을 호출한 후 구조 분해 할당으로 값을 할당합니다.
  const [nickname, setNickname] = useUser();

  return (
    <div>
      <label>{nickname}</label>
      <br />
      <input value={nickname} onChange={setNickname} />
    </div>
  );
};

ReactDOM.render(<User />, document.getElementById("root"));

serviceWorker.unregister();
