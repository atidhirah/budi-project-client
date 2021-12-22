import { AUTH, LOGOUT } from "../constants";

const defaultState = {
  userData: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH:
      const userData = action?.data;
      localStorage.setItem("profile", JSON.stringify(userData));
      return { ...state, userData: userData };
    case LOGOUT:
      localStorage.removeItem("profile");
      return { ...state, userData: null };
    default:
      const profile = localStorage.getItem("profile");
      if (profile) {
        return { ...state, userData: profile };
      }

      return state;
  }
};

export default reducer;
