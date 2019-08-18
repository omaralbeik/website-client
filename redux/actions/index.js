import * as types from './types';

export function loadTheme(theme) {
  return { type: types.LOAD_THEME, theme };
}

export function loadBlogPosts({ posts }) {
  return { type: types.LOAD_BLOG_POSTS, posts };
}

export function addBlogPost({ post }) {
  return { type: types.ADD_BLOG_POST, post };
}

export function loadProjects({ projects }) {
  return { type: types.LOAD_PROJECTS, projects };
}

export function addProject({ project }) {
  return { type: types.ADD_PROJECT, project };
}

export function loadContents({ contents }) {
  return { type: types.LOAD_CONTENETS, contents };
}

export function addContent({ content }) {
  return { type: types.ADD_CONTENT, content };
}

export function loadSnippets({ snippets }) {
  return { type: types.LOAD_SNIPPETS, snippets };
}

export function addSnippet({ snippet }) {
  return { type: types.ADD_SNIPPET, snippet };
}
