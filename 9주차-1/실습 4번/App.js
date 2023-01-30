import React from "react";
// Profile 함수 import

import { Profile } from "./components/Profile.js";

function App() {
  const title = "사용자 프로파일";
  return (
    <div>
      <h1>{title}</h1>
      {/* Profile 컴포넌트를 불러온 후 넣어줍니다.*/}
      <Profile />
    </div>
  );
}

export default App;
