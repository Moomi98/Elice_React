import React from "react";
import "./App.css";

// 프로필 출력 컴포넌트
// props는 객체로 구성되어 있습니다.
// name, age, gender를 받은 props는 다음과 같이 구성되어 있습니다.
/*
   props = {
        name : "Joshi",
        age : "25",
        gender : "남"
    }
*/
function Profile(props) {
  return (
    <div>
      {/* name을 출력합니다. */}
      <h2>이름: {props.name}</h2>
      {/* age를 출력합니다. */}
      <h2>나이: {props.age}</h2>
      {/* gender를 출력합니다. */}
      <h2>성별: {props.gender}</h2>
    </div>
  );
}

// 데이터 저장 변수
const data = {
  name: "Joshi",
  age: "25",
  gender: "남",
};

const element = (
  // Profile 컴포넌트를 호출합니다.
  // data의 값을 props로 제공합니다.
  <Profile name={data.name} age={data.age} gender={data.gender} />
);

function App() {
  return element;
}

export default App;
