// Themes
import {Light} from './thems';

export const loadState = _ => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {
        theme: Light
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err.message);
    return {
      theme: Light
    };
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error(err.message);
  }
}
