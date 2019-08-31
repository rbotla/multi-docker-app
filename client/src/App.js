import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
	<Router>
		<div>
			<div className="App">
				<div>
				<Link to="/">Home</Link>
				<Link to="/otherPage">Other Page</Link>
				</div>
			</div>
			<div>
				<Route exact path="/" component={Fib}/>
				<Route path="/otherPage" component={OtherPage}/>
			</div>
		</div>
	</Router>

  );
}

export default App;
