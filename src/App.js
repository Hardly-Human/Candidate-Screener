import React, { useState, useEffect } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";

function App() {
	const [candidates, setCandidates] = useState([]);
	useEffect(() => {
		fetch(
			"https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
		)
			.then((response) => response.json())
			.then((data) => setCandidates(data));
	}, []);

	return (
		<div className="App">
			<h1>Candidate Screener</h1>
			<CardList candidates={candidates} />
		</div>
	);
}

export default App;
