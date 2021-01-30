//action은 type을 가지고 있어야 하며, 사용자가 선택한 순수한 심리테스트의 정보를 전달한다.
export const SiGN_IN = "SIGN_IN";

// 설문조사 시작 action
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      One: "",
      Second: "",
      Third: "",
    },
  };
};

// 선택 action
export const SELECT_BTN = "SELECT_BTN";

export const selectAction = (userState) => {
  return {
    type: "SELECT_BTN",
    payload: {
      // isSignedIn:true,
      One: userState.one,
      Second: userState.second,
      Third: userState.third,
    },
  };
};
