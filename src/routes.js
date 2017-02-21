import React from 'react';
// Route object used to define a match between a URL and a component
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

const Greeting = () => {
  return <div>Route Test</div>;
};

export default (
	<Route path="/" component={App}>
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="greet3" component={Greeting} />
  </Route>
);