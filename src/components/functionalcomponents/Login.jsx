import React, { useReducer } from "react";

const value = { count: 0 };

function countFunction(state, action) {
  switch (action.type) {
    case "sub":
      console.log("Hello");
      return { count: state.count - 1 };
    case "add":
      return { count: state.count + 1 };
    case "reset":
      return { count: value.count };
    default:
      return state;
  }
}

const Login = () => {
  const [countVal, updateCount] = useReducer(countFunction, value);

  const handleSubtract = () => {
    updateCount({ type: "sub" });
  };

  const handleAdd = () => {
    updateCount({ type: "add" });
  };

  const handleReset = () => {
    updateCount({ type: "reset" });
  };

  return (
    <div>
      <h1>This is userReducer Example</h1>
      <h2>Count: {countVal.count}</h2>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Login;
