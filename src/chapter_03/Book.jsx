import React from "react";

function Book(props) {
  return (
    <div>
      {`이 책의 이름은 ${props.name}입니다.`} <br />
      {`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}
    </div>
  );
}

export default Book;
