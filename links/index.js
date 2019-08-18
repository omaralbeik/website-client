import { genericStrings } from "static/strings";

export const prodLink = {
  url: "https://omaralbeik.com"
}

export const homeLink = {
  name: "Home",
  title: "Home",
  url: "/blog",
  prodUrl: `${prodLink.url}/`,
  documentTitle: genericStrings.name
};

export const blogLink = {
  name: "Blog",
  title: "Latest Posts",
  subtitle: "Articles about Swift, iOS development, open source, and other software-related topics.",
  url: "/blog",
  prodUrl: `${prodLink.url}/blog`,
  documentTitle: `Blog | ${genericStrings.name}`
};

export function blogPostLink(p) {
  return {
    name: p.title,
    title: p.title,
    url: `${blogLink.url}/${p.slug}`,
    templateUrl: `${blogLink.url}/[id]`,
    prodUrl: `${blogLink.prodLink}/${p.slug}`,
    documentTitle: `${p.title} | ${genericStrings.name}`};
};

export const snippetsLink = {
  name: "Snippets",
  title: "Code Snippets (Beta)",
  subtitle: "A collection of code snippets for software developers.",
  url: "/snippets",
  prodUrl: `${prodLink.url}/snippets`,
  documentTitle: `Code Snippets | ${genericStrings.name}`
};

export function snippetLink(p) {
  return {
    name: p.name,
    title: p.name,
    url: `${snippetsLink.url}?id=${p.slug}`,
    templateUrl: `${snippetsLink.url}/[id]`,
    prodUrl: `${snippetsLink.prodLink}?id=${p.slug}`,
    documentTitle: `${p.name} | ${genericStrings.name}`};
};

export const aboutLink = {
  name: "About",
  url: "/about",
  prodUrl: `${prodLink.url}/about`,
  documentTitle: `About | ${genericStrings.name}`
};

export const projectsLink = {
  name: "Portfolio",
  title: "Featured Projects",
  subtitle: "This is where I show off.",
  url: "/projects",
  prodUrl: `${prodLink.url}/projects`,
  documentTitle: `Portfolio | ${genericStrings.name}`
};

export const apiLink = {
  name: "RESTful API",
  title: "RESTful API",
  subtitle: "This website is powered by a RESTful API built using Django and Django REST Framework\nHere is a list of URLs you can use to explore the website contents in a less user-friendly way!",
  url: "/developer",
  prodUrl: `${prodLink.url}/developer`,
  documentTitle: `RESTful API | ${genericStrings.name}`,
  items: [
    {
      name: "https://api.omaralbeik.com/v1",
      description: "API base URL",
      is_url: false,
      url: "https://api.omaralbeik.com/v1",
      method: "-"
    },
    {
      name: "blog",
      description: "Get all blog posts",
      url: "https://api.omaralbeik.com/v1/blog",
      method: "GET"
    },
    {
      name: "blog/[post.id]|[post.slug]",
      description: "Get a blog post",
      url: "https://api.omaralbeik.com/v1/blog/6",
      method: "GET"
    },
    {
      name: "blog?search=[query]",
      description: "Search blog posts",
      url: "https://api.omaralbeik.com/v1/blog?search=swift",
      method: "GET"
    },
    {
      name: "snippets",
      description: "Get all code snippet(s)",
      url: "https://api.omaralbeik.com/v1/snippets",
      method: "GET"
    },
    {
      name: "snippets/[snippet.id]|[snippet.slug]",
      description: "Get a code snippet",
      url: "https://api.omaralbeik.com/v1/snippets/6",
      method: "GET"
    },
    {
      name: "languages",
      description: "Get all programming languages used in code snippets",
      url: "https://api.omaralbeik.com/v1/languages",
      method: "GET"
    },
    {
      name: "language/[language.id]|[language.slug]",
      description: "Get a programming language used in code snippet",
      url: "https://api.omaralbeik.com/v1/languages/swift",
      method: "GET"
    },
    {
      name: "language/[language.id]|[language.slug]/snippets",
      description: "Get all code snippets for a programming language",
      url: "https://api.omaralbeik.com/v1/languages/swift/snippets",
      method: "GET"
    },
    {
      name: "snippets?search=[query]",
      description: "Search code snippets",
      url: "https://api.omaralbeik.com/v1/snippets?search=swiftui",
      method: "GET"
    },
    {
      name: "projects",
      description: "Get all portfolio projects",
      url: "https://api.omaralbeik.com/v1/projects",
      method: "GET"
    },
    {
      name: "project/[project.id]|[project.slug]",
      description: "Get a portfolio project",
      url: "https://api.omaralbeik.com/v1/projects/omaralbeik",
      method: "GET"
    },
    {
      name: "projects?search=[query]",
      description: "Search protfolio projects",
      url: "https://api.omaralbeik.com/v1/projects?search=omaralbeik",
      method: "GET"
    },
    {
      name: "technologies",
      description: "Get all technologies used in portfolio projects",
      url: "https://api.omaralbeik.com/v1/technologies",
      method: "GET"
    },
    {
      name: "technologies/[technology.id]|[technology.slug]",
      description: "Get a technology",
      url: "https://api.omaralbeik.com/v1/technologies/swift",
      method: "GET"
    },
    {
      name: "technologies/[technology.id]|[technology.slug]/projects",
      description: "Get all projects built using a technology",
      url: "https://api.omaralbeik.com/v1/technologies/swift/projects",
      method: "GET"
    },
    {
      name: "contents",
      description: "Get all static contents",
      url: "https://api.omaralbeik.com/v1/contents",
      method: "GET"
    },
    {
      name: "contents/[content.id]|[content.slug]",
      description: "Get a static content",
      url: "https://api.omaralbeik.com/v1/contents/about",
      method: "GET"
    }
  ]
};

export const repoLink = {
  name: "Github",
  url: "https://github.com/omaralbeik/omaralbeik.com"
};

export const navbarLinks = [blogLink, projectsLink, snippetsLink, aboutLink];
export const footerLinks = [blogLink, projectsLink, snippetsLink, apiLink, aboutLink];
