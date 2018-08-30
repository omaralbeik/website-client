// Redux
import {combineReducers} from 'redux'

// Action types
import * as types from '../actions/types';

/**
 * Theme Reducers
 */
function theme(state = {}, action) {
  const {theme} = action;

  switch (action.type) {
    // load theme to store
    case types.LOAD_THEME:
      return {
        ...theme
      };
    // any other action: return all posts
    default:
      return state;
  }
}

// export all above reducers combined
export default combineReducers({theme});
