import React from "react";

function Gugudan() {
  const [first, set_first] = React.useState(Math.ceil(Math.random() * 9));
  const [second, set_second] = React.useState();
  const [value, set_value] = React.useState();
  const [result, set_result] = React.useState();

  // React.FormEvent<HTMLInputElement> 처음본다.
  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // set_value();
  };

  return (
    <div>
      <h1>곱하기</h1>
      <form onSubmit={onSubmitForm}>
        <input type="number"></input>
        <button>입력</button>
      </form>
    </div>
  );
}

export default Gugudan;
