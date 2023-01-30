import React from "react";
// Comment 컴포넌트 import
import { Comment } from "./Comment.js";
// UserInfo 컴포넌트 import
import { UserInfo } from "./UserInfo.js";
import "../index.css";

function Profile() {
  const user1 = {
    name: "엘리스 토끼",
    age: "12",
  };

  const text1 = "React는 재밌다!!";

  return (
    <div className="profile">
      {/*Comment 컴포넌트를 삽입하며, text props로 text1 를 전달합니다.

      props란 상위 컴포넌트에서 하위 컴포넌트로 전달되는 데이터 입니다.
      함수에 매개변수를 전달하듯이 컴포넌트에 매개변수를 전달할 수 있습니다.

      이렇게 컴포넌트에 매개변수를 전달하는 것을 props를 전달한다고 합니다.*/}
      <Comment text={text1} />
      {/*UserInfo 컴포넌트를 삽입하며, user props로 user1 를 전달합니다.*/}
      <UserInfo user={user1} />
    </div>
  );
}

export { Profile };
