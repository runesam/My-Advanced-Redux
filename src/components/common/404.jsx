import React from 'react';

const NoMatch = ({ location }) => (
	<div className='noMatch_container '>
		<h3>No match for <code>{location.pathname}</code></h3>
		<h1>404</h1>
	</div>
);

export { NoMatch };
