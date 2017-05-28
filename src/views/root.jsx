import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home';

const Address = () => <h1><input/> We are located at 555 Jackson St.</h1>;

class Root extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/address" component={Address} />
				</div>
			</HashRouter>
		)
	}
}

export default Root;
