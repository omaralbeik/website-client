export function github(theme) {
  return {
    name: 'Github',
    url: 'https://github.com/omaralbeik',
    icon: (theme) ? theme.social_icons.github : null
  };
};

export function twitter(theme) {
  return {
    name: 'Twitter',
    handle: '@omaralbeik',
    url: 'https://twitter.com/omaralbeik',
    icon: (theme) ? theme.social_icons.twitter : null
  };
};

export function linkedin(theme) {
  return {
    name: 'Linkedin',
    url: 'https://linkedin.com/in/omaralbeik',
    icon: (theme) ? theme.social_icons.linkedin : null
  };
};

export function stackOverflow(theme) {
  return {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/3882644',
    icon:(theme) ? theme.social_icons.stackoverflow : null
  };
};

export function all(theme) {
  return [github(theme), twitter(theme), linkedin(theme), stackOverflow(theme)];
};

export default all;
