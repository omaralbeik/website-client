// Strings
import {genericStrings} from '../strings';


export const blogLink = {
  name: 'Blog',
  url: '/',
  documentTitle: `Blog | ${genericStrings.name}`
};

export function blogPostLink(p) {
  return {name: p.title, url: `${blogLink.url}/${p.url_title}`, documentTitle: `${p.title} | ${genericStrings.name}`};
};

export const portfolioLink = {
  name: 'Portfolio',
  url: '/portfolio',
  documentTitle: `Portfolio | ${genericStrings.name}`
};

export const aboutLink = {
  name: 'About',
  url: '/about',
  documentTitle: `About | ${genericStrings.name}`
};

export const repoLink = {
  name: 'Github',
  url: 'https://github.com/omaralbeik/omaralbeik.com'
};

export const navbarLinks = [blogLink, portfolioLink, aboutLink];
export const footerLinks = [blogLink, portfolioLink, aboutLink];
