import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  let [result, setResult] = useState("");

  /* 
    useEffect Hook을 활용하여 GET 요청을 진행합니다.
    then()을 이용해 result 값을 갱신해줍니다.
  */
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/2")
      .then((response) => setResult(response.data.data));
  }, []);

  /*
    async/await를 사용하면 다음과 같이 작성할 수 있습니다.
    useEffect(() => {
        const getUserData = async () => {
            const userData = await axios.get("https://reqres.in/api/users/2");
            setResult(userData);
        }
        getUserData();
  }, []);
  */
  return (
    <div>
      <h4>React Axios로 HTTP GET 요청하기</h4>
      <div>
        {/* result를 이용해 출력 결과와 동일하게 출력하세요. */}
        Name: {result.first_name + " " + result.last_name} <br />
        Email: {result.email} <br />
      </div>
    </div>
  );
}

export default Users;
