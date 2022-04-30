import { createSelector } from "reselect";

const selectUserReducer = (state) => {
  return state.user;
};

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (selectUserReducer) => selectUserReducer.currentUser
);
// export const selectUserNotes = createSelector(
//   [selectUserReducer],
//   (selectUserReducer) => {
//     return selectUserReducer.notes && Object.values(selectUserReducer.notes);
//   }
// );
