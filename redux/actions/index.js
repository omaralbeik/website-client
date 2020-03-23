import * as types from "./types";

export function loadTheme(theme) {
  return { type: types.LOAD_THEME, theme };
}
