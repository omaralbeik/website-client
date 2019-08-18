import { combineReducers } from 'redux';
import * as types from './actions/types';
import { objectFromArray } from 'utils';
import Cookie from "js-cookie";

function theme(state = {}, action) {
  const { theme } = action;

  switch (action.type) {
    case types.LOAD_THEME:
      Cookie.set('style', theme.style, { expires: 365 });
      return {
        ...theme
      };
    default:
      return state;
  }
}

function blogPosts(state = {}, action) {
  const { posts, post } = action;

  switch (action.type) {
    case types.LOAD_BLOG_POSTS:
      return {
        ...objectFromArray(posts)
      };
    case types.ADD_BLOG_POST:
      return {
        ...state,
        [post.id]: post
      };
    default:
      return state;
  }
}

function projects(state = {}, action) {
  const { projects, project } = action;

  switch (action.type) {
    case types.LOAD_PROJECTS:
      return {
        ...objectFromArray(projects)
      };
    case types.ADD_PROJECT:
      return {
        ...state,
        [project.id]: project
      };
    default:
      return state;
  }
}

function contents(state = {}, action) {
  const { contents, content } = action;

  switch (action.type) {
    case types.LOAD_CONTENETS:
      return {
        ...state,
        ...objectFromArray(contents)
      };
    case types.ADD_CONTENT:
      return {
        ...state,
        [content.slug]: content
      };
    default:
      return state;
  }
}

function snippets(state = {}, action) {
  const { snippets, snippet } = action;

  switch (action.type) {
    case types.LOAD_SNIPPETS:
      return {
        ...state,
        ...objectFromArray(snippets)
      };
    case types.ADD_SNIPPET:
      return {
        ...state,
        [snippet.id]: snippet
      };
    default:
      return state;
  }
}

export default combineReducers({ theme, blogPosts, projects, contents, snippets });
