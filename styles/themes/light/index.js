import React from 'react';
import Github from 'static/icons/social-gh-1.svg';
import Twitter from 'static/icons/social-tw-1.svg';
import Linkedin from 'static/icons/social-in-1.svg';
import StackOverflow from 'static/icons/social-so-1.svg';
import Menu from 'static/icons/menu-1.svg';

const Light = {
  id: 1,
  style: 'light',
  colors: {
    background: '#FFFEFB',
    inner_background: '#F6F6F6',
    primary: '#003847',
    inner_primary: '#212121',
    selected: '#B30000',
    highlighted: '#FF0505'
  },
  icons: {
    menu: <Menu />
  },
  social_icons: {
    github: <Github />,
    twitter: <Twitter />,
    linkedin: <Linkedin />,
    stackoverflow: <StackOverflow />
  },
  fonts: {
    title: 'Merriweather',
    body: 'Open Sans',
    mono: 'Inconsolata, monospace'
  }
};

export default Light;
