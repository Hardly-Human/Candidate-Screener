import React from "react";
import "./card-list.style.css";

import Card from "../card/card.component";

const CardList = (props) => {
	return (
		<div className="card-list">
			{props.candidates.map((candidate) => (
				<Card key={candidate.id} candidate={candidate} />
			))}
		</div>
	);
};

export default CardList;
