import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 100;
const MIN_CAPACITY = 0;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [isntFull, setisntFull] = useState(true);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
  }, [count]);

  useEffect(() => {
    setisntFull(count == MIN_CAPACITY);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount} disabled={isntFull}>
        퇴장
      </button>
      <p>{isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}</p>
      {<p style={{ color: "red" }}>정원이 {(MAX_CAPACITY-MIN_CAPACITY) - count}명 남았습니다.</p>}
    </div>
  );
}

export default Accommodate;
