import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { defaultTheme, generateInfo } from "styles/themes";
import { isServer } from "utils";
import reducers from "./reducers";

const emptyStateWithTheme = { theme: generateInfo(defaultTheme) };

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return emptyStateWithTheme;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error(error);
    return emptyStateWithTheme;
  }
};

export const initStore = (initialState = {}) => {
  const state = isServer ? initialState : loadState();

  const store = createStore(
    reducers,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );

  return store;
};
