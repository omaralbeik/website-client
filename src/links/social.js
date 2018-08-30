export function github(theme) {
  return {
    name: 'Github',
    url: 'https://github.com/omaralbeik',
    icon: theme.social_icons.github
  };
};

export function twitter(theme) {
  return {
    name: 'Twitter',
    url: 'https://twitter.com/omaralbeik',
    icon: theme.social_icons.twitter
  };
};

export function linkedin(theme) {
  return {
    name: 'Linkedin',
    url: 'https://linkedin.com/in/omaralbeik',
    icon: theme.social_icons.linkedin
  };
};

export function stackOverflow(theme) {
  return {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/3882644',
    icon: theme.social_icons.stackoverflow
  };
};

export function all(theme) {
  return [github(theme), twitter(theme), linkedin(theme), stackOverflow(theme)];
};

export default all;
