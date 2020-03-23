import { combineReducers } from "redux";
import Cookie from "js-cookie";
import * as types from "./actions/types";

function theme(state = {}, action) {
  // eslint-disable-next-line no-shadow
  const { theme } = action;

  switch (action.type) {
    case types.LOAD_THEME:
      Cookie.set("style", theme.style, { expires: 365 });
      return {
        ...theme,
      };
    default:
      return state;
  }
}

export default combineReducers({ theme });
