import React from "react";
import "./card.style.css";

const Card = ({ candidate }) => {
	return (
		<div className="card-container">
			<img src={candidate.Image} alt={`${candidate.name}'s Image`} />
			<h2>{candidate.name}</h2>
		</div>
	);
};

export default Card;
