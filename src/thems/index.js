// Social icons
import gh1 from '../images/social-gh-1.svg';
import tw1 from '../images/social-tw-1.svg';
import in1 from '../images/social-in-1.svg';
import so1 from '../images/social-so-1.svg';

import gh2 from '../images/social-gh-2.svg';
import tw2 from '../images/social-tw-2.svg';
import in2 from '../images/social-in-2.svg';
import so2 from '../images/social-so-2.svg';

// Light theme
export const Light = {
  id: 1,
  colors: {
    background: '#FFFEFB',
    inner_background: '#F6F6F6',
    primary: '#002A36',
    inner_primary: '#444747',
    selected: '#FC5B37',
    highlighted: '#FC8840'
  },
  social_icons: {
    github: gh1,
    twitter: tw1,
    linkedin: in1,
    stackoverflow: so1
  },
  fonts: {
    title: 'Merriweather',
    body: 'Open Sans'
  }
};

// Dark theme
export const Dark = {
  id: 2,
  colors: {
    background: '#002A36',
    inner_background: '#001D23',
    primary: '#FFFFFF',
    inner_primary: '#E2E2E2',
    selected: '#F7BC31',
    highlighted: '#FBD73F'
  },
  social_icons: {
    github: gh2,
    twitter: tw2,
    linkedin: in2,
    stackoverflow: so2
  },
  fonts: {
    title: 'Merriweather',
    body: 'Open Sans'
  }
};
