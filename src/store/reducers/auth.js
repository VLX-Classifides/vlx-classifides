import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  authUser: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE:
      return updateObject(state, {
        authUser: action.data,
      });
    default:
      return state;
  }
};

export default reducer;
