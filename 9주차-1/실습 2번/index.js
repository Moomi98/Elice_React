import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//고객의 이름을 출력하는 함수
function formatName(user) {
  return user.lastName + " " + user.firstName;
}

//고객의 이름을 저장하는 변수
const user = {
  lastName: "코딩하는",
  firstName: "엘리스",
};

//인사문구를 출력하는 함수
//formatName()함수를 사용해 출력문구를 완성합니다.
// getGretting 함수의 매개변수로 받은 user를 출력하기 위해 표현식을 사용합니다.
// 표현식이란 값으로 표현될 수 있는 식을 의미합니다.
// formatName(user)는 문자열을 결과값으로 받으므로 표현식이라 할 수 있습니다.
// 따라서 JSX 문법에서 활용할 수 있는 중괄호({})를 이용해 자바스크립트 함수인 formatName을 사용하여 문자열을 받아옵니다.
function getGreeting(user) {
  return <h1>Hello, {formatName(user)}!</h1>;
}
//getGreeting()의 결과값을 element에 저장합니다.
const element = getGreeting(user);

ReactDOM.render(element, document.getElementById("root"));

serviceWorker.unregister();
