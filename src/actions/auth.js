import * as api from "../api";
import { AUTH, LOGOUT } from "../constants";

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const register = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.registerUser(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const logout = (navigate) => (dispatch) => {
  dispatch({ type: LOGOUT });
  navigate("/");
};
