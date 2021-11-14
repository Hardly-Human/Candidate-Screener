import React, { useState, useEffect } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchField from "./components/search-field/search-field.component";

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
			<h1>Candidate Screener</h1>
			<SearchField handleChange={handleChange} />
			<CardList candidates={filteredCandidates} />
		</div>
	);
}

export default App;
