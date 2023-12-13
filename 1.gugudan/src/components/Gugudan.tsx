import { useState } from "react";

function Gugudan() {
  const [first, set_first] = useState<number>(Math.ceil(Math.random() * 9));
  const [second, set_second] = useState<number>(Math.ceil(Math.random() * 9));
  const [value, set_value] = useState<string>("");
  const [result, set_result] = useState<string>("");

  // React.FormEvent<HTMLInputElement> 처음본다.
  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = first * second;
    set_value("");
    console.log(typeof value);

    if (parseInt(value) === result) {
      set_first(Math.ceil(Math.random() * 9));
      set_second(Math.ceil(Math.random() * 9));
      set_result("Correct!!");
    } else {
      set_result("Wrong!!");
    }
  };

  // const onChangeForm = (event: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   set_value(value);
  //   console.log(value);
  // };

  return (
    <div>
      <h1>
        {first} x {second} ?
      </h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="number"
          value={value}
          onChange={(e) => set_value(e.target.value)}
        ></input>
        <button>입력</button>
      </form>
      <h3>{result}</h3>
    </div>
  );
}

export default Gugudan;
