// Default theme (Light)
import {DefaultLight} from './thems';

export const loadState = _ => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {
        theme: DefaultLight
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err.message);
    return {
      theme: DefaultLight
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
