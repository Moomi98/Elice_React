import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// HTML을 JSX로 변환하여 element에 저장합니다.
// JSX로 이루어진 문법은 항상 최상위 부모 태그 하나로 구성되어야 합니다.
const element = (
  <div>
    <h2>코더랜드에 오신것을 환영합니다:)</h2>
    <h2>즐거운 React! 함께 공부해봐요~</h2>
  </div>
);

// Web API를 활용해 브라우저에 Element 그리는 함수 입니다.
// ReactDOM.render(그리고 싶은 element, 기준이 되는 HTML 태그)
// 아래의 코드에서는 "root"라는 아이디를 가진 HTML 태그 안에 element를 그리게 됩니다.
ReactDOM.render(element, document.getElementById("root"));

// serviceWorker란 React와는 별개로 실행되는 브라우저 스크립트 파일입니다.
// 네트워크 관련 기능, 백그라운드 동기화 관련 기능들이 존재합니다.
serviceWorker.unregister();
