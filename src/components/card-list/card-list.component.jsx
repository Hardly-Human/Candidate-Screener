import React from "react";
import "./card-list.style.css";

import { Link } from "react-router-dom";
import Card from "../card/card.component";

const CardList = (props) => {
	return (
		<div className="card-list">
			{props.candidates.map((candidate) => (
				<>
					<Link to={`/${candidate.id}`}>
						<Card key={candidate.id} candidate={candidate} />
					</Link>
				</>
			))}
		</div>
	);
};

export default CardList;
