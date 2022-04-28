import { getUserData } from "../../firebase/firebase.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) => {
  return { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user };
};
export const setUserNotes = (note) => {
  console.log("noaaaaate");
  return { type: USER_ACTION_TYPES.SET_USER_DATA, payload: note };
};
