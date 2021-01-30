import * as Actions from "./actions";
import initialState from "../store/initialState";

// reducer는 초기state와 actions를 매개변수로 받는다.
// 사용자의 action에 따라, state를 변화시켜주는 관리인

// 여기서 actions는 dispatch로 던져지는 action을 의미한다.
export const UsersReducer = (state = initialState.users, actions) => {
  switch (actions.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...actions.payload,
      };
    case Actions.SELECT_BTN:
      return {
        ...state,
        ...actions.payload,
      };
    default:
      return state;
  }
};
