// Strings
import {genericStrings} from '../strings';

export const homeLink = {
  name: 'Home',
  title: 'Home',
  url: '/',
  documentTitle: genericStrings.name
};

export const blogLink = {
  name: 'Blog',
  title: 'Latest Posts',
  url: '/blog',
  documentTitle: `Blog | ${genericStrings.name}`
};

export function blogPostLink(p) {
  return {
    name: p.title,
    title: p.title,
    url: `${blogLink.url}/${p.slug}`,
    documentTitle: `${p.title} | ${genericStrings.name}`};
};

export const portfolioLink = {
  name: 'Portfolio',
  title: 'Featured Projects',
  url: '/portfolio',
  documentTitle: `Portfolio | ${genericStrings.name}`
};

export const aboutLink = {
  name: 'About',
  title: 'About Me',
  url: '/about',
  documentTitle: `About | ${genericStrings.name}`
};

export const snippetsLink = {
  name: 'Snippets (Beta)',
  title: 'Code Snippets (Beta)',
  url: '/snippets',
  documentTitle: `Snippets | ${genericStrings.name}`
};

export const repoLink = {
  name: 'Github',
  url: 'https://github.com/omaralbeik/omaralbeik.com'
};

export const navbarLinks = [blogLink, snippetsLink, portfolioLink, aboutLink];
export const footerLinks = [blogLink, snippetsLink, portfolioLink, aboutLink];
