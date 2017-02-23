'use strict';
import React from 'react';
import {render} from 'react-dom';

const App = React.createClass({
	render() {
		return (
			<section>
				<h1>My scaffold</h1>
				<h2>Hello ReactJS</h2>
			</section>
		);
	}
});

render (
	<App />,
	document.getElementById("container")
);