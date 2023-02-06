import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  let [result, setResult] = useState("");

  // 삽입할 데이터 객체를 선언하세요.
  const loginData = { email: "eve.holt@reqres.in", password: "cityslicka" };

  /* 
    useEffect Hook을 활용하여 GET 요청을 진행합니다.
    then()을 이용해 response 안의 data.token을 result state로 업데이트를 진행합니다.
  */
  useEffect(() => {
    axios
      .post("https://reqres.in/api/login", loginData)
      .then((response) => setResult(response.data.token));
  }, []);

  /*
    async/await를 사용하면 다음과 같이 작성할 수 있습니다.
    useEffect(() => {
        const login = async () => {
            const response = await axios.post("https://reqres.in/api/login", loginData);
            setResult(response.data.token);
        }
        login();
  }, []);
  */

  return (
    <div>
      <h4>React Axios로 HTTP POST 요청하기</h4>
      <div>Token: {result}</div>
    </div>
  );
}

export default Users;
