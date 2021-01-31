import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "./reducks/users/actions";
import Router from "./Router";

const App = () => {
  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
