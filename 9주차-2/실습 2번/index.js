import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import React, { useState } from "react";

const User = () => {
  // useState Hook은 React에서 만든 함수의 일종입니다.
  // useState는  state와 state를 업데이트 해주는 setState 함수를 [state, setState] 형식의 배열로 반환합니다.
  // useState Hook으로부터 반환 받은 값을 구조 분해 할당을 통해 원하는 이름으로 할당해줍니다.
  const [nickname, setNickname] = useState("");

  const updateNickname = (event) => {
    // nickname 변수에 event를 이용해 사용자가 입력한 값을 삽입하세요.
    // event.target를 통해 이벤트가 발생한 HTML 태그를 얻어옵니다.
    // 그후 value를 통해 이벤트가 발생한 HTML 태그의 현재 값을 얻어옵니다.
    const nickname = event.target.value;

    // setNickname의 매개변수로 nickname을 넘겨주세요.
    // setNickname은 state를 업데이트 해주는 함수입니다. 매개변수로 받은 값으로 state를 업데이트 합니다.
    // setNickname이 실행되면 User 컴포넌트 함수가 다시 실행되며 nickname state가 updateNickname 함수에서 정의한 nickname으로 업데이트 됩니다.
    setNickname(nickname);
  };

  return (
    <div>
      <label>{nickname}</label>
      <br />
      <input value={nickname} onChange={updateNickname} />
    </div>
  );
};

ReactDOM.render(<User />, document.getElementById("root"));

serviceWorker.unregister();
