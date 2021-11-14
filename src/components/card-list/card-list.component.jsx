import React from "react";
import "./card-list.style.css";

import { Link } from "react-router-dom";
import Card from "../card/card.component";

const CardList = (props) => {
	return (
		<div className="card-list">
			{props.candidates.map((candidate) => (
				<div key={candidate.id}>
					<Link to={`/${candidate.id}`}>
						<Card
							candidate={candidate}
							key={Number(candidate.id)}
						/>
					</Link>
				</div>
			))}
		</div>
	);
};

export default CardList;
