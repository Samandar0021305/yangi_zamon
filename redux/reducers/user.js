import { SET_USER, IS_AUTH } from "../actions/index";
const initalState = {
  userList: [
    { name: "Asliddin aka" },
    { name: "Iqboljon" },
    { name: "Samandar aka" },
  ],
  currentUser: {},
  isAuth: false,
};
export const User = (state = initalState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case IS_AUTH:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    default:
      return state;
  }
};
export const setUser = (user) => ({ type: SET_USER, user });
export const isAuth = (currentUser) => ({ type: IS_AUTH, currentUser });
