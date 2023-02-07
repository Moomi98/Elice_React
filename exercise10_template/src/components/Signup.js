import "./signup.css";
import { useState } from "react";

const Signup = () => {
  // 아이디의 상태를 저장하는 state 입니다.
  const [id, setId] = useState("");
  // 비밀번호의 상태를 저장하는 state 입니다.
  const [password, setPassword] = useState("");
  // 회원가입 중 사용자에게 필요한 메시지를 저장하는 state 입니다.
  const [signupMessage, setSignupMessage] = useState("");

  const updateId = (event) => {
    // 1. 아이디를 입력하는 input의 현재 value를 가져오는 코드를 작성합니다.
    // 1. id의 state를 아이디를 입력하는 input의 현재 value로 변경하는 코드를 작성합니다.
  };

  const updatePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const signup = (event) => {
    // form 이벤트의 기본 동작을 막아주는 코드 입니다.
    event.preventDefault();

    // 회원가입에 필요한 데이터를 정의합니다.
    const data = {
      id,
      password,
    };

    /* 3. 아이디의 길이를 확인하는 코드를 작성합니다.
      아이디의 길이가 8자 이상 15자 이하가 아니라면 signupMessage에 "아이디를 올바르게 입력해주세요!"라는 문자열로 변경되도록 합니다.
      아이디의 길이가 올바르지 않다면 회원가입 로직이 진행되지 않도록 현재 함수인 signup() 함수를 바로 종료시켜 줍니다. */

    /* 3. 비밀번호 길이를 확인하는 코드를 작성합니다.
       비밀번호의 길이가 0이라면 signupMessage에 "비밀번호를 올바르게 입력해주세요!"라는 문자열로 변경되도록 합니다.
       비밀번호의 길이가 올바르지 않다면 회원가입 로직이 진행되지 않도록 현재 함수인 signup() 함수를 바로 종료시켜 줍니다. */

    /* 4. 체크박스의 체크여부를 확인하는 코드를 작성합니다.
       form 태그 내의 체크박스는 해당 태그의 name 속성을 통해 가져올 수 있습니다.
       체크박스의 체크 확인은 checked 속성을 통해 가져올 수 있습니다. */

    /* 4. 체크박스의 모든 체크 항목에 체크가 되었는지 여부를 확인하는 코드를 작성합니다.
       하나라도 체크되어있지 않다면 signupMessage에 "필수 항목을 체크해주세요!"라는 문자열로 변경되도록 한 후 
       회원가입 로직이 진행되지 않도록 현재 함수인 signup() 함수를 바로 종료시켜 줍니다. */

    /* 5. axios.post를 활용하여 json-server에 회원가입 요청을 하는 코드를 작성합니다.
       요청할 서버의 URL은 "http://localhost:9999/signup" 입니다.
       Promise 혹은 async/await를 활용하여 요청합니다.
       회원가입에 성공했다면 (요청에 에러가 발생하지 않았다면) signupMessage에 "회원가입에 성공했습니다!"라는 문자열로 변경되도록 합니다.
       회원가입에 실패했다면 (요청에 에러가 발생했다면) signupMessage에 "회원가입에 실패했습니다!"라는 문자열로 변경되도록 합니다. */
  };

  /*
    1. useEffect를 활용하여 id, password state 변경 시 console.log()를 활용하여 변화된 state 값을 출력합니다.
    useEffect의 두 번째 인자인 deps 배열에는 id와 password를 등록합니다.
  */

  return (
    <div className="signup_container">
      <h1>회원가입</h1>
      <form className="signup_wrapper" onSubmit={signup}>
        <input
          className="signup_input"
          placeholder="아이디"
          onChange={updateId}
        />

        {/* 2. 아이디의 길이 1 이상이면서 8자 이상 15자 이하가 아니라면 경고를 출력하는 조건부 렌더링을 작성합니다.
            태그는 p 태그를 사용하며 className은 "signup_warning_message"를 적용합니다.
            메시지 내용은 "아이디는 8자 이상 15자 이하로 입력해주세요."를 출력하도록 합니다.
            조건부 렌더링에는 삼항 연산자 혹은 AND 연산자를 활용합니다.
        */}
        <input
          className="signup_input"
          type="password"
          placeholder="비밀번호"
          onChange={updatePassword}
        />
        <div>
          <input type="checkbox" name="term" id="term" />
          <label htmlFor="term">약관 동의</label>
        </div>
        <div>
          <input type="checkbox" name="info" id="info" />
          <label htmlFor="info">개인정보 이용 동의</label>
        </div>
        <button className="signup_signup_button">회원가입</button>
      </form>

      {signupMessage.length > 0 ? <p>{signupMessage}</p> : null}
    </div>
  );
};

export default Signup;
