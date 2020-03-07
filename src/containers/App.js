import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundary from './ErrorBoundary';
import './App.css'

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			searchField: '',
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(response => response.json())
		  .then(users => this.setState({ users: users }));

	}
	
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}

	render() {
		const filteredUsers = this.state.users.filter((user) => {
			return user.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		if (this.state.users.length === 0) {
			return <h1 className="tc f1">Loading ... </h1>;
		} else {
			return (
				<div className="tc">
					<h1 className="f1">Robot Friends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList users={filteredUsers} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);	
		}
	}
}

export default App;
