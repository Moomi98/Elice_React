import "./signup.css";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [signupMessage, setSignupMessage] = useState("");

  const updateId = (event) => {
    const newId = event.target.value;
    setId(newId);
  };

  const updatePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const signup = async (event) => {
    event.preventDefault();
    const data = {
      id,
      password,
    };

    if (id.length < 8 || id.length > 15) {
      setSignupMessage("아이디를 올바르게 입력해주세요!");
      return;
    }

    if (password.length === 0) {
      setSignupMessage("비밀번호를 올바르게 입력해주세요!");
      return;
    }

    const termChecked = event.target.term.checked;
    const infoChecked = event.target.info.checked;

    if (!termChecked || !infoChecked) {
      setSignupMessage("필수 항목에 체크해주세요!");
      return;
    }

    try {
      await axios.post("http://localhost:9999/signup", data);
      setSignupMessage("회원가입에 성공했습니다!");
    } catch {
      setSignupMessage("회원가입에 실패했습니다!");
    }
  };
  return (
    <div className="signup_container">
      <h1>회원가입</h1>
      <form className="signup_wrapper" onSubmit={signup}>
        <input
          className="signup_input"
          placeholder="아이디"
          onChange={updateId}
        />
        {id.length > 0 && (id.length < 8 || id.length > 15) ? (
          <p className="signup_warning_message">
            아이디는 8자 이상 15자 이하로 입력해주세요.
          </p>
        ) : null}
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
