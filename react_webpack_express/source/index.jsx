"use strict";
import React,{Component,PropTypes} from "react";
import {render} from "react-dom";

class App extends Component {
	render() {
		return (
			<div>
				<h1>ReactJS-Webpack Scaffoding</h1>
				<div>
					To use:
					<p>
						1.Run <strong>npm i</strong> to install
					</p>
					<p>
						2.Run <strong>npm start</strong> to run dev server
					</p>
					<p>
						3.View results in <strong>http://localhost:8080</strong>
					</p>
					<p>
						4.Success
					</p>
				</div>
			</div>
		);
	}
}

render(<App />,document.getElementById("app"));