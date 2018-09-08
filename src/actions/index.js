// Action types
import * as types from './types';

/**
 * Action Creators
 */
export function loadTheme(theme) {
  return {type: types.LOAD_THEME, theme};
}

export function loadBlogPosts({posts}) {
  return {type: types.LOAD_BLOG_POSTS, posts};
}

export function addBlogPost({post}) {
  return {type: types.ADD_BLOG_POST, post};
}

export function loadProjects({projects}) {
  return {type: types.LOAD_PROJECTS, projects};
}

export function addProject({project}) {
  return {type: types.ADD_PROJECT, project};
}
