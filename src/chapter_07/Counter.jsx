//useMemo 최적화에 사용됨
//useMemo는 값을 반환, useCallBack은 함수를 반환

import React, { useState, useEffect, useMemo } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <p>총 {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        증가
      </button>
    </div>
  );
}

export default Counter;
