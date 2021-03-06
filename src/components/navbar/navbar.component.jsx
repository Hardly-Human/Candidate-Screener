import React from "react";
import "./navbar.style.css";

import { Link } from "react-router-dom";
import SearchField from "../search-field/search-field.component";

const Navbar = (props) => {
	return (
		<>
			<nav>
				<Link to="/">
					<h2 className="title">Candidate Screener</h2>
				</Link>

				<ul>
					<li>
						<Link to="/shortlisted">Short Listed</Link>
					</li>
					<li>
						<Link to="/rejected">Rejected</Link>
					</li>
					<li>
						<SearchField handleChange={props.handleChange} />
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
