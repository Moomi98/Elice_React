import ContainerC from "./C";
import ContainerD from "./D";
import ContainerE from "./E";
import { useContext, useRef } from "react";
import { MyContext } from "../App";

export default function ContainerB() {
  // useContext는 App 컴포넌트에서 <MyContext.Provider/>의 props인 value로 전해준 값을 사용하고 싶을 때 선언합니다.
  // dispatch() 함수는 App 컴포넌트에서 정의한 useReducer Hook의 reducer 함수를 실행하기 위해 사용됩니다.
  const { dispatch } = useContext(MyContext);
  const inputRef = useRef();

  return (
    <div>
      <div className="container b">
        <div className="title">Component B</div>
        <div className="content">
          <ContainerC />
          <ContainerD />
          <ContainerE />
          <div className="button-group">
            <button
              // 상위 값과 가운데 값을 바꾸기 위해 useReducer에서 제공하는 dispatch를 사용합니다.
              // dispatch()의 매개변수는 reducer()함수의 매개변수인 action으로 할당됩니다.
              onClick={() => {
                dispatch({ type: "top-middle-change" });
              }}
            >
              Top Middle Change
            </button>
            <button
              onClick={() => {
                dispatch({ type: "middle-bottom-change" });
              }}
            >
              Middle Bottom Change
            </button>
            <button
              onClick={() => {
                dispatch({ type: "top-bottom-change" });
              }}
            >
              Top Bottom Change
            </button>
          </div>
          <div className="button-group">
            <input type="text" data-testid="input" ref={inputRef} />
            <button
              // dispatch() 함수의 매개변수로 payload를 함께 전달하게 되면 해당 payload를 변화할 state로 사용할 수 있습니다.
              onClick={() => {
                dispatch({
                  type: "top-update",
                  payload: inputRef.current.value,
                });
              }}
            >
              Top Update
            </button>
            <button
              onClick={() => {
                dispatch({
                  type: "middle-update",
                  payload: inputRef.current.value,
                });
              }}
            >
              Middle Update
            </button>
            <button
              onClick={() => {
                dispatch({
                  type: "bottom-update",
                  payload: inputRef.current.value,
                });
              }}
            >
              Bottom Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
