import light from './light';
import dark from './dark';
import cookie from "cookie";

export const defaultTheme = dark;

export function getTheme(info) {
  switch (info.style) {
    case 'light':
      return light;
    case 'dark':
      return dark;
    default:
      return defaultTheme;
  }
}

export function generateInfo(theme) {
  return { style: theme.style };
}


export function getThemeInfoFromCookies(req) {
  const result = cookie.parse(req ? req.headers.cookie || "" : document.cookie);  
  if (!result) {
    return defaultTheme;
  }
  if (!result.style) {
    return generateInfo(defaultTheme);
  }
  return { style: result.style };
}
