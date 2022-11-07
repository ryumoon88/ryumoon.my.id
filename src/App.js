import MyParticles from './components/MyParticles';
import React, { Component } from 'react';
import PageIndex from './pages/PageIndex';

import 'animate.css'
import 'animate.css/animate.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/fullpage.min.css'
import './App.css';
import Construction from './pages/Construction';

class App extends Component {

	render() {
		return (
			<React.Fragment>
				<Construction />
			</React.Fragment>
		);
	}
}

export default App;
