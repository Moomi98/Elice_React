import React, { useReducer, useState } from "react";
import styled from "styled-components";
import { placeOrder } from "./api";

const initialState = {
  success: "",
  error: "",
  loading: false,
};

/* 
    useReducer() Hook의 첫 번째 매개변수로 전달할 reducer 함수를 작성합니다.
    reducer() 함수의 매개변수인 action 객체에 타입에 따라 변화할 값들을 정의합니다.
*/
const reducer = (state, action) => {
  switch (action.type) {
    case "request": {
      return {
        ...state,
        success: "",
        error: "",
        loading: true,
      };
    }

    case "success": {
      return {
        ...state,
        loading: false,
        success: action.payload.message,
      };
    }

    case "error": {
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    }

    default:
      return state;
  }
};

/*
    사용자가 입력한 form의 유효성을 검사하는 함수입니다.
    email을 입력하지 않았거나, 주소를 입력하지 않은 경우 필요한 메시지를 반환 해줍니다.
    email과 주소를 모두 입력했다면 어떠한 메시지도 반환하지 않습니다.
*/
const validateForm = (email, address) => {
  if (email.length === 0) return "email을 입력해주세요.";
  if (address.length === 0) return "address를 입력해주세요.";
  return "";
};

export default function App() {
  // 조건에 따라 state변경을 다르게 하기 위해 useReducer() Hook을 사용합니다.
  // 초기 state 값은 useReducer()의 2번째 매개변수인 initialState 값이 할당됩니다.
  const [state, dispatch] = useReducer(reducer, initialState);
  const { error, success, loading } = state;

  // 사용자의 입력에 따라 email, address 값을 저장하기 위해 useState를 사용합니다.
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  // 사용자가 form을 잘못 입력했을 경우 메시지를 출력하기 위한 useState를 사용합니다.
  const [formError, setFormError] = useState("");

  /*
    주문하기 버튼을 클릭했을 경우 실행할 함수를 작성합니다.
    해당 함수는 다음의 순서로 동작합니다.
    
    1. form 이벤트의 기본 동작인 새로고침을 막기 위해 preventDefault() 함수를 사용합니다.
    2. validateForm() 함수를 이용하여 사용자가 form을 잘 입력했는지 검사합니다.
        2-1. validateForm() 함수로부터 문자열이 반환되면 사용자가 입력을 다 하지 않았으므로 formError state값을 메시지로 설정한 후, 함수를 종료합니다.
        2-2. 그렇지 않고 빈 문자열이 반환되면 다음 프로세스를 계속 진행합니다.
    3. dispatch() 함수를 통해 reducer() 함수를 실행합니다. dispatch() 함수의 매개변수로 {type : "request"}를 넣어 주문에 관련된 state로 업데이트 합니다.
    4. 주어진 placeOrder() API를 호출합니다.
        4-1. placeOrder() API는 Promise 객체를 반환하므로 then()을 이용해 요청 성공시 진행할 dispatch()를 설정합니다.
        4-2. 요청 실패시 catch()를 이용해 요청 실패에 대한 dispatch()를 설정합니다.
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    const formError = validateForm(email, address);
    setFormError(formError);
    if (formError) return;

    dispatch({ type: "request" });

    placeOrder({ email, address })
      .then(() =>
        dispatch({
          type: "success",
          payload: { message: "주문에 성공하였습니다. 내일 만나요!" },
        })
      )
      .catch((e) =>
        dispatch({ type: "error", payload: { message: e.message } })
      );
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="address">Address</label>
          <Input
            id="address"
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            autoComplete="off"
          />
        </FormGroup>

        <Button disabled={loading}>주문하기</Button>
      </form>

      <Message>{formError || error || success}</Message>
    </Container>
  );
}

const Container = styled.div`
  border: 5px solid #f1f3f5;
  border-radius: 4px;

  width: 350px;
  height: 350px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
`;

const FormGroup = styled.div`
  width: 100%;
  & + & {
    margin-top: 4px;
  }
`;

const Button = styled.button`
  margin-top: 12px;
  width: 100%;
  padding: 4px;
`;

const Message = styled.div`
  word-break: break-all;
  font-size: 14px;
  margin-top: 8px;
`;
