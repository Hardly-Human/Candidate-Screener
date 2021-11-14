import React, { useState, useEffect } from "react";
import "./App.css";

import { Route, Switch, useHistory } from "react-router-dom";

import CardList from "./components/card-list/card-list.component";
import Navbar from "./components/navbar/navbar.component";
import Profile from "./components/profile/profile.component";

function App() {
	const history = useHistory();
	// #############################################################################
	// Creating and setting the Candidates List
	const [candidates, setCandidates] = useState([]);
	useEffect(() => {
		fetch(
			"https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
		)
			.then((response) => response.json())
			.then((raw_data) =>
				raw_data.map((item) => ({
					...item,
					shortlisted: false,
					rejected: false,
				}))
			)
			.then((data) => setCandidates(data));
	}, []);
	// #############################################################################

	//###############################################################################
	// Handling the search functionality
	const [searchField, setSearchField] = useState("");
	const handleChange = (event) => {
		setSearchField(event.target.value);
	};

	const filteredCandidates = candidates.filter(
		(candidate) =>
			candidate.name.toLowerCase().includes(searchField.toLowerCase()) &&
			candidate.shortlisted === false &&
			candidate.rejected === false
	);
	//###############################################################################

	// Shortlisted Candidates
	const shortlistedCandidates = candidates.filter(
		(candidate) => candidate.shortlisted === true
	);

	const rejectedCandidates = candidates.filter(
		(candidate) => candidate.rejected === true
	);

	const handleAcceptance = (id) => {
		const updated = candidates.map((candidate) => {
			if (candidate.id === id) {
				candidate.shortlisted = true;
				candidate.rejected = false;
			}
			return candidate;
		});
		setCandidates(updated);
		history.push("/");
	};
	const handleRejection = (id) => {
		const updated = candidates.map((candidate) => {
			if (candidate.id === id) {
				candidate.shortlisted = false;
				candidate.rejected = true;
			}
			return candidate;
		});
		setCandidates(updated);
		history.push("/");
	};

	return candidates?.length > 0 ? (
		<>
			<div className="App">
				<Navbar handleChange={handleChange} />
				<Switch>
					<Route path="/" exact>
						<CardList candidates={filteredCandidates} />
					</Route>
					<Route path="/shortlisted" exact>
						<CardList candidates={shortlistedCandidates} />
					</Route>
					<Route path="/rejected" exact>
						<CardList candidates={rejectedCandidates} />
					</Route>
					<Route path="/:id">
						<Profile
							candidates={candidates}
							handleAcceptance={handleAcceptance}
							handleRejection={handleRejection}
						/>
					</Route>
				</Switch>
			</div>
		</>
	) : (
		<div>
			<h1>Loading</h1>
		</div>
	);
}

export default App;
