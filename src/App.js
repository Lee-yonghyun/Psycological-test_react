import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "./reducks/users/actions";

const App = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  console.log(selector.users);

  return (
    <div>
      <header>Test</header>
      <button
        onClick={() => {
          dispatch(signInAction());
        }}
      >
        button
      </button>
    </div>
  );
};

export default App;
