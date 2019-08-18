import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import { defaultTheme, generateInfo } from 'styles/themes';
import { isServer } from 'utils';

const emptyStateWithTheme = { theme: generateInfo(defaultTheme) };

export const initStore = (initialState={}) => {  
  const state = isServer ? initialState : loadState();

  var store = createStore(
    reducers,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  
  if (!isServer) {
    store.subscribe(_ => {
      saveState({
        ...store.getState(),
        theme: store.getState().theme
      });
    });
  }

  return store;
}

const loadState = _ => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return emptyStateWithTheme;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error(error);
    return emptyStateWithTheme;
  }
}

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error(err.message);
  }
}
