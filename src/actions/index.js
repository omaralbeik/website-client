// Action types
import * as types from './types';

/**
 * Action Creators
 */
export function loadTheme(theme) {
  return {type: types.LOAD_THEME, theme};
}
