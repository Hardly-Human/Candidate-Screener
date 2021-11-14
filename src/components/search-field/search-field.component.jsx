import React from "react";
import "./search-field.style.css";

const SearchField = (props) => {
	return (
		<input
			className="search"
			placeholder="Search Candidates"
			type="search"
			onChange={props.handleChange}
		/>
	);
};

export default SearchField;
