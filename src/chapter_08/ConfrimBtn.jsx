import React, { useState } from "react";

function ConfirmBtn() {
  const [a, setIsConfirmed] = useState(false);

  function handleConfirm() {
    setIsConfirmed((a) => !a);
  }

  return (
    <button onClick={handleConfirm} disabled={a}>
      {a ? "확인됨" : "확인하기"}
    </button>
  );
}

export default ConfirmBtn;
