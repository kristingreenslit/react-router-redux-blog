import { FETCH_POSTS } from '../actions/index';

// all blog posts in an array, and also a single post
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_POSTS:
    // new object w/current state, and add all blog posts from api response
    return { ...state, all: action.payload.data };
  default:
    return state;
  }
}
