import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//정의된 이름
const name = "Sara";

//함수명이 Welcome인 컴포넌트를 작성합니다.
// JSX 내에서 자바스크립트를 활용하기 위해 중괄호({})를 이용해 name을 출력합니다.
function Welcome() {
  return <h2>Welcome, {name}</h2>;
}

//컴포넌트를 호출합니다.
// JSX로 작성되어 리턴하는 함수는 함수명을 HTML태그처럼 사용할 수 있습니다.
// 이렇게 JSX로 이루어진 함수를 컴포넌트 라고 합니다.
const element = <Welcome />;
ReactDOM.render(element, document.getElementById("root"));

serviceWorker.unregister();
