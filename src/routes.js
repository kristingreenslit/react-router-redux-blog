import React from 'react';
// Route object used to define a match between a URL and a component
// IndexRoute is a helper for a component that is shown with the parent route
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index';

export default (
	<Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
  </Route>
);