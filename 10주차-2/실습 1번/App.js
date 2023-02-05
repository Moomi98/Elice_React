import React, { createContext, useReducer } from "react";
import ContainerA from "./components/A";
import "./App.css";

/*
  Context 객체 생성
  다른 컴포넌트에서 Context를 참조할 수 있도록 export 를 합니다.
*/
export const MyContext = createContext(null);

/*
  상태 초기값을 작성합니다.
*/
const initial = {
  top: "apple",
  middle: "banana",
  bottom: "coconut",
};

/*
  reducer() 함수는 state 변경시 조건에 따라 값을 다르게 변경해줘야 할 경우 유용하게 사용됩니다.
  useReducer() Hook의 두 번째 인자인 dispatch() 함수의 매개변수가 reducer() 함수의 action으로 넘어오게 됩니다.
  action 매개변수는 {type : (조건 명령어), payload : 변경하고 싶은 새로운 state} 의 객체로 이루어져 있습니다.
  action.type에 따라 변경하고 싶은 새로운 state를 return으로 반환해줍니다.
*/
function reducer(state, action) {
  switch (action.type) {
    case "top-middle-change":
      return { ...state, top: state.middle, middle: state.top };
    case "middle-bottom-change":
      return { ...state, middle: state.bottom, bottom: state.middle };
    case "top-bottom-change":
      return { ...state, top: state.bottom, bottom: state.top };
    case "top-update":
      return { ...state, top: action.payload };
    case "middle-update":
      return { ...state, middle: action.payload };
    case "bottom-update":
      return { ...state, bottom: action.payload };
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initial);
  const value = { state, dispatch };

  return (
    <div className="layout">
      {/* 
        Provider란 context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할을 합니다.
        App 컴포넌트의 하위 컴포넌트들이 value값을 사용할 수 있게 하도록 props로 전달합니다.
        
      */}
      <MyContext.Provider value={value}>
        <ContainerA />
      </MyContext.Provider>
    </div>
  );
}
