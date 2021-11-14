import React, { useState, useEffect } from "react";

import "./App.css";

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
			<div className="candidates-list">
				{candidates.map((candidate) => (
					<div className="card-container" key={candidate.id}>
						<img src={candidate.Image} alt="" />
						<h2>{candidate.name}</h2>
						<p>{candidate.id}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
