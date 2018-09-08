// Redux
import {combineReducers} from 'redux'

// Action types
import * as types from '../actions/types';

// Helpers
import {objectFromArray} from '../utils';

/**
 * Theme Reducers
 */
function theme(state = {}, action) {
  const {theme} = action;

  switch (action.type) {
    // load theme to store
    case types.LOAD_THEME:
      return {
        ...theme
      };
    // any other action: return all posts
    default:
      return state;
  }
}

/**
 * Blog Posts Reducers
 */
function blogPosts(state = {}, action) {
  const {posts, post} = action;

  switch (action.type) {
    // load posts to store
    case types.LOAD_BLOG_POSTS:
      return {
        ...state,
        ...objectFromArray(posts)
      };
    // add a post
    case types.ADD_BLOG_POST:
      return {
        ...state,
        [post.id]: post
      };
    // any other action: return all posts
    default:
      return state;
  }
}

/**
 * Projects Reducers
 */
function projects(state = {}, action) {
  const {projects, project} = action;

  switch (action.type) {
    // load projectss to store
    case types.LOAD_PROJECTS:
      return {
        ...state,
        ...objectFromArray(projects)
      };
    // add a project
    case types.ADD_PROJECT:
      return {
        ...state,
        [project.id]: project
      };
    // any other action: return all projectss
    default:
      return state;
  }
}

// export all above reducers combined
export default combineReducers({theme, blogPosts, projects});
