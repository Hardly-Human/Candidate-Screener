import React, { useState, useEffect } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import CardList from "./components/card-list/card-list.component";
import Navbar from "./components/navbar/navbar.component";

function App() {
	// #############################################################################
	// Creating and setting the Candidates List
	const [candidates, setCandidates] = useState([]);
	useEffect(() => {
		fetch(
			"https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
		)
			.then((response) => response.json())
			.then((data) => setCandidates(data));
	}, []);
	// #############################################################################

	//###############################################################################
	// Handling the search functionality
	const [searchField, setSearchField] = useState("");
	const handleChange = (event) => {
		setSearchField(event.target.value);
	};

	const filteredCandidates = candidates.filter((candidate) =>
		candidate.name.toLowerCase().includes(searchField.toLowerCase())
	);
	//###############################################################################

	return (
		<div className="App">
			<Navbar handleChange={handleChange} />
			<Switch>
				<Route path="/" exact>
					<CardList candidates={filteredCandidates} />
				</Route>
				<Route path="/shortlisted">
					<h1>I'm Page 2</h1>
				</Route>
				<Route path="/rejected">
					<h1>I'm Page 1</h1>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
