import Light from './light/Light1';
import Dark from './dark/Dark1';

export const DefaultLight = Light;
export const DefaultDark = Dark;

// Get a theme from an info object.
export function getTheme(info) {
  switch (info.id) {
    case 1:
      return Light;
    case 2:
      return Dark;
    default:
      return Dark;
  }
}

// Generate info object for a theme
export function generateInfo(theme) {
  return {
    id: theme.id,
    style: theme.style
  };
}
